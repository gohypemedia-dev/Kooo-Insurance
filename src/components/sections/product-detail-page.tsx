import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, XCircle, ShieldCheck, Phone, ArrowUpRight, HelpCircle } from "lucide-react";
import { contact, getCategory, type Category } from "@/content/site";
import { products, getProduct, slugify } from "@/content/products";
import { PageTitle } from "@/components/sections/page-title";
import { CornerDots } from "@/components/ui/corner-dots";
import { CtaLink } from "@/components/ui/cta-link";
import { Accordion } from "@/components/sections/accordion";

type ProductDetailPageProps = {
  categorySlug: string;
  productSlug: string;
};

export function ProductDetailPage({ categorySlug, productSlug }: ProductDetailPageProps) {
  let category: Category | undefined;
  try {
    category = getCategory(categorySlug);
  } catch {
    notFound();
  }

  // Look up detailed product entry, or construct intelligent fallback from category.items
  let detail = getProduct(productSlug);

  if (!detail) {
    const matchedItem = category.items.find(
      (item) => slugify(item.title) === productSlug || slugify(item.title).includes(productSlug) || productSlug.includes(slugify(item.title))
    );

    if (matchedItem) {
      detail = {
        slug: productSlug,
        categorySlug: category.slug,
        categoryName: category.name,
        title: matchedItem.title,
        shortTitle: matchedItem.title.replace(/ Insurance$/i, ""),
        summary: matchedItem.description,
        description: `${matchedItem.title} is an essential component of comprehensive risk management for businesses across Australia. ${matchedItem.description} Kooo Insurance works directly with leading Australian underwriters to structure tailored terms, high-limit endorsements, and competitive pricing for your operations.`,
        whatIsCovered: [
          "Comprehensive protection against sudden and unforeseen operational events",
          "Third-party claims, legal defence costs, and professional representation",
          "Asset, equipment, and structural loss replacement at agreed values",
          "Coverage across all Australian states and territories",
          "Flexible policy limits aligned with contractual and lease covenants",
        ],
        whatIsNotCovered: [
          "Wear, tear, gradual deterioration, or unperformed maintenance",
          "Deliberate, intentional, or unlawful actions",
          "Pre-existing claims or known circumstances prior to policy inception",
        ],
        whoNeedsIt: [
          `Businesses, sole traders, and contractors operating in the ${category.shortName} sector`,
          "Enterprises tendering for commercial contracts or signing commercial leases",
          "Property owners and managers seeking institutional protection",
        ],
        keyBenefits: [
          "Instant Certificate of Currency delivery upon policy binding",
          "Benchmarked across top-tier Australian insurance companies and Lloyd's syndicates",
          "Independent broker advocacy with end-to-end claim management",
        ],
        faqs: [
          {
            question: `How does Kooo Insurance structure ${matchedItem.title}?`,
            answer: `We conduct an independent risk audit of your operations, benchmark coverage across Australia's leading underwriters, and recommend policy limits tailored to your contracts and assets.`,
          },
          {
            question: "How quickly can coverage be bound?",
            answer: "In most commercial cases, terms can be agreed and bound within 24 to 48 hours, with urgent Certificates of Currency issued same-day.",
          },
        ],
      };
    } else {
      notFound();
    }
  }

  const otherProducts = category.items
    .filter((item) => slugify(item.title) !== productSlug)
    .slice(0, 4);

  return (
    <>
      <PageTitle words={[detail.shortTitle, "Cover"]} intro={detail.summary} />

      {/* Breadcrumb & Category Badge */}
      <section className="relative z-10 px-6 pt-6 md:px-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground border-b border-navy/15 pb-6">
          <Link href="/insurancesolutions" className="hover:text-navy transition-colors">
            Insurance Solutions
          </Link>
          <span>/</span>
          <Link href={`/${category.slug}`} className="hover:text-navy transition-colors">
            {category.name}
          </Link>
          <span>/</span>
          <span className="font-medium text-navy">{detail.title}</span>
        </div>
      </section>

      {/* Main Product Overview */}
      <section className="relative z-10 px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1.2fr]">
          <div className="space-y-8">
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Product Overview</span>
              <h2 className="mt-3 font-heading text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.1] text-navy">
                {detail.title}
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-navy/85 md:text-xl font-body">
              {detail.description}
            </p>

            {/* What is Covered vs What is Not Covered */}
            <div className="grid gap-8 pt-6 md:grid-cols-2">
              {/* What is covered */}
              <div className="relative border border-navy/15 bg-white p-7 md:p-8">
                <CornerDots inset="-0.4rem" className="text-navy/20" />
                <div className="flex items-center gap-2.5 border-b border-navy/15 pb-4">
                  <CheckCircle2 className="size-5 text-navy" />
                  <h3 className="font-heading text-xl text-navy">What is Typically Covered</h3>
                </div>
                <ul className="mt-5 space-y-3.5 text-[15px] leading-relaxed text-ink/85">
                  {detail.whatIsCovered.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-navy" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What is not covered */}
              <div className="relative border border-navy/15 bg-cloud/50 p-7 md:p-8">
                <CornerDots inset="-0.4rem" className="text-navy/20" />
                <div className="flex items-center gap-2.5 border-b border-navy/15 pb-4">
                  <XCircle className="size-5 text-navy/60" />
                  <h3 className="font-heading text-xl text-navy">Common Exclusions</h3>
                </div>
                <ul className="mt-5 space-y-3.5 text-[15px] leading-relaxed text-muted-foreground">
                  {detail.whatIsNotCovered.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-navy/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Who Needs It */}
            <div className="pt-6">
              <h3 className="font-heading text-2xl text-navy">Who Needs This Cover?</h3>
              <p className="mt-2 text-base text-muted-foreground">
                This protection is recommended for Australian operators with the following exposures:
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {detail.whoNeedsIt.map((who) => (
                  <li key={who} className="flex items-start gap-3 border border-navy/15 bg-white p-4">
                    <ShieldCheck className="size-5 shrink-0 text-navy mt-0.5" />
                    <span className="text-sm font-medium text-navy/90">{who}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky Request a Quote & Advisor Sidebar */}
          <div className="lg:sticky lg:top-28 lg:self-start space-y-6">
            <div className="relative border border-navy bg-navy p-8 text-white">
              <CornerDots inset="-0.4rem" className="text-white/30" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/70">
                Direct Australian Brokerage
              </span>
              <h3 className="mt-3 font-heading text-2xl text-white md:text-3xl">
                Request a Quote for {detail.shortTitle}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Speak directly with an accredited Australian broker. We review your risk, benchmark terms with leading insurers, and provide instant Certificates of Currency.
              </p>

              <div className="mt-8 space-y-4">
                <CtaLink href="/contact" variant="light" className="w-full text-center justify-center">
                  Request a Quote
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
                <p>Corporate Authorised Representative (CAR No. 1315320)</p>
                <p>Metrix Connect Pty Ltd AFSL No. 525491</p>
                <p>Australia-wide advisory &amp; claims management</p>
              </div>
            </div>

            {/* Back to Category Card */}
            <div className="border border-navy/15 bg-white p-6">
              <h4 className="font-heading text-lg text-navy">Category Overview</h4>
              <p className="mt-2 text-sm text-muted-foreground">{category.summary}</p>
              <Link
                href={`/${category.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline"
              >
                <ArrowLeft className="size-4" />
                <span>View all {category.name} covers</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product FAQs */}
      {detail.faqs.length > 0 && (
        <section className="relative z-10 bg-cloud px-6 py-20 md:px-8 md:py-28 border-t border-navy/15">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr]">
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Questions</span>
              <h2 className="mt-3 font-heading text-[clamp(2.2rem,4vw,3.75rem)] leading-[1.05] text-navy">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Common questions regarding {detail.title} terms, policy limits, and claims.
              </p>
            </div>
            <Accordion
              items={detail.faqs.map((f) => ({
                title: f.question,
                content: f.answer,
              }))}
            />
          </div>
        </section>
      )}

      {/* Other Related Products in Category */}
      {otherProducts.length > 0 && (
        <section className="relative z-10 px-6 py-20 md:px-8 md:py-28 border-t border-navy/15">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/70">Explore More</span>
              <h2 className="mt-2 font-heading text-3xl text-navy">Other {category.name} Solutions</h2>
            </div>
            <Link
              href={`/${category.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:underline"
            >
              <span>See all {category.name}</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherProducts.map((p) => (
              <Link
                key={p.title}
                href={`/${category.slug}/${slugify(p.title)}`}
                className="group border border-navy/15 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-lg text-navy group-hover:text-navy transition-colors">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">{p.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-navy group-hover:underline">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

