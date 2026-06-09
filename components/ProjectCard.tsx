"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ProjectItem, ProjectMedia } from "@/data/types";
import type { Locale } from "@/lib/i18n";
import { withLocalePath } from "@/lib/i18n";

const fallbackPoster = "/placeholder/og-cover.svg";

function isVimeoUrl(src: string) {
  return src.includes("vimeo.com");
}

function isYouTubeUrl(src: string) {
  return src.includes("youtube.com") || src.includes("youtu.be");
}

function getVimeoId(src: string) {
  const match = src.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match?.[1];
}

function getYouTubeId(src: string) {
  const match =
    src.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/) ||
    src.match(/[?&]v=([A-Za-z0-9_-]{6,})/) ||
    src.match(/youtube\.com\/shorts\/([A-Za-z0-9_-]{6,})/) ||
    src.match(/youtube\.com\/embed\/([A-Za-z0-9_-]{6,})/);

  return match?.[1];
}

function toPreviewEmbedUrl(src: string) {
  if (isVimeoUrl(src)) {
    const id = getVimeoId(src);

    return id
      ? `https://player.vimeo.com/video/${id}?background=1&autoplay=1&muted=1&loop=1&autopause=0&controls=0&title=0&byline=0&portrait=0&badge=0&dnt=1&quality=540p`
      : null;
  }

  if (isYouTubeUrl(src)) {
    const id = getYouTubeId(src);

    return id
      ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1&modestbranding=1&rel=0&disablekb=1&fs=0&iv_load_policy=3`
      : null;
  }

  return null;
}

function getPreviewVideo(project: ProjectItem): ProjectMedia | undefined {
  if (project.previewVideo?.type === "video") {
    return project.previewVideo;
  }

  if (project.heroMedia.type === "video") {
    return project.heroMedia;
  }

  return undefined;
}

export default function ProjectCard({ project, locale = "ru" }: { project: ProjectItem; locale?: Locale }) {
  const [previewActive, setPreviewActive] = useState(false);
  const [previewReady, setPreviewReady] = useState(false);
  const previewVideo = getPreviewVideo(project);
  const embedPreviewUrl = useMemo(() => (previewVideo ? toPreviewEmbedUrl(previewVideo.src) : null), [previewVideo]);
  const posterSrc = project.heroMedia.poster ?? previewVideo?.poster ?? (project.heroMedia.type === "image" ? project.heroMedia.src : fallbackPoster);
  const canPreview = Boolean(previewVideo);
  const revealPreview = canPreview && previewActive && previewReady;
  const previewLabel = locale === "en" ? "Video" : "Видео";
  const showPreview = () => {
    setPreviewActive(true);
    setPreviewReady(false);
  };
  const hidePreview = () => {
    setPreviewActive(false);
    setPreviewReady(false);
  };

  return (
    <article className="glass-card group h-full overflow-hidden rounded-2xl">
      <Link
        href={withLocalePath(`/portfolio/${project.slug}`, locale)}
        className="relative flex h-full flex-col focus-visible:outline-none"
        onMouseEnter={showPreview}
        onMouseLeave={hidePreview}
        onFocus={showPreview}
        onBlur={hidePreview}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-[-20%] left-[-34%] z-20 w-[30%] rotate-[14deg] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.13)_52%,rgba(255,255,255,0)_100%)] opacity-0 blur-[4px] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[400%] group-hover:opacity-70"
        />
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
          {canPreview && previewActive ? (
            <div
              className={`pointer-events-none absolute inset-0 z-0 bg-black transition-opacity duration-500 ${
                previewReady ? "opacity-100" : "opacity-0"
              }`}
            >
              {embedPreviewUrl ? (
                <iframe
                  className="h-full w-full scale-[1.04]"
                  src={embedPreviewUrl}
                  title={`${project.title} ${previewLabel.toLowerCase()}`}
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture; accelerometer; clipboard-write; encrypted-media; gyroscope"
                  allowFullScreen
                  onLoad={() => setPreviewReady(true)}
                />
              ) : (
                <video
                  className="h-full w-full object-cover scale-[1.04]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={previewVideo?.poster}
                  aria-label={`${project.title} ${previewLabel.toLowerCase()}`}
                  onCanPlay={() => setPreviewReady(true)}
                >
                  <source src={previewVideo?.src} type="video/mp4" />
                </video>
              )}
            </div>
          ) : null}
          <Image
            src={posterSrc}
            alt={project.heroMedia.alt}
            fill
            className={`z-10 object-cover transition-[opacity,transform] duration-700 ease-out ${
              revealPreview ? "opacity-0 scale-[1.04]" : "opacity-100 scale-[1.01] group-hover:scale-[1.03]"
            }`}
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          {canPreview ? (
            <span className="pointer-events-none absolute right-3 top-3 z-20 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-md">
              {previewLabel}
            </span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="min-h-[2.2em] overflow-hidden font-display text-2xl font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-main)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
              {project.title}
            </h3>
            <span className="shrink-0 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{project.year}</span>
          </div>
          <p className="mt-3 min-h-[3.25rem] overflow-hidden text-sm leading-6 text-[var(--text-muted)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
            {project.summary}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-[var(--text-muted)]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
