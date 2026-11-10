import { NextResponse } from "next/server";
import { briefServiceOptions, validateBudgetRange } from "@/lib/briefValidation";

type ContactBriefPayload = {
  name: string;
  contact: string;
  company?: string;
  budgetFrom?: string;
  budgetTo?: string;
  budget?: string;
  budgetCurrency: "RUB" | "USD";
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

  const currency = payload.budgetCurrency;
  if (from && to) return `${from} - ${to} ${currency}`;
  if (from) return `from ${from} ${currency}`;
  if (to) return `to ${to} ${currency}`;
  if (legacy) return `${legacy} ${currency}`;
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
  let parsed: unknown;
  try {
    parsed = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON payload." }, { status: 400 });
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return NextResponse.json({ success: false, message: "Invalid brief payload." }, { status: 400 });
  }
  const rawPayload = parsed as Record<string, unknown>;
  const payload: ContactBriefPayload = {
    name: asText(rawPayload.name),
    contact: asText(rawPayload.contact) || asText(rawPayload.email),
    company: asText(rawPayload.company),
    budgetFrom: asText(rawPayload.budgetFrom),
    budgetTo: asText(rawPayload.budgetTo),
    budget: asText(rawPayload.budget),
    budgetCurrency: rawPayload.budgetCurrency === "USD" ? "USD" : "RUB",
    timeline: asText(rawPayload.timeline),
    services: Array.isArray(rawPayload.services)
      ? rawPayload.services.filter((item): item is string => typeof item === "string" && (briefServiceOptions as readonly string[]).includes(item))
      : [],
    description: asText(rawPayload.description),
    references: asText(rawPayload.references),
    consent: rawPayload.consent === true
  };

  if (!payload.name || !payload.contact || !payload.description || !payload.consent) {
    return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
  }

  const budgetValidation = validateBudgetRange(payload);
  if (!budgetValidation.valid) {
    return NextResponse.json({ success: false, message: "Enter a valid project budget.", field: "budget", code: budgetValidation.error }, { status: 400 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) {
    return NextResponse.json({ success: false, message: "Brief delivery is temporarily unavailable." }, { status: 500 });
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
