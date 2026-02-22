import type { ServicePackage } from "@/data/types";
import type { Locale } from "@/lib/i18n";

type ServiceCardProps = {
  item: ServicePackage;
  locale?: Locale;
};

export default function ServiceCard({ item, locale = "ru" }: ServiceCardProps) {
  const labels = locale === "en" ? { revisions: "Revisions", sourceFiles: "Source files" } : { revisions: "Правки", sourceFiles: "Исходники" };

  return (
    <article
      className={`glass-card grid h-full grid-rows-[auto_auto_7.5rem_auto_1fr_auto] rounded-2xl p-6 ${
        item.highlighted ? "ring-1 ring-white/35" : ""
      }`}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{item.timeline}</p>
      <h3 className="mt-3 min-h-[2.8rem] font-display text-2xl font-bold tracking-[-0.02em] text-[var(--text-main)]">{item.name}</h3>
      <p className="mt-2 overflow-hidden text-sm leading-6 text-[var(--text-muted)]">{item.subtitle}</p>
      <p className="mt-4 min-h-[1.25em] font-display text-3xl font-bold text-[var(--text-main)]">{item.priceFrom}</p>

      <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
        {item.deliverables.map((entry) => (
          <li key={entry} className="flex min-h-[2.5rem] items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            {entry}
          </li>
        ))}
      </ul>

      <div className="mt-4 grid gap-2 text-xs text-[var(--text-muted)]">
        <p>
          {labels.revisions}: {item.revisions}
        </p>
        <p>
          {labels.sourceFiles}: {item.sourceFiles}
        </p>
      </div>
    </article>
  );
}
