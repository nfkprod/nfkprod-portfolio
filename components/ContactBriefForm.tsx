"use client";

import { FormEvent, useMemo, useState } from "react";

const budgetOptions = ["до 100 000 ₽", "100 000 - 250 000 ₽", "250 000 - 500 000 ₽", "500 000+ ₽"];
const serviceOptions = ["Motion", "CGI", "3D", "VFX", "Explainer", "Social"];

type FormState = {
  name: string;
  contact: string;
  company: string;
  budget: string;
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
  budget: "",
  timeline: "",
  services: [],
  description: "",
  references: "",
  consent: false
};

export default function ContactBriefForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
      setError("Заполните обязательные поля и подтвердите согласие.");
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
        throw new Error("Ошибка отправки");
      }

      setMessage("Бриф отправлен. Скоро вернусь с оценкой.");
      setForm(initialState);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Не удалось отправить форму");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-6 md:p-8" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Имя *
          <input
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="input"
            required
          />
        </label>

        <label className="grid gap-2 text-sm">
          Email / Telegram *
          <input
            type="text"
            value={form.contact}
            onChange={(event) => setForm((prev) => ({ ...prev, contact: event.target.value }))}
            className="input"
            placeholder="email@example.com или @username"
            required
          />
        </label>

        <label className="grid gap-2 text-sm">
          Компания/проект
          <input
            value={form.company}
            onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
            className="input"
          />
        </label>

        <label className="grid gap-2 text-sm">
          Бюджет
          <select
            value={form.budget}
            onChange={(event) => setForm((prev) => ({ ...prev, budget: event.target.value }))}
            className="input"
          >
            <option value="">Выберите диапазон</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm">
        Сроки
        <input
          value={form.timeline}
          onChange={(event) => setForm((prev) => ({ ...prev, timeline: event.target.value }))}
          className="input"
          placeholder="Например: до 28 марта"
        />
      </label>

      <fieldset className="mt-4">
        <legend className="text-sm">Тип услуги</legend>
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
        Описание задачи *
        <textarea
          value={form.description}
          onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
          className="input min-h-32"
          required
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm">
        Ссылки на референсы
        <input
          value={form.references}
          onChange={(event) => setForm((prev) => ({ ...prev, references: event.target.value }))}
          className="input"
          placeholder="https://..."
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
        <span>Согласен(на) на обработку данных для обратной связи.</span>
      </label>

      {error ? <p className="mt-3 text-sm text-rose-300">{error}</p> : null}
      {message ? <p className="mt-3 text-sm text-emerald-300">{message}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 rounded-xl border border-white/35 bg-[linear-gradient(135deg,#f5f5f7_0%,#d9dbe0_52%,#a8adb7_100%)] px-6 py-3 text-sm font-semibold text-[#131419] transition duration-200 hover:scale-[0.97] disabled:opacity-60"
      >
        {loading ? "Отправка..." : "Отправить бриф"}
      </button>
    </form>
  );
}
