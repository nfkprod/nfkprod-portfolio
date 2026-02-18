import Link from "next/link";

export default function SiteHeader() {
  return (
    <nav className="hero-top">
      <Link href="/#home" className="logo">
        <img src="/nfk-logo.png" alt="NFKPROD logo" className="logo-image" />
        <span className="logo-text">NFKPROD</span>
      </Link>

      <div className="hero-menu">
        <Link href="/#about">ABOUT</Link>
        <Link href="/#portfolio">GALLERY</Link>
        <Link href="/#contacts">CONNECT</Link>
        <Link href="/projects">PROJECTS</Link>
      </div>

      <div className="hero-social">
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">D</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">Y</a>
        <a href="https://www.instagram.com/nfkprod?igsh=bGxraWV1ejZ2bmJh&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">I</a>
      </div>
    </nav>
  );
}
