"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { brands, fullList, topArtists, type WorkedWithItem } from "@/data/workedWith";
import { cn } from "@/lib/cn";

type OverlayProps = {
  items: string[];
  query: string;
  onQueryChange: (value: string) => void;
  onClose: () => void;
  panelId: string;
  searchId: string;
  searchRef: React.RefObject<HTMLInputElement>;
  reducedMotion: boolean | null;
};

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
const overlayChipShellClass = `${chipShellClass} overflow-hidden [&::before]:opacity-0`;
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

function FullListOverlay({
  items,
  query,
  onQueryChange,
  onClose,
  panelId,
  searchId,
  searchRef,
  reducedMotion
}: OverlayProps) {
  return (
    <motion.div
      className="absolute inset-0 z-20 overflow-hidden rounded-[inherit]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        id={panelId}
        className="relative h-full rounded-[inherit] p-5 md:p-7"
        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
        animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="false"
        aria-label="Full worked with list"
      >
      <div className="flex h-full min-h-0 flex-col">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-main)]">WORKED WITH</p>
        <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center">
          <label htmlFor={searchId} className="sr-only">
            Search full list
          </label>
          <input
            ref={searchRef}
            id={searchId}
            type="search"
            className="input h-10 flex-1 border-white/18 bg-[rgba(12,13,16,0.26)] text-sm focus:border-white/32 focus:shadow-[0_0_0_2px_rgba(245,245,247,0.12)]"
            placeholder="Search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
          />
          <button
            type="button"
            className={cn(
              "glass-chip inline-flex h-10 items-center justify-center rounded-full px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)] transition-colors duration-200",
              "hover:border-white/35 hover:text-[var(--text-main)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c]"
            )}
            aria-expanded
            aria-controls={panelId}
            onClick={onClose}
          >
            Hide full list
          </button>
        </div>

        <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
          {items.length} item{items.length === 1 ? "" : "s"}
        </p>

        <div className="relative mt-3 min-h-0 flex-1">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-[rgba(10,12,18,0.16)] to-transparent" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t from-[rgba(10,12,18,0.22)] to-transparent"
          />
          <div className="h-full overflow-y-auto pr-0">
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              {items.map((entry, index) => (
                <li key={`${entry}-${index}`} className={overlayChipShellClass}>
                  <span className={cn(chipTextClass, "truncate")}>{entry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </motion.div>
    </motion.div>
  );
}

export default function WorkedWithSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const panelId = useId();
  const searchId = useId();
  const searchRef = useRef<HTMLInputElement>(null);
  const collapsedRef = useRef<HTMLDivElement>(null);
  const [lockedHeight, setLockedHeight] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

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

  const uniqueFullList = useMemo(() => {
    const seen = new Set<string>();
    return fullList.filter((item) => {
      const key = item.toLocaleLowerCase();
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }, []);

  const filteredFullList = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) {
      return uniqueFullList;
    }
    return uniqueFullList.filter((entry) => entry.toLocaleLowerCase().includes(normalized));
  }, [query, uniqueFullList]);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }
    const frameId = window.requestAnimationFrame(() => {
      searchRef.current?.focus();
    });
    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isExpanded]);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsExpanded(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isExpanded]);

  useEffect(() => {
    if (isExpanded) {
      return;
    }
    if (!collapsedRef.current) {
      return;
    }
    setLockedHeight(collapsedRef.current.offsetHeight);
  }, [isExpanded]);

  return (
    <section className="mt-12" id="worked-with">
      <motion.div
        className="glass-panel relative overflow-hidden rounded-3xl p-5 md:p-7"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        style={lockedHeight ? { minHeight: `${lockedHeight}px` } : undefined}
      >
        <div ref={collapsedRef} aria-hidden={isExpanded} className={isExpanded ? "hidden" : ""}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-main)]">WORKED WITH</p>

          <motion.ul variants={gridContainerVariants} initial="hidden" animate="show" className="mt-6 grid grid-cols-1 gap-3 pr-3 md:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item) => (
              <motion.li key={item.name} variants={gridItemVariants}>
                <Chip item={item} />
              </motion.li>
            ))}
            <motion.li variants={gridItemVariants} className="md:col-span-2 lg:col-span-3">
              <button
                type="button"
                className={cn(
                  "glass-chip inline-flex h-12 w-full items-center justify-center rounded-xl px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-main)] transition-colors duration-200",
                  "hover:border-white/40",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c]"
                )}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                onClick={() => {
                  if (collapsedRef.current) {
                    setLockedHeight(collapsedRef.current.offsetHeight);
                  }
                  setIsExpanded(true);
                }}
              >
                View full list
              </button>
            </motion.li>
          </motion.ul>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded ? (
            <FullListOverlay
              items={filteredFullList}
              query={query}
              onQueryChange={setQuery}
              onClose={() => {
                setIsExpanded(false);
                setQuery("");
              }}
              panelId={panelId}
              searchId={searchId}
              searchRef={searchRef}
              reducedMotion={reducedMotion}
            />
          ) : null}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
