"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import TagFilter from "@/components/TagFilter";
import type { ProjectItem } from "@/data/types";
import type { Locale } from "@/lib/i18n";

type ProjectGridProps = {
  projects: ProjectItem[];
  tags: readonly string[];
  initialPage?: number;
  groupByYear?: boolean;
  locale?: Locale;
};

export default function ProjectGrid({
  projects,
  tags,
  initialPage = 1,
  groupByYear = false,
  locale = "ru",
}: ProjectGridProps) {
  const allTag = locale === "en" ? "All" : "Все";
  const [activeTag, setActiveTag] = useState("");
  const [page, setPage] = useState(initialPage);
  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          !activeTag || project.tags.some((tag) => tag === activeTag),
      ),
    [projects, activeTag],
  );
  const visible = groupByYear ? filtered : filtered.slice(0, page * 6);
  const canExpand = filtered.length > 6 && !groupByYear;

  return (
    <div className="work-collection">
      <div className="work-filter-row">
        <TagFilter
          tags={[allTag, ...tags]}
          active={activeTag || allTag}
          onChange={(tag) => {
            setActiveTag(tag === allTag ? "" : tag);
            setPage(initialPage);
          }}
        />
        <span className="work-count" aria-live="polite">
          {String(filtered.length).padStart(2, "0")}{" "}
          {locale === "ru" ? "проектов" : "projects"}
        </span>
      </div>
      <div className="work-grid">
        {visible.map((project) => (
          <div className="work-grid-item" key={project.slug}>
            <ProjectCard project={project} locale={locale} />
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="empty-work">
          {locale === "ru"
            ? "В этой категории пока нет проектов. Выберите другой фильтр."
            : "No projects in this category yet. Try another filter."}
        </p>
      )}
      {canExpand && (
        <div className="work-more">
          <button
            className="studio-button studio-button--secondary"
            type="button"
            onClick={() => setPage(page * 6 < filtered.length ? page + 1 : 1)}
          >
            {page * 6 < filtered.length
              ? locale === "ru"
                ? "Показать ещё"
                : "Show more"
              : locale === "ru"
                ? "Свернуть"
                : "Show less"}
          </button>
        </div>
      )}
    </div>
  );
}
