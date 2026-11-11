"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { SplitReveal } from "@/components/motion/split-reveal";

const heading = "How Kooo works with you";

const steps = [
  {
    title: "Tell us what matters",
    text: "Your business, your vehicles, your home. Tell us what you need to protect, in your own words.",
    image: "/images/photos/pexels-8961401.jpg",
  },
  {
    title: "We do the legwork",
    text: "We look across a broad panel of insurers to find cover that fits how you actually operate.",
    image: "/images/photos/pexels-840996.jpg",
  },
  {
    title: "Clear advice, plain language",
    text: "We do not expect you to speak the language of insurance. That is our job.",
    image: "/images/photos/pexels-327540.jpg",
  },
  {
    title: "With you as things change",
    text: "As your life and business evolve, we review your cover so you stay one step ahead.",
    image: "/images/photos/pexels-1128317.jpg",
  },
];

// Four steps. From 1024px up the section pins and the steps slide sideways with the scroll;
// below that, or with reduced motion, they are a plain vertical stack.
export function Process() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = ref.current?.querySelector<HTMLElement>("[data-track]");
        if (!track) return;
        // Measured on every refresh so a resize keeps the last panel flush with the right edge.
        const distance = () => track.scrollWidth - track.clientWidth;

        const slide = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: "[data-pin]",
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        slide.to(track, { x: () => -distance() }, 0);
        slide.fromTo("[data-progress]", { scaleX: 0 }, { scaleX: 1 }, 0);

        // Each photo drifts against its frame while its panel crosses the screen.
        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((step) => {
          gsap.fromTo(
            step.querySelector("[data-step-img]"),
            { xPercent: -8 },
            {
              xPercent: 8,
              ease: "none",
              scrollTrigger: { trigger: step, containerAnimation: slide, start: "left right", end: "right left", scrub: true },
            },
          );
        });
      });

      mm.add("(max-width: 1023.98px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((step) => {
          const frame = step.querySelector("[data-step-frame]");
          gsap.fromTo(
            step.querySelector("[data-step-img]"),
            { yPercent: -8 },
            { yPercent: 8, ease: "none", scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: 0.8 } },
          );
        });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative z-10 overflow-hidden bg-cream">
      <div data-pin className="flex flex-col px-6 py-28 md:px-8 md:py-36 lg:h-svh lg:min-h-[640px] lg:pb-10 lg:pt-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SplitReveal as="h2" className="max-w-[14ch] text-[clamp(2.5rem,4.6vw,4.75rem)] leading-[1.02]">
            {heading}
          </SplitReveal>
          <p className="font-button text-sm uppercase tracking-[0.18em] text-kooo-green-dark">
            {String(steps.length).padStart(2, "0")} steps
          </p>
        </div>

        <div aria-hidden className="mt-8 h-px bg-navy/15 lg:mt-10">
          <div data-progress className="h-full origin-left bg-kooo-green-dark will-change-transform" />
        </div>

        <ol data-track className="mt-14 flex flex-col gap-20 will-change-transform lg:mt-10 lg:min-h-0 lg:flex-1 lg:flex-row lg:gap-0">
          {steps.map((step, i) => (
            <li
              key={step.title}
              data-step
              className="grid gap-8 lg:w-[72vw] lg:shrink-0 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-12 lg:pr-[6vw]"
            >
              <div className="flex flex-col justify-between gap-8">
                <span className="font-heading text-[clamp(5.5rem,11vw,11.5rem)] leading-[0.85] tabular-nums text-navy">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[clamp(1.75rem,2.6vw,2.75rem)] leading-tight">{step.title}</h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">{step.text}</p>
                </div>
              </div>
              <div data-step-frame className="relative aspect-[4/3] overflow-hidden bg-navy lg:aspect-auto lg:h-full">
                {/* Oversized so the parallax drift never exposes the frame's edge. */}
                <div data-step-img className="absolute -inset-[12%] will-change-transform">
                  <Image src={step.image} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
