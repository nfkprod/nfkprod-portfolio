"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useReducedMotion } from "@/components/MotionPreference";

// Keep these in sync with the cover/reveal durations in globals.css.
const COVER_MS = 620;
const REVEAL_MS = 900;

export default function RouteTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
  const [label, setLabel] = useState("");
  const pending = useRef<{ from: string; href: string } | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const generation = useRef(0);
  const raf = useRef(0);

  const reset = useCallback(() => {
    generation.current++;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    cancelAnimationFrame(raf.current);
    pending.current = null;
    setPhase("idle");
  }, []);

  useEffect(() => {
    if (!reduced || !pending.current) return;
    const navigation = pending.current;
    reset();
    if (pathname === navigation.from) router.push(navigation.href);
  }, [reduced, pathname, reset, router]);

  useEffect(() => {
    if (!pending.current) return;
    if (pathname === pending.current.from) { reset(); return; }
    const current = generation.current;
    const reveal = async () => {
      // Let the first visible image decode under the opaque screen, rather
      // than exposing a blank portrait or case cover during navigation.
      const image = Array.from(document.querySelectorAll<HTMLImageElement>("#main-content main img"))
        .find(node => node.getBoundingClientRect().top < window.innerHeight);
      if (image && !image.complete) {
        await Promise.race([image.decode().catch(() => {}), new Promise<void>(resolve => {
          timers.current.push(setTimeout(resolve, 500));
        })]);
      }
      if (generation.current !== current) return;
      raf.current = requestAnimationFrame(() => {
        setPhase("reveal");
        timers.current.push(setTimeout(reset, REVEAL_MS + 30));
      });
    };
    // A browser Back action can also interrupt a pending navigation.
    timers.current.forEach(clearTimeout);
    timers.current = [];
    void reveal();
    return () => { generation.current++; };
  }, [pathname, reset]);

  useEffect(() => {
    const preventScroll = (event: Event) => {
      if (pending.current) event.preventDefault();
    };
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    return () => {
      generation.current++;
      timers.current.forEach(clearTimeout);
      cancelAnimationFrame(raf.current);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  const navigate = (event: MouseEvent<HTMLDivElement>) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
      event.shiftKey || event.altKey || event.detail === 0 ||
      reduced) return;
    const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!(anchor instanceof HTMLAnchorElement) || anchor.hasAttribute("download") ||
      (anchor.target && anchor.target !== "_self")) return;
    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin || url.pathname === pathname) return;
    event.preventDefault();
    if (pending.current) return;
    const english = url.pathname.startsWith("/en");
    const section = url.pathname.replace(/^\/en(?=\/|$)/, "").split("/").filter(Boolean);
    const labels: Record<string, [string, string]> = {
      about: ["Обо мне", "About"],
      contact: ["Бриф / Связь", "Brief / Contact"], portfolio: ["Работы", "Selected work"],
    };
    setLabel(section.length > 1 ? (english ? "Selected project" : "Избранный проект") :
      (labels[section[0]]?.[english ? 1 : 0] || (english ? "Visual creator" : "Визуальный креатор")));
    const href = `${url.pathname}${url.search}${url.hash}`;
    generation.current++;
    pending.current = { from: pathname, href };
    setPhase("cover");
    router.prefetch(href);
    timers.current.push(setTimeout(() => router.push(href), COVER_MS));
    // Never trap the visitor if a route request fails.
    timers.current.push(setTimeout(reset, 12000));
  };

  return <div className="route-navigation" onClickCapture={navigate}>
    {children}
    <div className={`route-transition route-transition--${phase}`} aria-hidden="true">
      <div className="route-transition-wordmark"><span>nfkprod.</span></div>
      <div className="route-transition-bottom"><span>{label}</span><span>Motion / CGI / AI</span></div>
    </div>
  </div>;
}
