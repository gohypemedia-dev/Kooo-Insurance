"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowUpRight } from "lucide-react";
import { gsap, useGSAP, EASE_OUT } from "@/lib/gsap";
import { useUi } from "@/lib/ui-store";
import { categories, contact, tagline } from "@/content/site";
import { KoooLogo } from "@/components/brand/kooo-logo";
import { RollText } from "@/components/motion/roll-text";
import { cn } from "@/lib/utils";

const mainNav = [
  { label: "Insurance", href: "/insurancesolutions" },
  { label: "Industries", href: "/industries" },
  { label: "Claims", href: "/claims" },
  { label: "About Kooo", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const supportLinks = [
  { label: "Referral Partners", href: "/referral-partners" },
  { label: "Help & FAQs", href: "/faqs" },
  { label: "Service Locations", href: "/locations" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const menuOpen = useUi((s) => s.menuOpen);
  const setMenuOpen = useUi((s) => s.setMenuOpen);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = useUi.getState().lenis;
    if (menuOpen) lenis?.stop();
    else if (useUi.getState().ready) lenis?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, setMenuOpen]);

  const hasOpened = useRef(false);
  useGSAP(
    () => {
      const menu = menuRef.current;
      if (!menu) return;
      if (menuOpen) {
        hasOpened.current = true;
        gsap
          .timeline()
          .set(menu, { visibility: "visible" })
          .fromTo(menu, { clipPath: "inset(0% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "power4.inOut" })
          .fromTo("[data-menu-link]", { yPercent: 110 }, { yPercent: 0, duration: 0.8, stagger: 0.05, ease: EASE_OUT }, "-=0.3")
          .fromTo("[data-menu-fade]", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.03 }, "<0.2");
      } else if (hasOpened.current) {
        gsap
          .timeline()
          .fromTo(menu, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.5, ease: "power3.inOut" })
          .set(menu, { visibility: "hidden" });
      }
    },
    { dependencies: [menuOpen], scope: menuRef },
  );

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 transition-all duration-300">
        <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Kooo Insurance home"
            onClick={() => setMenuOpen(false)}
            className={cn(
              "pointer-events-auto rounded-xl px-2.5 py-1.5 transition-all duration-300",
              menuOpen
                ? "text-white"
                : scrolled
                  ? "bg-cloud/90 text-navy shadow-sm backdrop-blur-md"
                  : isHome
                    ? "text-white"
                    : "text-navy",
            )}
          >
            <KoooLogo className="h-10 w-auto md:h-11" title="" />
          </Link>

          {/* Desktop Main Navigation (Hidden on Home page, visible on inner pages) */}
          {!isHome && (
            <nav
              aria-label="Main Navigation"
              className={cn(
                "pointer-events-auto hidden lg:flex items-center gap-7 rounded-full px-7 py-2.5 font-button text-sm font-medium tracking-wide transition-all duration-300",
                menuOpen
                  ? "opacity-0 pointer-events-none"
                  : scrolled
                    ? "bg-cloud/95 text-navy shadow-md backdrop-blur-md border border-navy/10"
                    : "bg-white/90 text-navy shadow-sm backdrop-blur-sm border border-navy/15",
              )}
            >
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative py-1 text-navy/90 hover:text-navy transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Action Hub: Direct Phone just beside Menu Hamburger */}
          <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
            {/* Phone Call Button - directly beside Menu */}
            <a
              href={contact.phoneHref}
              aria-label={`Call Kooo Insurance on ${contact.phone}`}
              className={cn(
                "flex h-10 md:h-11 items-center gap-2 rounded-full px-4 sm:px-5 font-button text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm",
                menuOpen
                  ? "border border-white/30 bg-white/10 text-white hover:bg-white/20"
                  : scrolled
                    ? "border border-navy/20 bg-cloud/95 text-navy backdrop-blur-md hover:border-navy"
                    : "border border-navy/15 bg-white text-navy hover:bg-cloud shadow-md",
              )}
            >
              <Phone className="size-3.5" />
              <span className="hidden xs:inline">{contact.phone}</span>
              <span className="xs:hidden font-bold">Call</span>
            </a>

            {/* Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              className={cn(
                "group flex h-10 md:h-11 items-center gap-3 px-5 font-button text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors duration-300 shadow-sm",
                menuOpen
                  ? "bg-white text-navy"
                  : "bg-navy text-white hover:bg-navy-deep",
              )}
            >
              <RollText key={menuOpen ? "close" : "menu"} text={menuOpen ? "Close" : "Menu"} />
              <span aria-hidden className="relative block h-3 w-4">
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-current transition-transform duration-300",
                    menuOpen ? "top-1/2 rotate-45" : "top-0.5",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-current transition-transform duration-300",
                    menuOpen ? "top-1/2 -rotate-45" : "bottom-0.5",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Cinematic Sitemap Drawer */}
      <div
        ref={menuRef}
        id="site-menu"
        inert={!menuOpen}
        className="invisible fixed inset-0 z-40 flex flex-col bg-navy text-white overflow-y-auto"
        data-lenis-prevent
      >
        <div className="mx-auto grid w-full flex-1 max-w-7xl content-center gap-12 px-6 pb-12 pt-28 md:px-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* Main Navigation */}
          <div>
            <span className="block text-xs uppercase tracking-[0.25em] text-white/50 mb-4">Main Menu</span>
            <nav aria-label="Sitemap Main">
              <ul className="space-y-2">
                {mainNav.map((link) => (
                  <li key={link.href} className="overflow-hidden">
                    <Link
                      href={link.href}
                      data-menu-link
                      onClick={() => setMenuOpen(false)}
                      className="group block font-heading text-[clamp(2rem,5vw,3.75rem)] leading-[1.1] text-white hover:text-white/80 transition-colors"
                    >
                      <RollText text={link.label} stagger={12} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Support Pages */}
            <div className="mt-8 border-t border-white/15 pt-6">
              <span className="block text-xs uppercase tracking-[0.2em] text-white/50 mb-3">Support &amp; Resources</span>
              <ul className="space-y-2">
                {supportLinks.map((sub) => (
                  <li key={sub.href} data-menu-fade>
                    <Link
                      href={sub.href}
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center gap-2 text-base text-white/80 hover:text-white transition"
                    >
                      <span>{sub.label}</span>
                      <ArrowUpRight className="size-3.5 text-white/40" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Insurance Categories */}
          <div className="self-start">
            <span className="block text-xs uppercase tracking-[0.25em] text-white/50 mb-4">Insurance Solutions</span>
            <ul className="space-y-3">
              {categories.map((c) => (
                <li key={c.slug} data-menu-fade>
                  <Link
                    href={`/${c.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between text-base text-white/85 hover:text-white transition md:text-lg border-b border-white/10 pb-2"
                  >
                    <span>{c.name}</span>
                    <span className="text-xs text-white/40 group-hover:text-white transition">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Quote & Licensing Info */}
          <div className="self-start space-y-6">
            <span className="block text-xs uppercase tracking-[0.25em] text-white/50 mb-4">Get In Touch</span>
            <div data-menu-fade className="border border-white/20 bg-white/5 p-6 space-y-4">
              <h4 className="font-heading text-xl text-white">Protect Your Tomorrow</h4>
              <p className="text-sm text-white/80 leading-relaxed">
                Connect directly with an accredited Australian insurance broker for independent terms and plain-English advice.
              </p>
              <div className="pt-2 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center bg-white py-3 font-button text-sm font-semibold uppercase tracking-wider text-navy hover:bg-cloud transition"
                >
                  Request a Quote
                </Link>
                <a
                  href={contact.phoneHref}
                  className="flex items-center justify-center gap-2 border border-white/30 py-2.5 font-button text-sm text-white hover:border-white hover:bg-white/10 transition"
                >
                  <Phone className="size-3.5" />
                  <span>Call {contact.phone}</span>
                </a>
              </div>
            </div>

            <div data-menu-fade className="text-xs text-white/60 space-y-1">
              <p>Corporate Authorised Representative (CAR No. 1315320)</p>
              <p>Metrix Connect Pty Ltd AFSL No. 525491</p>
              <p>7-9 Irvine Place, Bella Vista NSW 2153</p>
            </div>
          </div>
        </div>

        {/* Drawer Bottom Bar */}
        <div data-menu-fade className="border-t border-white/15 px-6 py-6 text-sm text-white/75 sm:flex sm:items-center sm:justify-between md:px-10">
          <p>{tagline}</p>
          <div className="mt-2 sm:mt-0 flex flex-wrap gap-6 text-xs text-white/80">
            <a href={contact.phoneHref} className="hover:text-white transition">Tel: {contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="hover:text-white transition">{contact.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
