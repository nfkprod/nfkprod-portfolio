import HomePageContent from "@/components/HomePageContent";
import { projects } from "@/data/projects";

export default function HomePage() {
  return <HomePageContent projects={projects} locale="ru" />;
}
