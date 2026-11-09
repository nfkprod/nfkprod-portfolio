"use client";
import { useReducedMotion } from "@/components/MotionPreference";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { Locale } from "@/lib/i18n";

export default function CreatorPortrait({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 30,
    mass: 0.6,
  });
  const transform = useTransform(
    smoothProgress,
    (progress) =>
      `translate3d(0, ${-3 + Math.max(0, Math.min(1, progress)) * 6}%, 0)`,
  );

  return (
    <div className="creator-portrait-window" ref={ref}>
      <motion.div
        className="creator-portrait-image"
        style={reduced ? undefined : { transform }}
      >
        <Image
          src="/icons/nfk-portrait-hq.png"
          quality={95}
          alt={locale === "ru" ? "Автор NFKPROD" : "The creator behind NFKPROD"}
          fill
          sizes="(max-width: 700px) 80vw, 38vw"
        />
      </motion.div>
    </div>
  );
}
