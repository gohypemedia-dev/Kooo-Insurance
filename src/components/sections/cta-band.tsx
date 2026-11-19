"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { KoooLogo } from "@/components/brand/kooo-logo";
import { CornerDots } from "@/components/ui/corner-dots";
import { CtaLink } from "@/components/ui/cta-link";
import { SplitReveal } from "@/components/motion/split-reveal";

type CtaBandProps = {
  title: string;
  text: string;
  label?: string;
  image?: string;
};

// Framed navy call to action that grows to full width as it scrolls in.
export function CtaBand({ title, text, label = "Let’s Talk Insurance", image = "/images/photos/pexels-327540.jpg" }: CtaBandProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-cta-frame]",
          { scale: 0.86, borderRadius: "3rem" },
          { scale: 1, borderRadius: "1.5rem", ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "top 15%", scrub: 0.8 } },
        );
        gsap.fromTo(
          "[data-cta-img]",
          { yPercent: -10 },
          { yPercent: 10, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.8 } },
        );
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative z-10 bg-cloud px-2 py-20 sm:px-3 md:px-4 md:py-28">
      <div data-cta-frame className="on-dark relative min-h-[80svh] overflow-hidden rounded-3xl bg-navy will-change-transform">
        <div data-cta-img className="absolute -inset-y-[12%] inset-x-0">
          <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-55" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20" />
        <CornerDots inset="1.25rem" className="text-white/30" />
        <div className="relative flex min-h-[80svh] flex-col justify-between gap-16 p-8 md:p-14">
          <div className="max-w-xl">
            <SplitReveal as="h2" className="text-[clamp(2.25rem,4.6vw,4.75rem)] leading-[1.04]">
              {title}
            </SplitReveal>
            <SplitReveal className="mt-6 text-lg leading-relaxed text-white/80">{text}</SplitReveal>
            <CtaLink href="/contact" variant="light" className="mt-10">
              {label}
            </CtaLink>
          </div>
          <KoooLogo wordmarkOnly className="w-[min(62vw,26rem)] self-end text-white/80" title="" />
        </div>
      </div>
    </section>
  );
}
