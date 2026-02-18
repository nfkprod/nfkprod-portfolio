"use client";

import { useMemo, useState } from "react";
import MediaPlayer from "@/components/MediaPlayer";

const categories = [
  { id: "all", label: "Все" },
  { id: "ads", label: "Реклама" },
  { id: "music", label: "Музыка" },
  { id: "social", label: "Соцсети" }
];

const demoVideos = [
  {
    id: "1",
    category: "ads",
    title: "Brand Launch Opener",
    meta: "Рекламная анимация · 18s",
    videoUrl: "https://vimeo.com/76979871",
    className: "thumb-1"
  },
  {
    id: "2",
    category: "music",
    title: "Music Visual Loop",
    meta: "Визуал для трека · 24s",
    videoUrl: "https://vimeo.com/22439234",
    className: "thumb-2"
  },
  {
    id: "3",
    category: "social",
    title: "Promo Reels Pack",
    meta: "Серия reels · 15s",
    videoUrl: "https://vimeo.com/146022717",
    className: "thumb-3"
  },
  {
    id: "4",
    category: "ads",
    title: "Product Motion Teaser",
    meta: "Тизер продукта · 20s",
    videoUrl: "https://vimeo.com/1084537",
    className: "thumb-4"
  }
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState("all");
  const [activeVideo, setActiveVideo] = useState("");

  const filtered = useMemo(() => {
    if (filter === "all") return demoVideos;
    return demoVideos.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section className="section container" id="portfolio">
      <div className="section-head reveal visible">
        <p className="section-label">SHOWREEL</p>
        <h2>Видео-портфолио</h2>
      </div>

      <div className="filters reveal visible">
        {categories.map((item) => (
          <button
            key={item.id}
            className={`filter-btn ${filter === item.id ? "active" : ""}`}
            onClick={() => setFilter(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="video-grid">
        {filtered.map((video) => (
          <article
            key={video.id}
            className="video-card reveal visible"
            onClick={() => setActiveVideo(video.videoUrl)}
          >
            <div className={`video-thumb ${video.className}`}>
              <span>Play</span>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.meta}</p>
            </div>
          </article>
        ))}
      </div>

      {activeVideo ? (
        <div className="video-modal open" aria-hidden="false">
          <button
            type="button"
            className="video-modal-backdrop"
            onClick={() => setActiveVideo("")}
            aria-label="Закрыть видео"
          />
          <div className="video-modal-content" role="dialog" aria-modal="true" aria-label="Видео-плеер">
            <button className="modal-close" onClick={() => setActiveVideo("")} aria-label="Закрыть">
              x
            </button>
            <MediaPlayer source={activeVideo} autoPlay title="Portfolio video" />
          </div>
        </div>
      ) : null}
    </section>
  );
}
