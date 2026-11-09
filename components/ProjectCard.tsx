"use client";
import { useReducedMotion } from "@/components/MotionPreference";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import { ArrowUpRight, Play } from "lucide-react";
import type { ProjectItem } from "@/data/types";
import type { Locale } from "@/lib/i18n";
import { withLocalePath } from "@/lib/i18n";
const DriftingMedia = dynamic(() => import("@/components/DriftingMedia"));

export default function ProjectCard({
  project,
  locale = "ru",
  editorial = false,
}: {
  project: ProjectItem;
  locale?: Locale;
  editorial?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const href = withLocalePath(`/portfolio/${project.slug}`, locale);
  const [focused, setFocused] = useState(false);
  const [loadPreview, setLoadPreview] = useState(false);
  const [previewPlaying, setPreviewPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const active = hovered || focused;
  const reducedMotion = useReducedMotion();
  const preview = project.previewVideo;
  const localPreview = preview?.src.startsWith("/") ? preview.src : undefined;
  // These films contain edge-to-edge brand lettering that must remain in frame.
  const preserveFrame = ["axiom-brand-film", "helio-product-loop"].includes(
    project.slug,
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) {
      video.pause();
      return;
    }
    if (active) {
      video.play().catch(() => {});
      return;
    }
    // Let the preview fade back to the poster before pausing playback.
    const pauseTimeout = window.setTimeout(() => video.pause(), 520);
    return () => window.clearTimeout(pauseTimeout);
  }, [active, loadPreview, reducedMotion]);
  const poster =
    project.heroMedia.poster ??
    (project.heroMedia.type === "image"
      ? project.heroMedia.src
      : "/placeholder/og-cover.svg");

  const displayTitles: Record<string, [string, string]> = {
    "seville-artik-asti-fashion-cgi": ["Seville", "Sasha Saharnaya × NFK"],
    "axiom-brand-film": ["Bose", "Product film / Spec ad"],
    "iceman-teaser-drake-concept-work": ["ICEMAN", "Drake / Concept work"],
    "helio-product-loop": ["HEARTZ 2.0", "Brand visual"],
    "prism-energy-ident": ["BUSHIDO ZHO × Aarne", "Slim Shady / VFX"],
    "vanta-cgi-opener": [
      "Comedy Club",
      locale === "ru" ? "Новогодний выпуск" : "New Year special",
    ],
  };
  const [title, subtitle] = displayTitles[project.slug] ?? [
    project.title,
    project.tags.slice(0, 2).join(" / "),
  ];

  const media = (
    <div className="work-media">
      <Image
        src={poster}
        alt={project.heroMedia.alt}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 65vw, 100vw"
        className="work-poster"
      />
      {loadPreview && localPreview && !reducedMotion && (
        <video
          ref={videoRef}
          className={`work-video ${active && previewPlaying ? "is-playing" : ""}`}
          src={localPreview}
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          onPlaying={() => setPreviewPlaying(true)}
          onPause={() => setPreviewPlaying(false)}
        />
      )}
    </div>
  );
  const caption = (
    <div className="work-caption">
      <h3>
        {title}
        <span>{subtitle}</span>
      </h3>
      <span>{project.year}</span>
    </div>
  );

  return (
    <article
      className={`work-card ${editorial ? "work-card--editorial" : ""} ${preserveFrame ? "work-card--full-frame" : ""}`}
    >
      <Link
        href={href}
        className="work-card-link"
        aria-label={project.title}
        onPointerEnter={(event) => {
          if (event.pointerType !== "mouse") return;
          setHovered(true);
          setLoadPreview(true);
        }}
        onPointerLeave={() => setHovered(false)}
        onFocus={() => {
          setFocused(true);
          setLoadPreview(true);
        }}
        onBlur={() => setFocused(false)}
      >
        <div className="work-image">
          {editorial && !preserveFrame ? (
            <DriftingMedia>{media}</DriftingMedia>
          ) : (
            media
          )}
          {!editorial && caption}
          <span className="work-open" aria-hidden="true">
            <span className="work-open-glyph">
              <ArrowUpRight size={22} />
              <ArrowUpRight size={22} />
            </span>
          </span>
          {project.heroMedia.type === "video" && (
            <span className="work-play-mark" aria-hidden="true">
              <Play size={12} fill="currentColor" />
            </span>
          )}
        </div>
        {editorial && caption}
        <p className="sr-only">{project.summary}</p>
      </Link>
    </article>
  );
}
