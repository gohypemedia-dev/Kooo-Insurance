import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Building2 } from "lucide-react";
import { locations } from "@/content/locations";
import { contact } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { CornerDots } from "@/components/ui/corner-dots";
import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "Locations | Australian Service Areas",
  description:
    "Kooo Insurance is based in Bella Vista, NSW, serving clients across The Hills District, Greater Sydney, Regional NSW, and nationwide throughout Australia.",
};

export default function LocationsIndexPage() {
  return (
    <>
      <PageTitle
        words={["Our Service", "Locations"]}
        intro="Based in Bella Vista in Sydney's Hills District, Kooo Insurance supports businesses, trades, transport fleets, and families across all Australian states and territories."
      />

      <section className="relative z-10 px-6 pb-28 md:px-8 md:pb-36">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-navy/20 pb-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-navy/70">
            Australian Search &amp; Service Regions ({locations.length})
          </span>
          <span className="text-sm text-muted-foreground">
            Headquartered in NSW with nationwide brokerage representation
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group relative flex flex-col justify-between border border-navy/15 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy hover:shadow-xl md:p-8"
            >
              <CornerDots inset="-0.4rem" className="text-navy/20 group-hover:text-navy/40 transition-colors" />
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy/70">
                  <MapPin className="size-3.5 text-navy" />
                  <span>{loc.region}</span>
                </div>

                <div className="mt-3 flex items-start justify-between gap-4">
                  <h2 className="font-heading text-2xl text-navy transition-colors group-hover:text-navy">
                    {loc.name}
                  </h2>
                  <ArrowUpRight className="size-5 shrink-0 text-navy/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy" />
                </div>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground line-clamp-3">
                  {loc.intro}
                </p>

                <div className="mt-6 border-t border-navy/10 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-navy/70">Key Local Suburbs &amp; Areas:</span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {loc.suburbsCovered.slice(0, 5).map((sub) => (
                      <span key={sub} className="bg-cloud px-2 py-0.5 text-xs text-navy/80">
                        {sub}
                      </span>
                    ))}
                    {loc.suburbsCovered.length > 5 && (
                      <span className="text-xs text-muted-foreground self-center">
                        +{loc.suburbsCovered.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-navy/15 pt-4 text-xs font-semibold uppercase tracking-wider text-navy">
                <span>View Region Details</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Head Office Callout */}
      <section className="relative z-10 bg-navy px-6 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
            <Building2 className="size-3.5" />
            <span>National Headquarters</span>
          </div>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.75rem)] leading-tight text-white">
            7-9 Irvine Place, Bella Vista NSW 2153
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Based in Sydney&apos;s Norwest commercial corridor, supporting clients locally across Greater Sydney and nationwide under AFSL No. 525491.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CtaLink href="/contact" variant="light">
              Speak With an Advisor
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

