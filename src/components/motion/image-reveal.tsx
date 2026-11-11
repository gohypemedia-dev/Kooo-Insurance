"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  src: string;
  alt?: string;
  sizes: string;
  className?: string;
};

// Photo that wipes up into view, settles from a slight zoom and drifts inside its frame on scroll; zooms a touch on group hover.
export function ImageReveal({ src, alt = "", sizes, className }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ scrollTrigger: { trigger: ref.current, start: "top 88%", once: true } })
          .fromTo(ref.current, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.inOut" })
          .fromTo("img", { scale: 1.3 }, { scale: 1, duration: 1.8, ease: "expo.out" }, 0);
        // Inner parallax: the photo slides inside its frame as it crosses the viewport.
        gsap.fromTo(
          "[data-img-drift]",
          { yPercent: -6 },
          { yPercent: 6, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.8 } },
        );
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-navy/10", className)}>
      {/* Taller than the frame so the drift never exposes an edge; kept apart from the CSS hover zoom. */}
      <div data-img-drift className="absolute -inset-y-[8%] inset-x-0 will-change-transform">
        <div className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
        </div>
      </div>
    </div>
  );
}
