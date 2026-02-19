"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { brands, fullList, topArtists, type WorkedWithItem } from "@/data/workedWith";
import { cn } from "@/lib/cn";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45, ease: "easeOut" } }
};

const gridContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.03
    }
  }
};

const gridItemVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.24, ease: "easeOut" } }
};

const chipShellClass =
  "group glass-chip flex h-12 items-center justify-center rounded-xl px-4 transition-all duration-200 border-white/24 text-[var(--text-main)] hover:border-white/40";
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

export default function WorkedWithSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const featuredItems = useMemo(() => {
    const seen = new Set<string>();
    return [...brands, ...topArtists]
      .filter((item) => {
        const key = item.name.toLocaleLowerCase();
        if (seen.has(key)) {
          return false;
        }
        seen.add(key);
        return true;
      })
      .slice(0, 12);
  }, []);

  const fullListItems = useMemo<WorkedWithItem[]>(() => {
    const seen = new Set<string>();
    return fullList
      .filter((item) => {
        const key = item.toLocaleLowerCase();
        if (seen.has(key)) {
          return false;
        }
        seen.add(key);
        return true;
      })
      .map((name) => ({ name }));
  }, []);

  const visibleItems = isExpanded ? fullListItems : featuredItems;

  return (
    <section className="mt-12" id="worked-with">
      <motion.div
        className="glass-panel relative overflow-hidden rounded-3xl p-5 md:p-7"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent-soft)]">WORKED WITH</p>

        <motion.ul
          layout
          variants={gridContainerVariants}
          initial="hidden"
          animate="show"
          className="mt-6 grid grid-cols-1 gap-3 pr-3 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleItems.map((item) => (
            <motion.li layout key={item.name} variants={gridItemVariants}>
              <Chip item={item} />
            </motion.li>
          ))}
          <motion.li layout variants={gridItemVariants} className="md:col-span-2 lg:col-span-3">
            <button
              type="button"
              className={cn(
                "glass-chip inline-flex h-12 w-full items-center justify-center rounded-xl px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-main)] transition-colors duration-200",
                "hover:border-white/40",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c]"
              )}
              aria-expanded={isExpanded}
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {isExpanded ? "Hide full list" : "View full list"}
            </button>
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
}
