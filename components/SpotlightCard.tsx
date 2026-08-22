"use client";

import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/**
 * A card that reveals a soft glow following the cursor on hover,
 * plus a gentle lift + border-glow. Falls back to a centered glow
 * if JS never runs (see the CSS default for --mx/--my in globals.css).
 */
export default function SpotlightCard({ children, className = "", style }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={`spot-card ${className}`} style={style}>
      {children}
      <div className="spot-overlay" aria-hidden="true" />
    </div>
  );
}
