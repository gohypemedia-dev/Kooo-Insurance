"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { categories, contact, legal, tagline } from "@/content/site";
import { RingsMark } from "@/components/three/rings-mark";
import { RollText } from "@/components/motion/roll-text";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";

const pages = [
  { label: "Insurance", href: "/insurancesolutions" },
  { label: "Industries", href: "/industries" },
  { label: "Claims", href: "/claims" },
  { label: "About Kooo", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const supportPages = [
  { label: "Referral Partners", href: "/referral-partners" },
  { label: "Help & FAQs", href: "/faqs" },
  { label: "Service Locations", href: "/locations" },
];

const WORDMARK = "Kooo Insurance";

export function SiteFooter() {
  const ref = useRef<HTMLElement>(null);
  const wordBox = useRef<HTMLDivElement>(null);
  const word = useRef<HTMLSpanElement>(null);

  // Size the wordmark so it spans the panel exactly, at every width and once the font loads.
  useEffect(() => {
    const box = wordBox.current;
    const text = word.current;
    if (!box || !text) return;
    // offsetWidth is the untransformed layout width, so the panel's scale animation can't skew it.
    const fit = () => {
      text.style.fontSize = "100px";
      const natural = text.offsetWidth;
      if (natural) text.style.fontSize = `${(100 * box.clientWidth) / natural}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    return () => ro.disconnect();
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const range = { trigger: ref.current, start: "top bottom", end: "bottom bottom", scrub: 0.8 };
        // Footer reveal: the panel starts tucked up behind the page (clipped by the footer's top edge)
        // and travels slower than the scroll, so the page appears to lift off it.
        gsap.fromTo("[data-footer-panel]", { yPercent: -45, scale: 0.95 }, { yPercent: 0, scale: 1, ease: "none", scrollTrigger: range });
        // Wordmark letters rise one after another, tied to the scroll.
        gsap.fromTo(
          "[data-footer-char]",
          { yPercent: 105 },
          {
            yPercent: 0,
            ease: "none",
            stagger: 0.06,
            scrollTrigger: { trigger: ref.current, start: "top 70%", end: "bottom bottom", scrub: 0.8 },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <footer ref={ref} className="overflow-clip bg-cloud p-2 sm:p-3 md:p-4">
      <div
        data-footer-panel
        className="origin-bottom rounded-[2rem] bg-navy/20 p-2 will-change-transform md:p-2.5"
      >
        <div className="overflow-hidden rounded-[1.6rem] bg-navy text-white">
          <div className="px-6 pb-6 pt-8 md:px-10 md:pt-10">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1.1fr]">
              <div>
                <RingsMark color="#ffffff" className="-ml-4 h-28 w-48 md:h-36 md:w-60" />
                <p className="mt-2 max-w-60 font-heading text-2xl leading-snug text-white">{tagline}</p>
              </div>

              <nav aria-label="Footer">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">Navigation</p>
                <ul className="space-y-2">
                  {pages.map((p) => (
                    <li key={p.href}>
                      <Link href={p.href} className="group inline-block text-lg text-white hover:text-white/80 transition-colors md:text-xl">
                        <RollText text={p.label} />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-white/15 pt-4">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/50">Support</p>
                  <ul className="space-y-1.5 text-sm text-white/80">
                    {supportPages.map((sp) => (
                      <li key={sp.href}>
                        <Link href={sp.href} className="hover:text-white transition">
                          {sp.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">Insurance solutions</p>
                <ul className="space-y-2">
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/${c.slug}`} className="group inline-block text-base text-white/90 hover:text-white md:text-[17px]">
                        <RollText text={c.name} stagger={10} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5 text-base md:text-[17px]">
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-white/60">Get in touch</p>
                  <a href={contact.phoneHref} className="group block w-fit text-xl font-heading text-white hover:text-white/80">
                    <RollText text={contact.phone} stagger={10} />
                  </a>
                  <a href={`mailto:${contact.email}`} className="block break-all text-sm text-white/85 hover:underline mt-1">
                    {contact.email}
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-white/60">Headquarters</p>
                  <p className="text-sm text-white/85">{contact.address}</p>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="inline-block bg-white px-5 py-2.5 font-button text-xs font-semibold uppercase tracking-wider text-navy hover:bg-cloud transition"
                  >
                    Request a Quote
                  </Link>
                </div>
                <div className="flex gap-2 pt-1">
                  <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="border border-white/25 p-2.5 text-white transition-colors hover:bg-white hover:text-navy">
                    <FacebookIcon className="size-5" />
                  </a>
                  <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="border border-white/25 p-2.5 text-white transition-colors hover:bg-white hover:text-navy">
                    <InstagramIcon className="size-5" />
                  </a>
                </div>
              </div>
            </div>

            <div ref={wordBox} className="mt-14 md:mt-20">
              <p className="overflow-hidden whitespace-nowrap pb-[0.06em] text-center font-heading leading-[1.02] text-white">
                <span className="sr-only">{WORDMARK}</span>
                <span ref={word} aria-hidden className="inline-flex text-[12vw]">
                  {Array.from(WORDMARK).map((char, i) => (
                    <span key={i} data-footer-char className="inline-block whitespace-pre will-change-transform">
                      {char}
                    </span>
                  ))}
                </span>
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs uppercase tracking-wider text-white/80 md:text-[13px] lg:flex-row lg:items-center lg:justify-between">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {legal.documents.map((doc) => (
                  <li key={doc.href}>
                    <a href={doc.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      {doc.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p>All Rights Reserved | Kooo Insurance</p>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/65 md:text-[13px]">{legal.copyright}</p>
            {/* Required by the CC BY 4.0 licences of the 3D vehicles in the homepage film. */}
            <p className="mt-3 text-[11px] leading-relaxed text-white/45">
              3D models: <a href="https://sketchfab.com/3d-models/truck-eda924f23ba04cd5b1e5160abf2320fa" target="_blank" rel="noopener" className="underline hover:text-white/80">“Truck” by ROY</a> and{" "}
              <a href="https://sketchfab.com/3d-models/hilux-like-pick-up-truck-501c2fa5bd1a4ecd822365fa7daa8019" target="_blank" rel="noopener" className="underline hover:text-white/80">“Hilux-like pick-up truck” by matisosanimation</a>, licensed{" "}
              <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener" className="underline hover:text-white/80">CC BY 4.0</a>, modified. Trees, props, textures and lighting from Poly Haven (CC0).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
