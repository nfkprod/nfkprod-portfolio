"use client";

import { motion, useInView, useMotionValue, useReducedMotion, useSpring, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const brands = ["MTS", "OZON", "TNT", "A+"];
const tileVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

function BrandTile({ brand }: { brand: string }) {
  const prefersReducedMotion = useReducedMotion();
  const [canTilt, setCanTilt] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const rotateYRaw = useMotionValue(0);
  const rotateXRaw = useMotionValue(0);
  const rotateY = useSpring(rotateYRaw, { stiffness: 190, damping: 20, mass: 0.45 });
  const rotateX = useSpring(rotateXRaw, { stiffness: 190, damping: 20, mass: 0.45 });

  useEffect(() => {
    if (prefersReducedMotion) {
      setCanTilt(false);
      rotateYRaw.set(0);
      rotateXRaw.set(0);
      return;
    }

    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateCanTilt = () => setCanTilt(mq.matches);
    updateCanTilt();

    if (mq.addEventListener) {
      mq.addEventListener("change", updateCanTilt);
      return () => mq.removeEventListener("change", updateCanTilt);
    }

    mq.addListener(updateCanTilt);
    return () => mq.removeListener(updateCanTilt);
  }, [prefersReducedMotion, rotateXRaw, rotateYRaw]);

  return (
    <motion.div
      className="glass-chip relative flex h-14 items-center justify-center overflow-hidden rounded-xl text-sm font-semibold tracking-[0.08em] text-[var(--text-muted)]"
      variants={tileVariants}
      style={canTilt ? { rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" } : undefined}
      whileHover={canTilt ? { scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      onMouseEnter={() => {
        if (!canTilt) return;
        setIsHovered(true);
      }}
      onMouseMove={(event) => {
        if (!canTilt) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        rotateYRaw.set(x * 7);
        rotateXRaw.set(y * -6);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        rotateYRaw.set(0);
        rotateXRaw.set(0);
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-[-28%] left-[-38%] z-[1] w-[36%] rotate-[14deg] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.26)_52%,rgba(255,255,255,0)_100%)] blur-[2px]"
        initial={false}
        animate={canTilt && isHovered ? { x: "340%" } : { x: "-140%" }}
        transition={
          canTilt && isHovered
            ? { duration: 0.72, ease: [0.22, 1, 0.36, 1] }
            : { duration: 0.2, ease: "linear" }
        }
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={
          canTilt
            ? {
                opacity: 0.2,
                background:
                  "radial-gradient(circle at 50% 44%, rgba(255,255,255,0.2), rgba(255,255,255,0) 58%)"
              }
            : undefined
        }
      />
      <span className="relative z-10">{brand}</span>
    </motion.div>
  );
}

export default function TrustedStrip() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.55 });
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 24) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shouldReveal = hasScrolled && isInView;

  return (
    <section ref={sectionRef} className="mt-10">
      <motion.p
        initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
        animate={shouldReveal ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 14, filter: "blur(4px)" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-center text-xs uppercase tracking-[0.26em] text-[var(--text-muted)]"
      >
        Worked with
      </motion.p>
      <motion.div
        className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4"
        initial="hidden"
        animate={shouldReveal ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.09,
              delayChildren: 0.06
            }
          }
        }}
      >
        {brands.map((brand) => (
          <BrandTile key={brand} brand={brand} />
        ))}
      </motion.div>
    </section>
  );
}
