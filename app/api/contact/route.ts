import { NextResponse } from "next/server";

type ContactBriefPayload = {
  name: string;
  contact: string;
  company?: string;
  budgetFrom?: string;
  budgetTo?: string;
  budget?: string;
  timeline?: string;
  services?: string[];
  description: string;
  references?: string;
  consent?: boolean;
};

function asText(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function formatBudgetRange(payload: ContactBriefPayload) {
  const from = asText(payload.budgetFrom);
  const to = asText(payload.budgetTo);
  const legacy = asText(payload.budget);

  if (from && to) return `${from} - ${to}`;
  if (from) return `from ${from}`;
  if (to) return `to ${to}`;
  if (legacy) return legacy;
  return "-";
}

function buildTelegramMessage(payload: ContactBriefPayload, origin: string) {
  const services = Array.isArray(payload.services) && payload.services.length ? payload.services.join(", ") : "-";

  return [
    "New brief from site",
    "",
    `Name: ${asText(payload.name) || "-"}`,
    `Contact (Email/Telegram): ${asText(payload.contact) || "-"}`,
    `Company/Project: ${asText(payload.company) || "-"}`,
    `Budget: ${formatBudgetRange(payload)}`,
    `Timeline: ${asText(payload.timeline) || "-"}`,
    `Services: ${services}`,
    "",
    "Description:",
    asText(payload.description) || "-",
    "",
    `References: ${asText(payload.references) || "-"}`,
    `Consent: ${payload.consent ? "yes" : "no"}`,
    `Origin: ${origin || "-"}`,
    `Time (UTC): ${new Date().toISOString()}`
  ].join("\n");
}

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json(
      { success: false, message: "Telegram is not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID." },
      { status: 500 }
    );
  }

  const rawPayload = (await request.json()) as Partial<ContactBriefPayload> & { email?: unknown; contact?: unknown };
  const payload: ContactBriefPayload = {
    name: asText(rawPayload.name),
    contact: asText(rawPayload.contact) || asText(rawPayload.email),
    company: asText(rawPayload.company),
    budgetFrom: asText(rawPayload.budgetFrom),
    budgetTo: asText(rawPayload.budgetTo),
    budget: asText(rawPayload.budget),
    timeline: asText(rawPayload.timeline),
    services: Array.isArray(rawPayload.services) ? rawPayload.services.filter((item): item is string => typeof item === "string") : [],
    description: asText(rawPayload.description),
    references: asText(rawPayload.references),
    consent: Boolean(rawPayload.consent)
  };

  if (!payload.name || !payload.contact || !payload.description || !payload.consent) {
    return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
  }

  const text = buildTelegramMessage(payload, request.headers.get("origin") ?? "");
  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const telegramResponse = await fetch(telegramUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true
    }),
    cache: "no-store"
  });

  if (!telegramResponse.ok) {
    const telegramError = await telegramResponse.text();
    console.error("[CONTACT_BRIEF_TELEGRAM_ERROR]", telegramError);
    return NextResponse.json({ success: false, message: "Failed to send brief to Telegram." }, { status: 502 });
  }

  return NextResponse.json({ success: true, message: "Brief accepted" }, { status: 200 });
}
