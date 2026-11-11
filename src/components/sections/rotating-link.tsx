"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gsap, useGSAP } from "@/lib/gsap";

type RotatingLinkProps = {
  prefix: string;
  items: { label: string; href: string }[];
  interval?: number;
};

// "Also explore: …" line whose link rolls through a list of pages.
export function RotatingLink({ prefix, items, interval = 2600 }: RotatingLinkProps) {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // The line floats over its backdrop, moving a little faster than the page.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-rotating-line]",
          { y: 70 },
          // The untransformed wrapper is the trigger so the drift can't skew its own measurements.
          { y: -70, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.8 } },
        );
      });
    },
    { scope: ref },
  );

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
    return () => window.clearInterval(id);
  }, [items.length, interval]);

  const item = items[index];

  return (
    <div ref={ref}>
      <p data-rotating-line className="font-heading text-[clamp(1.5rem,3.2vw,2.75rem)] leading-tight text-white will-change-transform">
        <span className="text-kooo-mint">{prefix}</span>{" "}
        <span className="relative inline-flex overflow-hidden pb-[0.1em] align-bottom">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={item.href + index}
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              exit={{ y: "-105%" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              <Link
                href={item.href}
                className="underline decoration-kooo-mint/50 decoration-1 underline-offset-[0.18em] transition-colors hover:decoration-kooo-mint"
              >
                {item.label}
              </Link>
            </motion.span>
          </AnimatePresence>
        </span>
      </p>
    </div>
  );
}
