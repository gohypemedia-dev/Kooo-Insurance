import type { Metadata } from "next";
import { Handshake, ShieldCheck, FileCheck, Phone, CheckCircle2, ArrowUpRight } from "lucide-react";
import { referralPartnersContent } from "@/content/referral-partners";
import { contact } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { CornerDots } from "@/components/ui/corner-dots";
import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "Referral Partners | Professional Collaboration",
  description:
    "Partner with Kooo Insurance. Impartial, accredited commercial insurance advisory for clients of accountants, mortgage brokers, conveyancers, and business advisors.",
};

export default function ReferralPartnersPage() {
  return (
    <>
      <PageTitle words={["Referral", "Partners"]} intro={referralPartnersContent.intro} />

      {/* Why Partner With Kooo */}
      <section className="relative z-10 px-6 py-16 md:px-8 md:py-24">
        <div className="mb-12">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Partnership Value</span>
          <h2 className="mt-2 font-heading text-[clamp(2.2rem,4vw,3.75rem)] leading-tight text-navy">
            Why Australian Professionals Partner With Us
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            We provide your clients with independent, accredited insurance advice while protecting your professional reputation and speeding up transaction settlements.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {referralPartnersContent.whyPartner.map((p) => (
            <div key={p.title} className="relative border border-navy/15 bg-white p-7 md:p-8 flex flex-col justify-between">
              <CornerDots inset="-0.4rem" className="text-navy/20" />
              <div>
                <ShieldCheck className="size-6 text-navy" />
                <h3 className="mt-5 font-heading text-xl text-navy">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Work With */}
      <section className="relative z-10 bg-cloud px-6 py-16 md:px-8 md:py-24 border-t border-navy/15">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy/70">
              <Handshake className="size-4 text-navy" />
              <span>Professional Disciplines</span>
            </div>
            <h2 className="mt-3 font-heading text-[clamp(2rem,3.5vw,3.25rem)] leading-tight text-navy">
              Who We Collaborate With
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Whether your clients are buying commercial assets, applying for finance, signing commercial leases, or restructuring corporate entities, we ensure their insurance requirements are resolved smoothly.
            </p>
          </div>

          <div className="space-y-4">
            {referralPartnersContent.partnerProfiles.map((prof) => (
              <div key={prof.profession} className="border border-navy/15 bg-white p-6 md:p-7">
                <h3 className="font-heading text-xl text-navy">{prof.profession}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{prof.need}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Referral Model Works */}
      <section className="relative z-10 px-6 py-16 md:px-8 md:py-24">
        <div className="mb-12">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Workflow</span>
          <h2 className="mt-2 font-heading text-[clamp(2.2rem,4vw,3.75rem)] leading-tight text-navy">
            How The Referral Process Works
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            A simple, transparent four-step workflow designed to keep you updated at every stage.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {referralPartnersContent.howItWorks.map((step) => (
            <div key={step.step} className="border border-navy/15 bg-white p-7">
              <span className="font-heading text-3xl text-navy">{step.step}</span>
              <h3 className="mt-4 font-heading text-xl text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Onboarding CTA */}
      <section className="relative z-10 bg-navy px-6 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-white/70">Get In Touch</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.75rem)] leading-tight text-white">
            Become a Kooo Referral Partner
          </h2>
          <p className="mx-auto max-w-xl text-lg text-white/80">
            Connect directly with our corporate partnership director to discuss how we can support your client base with accredited, impartial insurance advisory.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CtaLink href="/contact" variant="light">
              Register as a Partner
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

