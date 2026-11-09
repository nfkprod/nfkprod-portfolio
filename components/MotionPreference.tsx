"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

const MotionContext = createContext(true);
export const useReducedMotion = () => useContext(MotionContext);

export default function MotionPreference({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.reducedMotion = String(reduced);
  }, [reduced]);
  return <MotionContext.Provider value={reduced}>
    <MotionConfig reducedMotion={reduced ? "always" : "never"}>{children}</MotionConfig>
  </MotionContext.Provider>;
}
