"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { home, tagline } from "@/content/site";
import { KoooLogo } from "@/components/brand/kooo-logo";
import { CornerDots } from "@/components/ui/corner-dots";
import { SplitReveal } from "@/components/motion/split-reveal";

// Full-bleed photo panel that rises over the pinned hero and opens out to the screen edges.
export function Statement() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const range = { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.8 };
        gsap.fromTo(
          "[data-panel]",
          { clipPath: "inset(12% 6% 0% 6% round 28px)" },
          { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "top top", scrub: 0.8 } },
        );
        gsap.fromTo("[data-panel-img]", { yPercent: -8, scale: 1.18 }, { yPercent: 8, scale: 1, ease: "none", scrollTrigger: range });
        gsap.fromTo("[data-panel-card]", { y: 160 }, { y: -90, ease: "none", scrollTrigger: range });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative z-10">
      <div data-panel className="on-dark relative h-[125svh] overflow-hidden bg-navy">
        <div data-panel-img className="absolute inset-0 will-change-transform">
          <Image src={home.hero.statementImage} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/15 to-navy/95" />
        <CornerDots inset="1.5rem" className="text-white/30" />

        <div className="relative flex h-full flex-col justify-between px-6 pb-16 pt-[26svh] md:px-10">
          <div
            data-panel-card
            className="relative mx-auto w-full max-w-xl border border-white/20 bg-navy/90 p-7 will-change-transform md:p-10"
          >
            <span aria-hidden className="absolute right-3 top-3 size-1.5 bg-white" />
            <h2 className="text-2xl leading-snug md:text-[2.1rem]">{home.hero.title}</h2>
            <p className="mt-4 text-lg text-white/75">{tagline}</p>
            <KoooLogo wordmarkOnly className="ml-auto mt-14 w-24 text-white" title="" />
          </div>
          <SplitReveal className="max-w-3xl font-heading text-[clamp(1.6rem,3vw,2.75rem)] leading-snug text-white">
            {home.trusted.text}
          </SplitReveal>
        </div>
      </div>
    </section>
  );
}
