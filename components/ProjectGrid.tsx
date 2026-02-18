"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import TagFilter from "@/components/TagFilter";
import type { ProjectItem } from "@/data/types";

type ProjectGridProps = {
  projects: ProjectItem[];
  tags: readonly string[];
  initialPage?: number;
  groupByYear?: boolean;
};

const PAGE_SIZE = 6;

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.985, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

function toYearNumber(year: string) {
  const parsed = Number.parseInt(year, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export default function ProjectGrid({ projects, tags, initialPage = 1, groupByYear = false }: ProjectGridProps) {
  const [activeTag, setActiveTag] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(initialPage);

  const filtered = useMemo(() => {
    if (activeTag === "All") {
      return projects;
    }

    return projects.filter((project) => project.tags.includes(activeTag as never));
  }, [projects, activeTag]);

  const ordered = useMemo(() => {
    const list = [...filtered];
    const icebergIndex = list.findIndex((project) => project.slug === "pulse-ui-promo");
    const heartzIndex = list.findIndex((project) => project.slug === "helio-product-loop");

    if (icebergIndex !== -1 && heartzIndex !== -1) {
      [list[icebergIndex], list[heartzIndex]] = [list[heartzIndex], list[icebergIndex]];
    }

    return list;
  }, [filtered]);

  const effectivePageSize = groupByYear ? Math.max(ordered.length, 1) : PAGE_SIZE;
  const totalPages = Math.max(1, Math.ceil(ordered.length / effectivePageSize));

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [activeTag, initialPage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const visible = useMemo(() => {
    return ordered.slice(0, currentPage * effectivePageSize);
  }, [ordered, currentPage, effectivePageSize]);

  const groupedByYear = useMemo(() => {
    const grouped = new Map<string, ProjectItem[]>();

    for (const project of visible) {
      const list = grouped.get(project.year) ?? [];
      list.push(project);
      grouped.set(project.year, list);
    }

    return [...grouped.entries()]
      .sort(([yearA], [yearB]) => toYearNumber(yearB) - toYearNumber(yearA) || yearB.localeCompare(yearA))
      .map(([year, items]) => ({ year, items }));
  }, [visible]);

  return (
    <div>
      <TagFilter tags={["All", ...tags]} active={activeTag} onChange={setActiveTag} />
      <motion.div
        key={`${activeTag}-${currentPage}-${groupByYear ? "year" : "flat"}`}
        layout
        initial="hidden"
        animate="show"
        variants={gridVariants}
        className={groupByYear ? "mt-6 space-y-8" : "mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3"}
      >
        {groupByYear
          ? groupedByYear.map(({ year, items }) => (
              <section key={year}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]/85">{year}</p>
                <div className="mt-3 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((project) => (
                    <motion.div key={project.slug} layout variants={cardVariants} className="h-full">
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
              </section>
            ))
          : visible.map((project) => (
              <motion.div key={project.slug} layout variants={cardVariants} className="h-full">
                <ProjectCard project={project} />
              </motion.div>
            ))}
      </motion.div>
      {totalPages > 1 ? (
        <div className="mt-6 flex items-center justify-center">
          <button
            type="button"
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage((page) => page + 1);
                return;
              }

              setCurrentPage(1);
            }}
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.12em] text-[var(--text-main)] transition hover:bg-white/10"
          >
            {currentPage < totalPages ? "Показать еще" : "Свернуть"}
          </button>
        </div>
      ) : null}
    </div>
  );
}

