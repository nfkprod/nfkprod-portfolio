import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCaseDetails from "@/components/ProjectCaseDetails";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import CaseStage from "@/components/CaseStage";
import ScrollReveal from "@/components/ScrollReveal";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/data/projects";
import type { ProjectMedia } from "@/data/types";
import { withLocalePath } from "@/lib/i18n";

function isVimeoUrl(src: string) {
  return src.includes("vimeo.com");
}

function isYouTubeUrl(src: string) {
  return src.includes("youtube.com") || src.includes("youtu.be");
}

function toVimeoEmbedUrl(src: string) {
  if (src.includes("player.vimeo.com/video/")) {
    return src;
  }

  const match = src.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (!match) {
    return src;
  }

  return `https://player.vimeo.com/video/${match[1]}`;
}

function toYouTubeEmbedUrl(src: string) {
  if (src.includes("youtube.com/embed/")) {
    return src;
  }

  const match =
    src.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/) ||
    src.match(/[?&]v=([A-Za-z0-9_-]{6,})/) ||
    src.match(/youtube\.com\/shorts\/([A-Za-z0-9_-]{6,})/) ||
    src.match(/youtube\.com\/embed\/([A-Za-z0-9_-]{6,})/);

  if (!match) {
    return src;
  }

  return `https://www.youtube.com/embed/${match[1]}`;
}

function isEmbedVideoUrl(src: string) {
  return isVimeoUrl(src) || isYouTubeUrl(src);
}

function toEmbedVideoUrl(src: string) {
  if (isVimeoUrl(src)) {
    return toVimeoEmbedUrl(src);
  }

  if (isYouTubeUrl(src)) {
    return toYouTubeEmbedUrl(src);
  }

  return src;
}

function formatTools(tools: string[]) {
  if (tools.length <= 3) {
    return tools.join(", ");
  }

  return `${tools.slice(0, 3).join(", ")}\n${tools.slice(3).join(", ")}`;
}

function getMediaFrameClass(
  media: ProjectMedia,
  area: "hero" | "gallery",
  projectSlug?: string,
) {
  const frame = media.frame ?? "landscape";

  if (frame === "portrait") {
    if (
      area === "gallery" &&
      projectSlug === "seville-artik-asti-fashion-cgi"
    ) {
      return "aspect-[71/100] w-full";
    }
    return area === "hero"
      ? "mx-auto aspect-[9/16] w-full max-w-[430px]"
      : "aspect-[9/16] w-full";
  }

  if (frame === "square") {
    return "aspect-square w-full";
  }

  if (frame === "cinema") {
    return "aspect-[239/100] w-full";
  }

  return "aspect-video w-full";
}

export function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }));
}

export default function ProjectCasePage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.related).slice(0, 3);

  return (
    <main className="case-page">
      <section>
        <SectionHeader
          as="h1"
          eyebrow={`Case / ${project.year}`}
          title={project.title}
          description={project.summary}
        />

        <CaseStage key={project.slug} poster={project.heroMedia.poster} embedded={project.heroMedia.type === "video" && isEmbedVideoUrl(project.heroMedia.src)}>
          <div
            data-case-media
            className={getMediaFrameClass(
              project.heroMedia,
              "hero",
              project.slug,
            )}
          >
            {project.heroMedia.type === "video" ? (
              isEmbedVideoUrl(project.heroMedia.src) ? (
                <iframe
                  className="h-full w-full"
                  src={toEmbedVideoUrl(project.heroMedia.src)}
                  title={project.heroMedia.alt}
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture; accelerometer; clipboard-write; encrypted-media; gyroscope"
                  allowFullScreen
                />
              ) : (
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="none"
                  poster={project.heroMedia.poster}
                  aria-label={project.heroMedia.alt}
                >
                  <source src={project.heroMedia.src} type="video/mp4" />
                </video>
              )
            ) : (
              <div className="relative h-full w-full">
                <Image
                  src={project.heroMedia.src}
                  alt={project.heroMedia.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            )}
          </div>
        </CaseStage>
        <div className="case-metadata"><ScrollReveal>
          <ProjectCaseDetails
            roles={project.roles}
            toolsText={formatTools(project.tools)}
            tags={project.tags}
            challenge={project.challenge}
            solution={project.solution}
            result={project.result}
            metrics={project.metrics}
            credits={project.credits}
            showContent={false}
            locale="ru"
          />
        </ScrollReveal></div>
      </section>

      <div className="case-copy">
        <ProjectCaseDetails
          roles={project.roles}
          toolsText={formatTools(project.tools)}
          tags={project.tags}
          challenge={project.challenge}
          solution={project.solution}
          result={project.result}
          metrics={project.metrics}
          credits={project.credits}
          showMeta={false}
          locale="ru"
        />
      </div>

      {project.gallery.length ? (
        <section className="case-gallery">
          <SectionHeader eyebrow="Gallery" title="Материалы проекта" />
          <div className="case-gallery-grid">
            {project.gallery.map((media, index) => (
              <div key={`${media.src}-${index}`} className="case-gallery-item"><ScrollReveal>
              <figure>
                <div
                  className={getMediaFrameClass(media, "gallery", project.slug)}
                >
                  {media.type === "video" ? (
                    isEmbedVideoUrl(media.src) ? (
                      <iframe
                        className="h-full w-full"
                        src={toEmbedVideoUrl(media.src)}
                        title={media.alt}
                        loading="lazy"
                        allow="autoplay; fullscreen; picture-in-picture; accelerometer; clipboard-write; encrypted-media; gyroscope"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        className="h-full w-full object-cover"
                        controls
                        playsInline
                        preload="none"
                        poster={media.poster}
                      >
                        <source src={media.src} type="video/mp4" />
                      </video>
                    )
                  ) : (
                    <div className="relative h-full w-full">
                      <Image
                        src={media.src}
                        alt={media.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>
                <figcaption>
                  {media.alt}
                </figcaption>
              </figure></ScrollReveal></div>
            ))}
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section className="mt-10">
          <SectionHeader eyebrow="Related" title="Похожие работы" />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} locale="ru" />
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-10">
        <Link
          href={withLocalePath("/portfolio", "ru")}
          className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-[var(--text-main)] hover:bg-white/10"
        >
          Вернуться к портфолио
        </Link>
      </div>
    </main>
  );
}
