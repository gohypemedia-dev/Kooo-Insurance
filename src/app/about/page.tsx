import type { Metadata } from "next";
import { about, tagline } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { ImageBand } from "@/components/sections/image-band";
import { NumberedRows } from "@/components/sections/numbered-rows";
import { Reveal } from "@/components/motion/reveal";
import { ImageReveal } from "@/components/motion/image-reveal";
import { Parallax } from "@/components/motion/parallax";
import { SplitReveal } from "@/components/motion/split-reveal";
import { KoooLogo } from "@/components/brand/kooo-logo";
import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "About",
  description: about.whoWeAre,
};

export default function AboutPage() {
  return (
    <>
      <PageTitle words={["About", "Kooo"]} intro={tagline} />

      <section className="relative z-10 px-6 pb-28 md:px-8 md:pb-36">
        <div className="grid gap-8 border-t border-navy/20 pt-12 lg:grid-cols-[1fr_2.3fr]">
          <h2 className="font-sans text-sm uppercase tracking-[0.2em]">Who we are</h2>
          <SplitReveal className="font-heading text-[clamp(1.7rem,3.1vw,3rem)] leading-[1.25] text-navy">{about.whoWeAre}</SplitReveal>
        </div>
      </section>

      <ImageBand image="/images/photos/pexels-840996.jpg" title="Our mission" text={about.mission} />

      <section className="relative z-10 px-6 py-28 md:px-8 md:py-36">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
          <SplitReveal as="h2" className="text-[clamp(2.5rem,5vw,5rem)] leading-[1.02]">
            Who we work with
          </SplitReveal>
          <SplitReveal className="text-lg leading-relaxed text-muted-foreground">{about.workWithIntro}</SplitReveal>
        </div>

        <Reveal stagger={0.08} className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {about.workWith.map((group, i) => (
            <figure key={group} className="group">
              {/* Three-column layout only: each column travels at its own speed. */}
              <Parallax amount={[0, 36, 18][i % 3]} query="(min-width: 1024px)">
                <ImageReveal
                  src={about.workWithImages[i]}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[4/5]"
                />
                <figcaption className="mt-4 flex items-start justify-between gap-6">
                  <span className="text-lg leading-snug text-navy md:text-xl">{group}</span>
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-kooo-green-dark" />
                </figcaption>
              </Parallax>
            </figure>
          ))}

          <div className="flex aspect-[4/5] flex-col justify-between bg-kooo-mint p-7 md:p-9">
            <div>
              <h3 className="text-[clamp(1.75rem,2.4vw,2.25rem)] leading-tight">{about.forward.title}</h3>
              <p className="mt-5 leading-relaxed text-navy/80">{about.forward.text}</p>
              <CtaLink href="/contact" className="mt-8">
                Let&apos;s Talk
              </CtaLink>
            </div>
            <KoooLogo wordmarkOnly className="w-40 self-end text-navy" title="" />
          </div>
        </Reveal>
      </section>

      <NumberedRows title="Why choose Kooo" intro={about.whyIntro} items={about.why.map((text) => ({ text }))} />
    </>
  );
}
