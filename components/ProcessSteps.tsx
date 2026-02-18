"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

const steps = [
  {
    title: "Бриф",
    text: "Созваниваемся или заполняем форму: цель, формат, дедлайн, бюджет, референсы."
  },
  {
    title: "Концепт",
    text: "Собираю направление: сториборд, ритм, визуальный язык и production-план."
  },
  {
    title: "Производство",
    text: "Анимация, CGI/VFX, саунд-пасс и промежуточные превью по согласованному этапу."
  },
  {
    title: "Доставка",
    text: "Финальные версии, адаптации под площадки и передача исходников по пакету."
  }
];

export default function ProcessSteps() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });
  const prefersReducedMotion = useReducedMotion();

  const cardVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.24, ease: "easeOut" } }
      }
    : {
        hidden: { opacity: 0, y: 12, scale: 0.99, filter: "blur(3px)" },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.34, ease: "easeOut" }
        }
      };

  return (
    <motion.section
      ref={sectionRef}
      className="mt-16"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } }
      }}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <motion.article key={step.title} variants={cardVariants} className="glass-card rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">0{index + 1}</p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-[var(--text-main)]">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{step.text}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
