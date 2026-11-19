"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { categories, home, type Category } from "@/content/site";
import { ArrowBox } from "@/components/ui/arrow-box";
import { SplitReveal } from "@/components/motion/split-reveal";
import { RollText } from "@/components/motion/roll-text";
import { cn } from "@/lib/utils";

// Zig-zag placement from 1024px up: each card overlaps the row above by 40% of its height.
// Below that the cards sit in a plain one- or two-column grid.
const placement = [
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2 lg:-mt-[40%]",
  "lg:col-start-3 lg:row-start-2 lg:-mt-[40%]",
  "lg:col-start-2 lg:row-start-3 lg:-mt-[40%]",
  "lg:col-start-1 lg:row-start-4 lg:-mt-[40%]",
  "lg:col-start-3 lg:row-start-4 lg:-mt-[40%]",
];
// Parallax drift per card (px over the section), so the three columns move at different speeds.
const drift = [0, -90, -200, 0, -90, -200];

type CardProps = { category: Category; index: number; open: boolean; onToggle: () => void };

/**
 * Category photo card. With a mouse, hovering sweeps a mint panel up over the
 * photo listing the covers, and the whole card links through. On touch
 * screens there is no hover, so a tap opens the same panel with the
 * category summary and an "Explore" link; tapping again closes it.
 */
function SolutionCard({ category: c, index, open, onToggle }: CardProps) {
  return (
    <article
      data-card-inner
      data-open={open}
      className="group relative isolate flex min-h-[26rem] flex-col overflow-hidden bg-navy p-5 md:p-6 lg:aspect-square lg:min-h-0"
    >
      <div
        aria-hidden
        className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      >
        <Image src={c.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
      </div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-navy/55" />
      <div
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-has-[a:focus-visible]:scale-y-100 group-data-[open=true]:scale-y-100"
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="text-sm tabular-nums text-white transition-opacity duration-300 group-hover:opacity-0 group-has-[a:focus-visible]:opacity-0 group-data-[open=true]:opacity-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <ArrowBox open={open} />
        </div>

        <div className="-mt-6 space-y-3 pr-12 text-navy">
          <p className="hidden translate-y-2 text-base leading-relaxed opacity-0 transition-[opacity,translate] duration-500 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100 pointer-coarse:block">
            {c.summary}
          </p>
          <ul className="space-y-1.5 text-base md:text-[17px]">
            {c.items.slice(0, 5).map((item, j) => (
              <li
                key={item.title}
                style={{ transitionDelay: `${j * 45}ms` }}
                className={cn(
                  "translate-y-2 opacity-0 transition-[opacity,translate] duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-has-[a:focus-visible]:translate-y-0 group-has-[a:focus-visible]:opacity-100 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100",
                  j >= 3 && "pointer-coarse:hidden",
                )}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <Link
            href={`/${c.slug}`}
            tabIndex={open ? 0 : -1}
            className="pointer-events-none relative z-[3] hidden items-center gap-2 border-b border-navy pb-0.5 font-button text-base font-medium opacity-0 transition-opacity duration-500 group-data-[open=true]:pointer-events-auto group-data-[open=true]:opacity-100 pointer-coarse:inline-flex"
          >
            Explore {c.shortName} insurance <ArrowRight className="size-4" />
          </Link>
        </div>

        <h3 className="mt-auto pt-6 text-[clamp(1.75rem,2.5vw,2.6rem)] leading-tight text-white transition-colors duration-500 group-hover:text-navy group-has-[a:focus-visible]:text-navy group-data-[open=true]:text-navy">
          {c.name}
        </h3>
      </div>

      {/* Mouse/keyboard: the whole card is a link. Touch: the card toggles its panel. */}
      <Link href={`/${c.slug}`} aria-label={c.name} className="absolute inset-0 z-[2] outline-none pointer-coarse:hidden" />
      <button
        type="button"
        aria-expanded={open}
        aria-label={`${open ? "Hide" : "Show"} ${c.name} details`}
        onClick={onToggle}
        className="absolute inset-0 z-[2] hidden pointer-coarse:block"
      />
    </article>
  );
}

export function SolutionsGrid() {
  const ref = useRef<HTMLElement>(null);
  const [openCard, setOpenCard] = useState<string | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-card]").forEach((card, i) => {
          gsap.fromTo(
            card,
            { y: 0 },
            { y: drift[i], ease: "none", scrollTrigger: { trigger: "[data-grid]", start: "top bottom", end: "bottom top", scrub: 0.8 } },
          );
        });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-card-inner]").forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 60,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: { trigger: card, start: "top 90%", once: true },
          });
        });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative z-10 bg-cloud py-28 md:py-40">
      <div className="px-6 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SplitReveal as="h2" className="max-w-[11ch] text-[clamp(2.6rem,5.6vw,5.75rem)] leading-[1.02]">
            Our insurance solutions
          </SplitReveal>
          <Link
            href="/insurancesolutions"
            className="group border-b border-navy pb-1 font-button text-lg text-navy"
          >
            <RollText text="All solutions" />
          </Link>
        </div>
        <SplitReveal className="mt-8 max-w-2xl text-lg leading-relaxed md:text-xl">{home.solutionsIntro}</SplitReveal>

        <div data-grid className="mt-20 grid gap-5 sm:grid-cols-2 md:mt-28 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {categories.map((c, i) => (
            <div key={c.slug} data-card className={cn("will-change-transform", placement[i])}>
              <SolutionCard
                category={c}
                index={i}
                open={openCard === c.slug}
                onToggle={() => setOpenCard((cur) => (cur === c.slug ? null : c.slug))}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
