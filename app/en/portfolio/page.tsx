import SectionHeader from "@/components/SectionHeader";
import ProjectGrid from "@/components/ProjectGrid";
import { projectsEn } from "@/data/projects.en";
import { projectTags } from "@/data/types";
import { curateProjects } from "@/lib/curation";

export default function PortfolioPageEn() {
  return (
    <main className="portfolio-page">
      <SectionHeader
        as="h1"
        eyebrow="NFKPROD / PORTFOLIO"
        title="Every project, a new story."
        description="Music videos, campaigns, CGI and experiments with AI. A collection of things I create."
      />
      <ProjectGrid
        projects={curateProjects(projectsEn)}
        tags={projectTags}
        groupByYear
        locale="en"
      />
    </main>
  );
}
