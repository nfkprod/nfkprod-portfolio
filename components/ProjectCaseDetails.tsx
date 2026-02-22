"use client";

import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef } from "react";
import type { ProjectMetric } from "@/data/types";
import type { Locale } from "@/lib/i18n";

type ProjectCaseDetailsProps = {
  roles: string[];
  toolsText: string;
  tags: string[];
  challenge: string;
  solution: string;
  result: string;
  metrics: ProjectMetric[];
  showMeta?: boolean;
  showContent?: boolean;
  locale?: Locale;
};

const copyByLocale = {
  ru: {
    roles: "Roles",
    tools: "Tools",
    tags: "Tags",
    challenge: "Задача",
    solution: "Решение",
    result: "Результат"
  },
  en: {
    roles: "Roles",
    tools: "Tools",
    tags: "Tags",
    challenge: "Challenge",
    solution: "Solution",
    result: "Result"
  }
} as const;

export default function ProjectCaseDetails({
  roles,
  toolsText,
  tags,
  challenge,
  solution,
  result,
  metrics,
  showMeta = true,
  showContent = true,
  locale = "ru"
}: ProjectCaseDetailsProps) {
  const metaRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);
  const metaInView = useInView(metaRef, { once: true, amount: 0.35 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const copy = copyByLocale[locale];

  const cardVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }
      }
    : {
        hidden: { opacity: 0, y: 18, scale: 0.99, filter: "blur(4px)" },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.45, ease: "easeOut" }
        }
      };

  return (
    <>
      {showMeta ? (
        <motion.div
          ref={metaRef}
          className="grid gap-4 md:grid-cols-3"
          initial="hidden"
          animate={metaInView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } }
          }}
        >
          <motion.article variants={cardVariants} className="glass-chip rounded-xl p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{copy.roles}</p>
            <p className="mt-2 text-sm text-[var(--text-main)]">{roles.join(", ")}</p>
          </motion.article>

          <motion.article variants={cardVariants} className="glass-chip rounded-xl p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{copy.tools}</p>
            <p className="mt-2 whitespace-pre-line text-sm text-[var(--text-main)]">{toolsText}</p>
          </motion.article>

          <motion.article variants={cardVariants} className="glass-chip rounded-xl p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{copy.tags}</p>
            <motion.div
              className="mt-2 flex flex-wrap gap-2"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } }
              }}
            >
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  variants={cardVariants}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-[var(--text-muted)]"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.article>
        </motion.div>
      ) : null}

      {showContent ? (
        <motion.section
          ref={contentRef}
          className="grid gap-4 lg:grid-cols-3"
          initial="hidden"
          animate={contentInView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } }
          }}
        >
          <motion.article variants={cardVariants} className="glass-card rounded-2xl p-5 lg:col-span-1">
            <h2 className="font-display text-2xl font-bold text-[var(--text-main)]">{copy.challenge}</h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[var(--text-muted)]">{challenge}</p>
          </motion.article>

          <motion.article variants={cardVariants} className="glass-card rounded-2xl p-5 lg:col-span-1">
            <h2 className="font-display text-2xl font-bold text-[var(--text-main)]">{copy.solution}</h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[var(--text-muted)]">{solution}</p>
          </motion.article>

          <motion.article variants={cardVariants} className="glass-card rounded-2xl p-5 lg:col-span-1">
            <h2 className="font-display text-2xl font-bold text-[var(--text-main)]">{copy.result}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{result}</p>
            <motion.div
              className="mt-4 grid gap-2"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } }
              }}
            >
              {metrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  variants={cardVariants}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[var(--text-main)]"
                >
                  <span className="text-[var(--text-muted)]">{metric.label}: </span>
                  {metric.value}
                </motion.div>
              ))}
            </motion.div>
          </motion.article>
        </motion.section>
      ) : null}
    </>
  );
}
