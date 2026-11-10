"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import type { Locale } from "@/lib/i18n";

type DeferredVideoEmbedProps = {
  src: string;
  watchUrl: string;
  poster?: string;
  title: string;
  locale?: Locale;
};

function autoplayUrl(src: string) {
  const url = new URL(src);
  url.searchParams.set("autoplay", "1");
  return url.toString();
}

export default function DeferredVideoEmbed({
  src,
  watchUrl,
  poster,
  title,
  locale = "ru",
}: DeferredVideoEmbedProps) {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const ru = locale === "ru";

  return (
    <div className={`deferred-video relative h-full w-full ${active ? "is-active" : ""} ${loaded ? "is-loaded" : ""}`}>
      {!active ? (
        <button
          type="button"
          className="deferred-video-trigger h-full w-full"
          aria-label={`${ru ? "Смотреть" : "Play"}: ${title}`}
          onClick={() => setActive(true)}
        >
          {poster && (
            // The poster is local; no video provider connects before Play.
            // eslint-disable-next-line @next/next/no-img-element
            <img className="deferred-video-poster" src={poster} alt="" loading="lazy" />
          )}
          <span className="deferred-video-action">
            <span className="deferred-video-play" aria-hidden="true"><Play size={20} strokeWidth={1.5} fill="currentColor" /></span>
            <span>{ru ? "Смотреть видео" : "Watch video"}</span>
          </span>
        </button>
      ) : (
        <>
          <iframe
            className="deferred-video-frame h-full w-full"
            src={autoplayUrl(src)}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture; accelerometer; clipboard-write; encrypted-media; gyroscope"
            allowFullScreen
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
          {!loaded && (
            <div className="deferred-video-loading" role="status">
              <span>{failed
                ? ru ? "Не удалось загрузить видео." : "The video could not load."
                : ru ? "Загружаю видео…" : "Loading video…"}</span>
              <a className="deferred-video-fallback" href={watchUrl} target="_blank" rel="noreferrer">
                {ru ? "Открыть на площадке" : "Open on the video platform"}
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
}
