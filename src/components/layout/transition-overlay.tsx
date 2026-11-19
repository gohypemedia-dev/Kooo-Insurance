"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion, useUi } from "@/lib/ui-store";
import { KoooLogo } from "@/components/brand/kooo-logo";

const DOTS = ["-left-1 -top-1", "-right-1 -top-1", "-bottom-1 -left-1", "-bottom-1 -right-1"];

/**
 * Navy curtain used as the first-load preloader and as the page transition:
 * four corner dots gather into a frame, the Kooo wordmark wipes in, then the
 * curtain lifts. Internal link clicks are intercepted so every navigation
 * plays it.
 */
export function TransitionOverlay() {
  const router = useRouter();
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  const pending = useRef<{ path: string; timer: number } | null>(null);
  const busy = useRef(true);

  const { contextSafe } = useGSAP({ scope: root });

  // Dots gather into a frame and the wordmark wipes in. `speed` < 1 plays it quicker.
  const markIn = contextSafe((speed = 1) =>
    gsap
      .timeline()
      .fromTo(
        "[data-dot]",
        { x: (i) => (i % 2 ? -46 : 46), y: (i) => (i < 2 ? 28 : -28), opacity: 1 },
        { x: 0, y: 0, duration: 0.7 * speed, ease: "power3.inOut" },
      )
      .fromTo(
        "[data-mark]",
        { clipPath: "inset(0% 100% 0% 0%)", y: 6 },
        { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 0.7 * speed, ease: "power3.out" },
        `-=${0.25 * speed}`,
      ),
  );

  // Curtain rises from the bottom to cover the current page.
  const cover = contextSafe(() =>
    gsap
      .timeline()
      .set("[data-curtain]", { visibility: "visible", yPercent: 100 })
      .set("[data-dot]", { opacity: 0 })
      .set("[data-mark]", { clipPath: "inset(0% 100% 0% 0%)" })
      .to("[data-curtain]", { yPercent: 0, duration: 0.7, ease: "power4.inOut" })
      .add(markIn(0.65), "-=0.2"),
  );

  // Curtain lifts off the top, uncovering the page.
  const lift = contextSafe(() =>
    gsap
      .timeline()
      .to("[data-overlay-content]", { yPercent: -60, opacity: 0, duration: 0.6, ease: "power3.in" })
      .to("[data-curtain]", { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.35")
      .set("[data-curtain]", { visibility: "hidden", yPercent: 100 })
      .set("[data-overlay-content]", { yPercent: 0, opacity: 1 }),
  );

  const finish = () => {
    busy.current = false;
    useUi.getState().lenis?.start();
    useUi.getState().setReady(true);
  };

  const reveal = () => {
    if (pending.current) window.clearTimeout(pending.current.timer);
    pending.current = null;
    // Let the new page paint and measure before lifting the curtain.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        lift().call(finish);
      }),
    );
  };

  const navigate = (href: string, path: string) => {
    busy.current = true;
    useUi.getState().setReady(false);
    if (prefersReducedMotion()) {
      router.push(href);
      finish();
      return;
    }
    useUi.getState().lenis?.stop();
    cover().call(() => {
      useUi.getState().setMenuOpen(false);
      useUi.getState().lenis?.scrollTo(0, { immediate: true, force: true });
      // Reveal once the new route has rendered (or after a timeout if navigation stalls).
      pending.current = { path, timer: window.setTimeout(reveal, 8000) };
      router.push(href);
    });
  };

  // Keep the latest navigate() for the document-level click listener.
  const navigateRef = useRef(navigate);
  useEffect(() => {
    navigateRef.current = navigate;
  });

  // First load: play the preloader, then uncover the page.
  useEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(root.current?.querySelector("[data-curtain]") ?? null, { visibility: "hidden", yPercent: 100 });
      finish();
      return;
    }
    const tl = gsap.timeline({ delay: 0.2 }).add(markIn()).add(lift(), "+=0.35").call(finish);
    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Intercept internal link clicks to run cover → navigate → reveal.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a");
      if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      if (/\.[a-z0-9]{2,4}$/i.test(url.pathname)) return; // files such as PDFs
      e.preventDefault();
      if (busy.current) return;
      navigateRef.current(url.pathname + url.search + url.hash, url.pathname);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (pending.current && pending.current.path === pathname) reveal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    // The root never blocks clicks; only the visible curtain does.
    <div ref={root} id="kooo-overlay" aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <div
        data-curtain
        className="pointer-events-auto absolute inset-0 flex items-center justify-center bg-navy text-white will-change-transform"
      >
        <div data-overlay-content className="relative h-20 w-32">
          {DOTS.map((pos) => (
            <span key={pos} data-dot className={`absolute size-1.5 bg-white ${pos}`} />
          ))}
          <div data-mark className="absolute inset-x-4 top-1/2 -translate-y-1/2" style={{ clipPath: "inset(0% 100% 0% 0%)" }}>
            <KoooLogo wordmarkOnly className="w-full" title="" />
          </div>
        </div>
      </div>
      <noscript>
        <style>{`#kooo-overlay{display:none!important}`}</style>
      </noscript>
    </div>
  );
}
