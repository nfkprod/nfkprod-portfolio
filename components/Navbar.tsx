"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dribbble, Instagram, Send } from "lucide-react";
import { cn } from "@/lib/cn";
import { getLocaleFromPathname, withLocalePath } from "@/lib/i18n";

const links = [
  { href: "/", labelRu: "Главная", labelEn: "Home" },
  { href: "/portfolio", labelRu: "Портфолио", labelEn: "Portfolio" },
  { href: "/services", labelRu: "Услуги", labelEn: "Services" },
  { href: "/contact", labelRu: "Контакт", labelEn: "Contact" }
];

const socials = [
  { href: "https://t.me/Nfk23", label: "Telegram", icon: Send },
  { href: "https://www.instagram.com/nfkprod?igsh=bGxraWV1ejZ2bmJh&utm_source=qr", label: "Instagram", icon: Instagram },
  { href: "https://dribbble.com/", label: "Dribbble", icon: Dribbble }
];

export default function Navbar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const pathWithoutLocale = locale === "en" ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : pathname;
  const languageToggleHref = locale === "en" ? pathWithoutLocale : withLocalePath(pathWithoutLocale, "en");
  const languageToggleLabel = locale === "en" ? "RU" : "EN";

  return (
    <header className="sticky top-3 z-50">
      <div className="glass-panel mx-auto flex w-full max-w-[1240px] items-center justify-between gap-2.5 rounded-2xl px-4 py-2.5 md:px-6">
        <Link
          href={withLocalePath("/", locale)}
          className="group inline-flex items-center gap-2.5"
          onClick={(event) => {
            if (pathWithoutLocale === "/") {
              event.preventDefault();
              window.location.assign(withLocalePath("/", locale));
            }
          }}
        >
          <Image
            src="/nfk-logo.png"
            alt="NFKPROD logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain transition-all duration-200 group-hover:scale-[0.95]"
            priority
          />
          <span className="font-display text-xl font-bold tracking-[-0.02em] text-[var(--text-main)]">NFKPROD</span>
        </Link>

        <nav aria-label="Main navigation" className="glass-pill nav-pill-lite hidden items-center gap-1 rounded-full p-0.5 md:flex">
          {links.map((link) => {
            const active = link.href === "/" ? pathWithoutLocale === "/" : pathWithoutLocale.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={withLocalePath(link.href, locale)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
                  active ? "bg-white/12 text-[var(--text-main)]" : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                )}
              >
                  {locale === "en" ? link.labelEn : link.labelRu}
                </Link>
              );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href={languageToggleHref}
            aria-label="Switch language"
            className="glass-chip inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs font-semibold tracking-[0.08em] text-[var(--text-muted)] transition-all duration-200 hover:scale-[0.95] hover:border-white/35 hover:bg-white/10 hover:text-[var(--text-main)]"
          >
            {languageToggleLabel}
          </Link>
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="glass-chip inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-muted)] transition-all duration-200 hover:scale-[0.95] hover:border-white/35 hover:bg-white/10 hover:text-[var(--text-main)]"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
