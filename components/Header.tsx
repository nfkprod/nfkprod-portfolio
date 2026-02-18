import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#contacts", label: "Contacts" },
  { href: "#projects", label: "Projects" }
];

const socials = [
  {
    label: "Telegram",
    href: "https://t.me/Nfk23",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M21 4L3 11.2l5.8 2.1L11 19l3-4.1 4.2 3L21 4Z" />
      </svg>
    )
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nfkprod?igsh=bGxraWV1ejZ2bmJh&utm_source=qr",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.7" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    label: "Behance",
    href: "https://www.behance.net/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 8h7a3 3 0 0 1 0 6H4V8Zm0 6h7.5a3 3 0 0 1 0 6H4v-6Z" />
        <path d="M14.5 11.5h5m-5 4c0 2 1.4 3.5 3.5 3.5 1.6 0 2.7-.7 3.5-1.8" />
      </svg>
    )
  }
];

export default function Header() {
  return (
    <header className="glass-panel rounded-2xl px-4 py-3 font-body sm:px-5">
      <div className="glass-content grid items-center gap-3 md:grid-cols-[auto_1fr_auto]">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="glass-chip inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-[var(--text-main)]">
            NF
          </span>
          <span className="font-display text-xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--text-main)]">NFKPROD</span>
        </Link>

        <nav className="glass-pill mx-auto flex w-full max-w-fit items-center justify-center rounded-full p-1.5">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-medium uppercase leading-[1.6] tracking-[0.12em] text-[var(--text-muted)] transition-colors hover:bg-[rgba(181,27,255,0.22)] hover:text-[var(--text-main)] sm:px-4"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-chip inline-flex h-10 w-10 items-center justify-center rounded-full text-xs font-medium leading-[1.6] text-[var(--text-muted)] transition-all duration-200 hover:scale-[0.95] hover:border-white/35 hover:bg-white/10 hover:text-[var(--text-main)]"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
