type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: SectionHeaderProps) {
  const Heading = as;
  return (
    <header
      className={`page-heading ${align === "center" ? "page-heading--center" : ""}`}
    >
      {eyebrow && <p className="page-context">{eyebrow}</p>}
      <Heading>{title}</Heading>
      {description && <p className="page-description">{description}</p>}
    </header>
  );
}
