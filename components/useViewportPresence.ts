"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

// Null keeps server content visible until the first viewport measurement.
export function useViewportPresence(
  ref: RefObject<Element>,
  amount = 0.08,
  inset = 40,
) {
  const [present, setPresent] = useState<boolean | null>(null);
  const revealed = useRef(false);
  useEffect(() => {
    const element = ref.current;
    if (revealed.current || !element || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= amount;
        setPresent(visible);
        if (visible) {
          revealed.current = true;
          observer.disconnect();
        }
      },
      { threshold: [0, amount], rootMargin: `0px 0px -${inset}px 0px` },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, amount, inset]);
  return present !== false;
}
