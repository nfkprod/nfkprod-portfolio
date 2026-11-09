"use client";
import { useReducedMotion } from "@/components/MotionPreference";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function DriftingMedia({ children }: { children: ReactNode }) {
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
  const y = useTransform(progress, [0, 1], ["-4%", "4%"]);
  const scale = useTransform(progress, [0, 0.65, 1], [1.1, 1, 1]);
  return (
    <motion.div
      className="work-drift"
      ref={ref}
      style={reduced ? undefined : { y, scale }}
    >
      {children}
    </motion.div>
  );
}
