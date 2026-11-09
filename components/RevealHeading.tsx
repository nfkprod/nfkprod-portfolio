"use client";
import { useReducedMotion } from "@/components/MotionPreference";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useViewportPresence } from "@/components/useViewportPresence";

export default function RevealHeading({
  lines,
  as: Tag = "h2",
  className,
}: {
  lines: string[];
  as?: "h1" | "h2";
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useViewportPresence(ref, 0.25, 30);
  const reduced = useReducedMotion();
  const visible = inView || reduced;
  return (
    <Tag ref={ref} className={className} aria-label={lines.join(" ")}>
      {lines.map((line, index) => (
        <span className="heading-line" key={line} aria-hidden="true">
          <motion.span
            initial={false}
            animate={
              visible ? { transform: "translate3d(0, 0, 0)", opacity: 1 }
                : { transform: "translate3d(0, 105%, 0)", opacity: 0 }
            }
            transition={{
              duration: reduced ? 0 : visible ? 1.1 : 0.2,
              delay: visible && !reduced ? index * 0.08 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
