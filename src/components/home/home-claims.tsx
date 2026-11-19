"use client";

import { useRef } from "react";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Clock, FileText, CheckCircle2 } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { contact } from "@/content/site";
import { claimsContent } from "@/content/claims";
import { CornerDots } from "@/components/ui/corner-dots";
import { SplitReveal } from "@/components/motion/split-reveal";
import { RollText } from "@/components/motion/roll-text";

export function HomeClaims() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-claim-card]", {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-claims-grid]", start: "top 85%", once: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="on-dark relative z-10 overflow-hidden bg-navy py-28 md:py-36 text-white">
      {/* Decorative overlapping circles watermark */}
      <div aria-hidden className="pointer-events-none absolute -left-20 top-1/2 flex -translate-y-1/2 opacity-15">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="-ml-12 block size-72 rounded-full border border-white/20 first:ml-0 md:size-96"
          />
        ))}
      </div>
      <CornerDots inset="1.5rem" className="text-white/30" />

      <div className="relative px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="font-button text-sm uppercase tracking-[0.2em] text-white/70">
              Claims Support & Advocacy
            </p>
            <SplitReveal as="h2" className="mt-6 max-w-4xl text-[clamp(2.4rem,4.8vw,4.75rem)] leading-[1.04]">
              When it counts: Dedicated broker advocacy from notice to payout.
            </SplitReveal>
          </div>
          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-white/80 md:text-xl">
              The true value of an insurance broker is proven at claim time. When the unexpected happens, Kooo acts
              strictly on your behalf—lodging your claim, negotiating directly with underwriters, and coordinating
              assessors to secure a swift, fair resolution.
            </p>
          </div>
        </div>

        {/* 4-Step Claims Process */}
        <div data-claims-grid className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {claimsContent.processSteps.map((step) => (
            <div
              key={step.step}
              data-claim-card
              className="group relative flex flex-col justify-between border border-white/20 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/[0.08]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-button text-xs font-bold uppercase tracking-wider text-white/60">
                    Step {step.step}
                  </span>
                  <CheckCircle2 className="size-4 text-white/40 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mt-4 font-heading text-xl text-white md:text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Assistance & Direct Actions */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/20 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white">
              <Phone className="size-5" />
            </div>
            <div>
              <p className="font-button text-xs font-semibold uppercase tracking-wider text-white/60">
                Direct Claims Hotline
              </p>
              <a
                href={contact.phoneHref}
                className="font-heading text-xl font-bold tracking-tight text-white transition-colors hover:text-white/80 md:text-2xl"
              >
                {contact.phone}
              </a>
              <p className="text-xs text-white/60">Monday to Friday: 8:30 AM – 5:30 PM (AEST)</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/claims"
              className="inline-flex items-center gap-2 border border-white/30 bg-white/10 px-6 py-3 font-button text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white hover:text-navy"
            >
              <span>Full Claims Guide & 24/7 Hotlines</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

