"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { getLocaleFromPathname } from "@/lib/i18n";
import { useReducedMotion } from "@/components/MotionPreference";

export default function BackToTop() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const label = getLocaleFromPathname(pathname) === "ru" ? "Наверх" : "Back to top";

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.65);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      aria-label={label}
      title={label}
      disabled={!visible}
      onClick={() => {
        document.getElementById("main-content")?.focus({ preventScroll: true });
        const event = new Event("nfk:back-to-top", { cancelable: true });
        if (window.dispatchEvent(event)) {
          window.scrollTo({
            top: 0,
            behavior: reduced
              ? "instant"
              : "smooth",
          });
        }
      }}
    >
      <ArrowUp size={22} strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}
