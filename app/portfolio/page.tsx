import SectionHeader from "@/components/SectionHeader";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/data/projects";
import { projectTags } from "@/data/types";

export default function PortfolioPage() {
  return (
    <main className="pt-10">
      <SectionHeader
        eyebrow="Portfolio"
        title="Кейсы по motion, CGI и 3D"
        description="Фильтруйте проекты по тегам и переходите в детальные страницы кейсов."
      />
      <ProjectGrid projects={projects} tags={projectTags} groupByYear locale="ru" />
    </main>
  );
}
