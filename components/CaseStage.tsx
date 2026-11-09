"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export default function CaseStage({ children, poster, embedded }: {
  children: ReactNode; poster?: string; embedded: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  return <div className="case-stage mt-8" onLoadCapture={event => {
    if (event.target instanceof HTMLIFrameElement) setLoaded(true);
  }}>
    {children}
    {embedded && poster && <div className={`case-player-poster ${loaded ? "is-loaded" : ""}`} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt="" />
    </div>}
  </div>;
}
