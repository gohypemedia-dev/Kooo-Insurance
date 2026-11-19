"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { legal } from "@/content/site";
import { CornerDots } from "@/components/ui/corner-dots";
import { SplitReveal } from "@/components/motion/split-reveal";
import { RollText } from "@/components/motion/roll-text";

const METRIX_URL = "https://www.metrixconnect.com.au/";

const facts = [
  { label: "Our authorisation", value: "CAR No. 1315320", note: "Corporate Authorised Representative" },
  { label: "Licensee", value: "Metrix Connect Pty Ltd", note: "ABN 23 635 286 136" },
  { label: "Licence", value: "AFSL No. 525491", note: "Held by Metrix Connect Pty Ltd" },
  { label: "Where we work", value: "Australia-wide", note: "Based in Bella Vista, NSW" },
];

const fsg = legal.documents.find((doc) => doc.label === "Financial Services Guide");

const linkClass =
  "group border-b border-white/60 pb-1 font-button text-lg text-white transition-colors hover:border-white hover:text-white/80";

// Who stands behind Kooo: its own brand, operating under Metrix Connect's licence.
export function Licensee() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // The band opens from a rounded, inset frame to full bleed as it arrives (four-value insets on both ends).
        gsap.fromTo(
          ref.current,
          { clipPath: "inset(8% 4% 0% 4% round 28px)" },
          { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "top 30%", scrub: 0.8 } },
        );
        const range = { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.8 };
        // Each ring drifts at its own speed so the "ooo" slides apart behind the copy.
        gsap.utils.toArray<HTMLElement>("[data-ring]").forEach((ring, i) => {
          gsap.fromTo(ring, { yPercent: 18 + i * 16 }, { yPercent: -18 - i * 16, ease: "none", scrollTrigger: range });
        });
        // Later cells start lower, so they settle one after another and never overlap when stacked.
        gsap.utils.toArray<HTMLElement>("[data-fact]").forEach((cell, i) => {
          gsap.fromTo(
            cell,
            { y: 40 + i * 28 },
            { y: 0, ease: "none", scrollTrigger: { trigger: "[data-facts]", start: "top bottom", end: "top 55%", scrub: 0.8 } },
          );
        });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="on-dark relative z-10 overflow-hidden bg-navy py-28 md:py-40">
      <div aria-hidden className="pointer-events-none absolute -right-[18vw] top-1/2 flex -translate-y-1/2 md:-right-[6vw]">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            data-ring
            className="-ml-[9vw] block size-[62vw] shrink-0 rounded-full border border-white/10 will-change-transform first:ml-0 md:size-[34vw]"
          />
        ))}
      </div>
      <CornerDots inset="1.5rem" className="text-white/30" />

      <div className="relative px-6 md:px-10">
        <p className="font-button text-sm uppercase tracking-[0.2em] text-white/70">Company Introduction · Licensed and backed</p>
        <SplitReveal as="h2" className="mt-6 max-w-5xl text-[clamp(2.5rem,5.4vw,5.25rem)] leading-[1.04]">
          Your own broker. Backed by a licensed network.
        </SplitReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <SplitReveal className="max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Kooo Insurance is an independent brand with its own identity. We operate as a Corporate Authorised
            Representative of Metrix Connect Pty Ltd, the AFSL licensee we work under. Metrix Connect describes itself as
            “an Authorised Representative network supporting experienced insurance brokers”.
          </SplitReveal>
          <div className="flex flex-wrap gap-x-10 gap-y-4 lg:justify-end">
            <Link href="/about" className={linkClass}>
              <RollText text="About Kooo" />
            </Link>
            {fsg && (
              <a href={fsg.href} target="_blank" rel="noopener" className={linkClass}>
                <RollText text={fsg.label} />
              </a>
            )}
            <a href={METRIX_URL} target="_blank" rel="noopener" className={linkClass}>
              <RollText text="Visit Metrix Connect" />
            </a>
          </div>
        </div>

        <dl data-facts className="mt-20 grid gap-x-8 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} data-fact className="border-t border-white/25 py-7 will-change-transform">
              <dt className="font-button text-sm uppercase tracking-[0.16em] text-white/70">{fact.label}</dt>
              <dd className="mt-4 font-heading text-[clamp(1.6rem,2.2vw,2.25rem)] leading-tight">{fact.value}</dd>
              <dd className="mt-2 font-body text-base text-white/65">{fact.note}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 max-w-4xl text-sm leading-relaxed text-white/55">
          Kooo Group Pty Ltd T/as Kooo Insurance (ABN 64 686 043 345 | CAR No. 1315320) is a Corporate Authorised
          Representative of Metrix Connect Pty Ltd (ABN 23 635 286 136 | AFSL No. 525491).
        </p>
      </div>
    </section>
  );
}
