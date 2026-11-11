"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { about } from "@/content/site";
import { SplitReveal } from "@/components/motion/split-reveal";
import { RollText } from "@/components/motion/roll-text";
import { cn } from "@/lib/utils";

type Frame = {
  /** Width and side of the frame inside the collage column. */
  box: string;
  aspect: string;
  /** Crop anchor, chosen per photo so the subject stays in the frame. */
  position: string;
  sizes: string;
  /** Desktop drift in px: the frame travels from +drift to -drift, so negative values lag behind the scroll. */
  drift: number;
};

// One frame per `about.workWith` line, in the same order.
const frames: Frame[] = [
  // Cafe table: landscape, subjects spread across the width.
  { box: "w-full lg:w-[78%]", aspect: "aspect-[4/3]", position: "object-center", sizes: "(min-width: 1024px) 46vw, 100vw", drift: 60 },
  // Tradie: the man stands on the right of the photo, so the tall crop anchors there.
  { box: "ml-auto w-[82%] lg:w-[46%]", aspect: "aspect-[4/5]", position: "object-[80%_50%]", sizes: "(min-width: 1024px) 28vw, 82vw", drift: -80 },
  // Kitchen: the widest frame, both chefs and the bench stay in.
  { box: "w-full lg:w-[88%]", aspect: "aspect-[16/10]", position: "object-center", sizes: "(min-width: 1024px) 52vw, 100vw", drift: 110 },
  // Car: the only portrait photo, kept tall.
  { box: "w-[82%] lg:ml-[8%] lg:w-[44%]", aspect: "aspect-[3/4]", position: "object-[60%_55%]", sizes: "(min-width: 1024px) 26vw, 82vw", drift: -60 },
  // Classroom: faces sit in the upper half.
  { box: "ml-auto w-full lg:w-[72%]", aspect: "aspect-[3/2]", position: "object-[50%_40%]", sizes: "(min-width: 1024px) 42vw, 100vw", drift: 90 },
];

// Collage of the five client groups drifting past a pinned heading.
export function WorkWith() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // Every screen: the photo is taller than its frame and slides inside it.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-item]").forEach((item, i) => {
          // Opposite to the frame's own drift, so the two layers pull apart.
          const dir = frames[i].drift >= 0 ? 1 : -1;
          gsap.fromTo(
            item.querySelector("[data-img]"),
            { yPercent: -9 * dir },
            { yPercent: 9 * dir, ease: "none", scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: 0.8 } },
          );
        });
      });
      // Desktop only: frames drift at their own speeds, settle from a slight zoom, and the number tags float ahead.
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-item]").forEach((item, i) => {
          const { drift } = frames[i];
          // The untransformed list item is the trigger, so the drift never shifts its own scroll range.
          const range = { trigger: item, start: "top bottom", end: "bottom top", scrub: 0.8 };
          gsap.fromTo(item.querySelector("[data-drift]"), { y: drift }, { y: -drift, ease: "none", scrollTrigger: range });
          gsap.fromTo(item.querySelector("[data-num]"), { y: 48 }, { y: -48, ease: "none", scrollTrigger: range });
          gsap.fromTo(
            item.querySelector("[data-frame]"),
            { scale: 0.9 },
            { scale: 1, ease: "none", scrollTrigger: { trigger: item, start: "top bottom", end: "center center", scrub: 0.8 } },
          );
        });
      });
    },
    { scope: ref },
  );

  return (
    // overflow-x-clip (not hidden) so the sticky heading still works.
    <section ref={ref} className="relative z-10 overflow-x-clip bg-cream py-28 md:py-40">
      <div className="px-6 md:px-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SplitReveal as="h2" className="max-w-[9ch] text-[clamp(2.6rem,5.6vw,5.75rem)] leading-[1.02]">
              Who we work with
            </SplitReveal>
            <SplitReveal className="mt-8 max-w-md text-lg leading-relaxed md:text-xl">{about.workWithIntro}</SplitReveal>
          </div>

          <ol className="mt-16 space-y-16 md:space-y-24 lg:mt-24 lg:space-y-44">
            {about.workWith.map((line, i) => {
              const f = frames[i];
              return (
                <li key={line} data-item>
                  <figure data-drift className={cn("relative will-change-transform", f.box)}>
                    <div data-frame className={cn("relative overflow-hidden bg-navy/10 will-change-transform", f.aspect)}>
                      <div data-img className="absolute inset-x-0 -inset-y-[12%] will-change-transform">
                        <Image src={about.workWithImages[i]} alt="" fill sizes={f.sizes} className={cn("object-cover", f.position)} />
                      </div>
                    </div>
                    <span
                      data-num
                      aria-hidden
                      className="absolute -top-4 left-4 z-10 bg-kooo-mint px-3 py-2 font-button text-sm tabular-nums text-navy will-change-transform md:left-6"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <figcaption className="mt-5 max-w-[20rem] border-t border-navy/20 pt-4 font-body text-lg leading-snug text-navy md:text-xl">
                      {line}
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-20 flex justify-end border-t border-navy/20 pt-8 md:mt-28">
          <Link href="/about" className="group border-b border-navy pb-1 font-button text-lg text-navy">
            <RollText text="About Kooo" />
          </Link>
        </div>
      </div>
    </section>
  );
}
