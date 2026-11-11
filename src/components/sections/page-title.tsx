"use client";

import { useRef } from "react";
import { gsap, scrambleIn, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion, useUi } from "@/lib/ui-store";
import { SplitReveal } from "@/components/motion/split-reveal";
import { cn } from "@/lib/utils";

type PageTitleProps = {
  /** Two halves: the first ends up on the left edge, the second on the right. */
  words: [string, string];
  intro?: string;
};

// Font size steps down for longer titles so both halves always fit one line on desktop.
function sizeFor(length: number) {
  if (length <= 14) return "text-[clamp(3.25rem,9.5vw,10rem)]";
  if (length <= 20) return "text-[clamp(3rem,7.6vw,8.25rem)]";
  if (length <= 26) return "text-[clamp(2.75rem,6.2vw,6.75rem)]";
  return "text-[clamp(2.5rem,5vw,5.5rem)]";
}

/**
 * Inner-page title, as on the reference contact/team pages: the words decode
 * from dots side by side in the centre, then slide apart to the screen edges.
 */
export function PageTitle({ words, intro }: PageTitleProps) {
  const ref = useRef<HTMLElement>(null);
  const ready = useUi((s) => s.ready);

  useGSAP(
    () => {
      if (!prefersReducedMotion()) gsap.set("[data-part-inner]", { yPercent: 105 });
    },
    { scope: ref },
  );

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !ready || prefersReducedMotion()) return;
      const parts = gsap.utils.toArray<HTMLElement>("[data-part]", el);
      const inners = gsap.utils.toArray<HTMLElement>("[data-part-inner]", el);
      inners.forEach((inner) => (inner.style.width = `${inner.offsetWidth}px`)); // steady while decoding

      // Desktop: start with both halves side by side in the centre.
      const row = el.querySelector("h1")!.getBoundingClientRect();
      const [a, b] = parts.map((p) => p.getBoundingClientRect());
      const gap = parseFloat(getComputedStyle(parts[0]).fontSize) * 0.26;
      const spread = window.innerWidth >= 768 && a.width + gap + b.width <= row.width;
      if (spread) {
        const startA = row.left + (row.width - (a.width + gap + b.width)) / 2;
        gsap.set(parts[0], { x: startA - a.left });
        gsap.set(parts[1], { x: startA + a.width + gap - b.left });
      }

      const tl = gsap.timeline({ delay: 0.05 });
      inners.forEach((inner, i) => {
        tl.to(inner, { yPercent: 0, duration: 0.7, ease: "power4.out" }, i * 0.32).add(scrambleIn(inner, words[i], 0.8), i * 0.32);
      });
      if (spread) tl.to(parts, { x: 0, duration: 1.2, ease: "expo.inOut" }, "+=0.15");
      tl.call(() => gsap.set(inners, { clearProps: "width" }));
    },
    { dependencies: [ready], scope: ref },
  );

  // Scroll depth: the two halves, the intro row and the marks leave at different speeds.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const scrollTrigger = { trigger: ref.current, start: "top top", end: "bottom top", scrub: 0.8 };
        // Only `y` is scrubbed here, so it never fights the intro's `x` slide on the same halves.
        gsap.utils.toArray<HTMLElement>("[data-depth]").forEach((layer) => {
          gsap.fromTo(layer, { y: 0 }, { y: Number(layer.dataset.depth), ease: "none", scrollTrigger });
        });
      });
    },
    { scope: ref },
  );

  const part = (i: number, extra?: string) => (
    <span data-part data-depth={i ? -60 : -130} className={cn("block will-change-transform", extra)}>
      <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
        {/* React does not manage this text node; the scramble effect rewrites it. */}
        <span data-part-inner className="inline-block whitespace-nowrap" dangerouslySetInnerHTML={{ __html: words[i] }} />
      </span>
    </span>
  );

  return (
    <section ref={ref} className="relative flex min-h-[80svh] flex-col justify-between gap-16 px-6 pb-12 pt-36 md:px-8 md:pt-40">
      {/* Decorative marks in the open middle of the section; desktop only so they never sit on text. */}
      <span aria-hidden data-depth={-150} className="pointer-events-none absolute left-[42%] top-[58%] hidden size-1.5 bg-navy/40 will-change-transform md:block" />
      <span aria-hidden data-depth={70} className="pointer-events-none absolute right-[18%] top-[68%] hidden size-3 border border-kooo-green-dark will-change-transform md:block" />
      <h1 className={cn("relative flex flex-col font-heading leading-[0.98] text-navy md:flex-row md:justify-between", sizeFor(words.join(" ").length))}>
        <span className="sr-only">{words.join(" ")}</span>
        <span aria-hidden className="contents">
          {part(0)}
          {part(1, "self-end md:self-auto")}
        </span>
      </h1>
      <div data-depth={30} className="relative flex items-end justify-between gap-8 will-change-transform">
        {intro && (
          <SplitReveal trigger="ready" delay={0.9} className="max-w-xl text-lg leading-relaxed md:text-xl">
            {intro}
          </SplitReveal>
        )}
        <span aria-hidden className="ml-auto size-2 shrink-0 bg-kooo-green-dark" />
      </div>
    </section>
  );
}
