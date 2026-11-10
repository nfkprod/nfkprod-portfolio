const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

function loadTs(path, dependencies = {}, globals = {}) {
  const module = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(path, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(code, {
    module, exports: module.exports,
    require: (name) => {
      if (!(name in dependencies)) throw new Error(`Unexpected dependency: ${name}`);
      return dependencies[name];
    }, ...globals,
  }, { filename: path });
  return module.exports;
}
const validation = loadTs('lib/briefValidation.ts');

for (const [name, input, expected] of [
  ['missing budget', {}, 'required'],
  ['whitespace-only budget', { budgetFrom: '  ', budgetTo: '' }, 'required'],
  ['zero', { budgetFrom: '0' }, 'invalid'],
  ['negative amount', { budgetTo: '-100' }, 'invalid'],
  ['nonnumeric amount', { budgetFrom: 'flexible' }, 'invalid'],
  ['partial numeric input', { budgetFrom: '1000abc' }, 'invalid'],
  ['nonfinite input', { budgetFrom: 'Infinity' }, 'invalid'],
  ['reversed range', { budgetFrom: '2000', budgetTo: '1000' }, 'range'],
  ['invalid legacy amount', { budget: 'negotiable' }, 'invalid'],
]) {
  test(`rejects ${name}`, () => {
    const result = validation.validateBudgetRange(input);
    assert.equal(result.valid, false);
    assert.equal(result.error, expected);
  });
}
for (const [name, input] of [
  ['lower bound only', { budgetFrom: '65000' }],
  ['upper bound only', { budgetTo: '65000' }],
  ['a closed range', { budgetFrom: '65000', budgetTo: '95000' }],
  ['equal bounds', { budgetFrom: '65000', budgetTo: '65000' }],
  ['spaced amount', { budgetTo: '65 000' }],
  ['comma decimal', { budgetTo: '1500,50' }],
  ['legacy numeric amount', { budget: '65000' }],
]) {
  test(`accepts ${name}`, () => assert.equal(validation.validateBudgetRange(input).valid, true));
}

const validBrief = { name: 'Test', contact: '@test', description: 'Test task', consent: true };
function endpoint(env = {}) {
  const calls = [];
  const { POST } = loadTs('app/api/contact/route.ts', {
    'next/server': { NextResponse: { json: (data, init) => new Response(JSON.stringify(data), init) } },
    '@/lib/briefValidation': validation,
  }, {
    process: { env },
    fetch: async (url, init) => { calls.push({ url, body: JSON.parse(init.body) }); return new Response('{}', { status: 200 }); },
    console: { error: () => {} },
  });
  return { POST, calls };
}
function request(body) {
  return new Request('http://localhost/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
}

test('missing budget is rejected before configuration lookup and no message is sent', async () => {
  const api = endpoint();
  const response = await api.POST(request(validBrief));
  assert.equal(response.status, 400);
  assert.equal((await response.json()).field, 'budget');
  assert.equal(api.calls.length, 0);
});
test('malformed JSON is a 400 with no delivery', async () => {
  const api = endpoint();
  const response = await api.POST(new Request('http://localhost/api/contact', { method: 'POST', body: '{' }));
  assert.equal(response.status, 400);
  assert.equal(api.calls.length, 0);
});
test('truthy nonboolean consent cannot submit a brief', async () => {
  const api = endpoint({ TELEGRAM_BOT_TOKEN: 'test-token', TELEGRAM_CHAT_ID: 'test-chat' });
  assert.equal((await api.POST(request({ ...validBrief, consent: 'false', budgetTo: '1500' }))).status, 400);
  assert.equal(api.calls.length, 0);
});
test('server rejects reversed and zero ranges without delivery', async () => {
  const api = endpoint({ TELEGRAM_BOT_TOKEN: 'test-token', TELEGRAM_CHAT_ID: 'test-chat' });
  for (const budget of [{ budgetFrom: '0' }, { budgetFrom: '1500', budgetTo: '1000' }]) {
    assert.equal((await api.POST(request({ ...validBrief, ...budget }))).status, 400);
  }
  assert.equal(api.calls.length, 0);
});
test('valid AI brief keeps the currency and service in mocked delivery', async () => {
  const api = endpoint({ TELEGRAM_BOT_TOKEN: 'test-token', TELEGRAM_CHAT_ID: 'test-chat' });
  const response = await api.POST(request({ ...validBrief, budgetTo: '65000', budgetCurrency: 'RUB', services: ['AI', 'CGI'] }));
  assert.equal(response.status, 200);
  assert.equal(api.calls.length, 1);
  assert.match(api.calls[0].body.text, /Budget: to 65000 RUB/);
  assert.match(api.calls[0].body.text, /Services: AI, CGI/);
});
