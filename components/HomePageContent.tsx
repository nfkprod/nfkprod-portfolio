import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import WorkedWithSection from "@/components/WorkedWithSection";
import FinalCta from "@/components/FinalCta";
import CreatorPortrait from "@/components/CreatorPortrait";
import ScrollReveal from "@/components/ScrollReveal";
import RevealHeading from "@/components/RevealHeading";
import SmoothScroll from "@/components/SmoothScroll";
import SceneSurface from "@/components/SceneSurface";
import { curateProjects } from "@/lib/curation";
import { withLocalePath, type Locale } from "@/lib/i18n";
import type { ProjectItem } from "@/data/types";

const disciplines = [
  {
    title: "Motion design",
    ru: "Рекламные ролики, анимация логотипов, титры и графика для экранов.",
    en: "Campaign films, animated logos, titles and graphics for screens.",
  },
  {
    title: "CGI & VFX",
    ru: "3D-визуализация продуктов и визуальные эффекты для видео. Добавляю в кадр то, что сложно или невозможно снять.",
    en: "Product CGI and visual effects for film. I add what would be difficult or impossible to shoot.",
  },
  {
    title: "AI visuals",
    ru: "Генеративные изображения и видео с авторской режиссурой и финальным постпродакшеном.",
    en: "Generative images and films with a distinct creative direction and final post-production.",
  },
  {
    title: "Creative production",
    ru: "Помогаю найти идею и собираю проект целиком: от первых эскизов до финального ролика и версий для разных площадок.",
    en: "I help shape the idea and take it through to a finished film, with versions for each platform.",
  },
];

export default function HomePageContent({
  projects,
  locale,
}: {
  projects: ProjectItem[];
  locale: Locale;
}) {
  const ru = locale === "ru";
  const selected = curateProjects(projects).slice(0, 6);
  return (
    <main className="home-page">
      <SmoothScroll />
      <Hero locale={locale} />
      <section className="selected-work" id="featured-projects">
        <div className="work-section-intro">
          <span>
            {ru ? "02 / Избранные проекты" : "02 / Selected projects"}
          </span>
          <span>({String(selected.length).padStart(2, "0")})</span>
        </div>
        <RevealHeading
          className="work-section-title"
          lines={[ru ? "Избранное." : "Selected work."]}
        />
        <div className="work-grid">
          {selected.map((project, index) => (
            <div
              key={project.slug}
              id={index === 2 ? "featured-film" : undefined}
              className={`work-grid-item ${index === 2 ? "work-feature" : ""}`}
            >
              {index === 2 && <SceneSurface />}
              <div className="project-sequence" aria-hidden="true">
                <span>
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(selected.length).padStart(2, "0")}
                </span>
                <span>
                  {project.heroMedia.type === "image" && !project.previewVideo
                    ? ru
                      ? "CGI / Статичные изображения"
                      : "CGI / Still images"
                    : project.tags.slice(0, 2).join(" / ")}
                </span>
              </div>
              <ScrollReveal delay={index === 1 || index === 4 ? 120 : 0}>
                <ProjectCard project={project} locale={locale} editorial />
              </ScrollReveal>
            </div>
          ))}
        </div>
        <Link
          className="all-work-link"
          href={withLocalePath("/portfolio", locale)}
        >
          <span>
            {ru ? "Больше работ. Больше историй." : "More work. More stories."}
          </span>
          <ArrowUpRight size={28} />
        </Link>
      </section>
      <WorkedWithSection locale={locale} />
      <section className="creator-section" id="what-i-do">
        <figure className="creator-portrait">
          <CreatorPortrait locale={locale} />
          <figcaption>
            <span>{ru ? "Егор Нафиков / NFK" : "Egor Nafikov / NFK"}</span>
            <span>Motion designer / Visual creator</span>
          </figcaption>
        </figure>
        <div className="creator-copy">
          <span className="creator-index">
            {ru ? "03 / За кадром" : "03 / Behind the frames"}
          </span>
          <RevealHeading
            lines={
              ru
                ? ["Любопытство ведёт.", "Эксперимент", "задаёт форму."]
                : ["Curiosity leads.", "Experimentation", "gives it form."]
            }
          />
          <ScrollReveal delay={120}>
            <p>
              {ru
                ? "Больше пяти лет занимаюсь моушн-дизайном и постпродакшеном. Мои работы показывали на Times Square, медиафасадах Москвы и Санкт-Петербурга и на VK Fest."
                : "Over five years in motion design and post-production. My work has been shown in Times Square, on media facades in Moscow and Saint Petersburg, and at VK Fest."}
            </p>
          </ScrollReveal>
          <Link className="text-link" href={withLocalePath("/about", locale)}>
            {ru ? "Больше обо мне" : "More about me"}
            <ArrowUpRight size={17} />
          </Link>
          <div className="creator-disciplines">
            <h3 className="sr-only">
              {ru ? "Направления работы" : "Disciplines"}
            </h3>
            <div className="discipline-list">
              {disciplines.map((item) => (
                <Link
                  href={withLocalePath("/services", locale)}
                  key={item.title}
                  className="discipline-row"
                >
                  <h4>{item.title}</h4>
                  <p>{item[locale]}</p>
                  <ArrowUpRight size={25} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FinalCta locale={locale} />
    </main>
  );
}
