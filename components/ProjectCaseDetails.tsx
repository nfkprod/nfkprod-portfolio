import type { ProjectCredit, ProjectMetric } from "@/data/types";
import type { Locale } from "@/lib/i18n";
import ScrollReveal from "@/components/ScrollReveal";

type ProjectCaseDetailsProps = {
  roles: string[];
  toolsText: string;
  tags: string[];
  challenge: string;
  solution: string;
  result: string;
  metrics: ProjectMetric[];
  credits?: ProjectCredit[];
  showMeta?: boolean;
  showContent?: boolean;
  locale?: Locale;
};

export default function ProjectCaseDetails({
  roles,
  toolsText,
  tags,
  challenge,
  solution,
  result,
  metrics,
  credits = [],
  showMeta = true,
  showContent = true,
  locale = "ru",
}: ProjectCaseDetailsProps) {
  const ru = locale === "ru";
  return (
    <>
      {showMeta && (
        <div
          className={
            credits.length
              ? "grid gap-4 md:grid-cols-2 xl:grid-cols-4"
              : "grid gap-4 md:grid-cols-3"
          }
        >
          <article className="glass-chip p-4">
            <p className="case-meta-label">{ru ? "Роль" : "Roles"}</p>
            <p className="case-meta-value">{roles.join(", ")}</p>
          </article>
          <article className="glass-chip p-4">
            <p className="case-meta-label">{ru ? "Инструменты" : "Tools"}</p>
            <p className="case-meta-value whitespace-pre-line">{toolsText}</p>
          </article>
          <article className="glass-chip p-4">
            <p className="case-meta-label">
              {ru ? "Направления" : "Disciplines"}
            </p>
            <p className="case-meta-value">{tags.join(" / ")}</p>
          </article>
          {credits.map((credit) => (
            <article key={credit.label} className="glass-chip p-4">
              <p className="case-meta-label">{credit.label}</p>
              <p className="case-meta-value whitespace-pre-line">
                {credit.value}
              </p>
            </article>
          ))}
        </div>
      )}
      {showContent && (
        <section className="case-story">
          {[
            { title: ru ? "Задача" : "Challenge", text: challenge },
            { title: ru ? "Решение" : "Approach", text: solution },
            { title: ru ? "Результат" : "Outcome", text: result },
          ].map((item, index) => (
            <ScrollReveal key={item.title}>
            <article className="case-story-step">
              <div className="case-story-heading">
                <span aria-hidden="true">0{index + 1}</span>
                <h2>{item.title}</h2>
              </div>
              <div className="case-story-body">
              <p className="whitespace-pre-line">
                {item.text}
              </p>
              {index === 2 && (
                <dl className="case-metrics">
                  {metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt>{metric.label}</dt>
                      <dd>{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              </div>
            </article>
            </ScrollReveal>
          ))}
        </section>
      )}
    </>
  );
}
