type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <header className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]/90">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.02] tracking-[-0.02em] text-[var(--text-main)] md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">{description}</p> : null}
    </header>
  );
}