"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

const faq = [
  {
    question: "Можно ли работать без полного ТЗ?",
    answer: "Да. Достаточно целей, дедлайна и референсов. Помогу сформировать структуру брифа и production-план."
  },
  {
    question: "Что если нужны срочные сроки?",
    answer: "Есть rush-режим. В этом случае фиксируем приоритеты и резервируем слот с надбавкой за ускорение."
  },
  {
    question: "Вы отдаете исходники?",
    answer: "Да, в зависимости от выбранного пакета. Формат и состав исходников прописываются заранее."
  },
  {
    question: "Есть ли абонентское сопровождение?",
    answer: "Да, можно собрать monthly-модель под регулярные релизы и постоянный контент-пайплайн."
  }
];

export default function FAQAccordion() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  const cardVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.24, ease: "easeOut" } }
      }
    : {
        hidden: { opacity: 0, y: 10, scale: 0.99, filter: "blur(2px)" },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.32, ease: "easeOut" }
        }
      };

  return (
    <motion.section
      ref={sectionRef}
      className="mt-16 grid gap-3"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.07, delayChildren: 0.03 } }
      }}
    >
      {faq.map((item) => (
        <motion.details
          key={item.question}
          variants={cardVariants}
          className="glass-card group rounded-2xl border-white/15 p-0 transition-[border-color,background] duration-200 hover:border-white/28 open:border-white/26"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 font-semibold text-[var(--text-main)] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c] [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span className="glass-chip inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-white/20 text-[var(--text-muted)] transition-colors duration-200 group-hover:border-white/30 group-hover:text-[var(--text-main)]">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                className="h-4 w-4 transition-transform duration-300 ease-out group-open:rotate-180"
                aria-hidden="true"
              >
                <path d="M5 8l5 5 5-5" />
              </svg>
            </span>
          </summary>

          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
            <div className="overflow-hidden px-4 pb-4">
              <p className="text-sm leading-7 text-[var(--text-muted)]">{item.answer}</p>
            </div>
          </div>
        </motion.details>
      ))}
    </motion.section>
  );
}
