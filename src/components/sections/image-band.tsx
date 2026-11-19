"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { CornerDots } from "@/components/ui/corner-dots";
import { SplitReveal } from "@/components/motion/split-reveal";
import { RotatingLink } from "@/components/sections/rotating-link";
import { RollText } from "@/components/motion/roll-text";

type ImageBandProps = {
  image: string;
  title?: string;
  text?: string;
  link?: { label: string; href: string };
  rotating?: { prefix: string; items: { label: string; href: string }[] };
};

// Full-bleed photograph that zooms out as it scrolls through, with copy over its lower edge.
export function ImageBand({ image, title, text, link, rotating }: ImageBandProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Explicit four-value insets: browsers shorten computed clip-paths, which would skew the tween.
        gsap.fromTo(
          ref.current,
          { clipPath: "inset(10% 5% 0% 5% round 28px)" },
          { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "top 25%", scrub: 0.8 } },
        );
        gsap.fromTo(
          "[data-band-copy]",
          { y: 90 },
          { y: 0, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "top 10%", scrub: 0.8 } },
        );
        gsap.fromTo(
          "[data-band-img]",
          { scale: 1.3, yPercent: -6 },
          { scale: 1, yPercent: 6, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.8 } },
        );
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="on-dark relative z-10 h-[92svh] min-h-[560px] overflow-hidden bg-navy">
      <div data-band-img className="absolute inset-0 will-change-transform">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-navy/10" />
      {/* Extra shade behind the mid-height rotating line so it reads over bright photos. */}
      {rotating && <div className="absolute inset-0 bg-navy/45" />}
      <CornerDots inset="1.5rem" className="text-white/30" />

      {rotating && (
        <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 md:inset-x-10">
          <RotatingLink prefix={rotating.prefix} items={rotating.items} />
        </div>
      )}

      {(title || text || link) && (
        <div data-band-copy className="absolute inset-x-0 bottom-0 grid gap-6 p-6 will-change-transform md:grid-cols-[1fr_auto] md:items-end md:p-10">
          <div>
            {title && (
              <SplitReveal as="h2" className="max-w-4xl text-[clamp(2rem,4.2vw,4rem)] leading-[1.08]">
                {title}
              </SplitReveal>
            )}
            {text && <SplitReveal className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{text}</SplitReveal>}
          </div>
          {link && (
            <Link
              href={link.href}
              className="group justify-self-start border-b border-white/60 pb-1 font-button text-lg text-white transition-colors hover:border-white hover:text-white/80 md:justify-self-end"
            >
              <RollText text={link.label} />
            </Link>
          )}
        </div>
      )}
    </section>
  );
}
