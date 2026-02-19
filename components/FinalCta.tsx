"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import Button from "@/components/Button";

export default function FinalCta() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  const itemVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.24, ease: "easeOut" } }
      }
    : {
        hidden: { opacity: 0, y: 12, filter: "blur(3px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.36, ease: "easeOut" } }
      };

  return (
    <motion.section ref={sectionRef} className="mt-16" initial="hidden" animate={isInView ? "show" : "hidden"}>
      <motion.div
        className="glass-panel rounded-3xl px-6 py-10 text-center md:px-10"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.03 } }
        }}
      >
        <motion.p variants={itemVariants} className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent-soft)]">
          Next Project
        </motion.p>
        <motion.h2 variants={itemVariants} className="mt-4 font-display text-4xl font-extrabold tracking-[-0.02em] text-[var(--text-main)] md:text-5xl">
          Готов обсудить ваш motion/CGI проект
        </motion.h2>
        <motion.p variants={itemVariants} className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
          Заполните краткий бриф и получите оценку по срокам и бюджету. Первый ответ обычно в течение суток.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-7 flex justify-center">
          <Button href="/contact" variant="primary" size="lg">
            Заполнить бриф
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
