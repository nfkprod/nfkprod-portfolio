import type { ProjectItem } from "@/data/types";

const selectedOrder = [
  "seville-artik-asti-fashion-cgi",
  "axiom-brand-film",
  "iceman-teaser-drake-concept-work",
  "gridos-platform-film",
  "prism-energy-ident",
  "helio-product-loop",
  "vanta-cgi-opener",
  "aurora-launch-system",
];

export function curateProjects(projects: ProjectItem[]) {
  const selected = selectedOrder.flatMap((slug) => {
    const project = projects.find((item) => item.slug === slug);
    return project ? [project] : [];
  });
  return [
    ...selected,
    ...projects.filter((item) => !selectedOrder.includes(item.slug)),
  ];
}
