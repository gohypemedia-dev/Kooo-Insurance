"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Pixels of travel either side of rest; 0 leaves the content still. */
  amount?: number;
  /** Extra media query the drift is limited to, e.g. a layout breakpoint. */
  query?: string;
};

// Content that drifts against the page as it crosses the viewport, for depth between neighbours.
export function Parallax({ children, className, amount = 30, query = "(min-width: 768px)" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!amount) return;
      const mm = gsap.matchMedia();
      mm.add(`(prefers-reduced-motion: no-preference) and ${query}`, () => {
        gsap.fromTo(
          "[data-parallax-layer]",
          { y: amount },
          // The untransformed wrapper is the trigger so the drift can't skew its own measurements.
          { y: -amount, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.8 } },
        );
      });
    },
    { dependencies: [amount, query], scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      <div data-parallax-layer className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
