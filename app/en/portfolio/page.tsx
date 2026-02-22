import SectionHeader from "@/components/SectionHeader";
import ProjectGrid from "@/components/ProjectGrid";
import { getFeaturedProjectsEn } from "@/data/projects.en";
import { projectTags } from "@/data/types";

export default function PortfolioPageEn() {
  const featuredProjects = getFeaturedProjectsEn();

  return (
    <main className="pt-10">
      <SectionHeader eyebrow="Portfolio" title="Motion, CGI, and 3D case studies" description="Filter projects by tags and open full case pages." />
      <ProjectGrid projects={featuredProjects} tags={projectTags} groupByYear locale="en" />
    </main>
  );
}
