"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { copy } from "@/data/copy";

export default function Hero() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [canParallax, setCanParallax] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const mediaX = useSpring(parallaxX, { stiffness: 90, damping: 20, mass: 0.45 });
  const mediaY = useSpring(parallaxY, { stiffness: 90, damping: 20, mass: 0.45 });
  const tintX = useTransform(mediaX, (value) => value * -0.28);
  const tintY = useTransform(mediaY, (value) => value * -0.28);
  const showreelEmbedUrl =
    "https://player.vimeo.com/video/1164822951?background=1&autoplay=1&muted=1&loop=1&autopause=0&controls=0&title=0&byline=0&portrait=0&badge=0&dnt=1&quality=720p";

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVideoReady(true);
      return;
    }
    const fallback = window.setTimeout(() => setIsVideoReady(true), 1800);
    return () => window.clearTimeout(fallback);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCanParallax(false);
      parallaxX.set(0);
      parallaxY.set(0);
      return;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateCanParallax = () => setCanParallax(mediaQuery.matches);
    updateCanParallax();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateCanParallax);
      return () => mediaQuery.removeEventListener("change", updateCanParallax);
    }

    mediaQuery.addListener(updateCanParallax);
    return () => mediaQuery.removeListener(updateCanParallax);
  }, [parallaxX, parallaxY, prefersReducedMotion]);

  return (
    <section
      className="glass-panel relative mt-8 overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-14"
      onMouseMove={(event) => {
        if (!canParallax) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        parallaxX.set(offsetX * 7);
        parallaxY.set(offsetY * 5);
      }}
      onMouseLeave={() => {
        parallaxX.set(0);
        parallaxY.set(0);
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[2rem]"
        style={canParallax ? { x: mediaX, y: mediaY } : undefined}
      >
        {prefersReducedMotion ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder/iri-zastavka.png')" }}
            aria-hidden="true"
          />
        ) : (
          <>
            <div
              className={`absolute inset-0 bg-[radial-gradient(80%_60%_at_76%_38%,rgba(118,141,232,0.18),rgba(118,141,232,0)_62%),linear-gradient(140deg,rgba(8,9,12,0.92),rgba(8,9,12,0.72))] transition-opacity duration-700 ease-out ${
                isVideoReady ? "opacity-0" : "opacity-100"
              }`}
            />
            <iframe
              className={`absolute left-1/2 top-1/2 block h-[154%] w-[154%] -translate-x-1/2 -translate-y-1/2 border-0 [filter:grayscale(0.35)_saturate(0.88)_contrast(0.98)_brightness(0.92)_blur(8px)] md:[filter:grayscale(0.3)_saturate(0.9)_contrast(0.99)_brightness(0.92)_blur(7px)] will-change-transform transition-opacity duration-700 ease-out ${
                isVideoReady ? "opacity-100" : "opacity-0"
              }`}
              src={showreelEmbedUrl}
              title="Decorative background showreel"
              loading="eager"
              allow="autoplay; fullscreen; picture-in-picture"
              aria-hidden="true"
              tabIndex={-1}
              onLoad={() => setIsVideoReady(true)}
              allowFullScreen
            />
          </>
        )}
      </motion.div>
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(5,8,14,0.72)_0%,rgba(5,8,14,0.48)_52%,rgba(5,8,14,0.3)_100%)]" />
      <div className="absolute inset-0 z-[2] bg-black/[0.03] backdrop-blur-[12px] [mask-image:linear-gradient(90deg,#000_0%,#000_48%,transparent_82%)] [-webkit-mask-image:linear-gradient(90deg,#000_0%,#000_48%,transparent_82%)]" />
      <motion.div
        className="absolute inset-0 z-[3] bg-[linear-gradient(116deg,rgba(58,88,156,0.14)_0%,rgba(52,142,178,0.11)_46%,rgba(34,50,92,0.08)_100%)] mix-blend-soft-light"
        style={canParallax ? { x: tintX, y: tintY } : undefined}
      />
      <div className="absolute inset-0 z-[4] bg-[radial-gradient(140%_120%_at_50%_48%,rgba(0,0,0,0)_54%,rgba(0,0,0,0.42)_100%)]" />
      <div className="absolute inset-0 z-[5] bg-[linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_44%)]" />
      <div className="absolute inset-0 z-[6] shadow-[inset_0_0_120px_rgba(0,0,0,0.46),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.5)]" />
      <div className="pointer-events-none absolute inset-0 z-[7] opacity-[0.02] [background-image:radial-gradient(rgba(255,255,255,0.82)_0.55px,transparent_0.55px)] [background-size:3px_3px]" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,58%)_minmax(0,42%)] lg:items-center">
        <div className="max-w-[64ch]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">{copy.home.eyebrow}</p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-5 font-display text-[clamp(2.4rem,8vw,5.8rem)] font-extrabold leading-[0.92] tracking-[-0.018em] text-[var(--text-main)]"
          >
            {copy.home.titleTop}
            <br />
            <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">{copy.home.titleMiddle}</span>
            {copy.home.titleBottom ? (
              <>
                <br />
                {copy.home.titleBottom}
              </>
            ) : null}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="mt-4 max-w-[62ch] text-base leading-8 text-[var(--text-muted)]"
          >
            {copy.home.subtitle}
          </motion.p>
          <div className="mt-9 flex flex-wrap items-start gap-3">
            <div className="flex flex-col items-start gap-2">
              <Button href="/portfolio" variant="secondary" size="lg" className="border-white/28 bg-white/[0.05]">
                {copy.home.ctaPrimary}
              </Button>
              <p className="pl-1 text-xs tracking-[0.02em] text-[var(--text-muted)]">{copy.home.responseNote}</p>
            </div>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="bg-[linear-gradient(135deg,#f5f8ff_0%,#d9e4ff_52%,#9db5ff_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.26),0_16px_30px_rgba(10,22,52,0.52)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.34),0_20px_34px_rgba(10,22,52,0.62)]"
            >
              {copy.home.ctaSecondary}
            </Button>
          </div>
        </div>
        <div aria-hidden className="hidden lg:block" />
      </div>
    </section>
  );
}
