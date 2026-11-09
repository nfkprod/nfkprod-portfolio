import SectionHeader from "@/components/SectionHeader";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/data/projects";
import { projectTags } from "@/data/types";
import { curateProjects } from "@/lib/curation";

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <SectionHeader
        as="h1"
        eyebrow="NFKPROD / PORTFOLIO"
        title="Каждый проект — новая история."
        description="Музыкальные клипы, рекламные кампании, CGI и эксперименты с AI. Здесь всё, что я создаю."
      />
      <ProjectGrid
        projects={curateProjects(projects)}
        tags={projectTags}
        groupByYear
        locale="ru"
      />
    </main>
  );
}
