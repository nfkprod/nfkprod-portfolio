"use client";
import { useReducedMotion } from "@/components/MotionPreference";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function SceneSurface() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 30,
    mass: 0.6,
  });
  const scaleX = useTransform(progress, [0, 0.3], [0.94, 1]);
  const scaleY = useTransform(progress, [0, 0.3], [0.92, 1]);
  return (
    <div className="scene-surface-anchor" ref={ref} aria-hidden="true">
      <motion.div
        className="scene-surface"
        style={reduced ? undefined : { scaleX, scaleY }}
      />
    </div>
  );
}
