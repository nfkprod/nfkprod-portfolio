"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, withLocalePath } from "@/lib/i18n";

const footerLinks = [
  { href: "/portfolio", labelRu: "Портфолио", labelEn: "Portfolio" },
  { href: "/services", labelRu: "Услуги", labelEn: "Services" },
  { href: "/contact", labelRu: "Бриф", labelEn: "Brief" }
];

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <footer className="mt-16 border-t border-white/10 pb-10 pt-8">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-4 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between md:px-6">
        <p>&copy; {new Date().getFullYear()} NFKPROD</p>
        <div className="flex items-center gap-5">
          {footerLinks.map((item) => (
            <Link key={item.href} href={withLocalePath(item.href, locale)} className="hover:text-[var(--text-main)]">
              {locale === "en" ? item.labelEn : item.labelRu}
            </Link>
          ))}
          <a href="mailto:nfkprod@yandex.ru" className="hover:text-[var(--text-main)]">
            nfkprod@yandex.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
