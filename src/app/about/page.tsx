import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Compass, FileCheck, Users } from "lucide-react";
import { about, tagline } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { ImageBand } from "@/components/sections/image-band";
import { NumberedRows } from "@/components/sections/numbered-rows";
import { ImageReveal } from "@/components/motion/image-reveal";
import { Parallax } from "@/components/motion/parallax";
import { CornerDots } from "@/components/ui/corner-dots";
import { KoooLogo } from "@/components/brand/kooo-logo";
import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "About",
  description: `${about.whoWeAre} ${about.company.overview}`,
};

const valueIcons = [Compass, ShieldCheck, FileCheck, Users];

// Direct fallback guarantees content is never blank even during hot module reloads
const coreValues = about.values ?? [
  {
    title: "Plain English Clarity",
    description:
      "Insurance shouldn't require a legal degree. We discard jargon, illuminate policy fine print, and give you transparent counsel so you always know exactly what is protected.",
  },
  {
    title: "Proactive Risk Protection",
    description:
      "True risk management is never set-and-forget. We continuously audit evolving operations, capital investments, and regulatory shifts so your business is never exposed to underinsurance.",
  },
  {
    title: "Client-First Claims Advocacy",
    description:
      "The true test of a broker is claim time. When an incident occurs, we take complete charge of the claims process, negotiating vigorously with underwriters to secure full, timely payouts.",
  },
  {
    title: "Nationwide Scope, Local Understanding",
    description:
      "From suburban businesses and high-risk construction projects to interstate freight logistics and national fleets, we combine broad market access with personal, responsive service.",
  },
];

const servicesList = about.servicesSummary ?? [
  {
    title: "Business & Commercial",
    href: "/businessinsurance",
    description: "Packaged liability, business interruption, commercial property, and management liability.",
  },
  {
    title: "Trades & Construction",
    href: "/tradesconstructioninsurance",
    description: "Contract works, public liability, plant & machinery, and portable tools cover for builders and tradies.",
  },
  {
    title: "Truck & Fleet Transport",
    href: "/truckfleetinsurance",
    description: "Heavy haulage, commercial motor, goods in transit, and downtime cover for transport operators.",
  },
  {
    title: "Specialty & Complex Risks",
    href: "/specialtyinsurance",
    description: "Cyber risk, professional indemnity, fine art, renewable energy, and bespoke commercial exposures.",
  },
  {
    title: "Industry-Specific Programs",
    href: "/industryinsurance",
    description: "Tailored programs for NDIS providers, aged care, childcare, hospitality, strata, and dealerships.",
  },
  {
    title: "Personal & Asset Protection",
    href: "/personalinsurance",
    description: "High-value residential property, prestige vehicles, marine craft, and personal asset portfolios.",
  },
];

