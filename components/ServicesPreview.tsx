"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { servicePackages } from "@/data/services";
import type { ServicePackage } from "@/data/types";
import type { Locale } from "@/lib/i18n";
import { withLocalePath } from "@/lib/i18n";

const sectionReveal = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

const gridReveal = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06
    }
  }
};

const cardReveal = {
  hidden: { opacity: 0, y: 18, scale: 0.99, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

const copyByLocale = {
  ru: {
    eyebrow: "Пакеты услуг",
    title: "Готовые форматы под типовые задачи",
    description: "Фиксированные рамки по срокам, правкам и результату. Для нестандартных задач есть Custom-сборка.",
    cta: "Полное сравнение пакетов"
  },
  en: {
    eyebrow: "Service Packages",
    title: "Ready-made formats for typical tasks",
    description: "Clear boundaries for timeline, revisions, and output. Custom scope is available for non-standard goals.",
    cta: "Compare all packages"
  }
} as const;

type ServicesPreviewProps = {
  locale?: Locale;
  packages?: ServicePackage[];
};

export default function ServicesPreview({ locale = "ru", packages = servicePackages }: ServicesPreviewProps) {
  const copy = copyByLocale[locale];

  return (
    <section className="mt-16" id="services-preview">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={sectionReveal}>
        <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={gridReveal}
        className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-4"
      >
        {packages.map((item) => (
          <motion.div key={item.id} variants={cardReveal} className="h-full">
            <ServiceCard item={item} locale={locale} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.45 }} variants={sectionReveal}>
        <Link
          href={withLocalePath("/services", locale)}
          className="mt-5 inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-[var(--text-main)] hover:bg-white/10"
        >
          {copy.cta}
        </Link>
      </motion.div>
    </section>
  );
}
