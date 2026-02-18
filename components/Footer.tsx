import Link from "next/link";

const footerLinks = [
  { href: "/portfolio", label: "Портфолио" },
  { href: "/services", label: "Услуги" },
  { href: "/contact", label: "Бриф" }
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 pb-10 pt-8">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-4 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between md:px-6">
        <p>&copy; {new Date().getFullYear()} NFKPROD</p>
        <div className="flex items-center gap-5">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[var(--text-main)]">
              {item.label}
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
