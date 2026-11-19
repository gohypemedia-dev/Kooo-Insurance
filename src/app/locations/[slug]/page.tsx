import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Phone, Mail, Building2, CheckCircle2, ShieldCheck } from "lucide-react";
import { getLocation, locations } from "@/content/locations";
import { PageTitle } from "@/components/sections/page-title";
import { CornerDots } from "@/components/ui/corner-dots";
import { CtaLink } from "@/components/ui/cta-link";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return { title: "Location | Kooo Insurance" };
  return {
    title: `${loc.name} Insurance Brokers | Kooo Insurance`,
    description: loc.intro,
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocation(slug);

  if (!loc) {
    notFound();
  }

  const otherLocations = locations
    .filter((l) => l.slug !== loc.slug)
    .slice(0, 3);

  return (
    <>
      <PageTitle words={[loc.name.split(" ")[0], "Region"]} intro={loc.intro} />

      {/* Breadcrumb */}
      <section className="relative z-10 px-6 pt-6 md:px-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground border-b border-navy/15 pb-6">
          <Link href="/locations" className="hover:text-navy transition-colors">
            Locations
          </Link>
          <span>/</span>
          <span className="font-medium text-navy">{loc.name}</span>
        </div>
      </section>

      {/* Main Location Detail */}
      <section className="relative z-10 px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1.2fr]">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy/70">
                <MapPin className="size-3.5 text-navy" />
                <span>{loc.region}</span>
              </div>
              <h2 className="mt-3 font-heading text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.1] text-navy">
                {loc.headline}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-navy/85 md:text-xl font-body">
                {loc.description}
              </p>
            </div>

            {/* Local Focus & Advisory */}
            <div className="border-l-2 border-navy bg-cloud/50 p-6 md:p-8">
              <h3 className="font-heading text-xl text-navy">Local Australian Market Presence</h3>
              <p className="mt-3 text-base leading-relaxed text-navy/85">{loc.localFocus}</p>
            </div>

            {/* Suburbs & Commercial Areas */}
            <div className="relative border border-navy/15 bg-white p-8">
              <CornerDots inset="-0.4rem" className="text-navy/20" />
              <h3 className="font-heading text-2xl text-navy">Suburbs &amp; Surrounds Covered</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We provide commercial, trade, and personal insurance advisory across:
              </p>
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2 md:grid-cols-3">
                {loc.suburbsCovered.map((sub) => (
                  <div key={sub} className="flex items-center gap-2 text-sm text-navy/90">
                    <span className="size-1.5 rounded-full bg-navy" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Local Industries */}
            <div>
              <h3 className="font-heading text-2xl text-navy">Major Industries We Support in {loc.name}</h3>
              <ul className="mt-4 space-y-3">
                {loc.keyIndustries.map((ind) => (
                  <li key={ind} className="flex items-start gap-3 border border-navy/10 bg-white p-4">
                    <ShieldCheck className="size-5 shrink-0 text-navy mt-0.5" />
                    <span className="text-sm font-medium text-navy/90">{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky Sidebar: Local Contact Card */}
          <div className="lg:sticky lg:top-28 lg:self-start space-y-6">
            <div className="relative border border-navy bg-navy p-8 text-white">
              <CornerDots inset="-0.4rem" className="text-white/30" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/70">Local Broker Contact</span>
              <h3 className="mt-3 font-heading text-2xl text-white md:text-3xl">
                Connect With Your Advisor
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Direct phone and in-person advisory for clients in {loc.name}. No offshore call centres—just straightforward Australian advice.
              </p>

              <div className="mt-6 space-y-3 border-y border-white/15 py-6 text-sm text-white/85">
                <div className="flex items-start gap-3">
                  <Building2 className="size-4 shrink-0 mt-1 text-white/60" />
                  <span>{loc.officeInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-white/60" />
                  <a href={loc.officeInfo.phoneHref} className="hover:text-white transition font-medium">
                    {loc.officeInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-white/60" />
                  <a href={`mailto:${loc.officeInfo.email}`} className="hover:text-white transition">
                    {loc.officeInfo.email}
                  </a>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <CtaLink href="/contact" variant="light" className="w-full text-center justify-center">
                  Request a Local Quote
                </CtaLink>
                <a
                  href={loc.officeInfo.phoneHref}
                  className="flex items-center justify-center gap-2.5 border border-white/30 py-3.5 font-button text-base text-white hover:border-white hover:bg-white/10 transition"
                >
                  <Phone className="size-4" />
                  <span>Call {loc.officeInfo.phone}</span>
                </a>
              </div>
            </div>

            <div className="border border-navy/15 bg-white p-6">
              <h4 className="font-heading text-lg text-navy">All Service Locations</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                View our complete list of Australian service corridors.
              </p>
              <Link
                href="/locations"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline"
              >
                <ArrowLeft className="size-4" />
                <span>Back to Locations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Location Navigation */}
      {otherLocations.length > 0 && (
        <section className="relative z-10 bg-cloud px-6 py-20 md:px-8 md:py-28 border-t border-navy/15">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Other Regions</span>
              <h2 className="mt-2 font-heading text-3xl text-navy">Explore Other Service Areas</h2>
            </div>
            <Link href="/locations" className="text-sm font-semibold text-navy hover:underline">
              View all locations &rarr;
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherLocations.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="group border border-navy/15 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{l.region}</span>
                <h3 className="mt-1 font-heading text-xl text-navy group-hover:text-navy transition-colors">{l.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{l.intro}</p>
                <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-navy group-hover:underline">
                  View area details &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

