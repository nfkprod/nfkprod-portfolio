"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "@/components/MotionPreference";

export default function SmoothScroll() {
  const reduced = useReducedMotion();
  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-reduced-motion: no-preference) and (pointer: fine)",
    );
    let lenis: Lenis | undefined;
    const syncLock = () => {
      if (document.body.style.overflow === "hidden") lenis?.stop();
      else lenis?.start();
    };
    const configure = () => {
      lenis?.destroy();
      lenis = undefined;
      if (reduced || !preference.matches) return;
      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: false,
        anchors: true,
        stopInertiaOnNavigate: true,
        prevent: (node) => Boolean(node.closest("dialog, .mobile-nav")),
      });
      syncLock();
    };
    configure();
    const backToTop = (event: Event) => {
      if (!lenis || lenis.isStopped) return;
      event.preventDefault();
      lenis.scrollTo(0);
    };
    window.addEventListener("nfk:back-to-top", backToTop);
    preference.addEventListener("change", configure);
    const observer = new MutationObserver(syncLock);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });
    return () => {
      observer.disconnect();
      window.removeEventListener("nfk:back-to-top", backToTop);
      preference.removeEventListener("change", configure);
      lenis?.destroy();
    };
  }, [reduced]);
  return null;
}