const approachPhases = about.approach ?? [
  {
    step: "01",
    title: "Discovery & Risk Audit",
    description:
      "We begin with a comprehensive review of your operations, contracts, plant, assets, and liabilities to map exposures and eliminate coverage gaps.",
  },
  {
    step: "02",
    title: "Strategic Market Placement",
    description:
      "We leverage our access to Australia’s foremost underwriting agencies and Tier-1 insurers (including QBE, Chubb, NTI, Allianz, and Lloyd's syndicates) to negotiate competitive terms.",
  },
  {
    step: "03",
    title: "Transparent Implementation",
    description:
      "We present options with clear comparisons, agreed deductibles, and tailored policy wordings—ensuring your management team has total confidence before binding.",
  },
  {
    step: "04",
    title: "Ongoing Review & Claims Support",
    description:
      "As your operations expand, we actively adjust your coverage. If an event occurs, your dedicated broker manages the entire claims lifecycle from first notification to final settlement.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageTitle words={["About", "Kooo"]} intro={tagline} />

      {/* 1. Who We Are & Company Overview */}
      <section className="relative z-10 px-6 pb-24 md:px-8 md:pb-32">
        <div className="grid gap-12 border-t border-navy/20 pt-12 lg:grid-cols-[1fr_1.8fr]">
          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Company Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              An Australian insurance brokerage dedicated to institutional clarity, proactive advice, and enduring protection.
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="font-heading text-[clamp(1.75rem,3.2vw,3rem)] leading-[1.25] text-navy">
              {about.whoWeAre}
            </h2>
            <p className="text-lg leading-relaxed text-navy/80">
              {about.company.overview}
            </p>

            {/* Authorisation Credentials Panel */}
            <div className="relative mt-10 rounded-none border border-navy/20 bg-white p-6 md:p-8">
              <CornerDots inset="-0.5rem" className="text-navy/35" />
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-navy/15 pb-4">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-navy">
                  Corporate Licensing &amp; Compliance
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-navy">
                  <span aria-hidden className="size-2 rounded-full bg-navy" />
                  Regulated Australian Brokerage
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {about.company.credentials.map((cred) => (
                  <div key={cred.label} className="space-y-1">
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">{cred.label}</dt>
                    <dd className="font-heading text-xl text-navy">{cred.value}</dd>
                    <p className="text-sm text-navy/70">{cred.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission Image Band */}
      <ImageBand image="/images/photos/pexels-840996.jpg" title="Our mission" text={about.mission} />

      {/* 3. Our Values (Direct, fully visible, rock-solid rendering) */}
      <section className="relative z-10 px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-8 md:grid-cols-[1fr_1.5fr] md:items-end">
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Foundations</span>
            <h2 className="mt-3 font-heading text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[1.05] text-navy">
              Our Core Values
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The principles that govern every policy review, risk placement, and client relationship across Australia.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((val, i) => {
            const Icon = valueIcons[i % valueIcons.length];
            return (
              <div
                key={val.title}
                className="group relative flex flex-col justify-between border border-navy/15 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lg md:p-8"
              >
                <CornerDots inset="-0.4rem" className="text-navy/20 transition-colors group-hover:text-navy/40" />
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl text-navy/40">0{i + 1}</span>
                    <Icon className="size-6 text-navy" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl leading-snug text-navy md:text-2xl">{val.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{val.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Our Services (Always visible, high contrast navy & white cards) */}
      <section className="relative z-10 bg-navy px-6 py-24 text-white md:px-8 md:py-32">
        <div className="grid gap-8 md:grid-cols-[1fr_1.5fr] md:items-end">
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Solutions</span>
            <h2 className="mt-3 font-heading text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[1.05] text-white">
              Our Services
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/75">
            Comprehensive insurance programs tailored to the assets, operations, and liabilities of Australian businesses and families.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex flex-col justify-between border border-white/15 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 md:p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl text-white transition-colors group-hover:text-white md:text-2xl">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="size-5 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>
                <p className="mt-4 text-base leading-relaxed text-white/75">{service.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center text-sm font-medium text-white/90 underline-offset-4 group-hover:underline">
                Explore coverage &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. The Kooo Approach (Advisory Methodology) */}
      <section className="relative z-10 px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-8 md:grid-cols-[1fr_1.5fr] md:items-end">
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Methodology</span>
            <h2 className="mt-3 font-heading text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[1.05] text-navy">
              The Kooo Approach
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A disciplined, four-phase advisory process designed to map exposures, secure competitive terms, and advocate on your behalf.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approachPhases.map((phase) => (
            <div
              key={phase.step}
              className="group relative border border-navy/15 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lg md:p-8"
            >
              <CornerDots inset="-0.4rem" className="text-navy/20 group-hover:text-navy/40 transition-colors" />
              <span className="font-heading text-3xl text-navy">{phase.step}</span>
              <h3 className="mt-4 font-heading text-xl leading-snug text-navy md:text-2xl">{phase.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Who We Work With (Industry Sectors) */}
      <section className="relative z-10 px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Partnership</span>
            <h2 className="mt-3 font-heading text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[1.02] text-navy">
              Who We Protect
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">{about.workWithIntro}</p>
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {about.workWith.map((group, i) => (
            <figure key={group} className="group">
              {/* Three-column layout: parallax staggered columns */}
              <Parallax amount={[0, 32, 16][i % 3]} query="(min-width: 1024px)">
                <ImageReveal
                  src={about.workWithImages[i]}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[4/5]"
                />
                <figcaption className="mt-4 flex items-start justify-between gap-6">
                  <span className="text-lg leading-snug text-navy md:text-xl">{group}</span>
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-navy" />
                </figcaption>
              </Parallax>
            </figure>
          ))}

          {/* Forward Action Card: Deep Navy with Crisp White typography & CTA */}
          <div className="flex aspect-[4/5] flex-col justify-between bg-navy p-7 text-white md:p-9">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/60">Advocacy</span>
              <h3 className="mt-3 text-[clamp(1.75rem,2.4vw,2.25rem)] leading-tight text-white">{about.forward.title}</h3>
              <p className="mt-5 leading-relaxed text-white/80">{about.forward.text}</p>
              <CtaLink href="/contact" className="mt-8">
                Let&apos;s Talk
              </CtaLink>
            </div>
            <KoooLogo wordmarkOnly className="w-40 self-end text-white" title="" />
          </div>
        </div>
      </section>

      {/* 7. Why Choose Kooo */}
      <NumberedRows title="Why choose Kooo" intro={about.whyIntro} items={about.why.map((text) => ({ text }))} />
    </>
  );
}
