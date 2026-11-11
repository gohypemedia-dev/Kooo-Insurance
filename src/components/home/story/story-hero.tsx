"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useUi } from "@/lib/ui-store";
import { contact, home, tagline } from "@/content/site";
import { CtaLink } from "@/components/ui/cta-link";
import { SplitReveal } from "@/components/motion/split-reveal";
import { cn } from "@/lib/utils";
import { chapters, isLightSky, SKY_START, story } from "./story-timeline";

// WebGL only runs in the browser, so the film is skipped during server rendering.
const StoryScene = dynamic(() => import("./story-scene"), { ssr: false });

const CAPTION =
  "absolute inset-x-5 bottom-[11svh] md:inset-x-auto md:left-10 md:bottom-[13svh] md:w-[min(34rem,40vw)] will-change-transform";

/**
 * Hero film. The stage stays pinned while the page scrolls through the spacer
 * below it, and that scroll distance is the film's playhead: an ordinary
 * evening, the storm, the fire, the aftermath, Kooo stepping in, and business
 * as usual again. Renders a fragment so the stage stays pinned while the next
 * section slides over it.
 */
export function StoryHero() {
  const stage = useRef<HTMLDivElement>(null);
  const spacer = useRef<HTMLDivElement>(null);
  const ready = useUi((s) => s.ready);
  const [active, setActive] = useState(true);
  const [chapter, setChapter] = useState(0);

  useGSAP(() => {
    const el = stage.current;
    const space = spacer.current;
    if (!el || !space) return;
    story.p = 0;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const captions = gsap.utils.toArray<HTMLElement>("[data-caption]", el);
      const length = () => space.offsetHeight;

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { start: 0, end: () => length(), scrub: 0.7, invalidateOnRefresh: true },
      });
      // The playhead itself, so the scene gets the same smoothed scroll as the captions.
      tl.to(story, {
        p: 1,
        duration: 1,
        onUpdate: () => {
          const p = story.p;
          el.dataset.tone = isLightSky(p) ? "light" : "dark";
          let index = 0;
          chapters.forEach((c, i) => {
            if (p >= c.from - 0.03) index = i;
          });
          setChapter(index);
        },
      }, 0);
      tl.fromTo("[data-story-bar]", { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0);
      tl.to("[data-story-hint]", { autoAlpha: 0, duration: 0.03 }, 0.01);

      captions.forEach((caption, i) => {
        const { from, to } = chapters[i];
        if (i > 0) tl.fromTo(caption, { autoAlpha: 0, y: 48 }, { autoAlpha: 1, y: 0, duration: 0.035, ease: "power2.out" }, from);
        if (i < captions.length - 1) tl.to(caption, { autoAlpha: 0, y: -48, duration: 0.03, ease: "power2.in" }, to - 0.03);
      });

      // Stop rendering the film once the next section has fully covered it.
      const sleeper = ScrollTrigger.create({
        start: 0,
        end: () => length() + window.innerHeight,
        onToggle: (self) => setActive(self.isActive),
      });
      return () => sleeper.kill();
    });
  });

  // First-load intro, once the preloader has lifted.
  useGSAP(
    () => {
      if (!ready) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-story-intro]", { opacity: 0, y: 24, duration: 0.9, stagger: 0.1, delay: 0.5, ease: "power3.out" });
      });
    },
    { dependencies: [ready], scope: stage },
  );

  const skip = () => {
    const end = (spacer.current?.offsetHeight ?? 0) + window.innerHeight * 0.9;
    const lenis = useUi.getState().lenis;
    if (lenis) lenis.scrollTo(end, { duration: 1.6 });
    else window.scrollTo({ top: end });
  };

  return (
    <>
      <section
        ref={stage}
        data-tone="light"
        aria-label="Kooo Insurance: protect your tomorrow, today"
        className="group/stage sticky top-0 h-svh overflow-hidden"
        style={{ backgroundColor: SKY_START }}
      >
        <div aria-hidden className="absolute inset-0">
          <StoryScene active={active} />
        </div>
        {/* Soft shade behind the captions so they read over any frame of the film. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent opacity-0 transition-opacity duration-700 group-data-[tone=dark]/stage:opacity-100 md:bg-gradient-to-r md:from-navy-deep/75 md:via-navy-deep/15"
        />

        {/* Chapter 1: the headline */}
        <div data-caption className={cn(CAPTION, "md:w-[min(46rem,52vw)]")}>
          <SplitReveal as="h1" trigger="ready" delay={0.15} className="text-[clamp(2.9rem,7.4vw,7.75rem)] leading-[0.98] text-navy">
            {tagline}
          </SplitReveal>
          <p data-story-intro className="mt-6 max-w-md text-lg leading-relaxed text-navy/85 md:text-xl">
            {home.hero.title}
          </p>
          <div data-story-intro className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <CtaLink href="/contact">Let’s Talk</CtaLink>
            <a href={contact.phoneHref} className="border-b border-navy/40 pb-0.5 font-button text-lg text-navy hover:border-navy">
              {contact.phone}
            </a>
          </div>
        </div>

        {/* Chapters 2 to 5: the story, over the dark frames */}
        {home.story.slice(0, 4).map((line) => (
          <div key={line.title} data-caption className={cn(CAPTION, "invisible text-white")}>
            <h2 className="text-[clamp(2rem,4.2vw,4rem)] leading-[1.04] [--heading-color:#fff]">{line.title}</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/85 md:text-xl">{line.text}</p>
          </div>
        ))}

        {/* Chapter 6: the ending, back on a light sky */}
        <div data-caption className={cn(CAPTION, "invisible")}>
          <h2 className="text-[clamp(2.4rem,5.4vw,5.5rem)] leading-[1]">{home.story[4].title}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-navy/85 md:text-xl">{home.story[4].text}</p>
          <div className="mt-8">
            <CtaLink href="/contact">Let’s Talk</CtaLink>
          </div>
        </div>

        {/* Chapter rail */}
        <ol
          aria-hidden
          className="absolute right-8 top-1/2 hidden -translate-y-1/2 space-y-3 font-button text-xs uppercase tracking-[0.18em] text-navy transition-colors duration-500 group-data-[tone=dark]/stage:text-white lg:block motion-reduce:lg:hidden"
        >
          {chapters.map((c, i) => (
            <li key={c.key} className={cn("flex items-center justify-end gap-3 transition-opacity duration-500", i === chapter ? "opacity-100" : "opacity-35")}>
              <span className={cn("transition-opacity duration-500", i === chapter ? "opacity-100" : "opacity-0")}>{c.label}</span>
              <span className={cn("block h-px bg-current transition-[width] duration-500", i === chapter ? "w-8" : "w-4")} />
            </li>
          ))}
        </ol>

        {/* Scroll hint, skip link and playhead */}
        <div className="absolute inset-x-5 bottom-5 flex items-center justify-between font-button text-xs uppercase tracking-[0.2em] text-navy transition-colors duration-500 group-data-[tone=dark]/stage:text-white md:inset-x-10 motion-reduce:hidden">
          <span data-story-hint className="flex items-center gap-3">
            <span aria-hidden className="relative block h-8 w-px overflow-hidden bg-current/30">
              <span className="absolute inset-x-0 top-0 h-1/2 animate-[story-hint_1.8s_ease-in-out_infinite] bg-current" />
            </span>
            Scroll to play the story
          </span>
          <button type="button" onClick={skip} className="ml-auto border-b border-current/40 pb-0.5 uppercase tracking-[0.2em] hover:border-current">
            Skip the story
          </button>
        </div>
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] bg-navy/10 motion-reduce:hidden">
          <span data-story-bar className="block h-full origin-left scale-x-0 bg-kooo-green" />
        </span>
      </section>

      {/* Scroll distance the film plays over. */}
      <div ref={spacer} aria-hidden className="h-[620svh] motion-reduce:hidden" />
    </>
  );
}
