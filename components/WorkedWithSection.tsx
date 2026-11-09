"use client";
import { useReducedMotion } from "@/components/MotionPreference";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { brands, topArtists, fullList } from "@/data/workedWith";
import type { Locale } from "@/lib/i18n";
import { getCollaboratorProfile } from "@/data/collaboratorProfiles";

const featuredBrands = brands.slice(0, 6).map(({ name }) => name);
const featuredArtists = topArtists.slice(0, 6).map(({ name }) => name);
const nameKey = (name: string) => name.toLocaleLowerCase();
const selectedKeys = new Set(
  [...featuredBrands, ...featuredArtists].map(nameKey),
);
const allNames = Array.from(
  new Map(fullList.map((name) => [nameKey(name), name])).values(),
);
const additionalNames = allNames.filter(
  (name) => !selectedKeys.has(nameKey(name)),
);
const translations: Record<string, string> = {
  МТС: "MTS",
  ИРИ: "IRI",
  "Королевская семья Дубая": "Dubai Royal Family",
  "Ваня Дмитриенко": "Vanya Dmitrienko",
  "Григорий Лепс": "Grigory Leps",
  "ЕГОР КРИД": "Egor Kreed",
  "Динара Гараева (WHYNOEN)": "Dinara Garaeva (WHYNOEN)",
  "Три дня дождя": "Three Days of Rain",
  "Пошлая Молли": "Poshlaya Molly",
  Платина: "PLATINA",
  "Молодой Платон": "Young Platon",
  Кишлак: "KISHLAK",
  Лали: "LALI",
};

export default function WorkedWithSection({
  locale = "ru",
}: {
  locale?: Locale;
}) {
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();
  const ru = locale === "ru";
  const displayName = (name: string) =>
    ru
      ? name === "TNT"
        ? "ТНТ"
        : name
      : (translations[name] ?? translations[name.toLocaleUpperCase()] ?? name);
  const profile = (name: string, children: ReactNode, tabIndex?: number) => {
    const destination = getCollaboratorProfile(name);
    if (!destination) return children;
    return <a className="collaborator-link" href={destination.url} target="_blank" rel="noreferrer"
      tabIndex={tabIndex}
      aria-label={`${displayName(name)} — ${ru ? "открыть страницу в новой вкладке" : "open profile in a new tab"}`}>
      <span>{children}</span><ArrowUpRight size={14} aria-hidden="true" />
    </a>;
  };

  return (
    <section
      className="collaborations"
      id="worked-with"
      aria-labelledby="collaborations-title"
    >
      <div className="collaborations-layout">
        <div className="collaborations-heading">
          <h2 id="collaborations-title">
            {ru ? (
              <>
                В хорошей
                <br />
                компании.
              </>
            ) : (
              <>
                In good
                <br />
                company.
              </>
            )}
          </h2>
          <p>
            {ru
              ? "Бренды, артисты и творческие команды, с которыми я работал."
              : "Brands, artists and creative teams I've worked with."}
          </p>
        </div>
        <div className="collaborations-selected">
          <div className="collaboration-group">
            <h3>
              {ru ? "Бренды и медиа" : "Brands & media"}
              <span>01</span>
            </h3>
            <ul className="collaboration-brands">
              {featuredBrands.map((name) => (
                <li key={name}>{profile(name, displayName(name))}</li>
              ))}
            </ul>
          </div>
          <div className="collaboration-group">
            <h3>
              {ru ? "Артисты и креаторы" : "Artists & creatives"}
              <span>02</span>
            </h3>
            <ul className="collaboration-artists">
              {featuredArtists.map((name) => {
                const translated = displayName(name);
                const primaryName = translated.replace(" (WHYNOEN)", "");
                return (
                  <li key={name}>
                    {profile(name, <>{primaryName}
                    {translated.includes("(WHYNOEN)") && <small>WHYNOEN</small>}</>)}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="collaboration-toggle"
        aria-expanded={expanded}
        aria-controls="all-collaborations"
        onClick={() => setExpanded(!expanded)}
      >
        <span>
          {ru
            ? expanded
              ? "Скрыть список"
              : "Все коллаборации"
            : expanded
              ? "Show less"
              : "All collaborations"}{" "}
          <span className="collaboration-count">({allNames.length})</span>
        </span>
        <span className="collaboration-toggle-icon">
          <Plus size={20} strokeWidth={1.5} />
        </span>
      </button>
      <motion.div
        id="all-collaborations"
        className="collaboration-expansion"
        aria-hidden={!expanded}
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: reduced ? 0 : 0.5, ease: [0.32, 0.72, 0, 1] }}
      >
        <div className="collaboration-index">
          <p>
            {ru ? "Также работал с" : "Also worked with"}
            <span>{String(additionalNames.length).padStart(2, "0")}</span>
          </p>
          <ul>
            {additionalNames.map((name) => (
              <li key={name}>{profile(name, displayName(name), expanded ? undefined : -1)}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
