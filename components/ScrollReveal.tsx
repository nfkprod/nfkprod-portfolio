"use client";
import { useReducedMotion } from "@/components/MotionPreference";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useViewportPresence } from "@/components/useViewportPresence";

export default function ScrollReveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);
  const inView = useViewportPresence(ref);
  const reduced = useReducedMotion();
  const visible = inView || focused || reduced;

  return (
    <div
      className="scroll-reveal"
      ref={ref}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <motion.div
        className="scroll-reveal-content"
        initial={false}
        animate={visible
          ? { transform: "translate3d(0, 0, 0)", opacity: 1 }
          : { transform: "translate3d(0, 24px, 0)", opacity: 0 }}
        transition={{
          duration: reduced || focused ? 0 : visible ? 0.9 : 0,
          delay: visible && !reduced && !focused ? delay / 1000 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
