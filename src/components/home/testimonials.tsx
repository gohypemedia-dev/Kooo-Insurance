"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gsap, useGSAP, EASE_OUT } from "@/lib/gsap";
import { home } from "@/content/site";
import { CornerDots } from "@/components/ui/corner-dots";
import { SplitReveal } from "@/components/motion/split-reveal";
import { cn } from "@/lib/utils";

const CARD = "h-[22rem] w-[min(78vw,27rem)] md:h-[24rem]";

// Carousel that keeps the active quote centred inside a set of corner marks,
// with an oversized quotation mark drifting behind it.
export function Testimonials() {
  const items = home.testimonials;
  const [active, setActive] = useState(Math.floor(items.length / 2));
  const section = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  const centre = useCallback((index: number, duration: number) => {
    const vp = viewport.current;
    const tr = track.current;
    const card = tr?.children[index] as HTMLElement | undefined;
    if (!vp || !tr || !card) return;
    gsap.to(tr, { x: vp.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2), duration, ease: "power3.inOut" });
  }, []);

  useEffect(() => {
    centre(active, first.current ? 0 : 0.9);
    first.current = false;
    const onResize = () => centre(active, 0);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, centre]);

  useEffect(() => {
    const tr = track.current;
    return () => {
      gsap.killTweensOf(tr);
    };
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const range = { trigger: section.current, start: "top bottom", end: "bottom top", scrub: 0.8 };
        // The mark sits behind the cards and travels at its own speed for depth.
        gsap.fromTo("[data-quote-mark]", { yPercent: 35, rotate: -6 }, { yPercent: -45, rotate: 4, ease: "none", scrollTrigger: range });

        const st = { trigger: viewport.current, start: "top 85%", once: true };
        // Slots rise, not the cards or the track, so the active-card opacity and the centring tween are untouched.
        gsap.from("[data-slot]", { y: 90, opacity: 0, duration: 1.2, ease: EASE_OUT, stagger: { each: 0.09, from: "center" }, scrollTrigger: st });
        gsap.from("[data-frame-dots]", { scale: 1.12, opacity: 0, duration: 1.2, delay: 0.25, ease: EASE_OUT, scrollTrigger: st });
        gsap.from("[data-controls] > *", {
          y: 24,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: EASE_OUT,
          scrollTrigger: { trigger: "[data-controls]", start: "top 95%", once: true },
        });
      });
    },
    { scope: section },
  );

  const go = (step: number) => setActive((i) => (i + step + items.length) % items.length);

  return (
    <section ref={section} className="relative z-10 overflow-hidden bg-cloud py-28 md:py-36">
      <span
        data-quote-mark
        aria-hidden
        className="pointer-events-none absolute -right-[4vw] top-0 select-none font-heading text-[clamp(22rem,52vw,56rem)] leading-[0.8] text-navy/[0.05] will-change-transform"
      >
        “
      </span>

      <div className="relative px-6 md:px-8">
        <SplitReveal as="h2" className="max-w-3xl text-[clamp(1.9rem,3.4vw,3rem)] leading-snug">
          {home.testimonialsIntro}
        </SplitReveal>
      </div>

      <div ref={viewport} className="relative mt-16">
        {/* Each slot is the layout box the centring measures; transforms on it don't change offsetLeft. */}
        <div ref={track} className="flex w-max gap-6 will-change-transform">
          {items.map((t, i) => (
            <div key={t.author} data-slot className="shrink-0 will-change-transform">
              <figure
                onClick={() => setActive(i)}
                className={cn(
                  CARD,
                  "flex cursor-pointer flex-col justify-between bg-white p-8 transition-opacity duration-500 md:p-10",
                  i === active ? "opacity-100" : "opacity-40 hover:opacity-70",
                )}
              >
                <blockquote className="font-heading text-[1.4rem] leading-snug text-navy md:text-[1.7rem]">“{t.quote}”</blockquote>
                <figcaption className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">{t.author}</figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div aria-hidden className={cn(CARD, "pointer-events-none absolute left-1/2 top-0 -translate-x-1/2")}>
          {/* An inner layer takes the motion so the centring translate above is never overwritten. */}
          <div data-frame-dots className="absolute inset-0">
            <CornerDots inset="-0.9rem" className="text-kooo-green-dark" />
          </div>
        </div>
      </div>

      <div data-controls className="relative mt-14 flex justify-center gap-2">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="flex size-12 items-center justify-center bg-navy/10 text-navy transition-colors hover:bg-navy hover:text-white"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="flex size-12 items-center justify-center bg-navy/10 text-navy transition-colors hover:bg-navy hover:text-white"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        Testimonial {active + 1} of {items.length}
      </p>
    </section>
  );
}
