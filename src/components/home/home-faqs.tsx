"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqs } from "@/content/faqs";
import { Accordion } from "@/components/sections/accordion";
import { CornerDots } from "@/components/ui/corner-dots";
import { SplitReveal } from "@/components/motion/split-reveal";
import { RollText } from "@/components/motion/roll-text";

// Select the top 5 most important and foundational FAQs for the homepage
const homeFaqItems = [
  {
    title: faqs[0].question, // What is an insurance broker vs direct insurer
    content: faqs[0].answer,
  },
  {
    title: faqs[1].question, // Licensing and regulatory credentials
    content: faqs[1].answer,
  },
  {
    title: faqs[2].question, // Where based and Australia-wide scope
    content: faqs[2].answer,
  },
  {
    title: faqs[3].question, // What insurance legally required
    content: faqs[3].answer,
  },
  {
    title: faqs[4].question, // How to avoid underinsurance
    content: faqs[4].answer,
  },
];

export function HomeFaqs() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative z-10 bg-cloud py-28 md:py-36">
      <CornerDots inset="1.5rem" className="text-navy/20" />

      <div className="px-6 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="font-button text-sm uppercase tracking-[0.2em] text-navy/70">
              Useful Questions & Answers
            </p>
            <SplitReveal as="h2" className="mt-6 text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[1.05] text-navy">
              Clear advice. Plain language.
            </SplitReveal>
            <p className="mt-6 text-lg leading-relaxed text-ink/80 md:text-xl">
              We do not expect you to speak the language of insurance. That is our job. Here are answers to the most
              common questions clients ask when securing coverage for their business or family.
            </p>

            <div className="mt-10">
              <Link
                href="/faqs"
                className="group inline-flex items-center gap-2 border-b-2 border-navy pb-1 font-button text-base font-semibold text-navy transition-colors hover:text-navy/70"
              >
                <RollText text="Explore all FAQs & answers" />
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div>
            <Accordion items={homeFaqItems} defaultOpen={0} />
          </div>
        </div>
      </div>
    </section>
  );
}

