import type { Metadata } from "next";
import { Phone, AlertTriangle, ShieldCheck, Clock, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { claimsContent } from "@/content/claims";
import { contact } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { CornerDots } from "@/components/ui/corner-dots";
import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "Claims | Lodgement & Advocacy",
  description:
    "How to lodge an insurance claim with Kooo Insurance. Dedicated client advocacy, step-by-step guidance, and after-hours insurer emergency numbers.",
};

export default function ClaimsPage() {
  return (
    <>
      <PageTitle words={["Claims", "Advocacy"]} intro={claimsContent.intro} />

      {/* Emergency Notice & Direct Contact Bar */}
      <section className="relative z-10 px-6 pt-6 pb-16 md:px-8">
        <div className="border border-navy bg-navy p-8 text-white md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <Clock className="size-3.5" />
                <span>Dedicated Claim Support</span>
              </div>
              <h2 className="font-heading text-2xl text-white md:text-3xl">
                Need to Lodge an Urgent Claim?
              </h2>
              <p className="text-base text-white/80">
                Call our direct Australian brokerage team on <strong className="text-white">{claimsContent.directContact.phone}</strong> during business hours, or contact your insurer&apos;s 24/7 emergency response service below.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={claimsContent.directContact.phoneHref}
                className="inline-flex items-center gap-2 bg-white px-6 py-3.5 font-button text-base font-semibold text-navy hover:bg-cloud transition"
              >
                <Phone className="size-4" />
                <span>Call {claimsContent.directContact.phone}</span>
              </a>
              <CtaLink href="/contact" variant="light">
                Submit Online Enquiry
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Claims Process */}
      <section className="relative z-10 px-6 py-16 md:px-8 md:py-24">
        <div className="mb-12">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Methodology</span>
          <h2 className="mt-2 font-heading text-[clamp(2.2rem,4vw,3.75rem)] leading-tight text-navy">
            Our 4-Step Claims Process
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            We handle the paperwork, negotiations, and loss adjusters so you can focus on running your business or restoring your property.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {claimsContent.processSteps.map((s) => (
            <div key={s.step} className="relative border border-navy/15 bg-white p-7 md:p-8 flex flex-col justify-between">
              <CornerDots inset="-0.4rem" className="text-navy/20" />
              <div>
                <span className="font-heading text-3xl text-navy">{s.step}</span>
                <h3 className="mt-4 font-heading text-xl text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Crucial Dos & Don'ts */}
      <section className="relative z-10 bg-cloud px-6 py-16 md:px-8 md:py-24 border-t border-navy/15">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy/70">
              <AlertTriangle className="size-4 text-navy" />
              <span>Important Claim Guidelines</span>
            </div>
            <h2 className="mt-3 font-heading text-[clamp(2rem,3.5vw,3.25rem)] leading-tight text-navy">
              Protecting Your Entitlement
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              What you say and do immediately following an incident directly influences the underwriter&apos;s liability decision. Follow these key rules to ensure full coverage.
            </p>
          </div>

          <div className="space-y-4">
            {claimsContent.whatNotToDo.map((rule) => (
              <div key={rule} className="flex items-start gap-3.5 border border-navy/15 bg-white p-5">
                <ShieldCheck className="size-5 shrink-0 text-navy mt-0.5" />
                <span className="text-base text-navy/90 font-medium">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Insurer Emergency Hotlines */}
      <section className="relative z-10 px-6 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-navy/20 pb-4">
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Emergency Access</span>
            <h2 className="mt-2 font-heading text-3xl text-navy">Direct Insurer Emergency Hotlines</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            For major after-hours property damage, heavy vehicle towing, or emergency make-safe repairs, contact your insurer directly:
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {claimsContent.emergencyInsurers.map((ins) => (
            <div key={ins.name} className="border border-navy/15 bg-white p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-lg text-navy">{ins.name}</h3>
                <p className="mt-2 text-xl font-heading text-navy">
                  <a href={`tel:${ins.phone.replace(/\s+/g, "")}`} className="hover:underline">
                    {ins.phone}
                  </a>
                </p>
              </div>
              <a
                href={ins.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-navy transition"
              >
                <span>Insurer Claims Portal</span>
                <ExternalLink className="size-3" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

