import SectionHeader from "@/components/SectionHeader";
import ProjectGrid from "@/components/ProjectGrid";
import { projectsEn } from "@/data/projects.en";
import { projectTags } from "@/data/types";

export default function PortfolioPageEn() {
  return (
    <main className="pt-10">
      <SectionHeader eyebrow="Portfolio" title="Motion, CGI, and 3D case studies" description="Filter projects by tags and open full case pages." />
      <ProjectGrid projects={projectsEn} tags={projectTags} groupByYear locale="en" />
    </main>
  );
}
