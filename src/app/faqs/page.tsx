import type { Metadata } from "next";
import { HelpCircle, Phone, Search } from "lucide-react";
import { faqs } from "@/content/faqs";
import { contact } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { Accordion } from "@/components/sections/accordion";
import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "FAQs | Frequently Asked Questions",
  description:
    "Common questions answered about commercial insurance, certificates of currency, licensing, policy renewals, and claims with Kooo Insurance.",
};

const categories = [
  "General & Licensing",
  "Coverage & Policies",
  "Certificates & Payments",
  "Claims & Emergencies",
] as const;

export default function FaqsPage() {
  return (
    <>
      <PageTitle
        words={["Help &", "FAQs"]}
        intro="Clear answers to common questions about Australian business insurance, licensing, policy structuring, certificates, and claims."
      />

      <section className="relative z-10 px-6 pb-28 md:px-8 md:pb-36">
        <div className="space-y-16">
          {categories.map((cat) => {
            const catFaqs = faqs.filter((f) => f.category === cat);
            if (catFaqs.length === 0) return null;

            return (
              <div key={cat} className="grid gap-8 border-t border-navy/20 pt-12 lg:grid-cols-[1fr_2.2fr]">
                <div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Topic</span>
                  <h2 className="mt-2 font-heading text-2xl text-navy md:text-3xl">{cat}</h2>
                </div>

                <Accordion
                  items={catFaqs.map((f) => ({
                    title: f.question,
                    content: f.answer,
                  }))}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="relative z-10 bg-navy px-6 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
            <HelpCircle className="size-3.5" />
            <span>Personal Advice</span>
          </div>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.75rem)] leading-tight text-white">
            Have a Specific Insurance Question?
          </h2>
          <p className="mx-auto max-w-xl text-lg text-white/80">
            We do not expect you to speak the language of insurance. That is our job. Call our Australian brokers directly for plain-English advice.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CtaLink href="/contact" variant="light">
              Send an Enquiry
            </CtaLink>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 font-button text-base text-white hover:border-white hover:bg-white/10 transition"
            >
              <Phone className="size-4" />
              <span>Call {contact.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

