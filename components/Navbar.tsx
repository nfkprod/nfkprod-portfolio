"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { getLocaleFromPathname, withLocalePath } from "@/lib/i18n";

const links = [
  { href: "/portfolio", ru: "Работы", en: "Work" },
  { href: "/about", ru: "Обо мне", en: "About" },
  { href: "/contact", ru: "Бриф", en: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const path =
    locale === "en" ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : pathname;
  const [open, setOpen] = useState(false);
  const [overFilm, setOverFilm] = useState(path === "/");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const darkSections = document.querySelectorAll(
      ".film-stage, .work-feature",
    );
    const introduction = document.querySelector(".intro-scene");
    const updateTheme = () =>
      setOverFilm(
        Array.from(darkSections).some((section) => {
          const rect = section.getBoundingClientRect();
          const coveredByIntro =
            section.classList.contains("film-stage") &&
            introduction &&
            introduction.getBoundingClientRect().top <= 80;
          return !coveredByIntro && rect.top < 80 && rect.bottom > 80;
        }),
      );
    updateTheme();
    window.addEventListener("scroll", updateTheme, { passive: true });
    return () => window.removeEventListener("scroll", updateTheme);
  }, [pathname]);

  return (
    <header
      className={`site-nav ${overFilm ? "site-nav--film" : ""} ${open ? "site-nav--open" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <a className="skip-link" href="#main-content">
        {locale === "ru" ? "К содержимому" : "Skip to content"}
      </a>
      <Link
        href={withLocalePath("/", locale)}
        className="brand-lockup"
        aria-label="NFKPROD — Home"
        onClick={() => setOpen(false)}
      >
        <span>
          nfkprod<span className="brand-dot">.</span>
        </span>
      </Link>
      <nav
        className="desktop-nav"
        aria-label={locale === "ru" ? "Главная навигация" : "Main navigation"}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={withLocalePath(link.href, locale)}
            aria-current={path.startsWith(link.href) ? "page" : undefined}
          >
            {link[locale]}
          </Link>
        ))}
      </nav>
      <div className="nav-actions">
        <Link
          className="language-link"
          href={locale === "en" ? path : withLocalePath(path, "en")}
          aria-label={
            locale === "en" ? "Switch to Russian" : "Switch to English"
          }
        >
          {locale === "en" ? "RU" : "EN"}
        </Link>
        <a
          className="nav-contact"
          href="https://t.me/Nfk23"
          target="_blank"
          rel="noreferrer"
        >
          {locale === "ru" ? "Обсудим проект" : "Let's talk"}{" "}
          <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={
            open
              ? locale === "ru"
                ? "Закрыть меню"
                : "Close menu"
              : locale === "ru"
                ? "Открыть меню"
                : "Open menu"
          }
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label={
            locale === "ru" ? "Мобильная навигация" : "Mobile navigation"
          }
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={withLocalePath(link.href, locale)}
              aria-current={path.startsWith(link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link[locale]}
              <ArrowUpRight size={22} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
