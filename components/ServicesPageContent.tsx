import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import type { ServicePackage } from "@/data/types";
import { withLocalePath, type Locale } from "@/lib/i18n";

export default function ServicesPageContent({
  locale,
  packages,
}: {
  locale: Locale;
  packages: ServicePackage[];
}) {
  const ru = locale === "ru";
  return (
    <main className="services-page">
      <SectionHeader
        as="h1"
        eyebrow={ru ? "Услуги" : "Services"}
        title={ru ? "Что могу сделать для вашего проекта" : "What I can bring to your project"}
        description={ru
          ? "Ниже основные форматы и стоимость на старте. Если задача выходит за их рамки, обсудим её отдельно."
          : "The main formats and their starting prices. If your project needs something different, let's talk about it."}
      />
      <div className="service-offers">
        {packages.map((item, index) => (
          <article key={item.id} id={item.id} className="service-offer">
            <div className="service-offer-heading">
              <span className="service-offer-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h2>{item.name}</h2>
            </div>
            <div className="service-offer-copy">
              <p>{item.subtitle}</p>
              <ul>
                {item.deliverables.map((entry) => <li key={entry}>{entry}</li>)}
              </ul>
              <dl>
                <div><dt>{ru ? "Срок" : "Timeline"}</dt><dd>{item.timeline}</dd></div>
                <div><dt>{ru ? "Правки" : "Revisions"}</dt><dd>{item.revisions}</dd></div>
              </dl>
            </div>
            <div className="service-offer-price">
              <p>{item.priceFrom}</p>
              <Link className="text-link" href={withLocalePath("/contact", locale)}>
                {ru ? "Обсудить задачу" : "Discuss the project"}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <p className="services-price-note">
        {ru
          ? "Цены указаны в рублях. Итоговая стоимость зависит от длительности, сложности графики и количества версий. После брифа согласуем объём, сроки и смету до начала работы."
          : "Prices are listed in Russian rubles (RUB). The final quote depends on duration, visual complexity, and the number of versions. Scope, timing, and cost are agreed after the brief, before production starts."}
      </p>
    </main>
  );
}
