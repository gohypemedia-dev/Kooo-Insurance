import type { Metadata } from "next";
import { contact, contactPage } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { ImageBand } from "@/components/sections/image-band";
import { Accordion } from "@/components/sections/accordion";
import { Reveal } from "@/components/motion/reveal";
import { SplitReveal } from "@/components/motion/split-reveal";
import { CornerDots } from "@/components/ui/corner-dots";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `${contactPage.title} Call ${contact.phone} or email ${contact.email}.`,
};

const details = [
  { label: "Phone", value: contact.phone, href: contact.phoneHref },
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Address", value: contact.address },
  { label: "Facebook", value: "Kooo Insurance", href: contact.facebook },
  { label: "Instagram", value: "@koooinsurance", href: contact.instagram },
];

export default function ContactPage() {
  return (
    <>
      <PageTitle words={["Let’s", "Talk"]} intro={`${contactPage.title} ${contactPage.subtitle}`} />

      <section className="relative z-10 px-6 pb-28 md:px-8">
        <div className="grid gap-12 border-t border-navy/20 pt-12 lg:grid-cols-2">
          <Reveal stagger={0.1} className="space-y-5">
            <a href={`mailto:${contact.email}`} className="group flex items-center gap-4 font-heading text-[clamp(1.4rem,2.6vw,2.4rem)] text-navy">
              <span aria-hidden className="size-1.5 shrink-0 bg-kooo-green-dark" />
              <span className="break-all border-b border-transparent transition-colors group-hover:border-navy">{contact.email}</span>
            </a>
            <a href={contact.phoneHref} className="group flex items-center gap-4 font-heading text-[clamp(1.4rem,2.6vw,2.4rem)] text-navy">
              <span aria-hidden className="size-1.5 shrink-0 bg-kooo-green-dark" />
              <span className="border-b border-transparent transition-colors group-hover:border-navy">{contact.phone}</span>
            </a>
          </Reveal>

          <Reveal>
            <div className="flex items-center justify-between pb-4">
              <h2 className="font-sans text-lg font-semibold">Contact details</h2>
              <span className="inline-flex items-center gap-2 text-base text-kooo-green-dark">
                <span aria-hidden className="size-2 rounded-full bg-kooo-green" /> Australia-wide
              </span>
            </div>
            <dl className="border-t border-navy/15">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-navy/15 px-3 py-3.5 text-base transition-colors duration-300 hover:bg-navy hover:text-white md:text-lg [&:hover_a]:text-kooo-mint"
                >
                  <dt className="font-medium">{d.label}</dt>
                  <dd className="text-right">
                    {d.href ? (
                      <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="break-all text-navy">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-28 md:px-8 md:pb-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          {/* Stays pinned beside the taller column on desktop. */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SplitReveal as="h2" className="text-[clamp(2.25rem,4.4vw,4.25rem)] leading-[1.05]">
              {contactPage.formTitle}
            </SplitReveal>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">{contactPage.subtitle}</p>
          </div>
          <Reveal className="relative bg-white p-6 md:p-10">
            <CornerDots inset="-0.6rem" className="text-kooo-green-dark" />
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-28 md:px-8 md:pb-36">
        <div className="grid gap-12 border-t border-navy/20 pt-12 lg:grid-cols-[1fr_1.5fr]">
          {/* Stays pinned beside the taller column on desktop. */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SplitReveal as="h2" className="text-[clamp(2.25rem,4.4vw,4.25rem)] leading-[1.05]">
              Service areas
            </SplitReveal>
            <SplitReveal className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">{contactPage.serviceAreasIntro}</SplitReveal>
          </div>
          <Accordion items={contactPage.serviceAreas} />
        </div>
      </section>

      <ImageBand image={contactPage.image} title={contactPage.closing} />
    </>
  );
}
