"use client";

import { FormEvent, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";

const serviceOptions = ["Motion", "CGI", "3D", "VFX", "Explainer", "Social"];

type FormState = {
  name: string;
  contact: string;
  company: string;
  budgetFrom: string;
  budgetTo: string;
  timeline: string;
  services: string[];
  description: string;
  references: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  contact: "",
  company: "",
  budgetFrom: "",
  budgetTo: "",
  timeline: "",
  services: [],
  description: "",
  references: "",
  consent: false
};

const copyByLocale = {
  ru: {
    requiredError: "Заполните обязательные поля и подтвердите согласие.",
    sendError: "Ошибка отправки",
    success: "Бриф отправлен. Скоро вернусь с оценкой.",
    unknownError: "Не удалось отправить форму",
    name: "Имя *",
    contact: "Email / Telegram *",
    company: "Компания/проект",
    budget: "Бюджет",
    budgetFrom: "От, ₽",
    budgetTo: "До, ₽",
    timeline: "Сроки",
    timelinePlaceholder: "Например: до 28 марта",
    serviceType: "Тип услуги",
    description: "Описание задачи *",
    references: "Ссылки на референсы",
    referencesPlaceholder: "https://...",
    consent: "Согласен(на) на обработку данных для обратной связи.",
    sending: "Отправка...",
    submit: "Отправить бриф"
  },
  en: {
    requiredError: "Please complete required fields and confirm consent.",
    sendError: "Submit error",
    success: "Brief sent. I will get back with an estimate soon.",
    unknownError: "Could not send the form",
    name: "Name *",
    contact: "Email / Telegram *",
    company: "Company / project",
    budget: "Budget",
    budgetFrom: "From, USD",
    budgetTo: "To, USD",
    timeline: "Timeline",
    timelinePlaceholder: "For example: by March 28",
    serviceType: "Service type",
    description: "Task description *",
    references: "References",
    referencesPlaceholder: "https://...",
    consent: "I agree to data processing for feedback.",
    sending: "Sending...",
    submit: "Send brief"
  }
} as const;

export default function ContactBriefForm({ locale = "ru" }: { locale?: Locale }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const copy = copyByLocale[locale];

  const canSubmit = useMemo(() => {
    return form.name.trim() && form.contact.trim() && form.description.trim() && form.consent;
  }, [form]);

  function toggleService(value: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(value) ? prev.services.filter((item) => item !== value) : [...prev.services, value]
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!canSubmit) {
      setError(copy.requiredError);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error(copy.sendError);
      }

      setMessage(copy.success);
      setForm(initialState);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : copy.unknownError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-6 md:p-8" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          {copy.name}
          <input
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="input"
            required
          />
        </label>

        <label className="grid gap-2 text-sm">
          {copy.contact}
          <input
            type="text"
            value={form.contact}
            onChange={(event) => setForm((prev) => ({ ...prev, contact: event.target.value }))}
            className="input"
            placeholder="email@example.com or @username"
            required
          />
        </label>

        <label className="grid gap-2 text-sm">
          {copy.company}
          <input
            value={form.company}
            onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
            className="input"
          />
        </label>

        <div className="grid gap-2 text-sm">
          <span>{copy.budget}</span>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              value={form.budgetFrom}
              onChange={(event) => setForm((prev) => ({ ...prev, budgetFrom: event.target.value }))}
              className="input"
              placeholder={copy.budgetFrom}
            />
            <input
              type="text"
              value={form.budgetTo}
              onChange={(event) => setForm((prev) => ({ ...prev, budgetTo: event.target.value }))}
              className="input"
              placeholder={copy.budgetTo}
            />
          </div>
        </div>
      </div>

      <label className="mt-4 grid gap-2 text-sm">
        {copy.timeline}
        <input
          value={form.timeline}
          onChange={(event) => setForm((prev) => ({ ...prev, timeline: event.target.value }))}
          className="input"
          placeholder={copy.timelinePlaceholder}
        />
      </label>

      <fieldset className="mt-4">
        <legend className="text-sm">{copy.serviceType}</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {serviceOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => toggleService(option)}
              className={`rounded-full border px-3 py-1 text-xs ${
                form.services.includes(option)
                  ? "border-white/35 bg-white/12 text-[var(--text-main)]"
                  : "border-white/15 bg-white/5 text-[var(--text-muted)]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-4 grid gap-2 text-sm">
        {copy.description}
        <textarea
          value={form.description}
          onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
          className="input min-h-32"
          required
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm">
        {copy.references}
        <input
          value={form.references}
          onChange={(event) => setForm((prev) => ({ ...prev, references: event.target.value }))}
          className="input"
          placeholder={copy.referencesPlaceholder}
        />
      </label>

      <label className="mt-4 flex items-start gap-2 text-sm text-[var(--text-muted)]">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => setForm((prev) => ({ ...prev, consent: event.target.checked }))}
          className="mt-1"
          required
        />
        <span>{copy.consent}</span>
      </label>

      {error ? <p className="mt-3 text-sm text-rose-300">{error}</p> : null}
      {message ? <p className="mt-3 text-sm text-emerald-300">{message}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 rounded-xl border border-white/35 bg-[linear-gradient(135deg,#f5f5f7_0%,#d9dbe0_52%,#a8adb7_100%)] px-6 py-3 text-sm font-semibold text-[#131419] transition duration-200 hover:scale-[0.97] disabled:opacity-60"
      >
        {loading ? copy.sending : copy.submit}
      </button>
    </form>
  );
}
