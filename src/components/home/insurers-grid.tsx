"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP, EASE_OUT } from "@/lib/gsap";
import { home, insurers } from "@/content/site";
import { SplitReveal } from "@/components/motion/split-reveal";

// Desktop column offsets (px). Each column travels from +d to -d, so the grid
// starts staggered, lines up mid-scroll and staggers the other way on the way out.
const COLUMN_DRIFT = [34, -20, 52, -20, 34];

// Insurer panel as a hairline grid whose columns drift at different speeds.
export function InsurersGrid() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-line]", {
          scaleX: 0,
          duration: 1.4,
          ease: "power3.inOut",
          scrollTrigger: { trigger: "[data-line]", start: "top 90%", once: true },
        });
        // The logo fades, not the cell, so the cell's transform stays free for the column drift.
        gsap.from("[data-logo]", {
          opacity: 0,
          y: 24,
          duration: 1,
          stagger: 0.04,
          ease: EASE_OUT,
          scrollTrigger: { trigger: "[data-grid]", start: "top 85%", once: true },
        });
      });
      // Five columns only exist from 1024px up.
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-cell]").forEach((cell, i) => {
          const d = COLUMN_DRIFT[i % COLUMN_DRIFT.length];
          gsap.fromTo(
            cell,
            { y: d },
            { y: -d, ease: "none", scrollTrigger: { trigger: "[data-grid]", start: "top bottom", end: "bottom top", scrub: 0.8 } },
          );
        });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative z-10 bg-cloud pb-28 md:pb-36">
      <div className="px-6 md:px-8">
        <div className="relative grid gap-8 pt-16 md:grid-cols-[1fr_1.1fr] md:items-end">
          <span data-line aria-hidden className="absolute inset-x-0 top-0 h-px origin-left bg-navy/20" />
          <SplitReveal as="h2" className="max-w-[14ch] text-[clamp(2.25rem,4.4vw,4.5rem)] leading-[1.05]">
            {home.insurersTitle}
          </SplitReveal>
          <SplitReveal className="text-lg leading-relaxed text-muted-foreground">{home.insurersText}</SplitReveal>
        </div>

        {/* Every cell carries its own border (overlapped by 1px) so the lines travel with drifting columns. */}
        <div data-grid className="mt-16 grid grid-cols-2 pl-px pt-px sm:grid-cols-3 lg:mt-24 lg:grid-cols-5">
          {insurers.map((insurer) => (
            <div
              key={insurer.name}
              data-cell
              className="group -ml-px -mt-px flex aspect-[3/2] items-center justify-center border border-navy/15 p-6 transition-colors duration-500 will-change-transform hover:bg-white/70 md:p-10"
            >
              <div data-logo>
                <Image
                  src={insurer.logo}
                  alt={`${insurer.name} logo`}
                  width={180}
                  height={90}
                  className="max-h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
