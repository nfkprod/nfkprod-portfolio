import SectionHeader from "@/components/SectionHeader";
import ProjectGrid from "@/components/ProjectGrid";
import { getFeaturedProjects } from "@/data/projects";
import { projectTags } from "@/data/types";

export default function PortfolioPage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main className="pt-10">
      <SectionHeader
        eyebrow="Portfolio"
        title="Кейсы по motion, CGI и 3D"
        description="Фильтруйте проекты по тегам и переходите в детальные страницы кейсов."
      />
      <ProjectGrid projects={featuredProjects} tags={projectTags} groupByYear />
    </main>
  );
}
