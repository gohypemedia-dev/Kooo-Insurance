"use client";

import { useRef } from "react";
import { gsap, useGSAP, EASE_OUT } from "@/lib/gsap";
import { SplitReveal } from "@/components/motion/split-reveal";

type NumberedRowsProps = {
  title: string;
  intro?: string;
  items: { title?: string; text: string }[];
};

// Large numbered rows separated by hairlines that draw in as each row arrives.
export function NumberedRows({ title, intro, items }: NumberedRowsProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-row]").forEach((row) => {
          const st = { trigger: row, start: "top 88%", once: true };
          gsap.from(row.querySelector("[data-line]"), { scaleX: 0, duration: 1.2, ease: "power3.inOut", scrollTrigger: st });
          gsap.from(row.querySelectorAll("[data-cell]"), { y: 36, opacity: 0, duration: 1, stagger: 0.08, ease: EASE_OUT, scrollTrigger: st });
          // The numeral drifts against its row (yPercent, so it does not fight the reveal's y).
          gsap.fromTo(
            row.querySelector("[data-num]"),
            { yPercent: 28 },
            { yPercent: -28, ease: "none", scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: 0.8 } },
          );
        });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative z-10 bg-cloud py-28 md:py-36">
      <div className="grid gap-12 px-6 md:px-8 lg:grid-cols-[1fr_1.9fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SplitReveal as="h2" className="text-[clamp(2.5rem,5vw,5rem)] leading-[1.02]">
            {title}
          </SplitReveal>
          {intro && <SplitReveal className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">{intro}</SplitReveal>}
        </div>
        <ol>
          {items.map((item, i) => (
            <li
              key={item.title ?? item.text}
              data-row
              className="relative grid grid-cols-[4.25rem_1fr] gap-x-6 gap-y-3 py-8 md:grid-cols-[7rem_1fr_1.3fr] md:py-10"
            >
              <span data-line aria-hidden className="absolute inset-x-0 top-0 h-px origin-left bg-navy/25" />
              <span data-cell data-num className="font-heading text-5xl leading-none text-navy will-change-transform md:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.title ? (
                <>
                  <h3 data-cell className="self-center text-2xl md:text-[2rem]">
                    {item.title}
                  </h3>
                  <p data-cell className="col-start-2 text-lg leading-relaxed text-muted-foreground md:col-start-3 md:self-center md:text-xl">
                    {item.text}
                  </p>
                </>
              ) : (
                <p data-cell className="self-center text-xl leading-relaxed md:col-span-2 md:text-2xl">
                  {item.text}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
