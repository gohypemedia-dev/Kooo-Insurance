"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { categories } from "@/content/site";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  /** "dark" is a navy band with white type; "light" is cream with navy type. */
  tone?: "dark" | "light";
  className?: string;
};

const DRIFT = 36; // px per second of constant movement
const MAX_SKEW = 4; // degrees
// Row 1 runs left, row 2 runs right and starts half a loop along so the rows never line up.
const ROWS = [
  { dir: -1, phase: 0 },
  { dir: 1, phase: 0.5 },
];

// Two rows of oversized category names sliding in opposite directions as the page scrolls.
export function Marquee({ tone = "dark", className }: MarqueeProps) {
  const ref = useRef<HTMLElement>(null);
  const dark = tone === "dark";

  useGSAP(
    () => {
      const section = ref.current;
      const skewEl = section?.querySelector<HTMLElement>("[data-skew]");
      const group = section?.querySelector<HTMLElement>("[data-group]");
      if (!section || !skewEl || !group) return;

      const rows = gsap.utils.toArray<HTMLElement>("[data-row]").map((el, i) => ({
        el,
        ...ROWS[i],
        setX: gsap.quickSetter(el, "x", "px") as (value: number) => void,
        nudge: 0,
        // Set while a link in the row has keyboard focus, so the focused link stays put.
        frozen: null as number | null,
      }));

      let width = group.offsetWidth; // one loop
      let offset = 0;
      const render = () => {
        if (!width) return;
        const wrap = gsap.utils.wrap(-width, 0);
        rows.forEach((r) => r.setX(r.frozen ?? wrap(r.dir * offset + r.nudge + r.phase * width)));
      };
      render();

      // Web fonts and viewport changes alter the loop width.
      const ro = new ResizeObserver(() => {
        width = group.offsetWidth;
        render();
      });
      ro.observe(group);

      // Keyboard focus: hold the row still with the focused link at the left edge.
      const onFocusIn = (e: FocusEvent) => {
        const link = e.target as HTMLElement;
        const row = rows.find((r) => r.el.contains(link));
        if (!row) return;
        row.frozen = Math.min(0, 24 - link.offsetLeft);
        section.scrollLeft = 0;
        render();
      };
      const onFocusOut = (e: FocusEvent) => {
        const row = rows.find((r) => r.el.contains(e.target as Node));
        if (!row || row.frozen === null || row.el.contains(e.relatedTarget as Node | null)) return;
        // Resume from where the row was held rather than jumping back.
        row.nudge = row.frozen - row.dir * offset - row.phase * width;
        row.frozen = null;
        render();
      };
      // Focusing a clipped link can scroll an overflow-hidden box sideways; undo it.
      const onScroll = () => {
        if (section.scrollLeft) section.scrollLeft = 0;
      };
      section.addEventListener("focusin", onFocusIn);
      section.addEventListener("focusout", onFocusOut);
      section.addEventListener("scroll", onScroll);

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const scrub = { p: 0 };
        let active = false;
        let hovered = false;
        let drifted = 0;
        let skew = 0;
        let lastY = window.scrollY;
        const setSkew = gsap.quickSetter(skewEl, "skewX", "deg") as (value: number) => void;
        const clampSkew = gsap.utils.clamp(-MAX_SKEW, MAX_SKEW);

        gsap.to(scrub, {
          p: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
            onToggle: (self) => (active = self.isActive),
          },
        });

        const tick = (_time: number, deltaMs: number) => {
          const dt = Math.min(deltaMs, 100) / 1000;
          const y = window.scrollY;
          const velocity = dt ? (y - lastY) / dt : 0;
          lastY = y;
          if (!active) return; // no work while the band is off screen

          // Pause the drift under the pointer so the links are easy to click.
          if (!hovered) drifted += DRIFT * dt;
          offset = drifted + scrub.p * width * 0.3;
          render();

          skew += (clampSkew(velocity / 500) - skew) * (1 - Math.exp(-dt * 7));
          setSkew(Math.abs(skew) < 0.01 ? 0 : skew);
        };
        const onEnter = () => (hovered = true);
        const onLeave = () => (hovered = false);
        gsap.ticker.add(tick);
        section.addEventListener("pointerenter", onEnter);
        section.addEventListener("pointerleave", onLeave);

        return () => {
          gsap.ticker.remove(tick);
          section.removeEventListener("pointerenter", onEnter);
          section.removeEventListener("pointerleave", onLeave);
          setSkew(0);
        };
      });

      return () => {
        ro.disconnect();
        section.removeEventListener("focusin", onFocusIn);
        section.removeEventListener("focusout", onFocusOut);
        section.removeEventListener("scroll", onScroll);
      };
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      aria-label="Insurance categories"
      className={cn(
        "relative z-10 overflow-hidden py-16 md:py-24",
        dark ? "on-dark bg-navy" : "bg-cream",
        className,
      )}
    >
      <div data-skew className="space-y-1 will-change-transform md:space-y-3">
        {ROWS.map((row, r) => {
          // Only the first loop of the first row is exposed; the rest repeats the same links.
          const items = r === 0 ? categories : [...categories].reverse();
          return (
            <div key={r} data-row aria-hidden={r > 0 || undefined} className="relative flex w-max will-change-transform">
              {[0, 1].map((copy) => {
                const decorative = r > 0 || copy > 0;
                return (
                  <ul
                    key={copy}
                    data-group={r === 0 && copy === 0 ? "" : undefined}
                    aria-hidden={(r === 0 && copy > 0) || undefined}
                    className="flex shrink-0 items-center whitespace-nowrap font-heading text-[clamp(3.25rem,10vw,10rem)] leading-[1.1]"
                  >
                    {items.map((c) => (
                      <li key={c.slug} className="flex items-center font-heading">
                        <Link
                          href={`/${c.slug}`}
                          tabIndex={decorative ? -1 : undefined}
                          className={cn(
                            "outline-none transition-colors duration-500 focus-visible:underline focus-visible:decoration-navy focus-visible:decoration-2 focus-visible:underline-offset-8",
                            dark ? "hover:text-white/70" : "hover:text-navy/70",
                            r === 0 ? (dark ? "text-white" : "text-navy") : dark ? "text-white/30" : "text-navy/25",
                          )}
                        >
                          {c.shortName}
                        </Link>
                        <span aria-hidden className="mx-[0.4em] inline-block size-[0.13em] shrink-0 bg-current opacity-60" />
                      </li>
                    ))}
                  </ul>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
