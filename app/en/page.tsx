import HomePageContent from "@/components/HomePageContent";
import { projectsEn } from "@/data/projects.en";

export default function HomePageEn() {
  return <HomePageContent projects={projectsEn} locale="en" />;
}
