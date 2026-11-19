import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, CheckCircle2, Phone } from "lucide-react";
import { industries } from "@/content/industries";
import { contact } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { CornerDots } from "@/components/ui/corner-dots";
import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "Industries | Industry-Specific Insurance",
  description:
    "Tailored insurance packages designed for Australian business sectors including NDIS providers, tradies, hospitality, transport, retail, and strata.",
};

export default function IndustriesIndexPage() {
  return (
    <>
      <PageTitle
        words={["Industry", "Solutions"]}
        intro="Every industry faces distinct operational, statutory, and liability exposures. Kooo Insurance structures tailored protection for businesses, care providers, and trades across Australia."
      />

      <section className="relative z-10 px-6 pb-28 md:px-8 md:pb-36">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-navy/20 pb-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-navy/70">
            Australian Industry Sectors ({industries.length})
          </span>
          <span className="text-sm text-muted-foreground">
            Explore dedicated sector packages and compliance guides &rarr;
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group relative flex flex-col justify-between border border-navy/15 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy hover:shadow-xl md:p-8"
            >
              <CornerDots inset="-0.4rem" className="text-navy/20 group-hover:text-navy/40 transition-colors" />
              <div>
                <div className="relative mb-6 aspect-[16/10] overflow-hidden bg-navy/10">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute bottom-3 left-3 rounded bg-navy/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    {industry.shortName}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-heading text-2xl text-navy transition-colors group-hover:text-navy">
                    {industry.name}
                  </h2>
                  <ArrowUpRight className="size-5 shrink-0 text-navy/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy" />
                </div>

                <p className="mt-3 text-base leading-relaxed text-muted-foreground line-clamp-3">
                  {industry.summary}
                </p>

                <div className="mt-6 border-t border-navy/10 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-navy/70">Key Protections:</span>
                  <ul className="mt-2 space-y-1.5 text-xs text-navy/80">
                    {industry.recommendedCovers.slice(0, 3).map((c) => (
                      <li key={c.title} className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 shrink-0 text-navy" />
                        <span className="truncate">{c.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-navy/15 pt-4 text-xs font-semibold uppercase tracking-wider text-navy">
                <span>View Sector Package</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Direct Quote Banner */}
      <section className="relative z-10 bg-navy px-6 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-white/70">Sector Risk Advisory</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.75rem)] leading-tight text-white">
            Need a Custom Insurance Architecture for Your Industry?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            If your occupation or industry isn&apos;t listed above, our brokers have access to bespoke Australian and international underwriting agencies. Contact us for an independent risk audit.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CtaLink href="/contact" variant="light">
              Request an Industry Quote
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

