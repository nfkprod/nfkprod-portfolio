"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Motion Design",
    text: "Рекламные ролики, брендовые опенеры, social-креативы и титровые системы."
  },
  {
    title: "CGI / 3D",
    text: "3D product shots, процедурные сцены, lookdev и аккуратный композ в финале."
  },
  {
    title: "UIX / Interface Motion",
    text: "UIX-анимации, интерфейсные переходы, micro-interactions, HUD/overlay, экраны продукта, прототип-анимации."
  }
];

export default function WhatIDoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 24) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shouldReveal = hasScrolled && isInView;

  return (
    <section ref={sectionRef} className="mt-16" id="what-i-do">
      <motion.p
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        animate={shouldReveal ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 12, filter: "blur(4px)" }}
        transition={{ duration: 0.42, ease: "easeOut" }}
        className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]/90"
      >
        Что я делаю
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
        animate={shouldReveal ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 14, filter: "blur(4px)" }}
        transition={{ duration: 0.48, delay: 0.1, ease: "easeOut" }}
        className="mt-3 max-w-3xl font-display text-3xl font-extrabold leading-[1.02] tracking-[-0.02em] text-[var(--text-main)] md:text-5xl"
      >
        Motion, CGI и визуальные системы
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
        animate={shouldReveal ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 14, filter: "blur(4px)" }}
        transition={{ duration: 0.48, delay: 0.18, ease: "easeOut" }}
        className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-muted)]"
      >
        Закрываю полный путь: от концепта и аниматика до финального рендера, адаптаций и передачи исходников.
      </motion.p>

      <motion.div
        className="mt-6 grid gap-4 md:grid-cols-3"
        initial="hidden"
        animate={shouldReveal ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.11
            }
          }
        }}
      >
        {cards.map((card) => (
          <motion.article
            key={card.title}
            className="glass-card rounded-2xl p-5"
            variants={{
              hidden: { opacity: 0, y: 18, scale: 0.985, filter: "blur(6px)" },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: { duration: 0.5, ease: "easeOut" }
              }
            }}
          >
            <h3 className="font-display text-2xl font-bold text-[var(--text-main)]">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{card.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
