"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

export default function ThemeToggle({ locale }: { locale: Locale }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const readTheme = () => setDark(document.documentElement.dataset.theme === "dark");
    readTheme();
    const syncTheme = (event: StorageEvent) => {
      if (event.key !== "nfk-theme") return;
      document.documentElement.dataset.theme = event.newValue === "dark" ? "dark" : "light";
      readTheme();
    };
    window.addEventListener("storage", syncTheme);
    return () => window.removeEventListener("storage", syncTheme);
  }, []);

  const label = locale === "ru"
    ? dark ? "Включить светлую тему" : "Включить тёмную тему"
    : dark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={label}
      aria-pressed={dark}
      title={label}
      onClick={() => {
        const nextDark = document.documentElement.dataset.theme !== "dark";
        document.documentElement.dataset.theme = nextDark ? "dark" : "light";
        setDark(nextDark);
        try { localStorage.setItem("nfk-theme", nextDark ? "dark" : "light"); } catch {}
      }}
    >
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="5.75" stroke="currentColor" strokeWidth="1.1" />
        <path d="M8 2.25a5.75 5.75 0 0 0 0 11.5V2.25Z" fill="currentColor" />
      </svg>
    </button>
  );
}
