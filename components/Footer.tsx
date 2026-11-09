"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, withLocalePath } from "@/lib/i18n";
import { linkedinUrl } from "@/lib/contact";

export default function Footer() {
  const locale = getLocaleFromPathname(usePathname());
  return (
    <footer className="site-footer">
      <Link href={withLocalePath("/", locale)} className="footer-wordmark">
        nfkprod.
      </Link>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} NFKPROD</span>
        <span>MOTION / CGI / AI</span>
        <div>
          <a
            href="https://www.instagram.com/nfkprod"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a href="https://t.me/Nfk23" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <Link href={withLocalePath("/contact", locale)}>
            {locale === "ru" ? "Контакт" : "Contact"}
          </Link>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
