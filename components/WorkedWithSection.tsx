"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { brands, fullList, topArtists, type WorkedWithItem } from "@/data/workedWith";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n";

const nameMapEn: Record<string, string> = {
  "Ваня Дмитриенко": "Vanya Dmitrienko",
  "Григорий Лепс": "Grigory Leps",
  "Три дня дождя": "Three days of rain",
  "Пошлая Молли": "Naughty Molly",
  "ИРИ": "IRI",
  "Молодой Платон": "Young Platon",
  "Платина": "PLATINA",
  "Кишлак": "KISHLAK",
  "Егор Крид": "Egor Kreed",
  "ЕГОР КРИД": "Egor Kreed",
  "Лали": "LALI"
};

function localizeName(name: string, locale: Locale) {
  if (locale !== "en") return name;
  return nameMapEn[name] ?? name;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45, ease: "easeOut" } }
};

const chipShellClass =
  "group glass-chip flex h-12 items-center justify-center rounded-xl border-white/24 bg-[rgba(10,12,18,0.58)] px-4 text-[var(--text-main)] transition-all duration-200 [&::before]:opacity-0";
const chipTextClass =
  "text-center text-[11px] font-semibold uppercase tracking-[0.13em] opacity-95 transition-opacity duration-200 group-hover:opacity-100";

function Chip({ item }: { item: WorkedWithItem }) {
  return (
    <div className={chipShellClass}>
      {item.logoSrc ? (
        <Image
          src={item.logoSrc}
          alt={item.name}
          width={120}
          height={28}
          className="h-7 w-auto object-contain grayscale opacity-65 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
        />
      ) : (
        <span className={chipTextClass}>{item.name}</span>
      )}
    </div>
  );
}

export default function WorkedWithSection({ locale = "ru" }: { locale?: Locale }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const labels =
    locale === "en"
      ? { show: "View full list", hide: "Hide full list" }
      : { show: "Показать весь список", hide: "Скрыть список" };

  const featuredItems = useMemo(() => {
    const seen = new Set<string>();
    return [...brands, ...topArtists]
      .map((item) => ({ ...item, name: localizeName(item.name, locale) }))
      .filter((item) => {
        const key = item.name.toLocaleLowerCase();
        if (seen.has(key)) {
          return false;
        }
        seen.add(key);
        return true;
      })
      .slice(0, 12);
  }, [locale]);

  const fullListItems = useMemo<WorkedWithItem[]>(() => {
    const seen = new Set<string>();
    return fullList
      .map((name) => localizeName(name, locale))
      .filter((item) => {
        const key = item.toLocaleLowerCase();
        if (seen.has(key)) {
          return false;
        }
        seen.add(key);
        return true;
      })
      .map((name) => ({ name }));
  }, [locale]);

  const expandedItems = useMemo(() => {
    const featuredSet = new Set(featuredItems.map((item) => item.name.toLocaleLowerCase()));
    const restItems = fullListItems.filter((item) => !featuredSet.has(item.name.toLocaleLowerCase()));
    return [...featuredItems, ...restItems];
  }, [featuredItems, fullListItems]);

  const visibleItems = isExpanded ? expandedItems : featuredItems;

  return (
    <section className="mt-12" id="worked-with">
      <motion.div
        className="glass-panel worked-with-panel relative overflow-hidden rounded-3xl p-5 md:p-7"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent-soft)]">WORKED WITH</p>

        <ul className="mt-6 grid grid-cols-1 gap-3 pr-3 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <li key={item.name}>
              <Chip item={item} />
            </li>
          ))}
          <li className="md:col-span-2 lg:col-span-3">
            <button
              type="button"
              className={cn(
                "glass-chip inline-flex h-12 w-full items-center justify-center rounded-xl border-white/24 bg-[rgba(10,12,18,0.58)] px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-main)] transition-colors duration-200 [&::before]:opacity-0",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c]"
              )}
              aria-expanded={isExpanded}
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {isExpanded ? labels.hide : labels.show}
            </button>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
