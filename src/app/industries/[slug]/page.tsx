import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, AlertCircle, Phone, FileCheck } from "lucide-react";
import { getIndustry, industries } from "@/content/industries";
import { contact } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { CornerDots } from "@/components/ui/corner-dots";
import { CtaLink } from "@/components/ui/cta-link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry Insurance | Kooo Insurance" };
  return {
    title: `${industry.name} Insurance Solutions | Kooo Insurance`,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  const otherIndustries = industries
    .filter((ind) => ind.slug !== industry.slug)
    .slice(0, 3);

  return (
    <>
      <PageTitle words={[industry.shortName, "Sector"]} intro={industry.intro} />

      {/* Breadcrumb */}
      <section className="relative z-10 px-6 pt-6 md:px-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground border-b border-navy/15 pb-6">
          <Link href="/industries" className="hover:text-navy transition-colors">
            Industries
          </Link>
          <span>/</span>
          <span className="font-medium text-navy">{industry.name}</span>
        </div>
      </section>

      {/* Hero Sector Stats Banner */}
      {industry.stats && (
        <section className="relative z-10 px-6 py-8 md:px-8">
          <div className="grid gap-6 border border-navy/15 bg-white p-6 sm:grid-cols-3 md:p-8">
            {industry.stats.map((s) => (
              <div key={s.label} className="border-b border-navy/10 pb-4 sm:border-b-0 sm:border-r sm:pr-6 last:border-0">
                <span className="font-heading text-3xl text-navy md:text-4xl">{s.value}</span>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Main Industry Risk & Package Detail */}
      <section className="relative z-10 px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1.2fr]">
          <div className="space-y-12">
            {/* Overview & Context */}
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Industry Scope</span>
              <h2 className="mt-3 font-heading text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.1] text-navy">
                {industry.heroTitle}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-navy/85 md:text-xl font-body">
                {industry.description}
              </p>
            </div>

            {/* Businesses & Audiences Covered */}
            {industry.audiences && industry.audiences.length > 0 && (
              <div className="relative border border-navy/15 bg-white p-7 md:p-8">
                <CornerDots inset="-0.4rem" className="text-navy/20" />
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">
                  Sector Occupations &amp; Operations
                </span>
                <h3 className="mt-2 font-heading text-2xl text-navy">Who This Protection Is Built For</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Australian businesses, contractors, and specialist operators covered under this industry architecture:
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {industry.audiences.map((aud) => (
                    <span
                      key={aud}
                      className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-cloud/60 px-3.5 py-1.5 text-xs font-medium text-navy"
                    >
                      <CheckCircle2 className="size-3.5 text-navy shrink-0" />
                      <span>{aud}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Operational Risks */}
            <div className="relative border border-navy/15 bg-white p-8">
              <CornerDots inset="-0.4rem" className="text-navy/20" />
              <div className="flex items-center gap-3 border-b border-navy/15 pb-4">
                <AlertCircle className="size-5 text-navy" />
                <h3 className="font-heading text-2xl text-navy">Key Sector Risks &amp; Exposures</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Australian operators in this sector face specific statutory and liability challenges:
              </p>
              <ul className="mt-6 space-y-4">
                {industry.keyRisks.map((risk) => (
                  <li key={risk} className="flex items-start gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-navy" />
                    <span className="text-base text-ink/85">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Insurance Covers */}
            <div>
              <div className="mb-6">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Recommended Architecture</span>
                <h3 className="mt-2 font-heading text-3xl text-navy">Tailored Insurance Package</h3>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {industry.recommendedCovers.map((cover) => (
                  <Link
                    key={cover.title}
                    href={cover.href}
                    className="group border border-navy/15 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-heading text-xl text-navy group-hover:text-navy transition-colors">
                          {cover.title}
                        </h4>
                        <ArrowUpRight className="size-4 shrink-0 text-navy/40 group-hover:text-navy transition-colors" />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cover.description}</p>
                    </div>
                    <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-navy group-hover:underline">
                      Explore this cover &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Regulatory & Compliance Notes */}
            <div className="border-l-2 border-navy bg-cloud/50 p-6 md:p-8">
              <div className="flex items-center gap-2.5">
                <FileCheck className="size-5 text-navy" />
                <h4 className="font-heading text-lg text-navy">Regulatory Compliance Note</h4>
              </div>
              <p className="mt-3 text-base leading-relaxed text-navy/85">{industry.regulatoryNotes}</p>
              <p className="mt-3 text-sm text-muted-foreground">{industry.whyKooo}</p>
            </div>
          </div>

          {/* Sticky Sidebar: Request a Quote & Contact */}
          <div className="lg:sticky lg:top-28 lg:self-start space-y-6">
            <div className="relative border border-navy bg-navy p-8 text-white">
              <CornerDots inset="-0.4rem" className="text-white/30" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/70">Specialist Advisory</span>
              <h3 className="mt-3 font-heading text-2xl text-white md:text-3xl">
                Get an Industry Quote
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Speak directly with an accredited broker who understands {industry.name}. We benchmark your policy against Australia&apos;s leading underwriting agencies.
              </p>

              <div className="mt-8 space-y-4">
                <CtaLink href="/contact" variant="light" className="w-full text-center justify-center">
                  Request Sector Quote
                </CtaLink>
                <a
                  href={contact.phoneHref}
                  className="flex items-center justify-center gap-2.5 border border-white/30 py-3.5 font-button text-base text-white hover:border-white hover:bg-white/10 transition"
                >
                  <Phone className="size-4" />
                  <span>Call {contact.phone}</span>
                </a>
              </div>

              <div className="mt-8 border-t border-white/20 pt-6 text-xs text-white/60 space-y-2">
                <p>Same-day Certificate of Currency issuance</p>
                <p>CAR No. 1315320 | Metrix Connect AFSL 525491</p>
                <p>Licensed Australia-wide</p>
              </div>
            </div>

            <div className="border border-navy/15 bg-white p-6">
              <h4 className="font-heading text-lg text-navy">Explore All Industries</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Browse our complete list of Australian sector risk profiles.
              </p>
              <Link
                href="/industries"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline"
              >
                <ArrowLeft className="size-4" />
                <span>Back to Industries Index</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Industries Navigation */}
      {otherIndustries.length > 0 && (
        <section className="relative z-10 bg-cloud px-6 py-20 md:px-8 md:py-28 border-t border-navy/15">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Cross-Sector</span>
              <h2 className="mt-2 font-heading text-3xl text-navy">Other Industry Sectors</h2>
            </div>
            <Link href="/industries" className="text-sm font-semibold text-navy hover:underline">
              View all sectors &rarr;
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group border border-navy/15 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-md"
              >
                <h3 className="font-heading text-xl text-navy group-hover:text-navy transition-colors">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{ind.summary}</p>
                <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-navy group-hover:underline">
                  View guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

