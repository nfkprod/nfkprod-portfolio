import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import WorkedWithSection from "@/components/WorkedWithSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import ProjectGrid from "@/components/ProjectGrid";
import ServicesPreview from "@/components/ServicesPreview";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCta from "@/components/FinalCta";
import { getFeaturedProjects } from "@/data/projects";
import { projectTags } from "@/data/types";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main>
      <Hero locale="ru" />
      <WorkedWithSection locale="ru" />
      <WhatIDoSection locale="ru" />

      <section className="mt-16" id="featured-projects">
        <SectionHeader
          eyebrow="Featured"
          title="Избранные работы"
          description="Ниже превью проектов. Внутри кейсов: задача, подход, результат, галерея и стек инструментов."
        />
        <ProjectGrid projects={featuredProjects} tags={projectTags} locale="ru" />
      </section>

      <ServicesPreview locale="ru" />

      <section className="mt-16" id="process">
        <SectionHeader eyebrow="Процесс" title="Понятный production в 4 шага" />
        <ProcessSteps locale="ru" />
      </section>

      <section className="mt-16" id="faq">
        <SectionHeader eyebrow="FAQ" title="Частые вопросы" />
        <FAQAccordion locale="ru" />
      </section>

      <FinalCta locale="ru" />
    </main>
  );
}
