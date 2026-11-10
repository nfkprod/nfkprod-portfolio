"use client";
import { useReducedMotion } from "@/components/MotionPreference";

import Image from "next/image";
import Link from "next/link";
import type Player from "@vimeo/player";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight, Pause, Play, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import RevealHeading from "@/components/RevealHeading";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero({ locale = "ru" }: { locale?: Locale }) {
  const ru = locale === "ru";
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [backgroundReady, setBackgroundReady] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [clientReady, setClientReady] = useState(false);
  const visible = useInView(stageRef, { amount: 0.15 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 30,
    mass: 0.6,
  });
  const filmTransform = useTransform(smoothProgress, (progress) => {
    const amount = Math.max(0, Math.min(1, progress));
    return `translate3d(0, ${-amount * 36}px, 0) scale(${1 - amount * 0.055})`;
  });
  const filmOpacity = useTransform(smoothProgress, [0, 1], [1, 0.55]);

  useEffect(() => {
    setClientReady(true);
  }, []);

  useEffect(() => {
    const iframe = backgroundRef.current;
    setBackgroundReady(false);
    setHasPlayed(false);
    if (!iframe || reduced !== false) return;
    let disposed = false;
    let player: Player | null = null;
    const revealVideo = () => {
      if (!disposed) setHasPlayed(true);
    };
    // Delay SDK setup so an interrupted mount cannot leave a stale player.
    import("@vimeo/player")
      .then(({ default: VimeoPlayer }) => {
        if (disposed || !iframe.isConnected) return;
        player = new VimeoPlayer(iframe);
        playerRef.current = player;
        player.on("playing", revealVideo);
        return player.ready().then(() => {
          if (!disposed) setBackgroundReady(true);
        });
      })
      .catch(() => {});
    return () => {
      disposed = true;
      playerRef.current = null;
      player?.off("playing", revealVideo);
      player?.destroy().catch(() => {});
    };
  }, [clientReady, reduced]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player || !backgroundReady) return;
    const shouldPlay = !reduced && !paused && !playing && visible;
    (shouldPlay ? player.play() : player.pause()).catch(() => {});
  }, [backgroundReady, reduced, paused, playing, visible]);

  useEffect(() => {
    if (!playing) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [playing]);

  function closeReel() {
    dialogRef.current?.close();
    setPlaying(false);
    triggerRef.current?.focus();
  }

  return (
    <section className="film-hero" ref={heroRef}>
      <div className="film-stage" ref={stageRef}>
        <motion.div
          className="film-visual"
          style={
            reduced
              ? undefined
              : { transform: filmTransform, opacity: filmOpacity }
          }
        >
          <Image
            src="/showreel-poster.jpg"
            alt={
              ru
                ? "Кадр из шоурила NFKPROD"
                : "A frame from the NFKPROD showreel"
            }
            quality={90}
            fill
            priority
            sizes="100vw"
            className="film-poster"
          />
          <div
            className={`film-preview ${hasPlayed ? "is-ready" : ""}`}
            aria-hidden="true"
          >
            {clientReady && reduced === false && (
              <iframe
                ref={backgroundRef}
                src="https://player.vimeo.com/video/1164822951?background=1&autoplay=0&muted=1&loop=1&autopause=0&quality=1080p&title=0&byline=0&portrait=0&dnt=1"
                title="Background NFKPROD showreel"
                allow="autoplay; fullscreen; picture-in-picture"
                tabIndex={-1}
                aria-hidden="true"
              />
            )}
          </div>
        </motion.div>
        <div className="film-shade" />
        <button
          ref={triggerRef}
          type="button"
          className="film-reel-trigger"
          aria-haspopup="dialog"
          onClick={() => {
            setPlaying(true);
            dialogRef.current?.showModal();
          }}
        >
          <span className="film-play-icon">
            <Play size={18} fill="currentColor" strokeWidth={1} />
          </span>
          <span className="film-reel-label">
            <span>
              {ru ? "Смотреть шоурил" : "Watch showreel"}
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </span>
            <span>{ru ? "Со звуком · 00:48" : "Sound on · 00:48"}</span>
          </span>
        </button>
        <div className="film-baseline">
          <span>
            Independent visual creator
            <br />
            Motion / CGI / VFX / AI
          </span>
          <div className="film-actions">
            {!reduced && (
              <button
                type="button"
                className="film-pause"
                onClick={() => setPaused(!paused)}
                aria-pressed={paused}
                aria-label={
                  paused
                    ? ru
                      ? "Продолжить превью"
                      : "Resume preview"
                    : ru
                      ? "Приостановить превью"
                      : "Pause preview"
                }
              >
                {paused ? <Play size={16} /> : <Pause size={16} />}
              </button>
            )}
            <Link
              href="#introduction"
              scroll={false}
              className="film-scroll"
              aria-label={ru ? "Открыть работы" : "Explore the work"}
              onClick={(event) => {
                if (
                  event.metaKey ||
                  event.ctrlKey ||
                  event.shiftKey ||
                  event.altKey
                )
                  return;
                if (!document.documentElement.classList.contains("lenis")) {
                  document
                    .getElementById("introduction")
                    ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
                }
              }}
            >
              <ArrowDown size={24} strokeWidth={1} />
            </Link>
          </div>
        </div>
      </div>
      <div className="intro-scene">
        <div className="studio-intro" id="introduction">
          <div className="intro-index" aria-hidden="true">
            <span>01 / NFKPROD</span>
            <span>Motion. CGI. VFX. AI.</span>
          </div>
          <RevealHeading
            as="h1"
            lines={
              ru
                ? ["Из воображения", "в кадр."]
                : ["From imagination", "to the screen."]
            }
          />
          <div className="intro-description">
            <ScrollReveal delay={140}>
              <p>
                {ru
                  ? "Я Егор Нафиков (NFK), независимый креатор и дизайнер. Создаю CGI, AI-видео и моушн-графику для брендов, артистов и творческих команд."
                  : "I'm Egor Nafikov (NFK), an independent creator and designer. I make CGI, AI films and motion graphics for brands, artists and creative teams."}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="reel-dialog"
        aria-label={ru ? "Шоурил NFKPROD" : "NFKPROD showreel"}
        onCancel={(event) => {
          event.preventDefault();
          closeReel();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeReel();
        }}
      >
        <button
          type="button"
          className="reel-close"
          onClick={closeReel}
          aria-label={ru ? "Закрыть шоурил" : "Close showreel"}
        >
          <X size={24} />
        </button>
        {playing && (
          <iframe
            src="https://player.vimeo.com/video/1164822951?autoplay=1&quality=1080p&title=0&byline=0&portrait=0&dnt=1"
            title={ru ? "Шоурил NFKPROD" : "NFKPROD showreel"}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )}
      </dialog>
    </section>
  );
}
