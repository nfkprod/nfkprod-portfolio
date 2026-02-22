import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import WorkedWithSection from "@/components/WorkedWithSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import ProjectGrid from "@/components/ProjectGrid";
import ServicesPreview from "@/components/ServicesPreview";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCta from "@/components/FinalCta";
import { getFeaturedProjectsEn } from "@/data/projects.en";
import { projectTags } from "@/data/types";
import { servicePackagesEn } from "@/data/services.en";

export default function HomePageEn() {
  const featuredProjects = getFeaturedProjectsEn();

  return (
    <main>
      <Hero locale="en" />
      <WorkedWithSection locale="en" />
      <WhatIDoSection locale="en" />

      <section className="mt-16" id="featured-projects">
        <SectionHeader
          eyebrow="Featured"
          title="Featured work"
          description="Project previews below. Each case includes challenge, approach, outcome, gallery, and tool stack."
        />
        <ProjectGrid projects={featuredProjects} tags={projectTags} locale="en" />
      </section>

      <ServicesPreview locale="en" packages={servicePackagesEn} />

      <section className="mt-16" id="process">
        <SectionHeader eyebrow="Process" title="Clear production in 4 steps" />
        <ProcessSteps locale="en" />
      </section>

      <section className="mt-16" id="faq">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <FAQAccordion locale="en" />
      </section>

      <FinalCta locale="en" />
    </main>
  );
}
