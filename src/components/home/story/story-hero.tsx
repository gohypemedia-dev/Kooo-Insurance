"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useUi } from "@/lib/ui-store";
import { contact, home, tagline } from "@/content/site";
import { CtaLink } from "@/components/ui/cta-link";
import { SplitReveal } from "@/components/motion/split-reveal";
import { cn } from "@/lib/utils";
import { chapters, isLightSky, story } from "./story-timeline";
import { Play, Pause, ChevronRight } from "lucide-react";

// Client-rendered cinematic viewport with GPU-accelerated overlapping circle optics
const StoryScene = dynamic(() => import("./story-scene"), { ssr: false });

const CAPTION =
  "absolute inset-x-5 bottom-[12svh] md:inset-x-auto md:left-12 md:bottom-[14svh] md:w-[min(36rem,44vw)] will-change-transform pointer-events-none";

/**
 * Photorealistic Cinematic Opening Experience.
 *
 * An authentic Australian journey across small business, transport logistics,
 * commercial construction, and family homes — framed and connected through
 * Kooo's iconic overlapping circle identity.
 */
export function StoryHero() {
  const stage = useRef<HTMLDivElement>(null);
  const spacer = useRef<HTMLDivElement>(null);
  const ready = useUi((s) => s.ready);
  const [active, setActive] = useState(true);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const autoPlayTween = useRef<gsap.core.Tween | null>(null);

  // GSAP scroll timeline syncing playhead story.p with page scroll
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
        scrollTrigger: {
          start: 0,
          end: () => length(),
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // Drive the playhead — story.p is read by StoryScene's GSAP ticker each frame.
      // A single tl.to keeps the value perfectly in sync with the scrubbed position.
      tl.to(story, {
        p: 1,
        duration: 1,
        onUpdate() {
          const p = story.p;
          el.dataset.tone = isLightSky(p) ? "light" : "dark";
          let activeIdx = 0;
          chapters.forEach((c, i) => {
            if (p >= c.from - 0.02) activeIdx = i;
          });
          setCurrentChapter(activeIdx);
        },
      }, 0);
      tl.fromTo("[data-story-bar]", { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0);
      tl.to("[data-story-hint]", { autoAlpha: 0, duration: 0.04 }, 0.02);

      // Animate caption transitions
      captions.forEach((caption, i) => {
        const { from, to } = chapters[i];
        if (i > 0) {
          tl.fromTo(
            caption,
            { autoAlpha: 0, y: 36 },
            { autoAlpha: 1, y: 0, duration: 0.04, ease: "power2.out" },
            from
          );
        }
        if (i < captions.length - 1) {
          tl.to(caption, { autoAlpha: 0, y: -36, duration: 0.035, ease: "power2.in" }, to - 0.025);
        }
      });

      // Pause rendering once completely scrolled past the story
      const sleeper = ScrollTrigger.create({
        start: 0,
        end: () => length() + window.innerHeight,
        onToggle: (self) => setActive(self.isActive),
      });

      return () => {
        sleeper.kill();
        tl.kill();
      };
    });
  });

  // Initial load title reveal
  useGSAP(
    () => {
      if (!ready) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-story-intro]", {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.3,
          ease: "power3.out",
        });
      });
    },
    { dependencies: [ready], scope: stage }
  );

  // Jump directly to any chapter
  const goToChapter = useCallback((index: number) => {
    const space = spacer.current;
    if (!space) return;
    const targetP = chapters[index].from + 0.02;
    const targetScroll = space.offsetHeight * targetP;

    const lenis = useUi.getState().lenis;
    if (lenis) {
      lenis.scrollTo(targetScroll, { duration: 1.4 });
    } else {
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  }, []);

  // Cinema Auto-Tour Toggle
  const togglePlayTour = useCallback(() => {
    const space = spacer.current;
    if (!space) return;
    const lenis = useUi.getState().lenis;

    if (isPlaying) {
      if (autoPlayTween.current) autoPlayTween.current.kill();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    const totalDist = space.offsetHeight;
    const currentScroll = window.scrollY;
    const remainingDist = Math.max(0, totalDist - currentScroll);
    const duration = (remainingDist / totalDist) * 24; // 24 seconds for entire story tour

    const scrollObj = { y: currentScroll };
    autoPlayTween.current = gsap.to(scrollObj, {
      y: totalDist,
      duration: Math.max(duration, 4),
      ease: "none",
      onUpdate: () => {
        if (lenis) lenis.scrollTo(scrollObj.y, { immediate: true });
        else window.scrollTo(0, scrollObj.y);
      },
      onComplete: () => {
        setIsPlaying(false);
      },
    });
  }, [isPlaying]);

  // Cancel auto-play if user manually wheels
  useEffect(() => {
    const cancelAutoPlay = () => {
      if (isPlaying && autoPlayTween.current) {
        autoPlayTween.current.kill();
        setIsPlaying(false);
      }
    };
    window.addEventListener("wheel", cancelAutoPlay, { passive: true });
    window.addEventListener("touchstart", cancelAutoPlay, { passive: true });
    return () => {
      window.removeEventListener("wheel", cancelAutoPlay);
      window.removeEventListener("touchstart", cancelAutoPlay);
    };
  }, [isPlaying]);

  const skip = () => {
    const end = (spacer.current?.offsetHeight ?? 0) + window.innerHeight * 0.95;
    const lenis = useUi.getState().lenis;
    if (lenis) lenis.scrollTo(end, { duration: 1.6 });
    else window.scrollTo({ top: end, behavior: "smooth" });
  };

  const sceneActive = chapters[currentChapter] ?? chapters[0];

  return (
    <>
      <section
        ref={stage}
        data-tone="dark"
        aria-label="Kooo Insurance: protect your tomorrow, today"
        className="group/stage sticky top-0 h-svh overflow-hidden bg-[#071326]"
      >
        {/* Photorealistic Cinematic Canvas & Overlapping Circle Optics */}
        <div aria-hidden className="absolute inset-0">
          <StoryScene active={active} />
        </div>

        {/* Chapter 0: Hero Intro Title */}
        <div data-caption className={cn(CAPTION, "md:w-[min(48rem,54vw)]")}>
          <div data-story-intro className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="font-button text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
              Nationwide Australian Brokerage
            </span>
          </div>

          <SplitReveal as="h1" trigger="ready" delay={0.15} className="text-[clamp(2.8rem,7vw,7.5rem)] leading-[0.98] text-white">
            {tagline}
          </SplitReveal>

          <p data-story-intro className="mt-5 max-w-lg text-lg leading-relaxed text-white/80 md:text-xl">
            {home.hero.title}
          </p>

          <div data-story-intro className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 pointer-events-auto">
            <CtaLink href="/contact" variant="light">Let’s Talk</CtaLink>
            <a
              href={contact.phoneHref}
              className="border-b border-white/40 pb-0.5 font-button text-lg text-white hover:border-white transition-colors"
            >
              {contact.phone}
            </a>
          </div>
        </div>

        {/* Chapters 1 to 4: The 4 Authentic Australian Scenes */}
        {chapters.slice(1, 5).map((scene) => (
          <div key={scene.key} data-caption className={cn(CAPTION, "invisible text-white pointer-events-none")}>
            {/* Scene Location & Pillar Tag */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/10 px-3 py-1 font-button text-xs font-semibold uppercase tracking-wider text-white border border-white/20 backdrop-blur-sm">
                {scene.pillar}
              </span>
              <span className="font-mono text-xs text-white/70 tracking-wider">
                {scene.location} · {scene.timeOfDay}
              </span>
            </div>

            <h2 className="text-[clamp(2.2rem,4.4vw,4.5rem)] leading-[1.04] text-white font-heading">
              {scene.title}
            </h2>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/85 md:text-xl font-body">
              {scene.text}
            </p>

            <div className="mt-7 flex items-center gap-4 pointer-events-auto">
              <a
                href="/insurancesolutions"
                className="group inline-flex items-center gap-2 border-b border-white/60 pb-1 font-button text-sm font-semibold uppercase tracking-widest text-white hover:border-white transition-colors"
              >
                <span>Explore Cover</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}

        {/* Chapter 5: Kooo Resolution & Brand Promise */}
        <div data-caption className={cn(CAPTION, "invisible text-white")}>
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="font-button text-xs font-semibold uppercase tracking-widest text-white">
              Securing Tomorrow
            </span>
          </div>

          <h2 className="text-[clamp(2.4rem,5.2vw,5.25rem)] leading-[1.02] text-white font-heading">
            {chapters[5].title}
          </h2>

          <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/85 md:text-xl font-body">
            {chapters[5].text}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 pointer-events-auto">
            <CtaLink href="/contact" variant="light">Speak With Our Advisors</CtaLink>
            <a
              href="/about"
              className="border-b border-white/40 pb-0.5 font-button text-base uppercase tracking-wider text-white hover:border-white transition-colors"
            >
              Why Choose Kooo
            </a>
          </div>
        </div>

        {/* Interactive Chapter Rail (Right side) */}
        <nav
          aria-label="Story Chapters"
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden md:block z-20"
        >
          <ol className="space-y-3 font-button text-xs uppercase tracking-[0.16em]">
            {chapters.map((c, i) => {
              const isCurrent = i === currentChapter;
              return (
                <li key={c.key}>
                  <button
                    type="button"
                    onClick={() => goToChapter(i)}
                    className={cn(
                      "group flex items-center justify-end gap-3 text-right transition-all duration-300 w-full py-1",
                      isCurrent ? "text-white font-semibold" : "text-white/50 hover:text-white"
                    )}
                  >
                    <span className={cn("transition-opacity duration-300", isCurrent ? "opacity-100" : "opacity-0 group-hover:opacity-75")}>
                      {c.shortLabel}
                    </span>
                    <span
                      className={cn(
                        "block h-1 rounded-full transition-all duration-300",
                        isCurrent ? "w-8 bg-white" : "w-3 bg-white/30 group-hover:bg-white/60"
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Bottom Interactive Bar */}
        <div className="absolute inset-x-5 bottom-5 md:inset-x-12 flex items-center justify-between font-button text-xs uppercase tracking-[0.18em] text-white/80 z-20">
          {/* Scroll Hint & Auto Tour Play Button */}
          <div className="flex items-center gap-4">
            <span data-story-hint className="hidden sm:flex items-center gap-2.5 text-white/60">
              <span aria-hidden className="relative block h-7 w-px overflow-hidden bg-white/20">
                <span className="absolute inset-x-0 top-0 h-1/2 animate-[story-hint_1.8s_ease-in-out_infinite] bg-white" />
              </span>
              Scroll to explore
            </span>

            {/* Cinematic Auto Tour Button */}
            <button
              type="button"
              onClick={togglePlayTour}
              aria-label={isPlaying ? "Pause cinematic tour" : "Play cinematic tour"}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md text-white hover:border-white hover:bg-white/20 transition"
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5 text-white fill-white" /> : <Play className="h-3.5 w-3.5 text-white fill-white" />}
              <span className="hidden xs:inline">{isPlaying ? "Pause Cinema Tour" : "Auto-Play Story"}</span>
            </button>
          </div>

          {/* Active Pillar Pill & Skip Link */}
          <div className="flex items-center gap-5">
            <span className="hidden lg:inline text-white/50">
              Act {currentChapter + 1} of {chapters.length} · <strong className="text-white font-medium">{sceneActive.pillar}</strong>
            </span>
            <button
              type="button"
              onClick={skip}
              className="border-b border-white/30 pb-0.5 hover:border-white hover:text-white transition uppercase text-[11px] tracking-[0.2em]"
            >
              Skip to Site
            </button>
          </div>
        </div>

        {/* Real-time Progress Bar */}
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] bg-white/15">
          <span data-story-bar className="block h-full origin-left scale-x-0 bg-white" />
        </span>
      </section>

      {/* Scroll spacer that sets the film length */}
      <div ref={spacer} aria-hidden className="h-[520svh] motion-reduce:hidden" />
    </>
  );
}
