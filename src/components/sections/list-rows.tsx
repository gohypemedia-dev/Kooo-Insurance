"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP, EASE_OUT } from "@/lib/gsap";
import { ArrowBox } from "@/components/ui/arrow-box";

type Row = { title: string; description: string; href?: string };

// Service-style list: title on the left, description on the right, hairline between rows.
// Linked rows fill with mint on hover.
export function ListRows({ items }: { items: Row[] }) {
  const ref = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-row]").forEach((row) => {
          // The hairline is drawn by the scroll itself; the content then rises in behind it.
          gsap.fromTo(
            row.querySelector("[data-line]"),
            { scaleX: 0 },
            { scaleX: 1, ease: "none", scrollTrigger: { trigger: row, start: "top 96%", end: "top 64%", scrub: 0.8 } },
          );
          gsap.from(row.querySelectorAll("[data-cell]"), {
            y: 48,
            opacity: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: EASE_OUT,
            scrollTrigger: { trigger: row, start: "top 88%", once: true },
          });
        });
      });
      // Two-column layout only: the description drifts against its title for a little depth.
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 768px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-row]").forEach((row) => {
          gsap.fromTo(
            row.querySelector("[data-drift]"),
            { y: 14 },
            { y: -14, ease: "none", scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: 0.8 } },
          );
        });
      });
    },
    { scope: ref },
  );

  return (
    <ul ref={ref} className="border-b border-navy/20">
      {items.map((item, i) => {
        const body = (
          <>
            <span data-line aria-hidden className="absolute inset-x-0 top-0 h-px origin-left bg-navy/25" />
            {item.href && (
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
              />
            )}
            <div data-cell className="relative flex items-baseline gap-4">
              <span className="w-7 shrink-0 text-sm tabular-nums text-navy/80">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-[1.6rem] leading-tight md:text-[2rem]">{item.title}</h3>
            </div>
            <div data-cell className="relative pl-10 md:pl-0">
              {/* Separate layer so the scrubbed drift never fights the reveal on the cell. */}
              <div data-drift className="flex items-start justify-between gap-6">
                <p className="max-w-2xl text-[17px] leading-relaxed text-ink/85 md:text-lg">{item.description}</p>
                {item.href && <ArrowBox className="hidden md:inline-flex" />}
              </div>
            </div>
          </>
        );
        const rowClass = "group relative grid gap-3 px-1 py-8 outline-none md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-10 md:px-3 md:py-10";
        return (
          <li key={item.title} data-row>
            {item.href ? (
              <Link href={item.href} className={rowClass}>
                {body}
              </Link>
            ) : (
              <div className={rowClass}>{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
