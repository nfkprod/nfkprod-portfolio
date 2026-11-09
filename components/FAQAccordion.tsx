import { Plus } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const faqByLocale = {
  ru: [
    {
      question: "Можно ли начать без полного ТЗ?",
      answer:
        "Да. Достаточно цели, дедлайна и референсов. Помогу собрать бриф и определить этапы производства.",
    },
    {
      question: "Что, если нужны срочные сроки?",
      answer:
        "Обсудим задачу и доступность. Для срочных проектов заранее согласуем приоритеты, сроки и доплату за ускорение.",
    },
    {
      question: "Ты передаёшь исходники?",
      answer:
        "Да, в зависимости от пакета. Формат и состав исходников согласуем до начала работы.",
    },
    {
      question: "Возможно постоянное сотрудничество?",
      answer:
        "Да. Можно договориться о регулярных релизах, анимации и визуальном контенте для вашей команды.",
    },
  ],
  en: [
    {
      question: "Can we start without a full brief?",
      answer:
        "Yes. A goal, deadline and references are enough to start. I'll help structure the brief and define production stages.",
    },
    {
      question: "What if we need a quick turnaround?",
      answer:
        "We'll discuss the task and availability. For urgent projects, we agree on priorities, the timeline and an acceleration fee before starting.",
    },
    {
      question: "Do you provide source files?",
      answer:
        "Yes, depending on the selected package. We agree on the source file format and scope before production begins.",
    },
    {
      question: "Are ongoing collaborations possible?",
      answer:
        "Yes. We can arrange regular releases, animation and visual content for your team.",
    },
  ],
};

export default function FAQAccordion({ locale = "ru" }: { locale?: Locale }) {
  return (
    <div className="faq-list">
      {faqByLocale[locale].map((item) => (
        <details key={item.question}>
          <summary>
            <span>{item.question}</span>
            <Plus size={18} aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
