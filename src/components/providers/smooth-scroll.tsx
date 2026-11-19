"use client";

import { useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useUi } from "@/lib/ui-store";

/**
 * Isolated listener for path changes wrapped in Suspense so the
 * root SmoothScroll component does not block static prerendering.
 */
function ScrollTriggerNavigationListener() {
  const pathname = usePathname();

  // Persistent parts (like the footer) need fresh scroll measurements on every new page,
  // including browser back/forward, which skips the transition curtain.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}

// Lenis smooth scrolling driven by GSAP's ticker so ScrollTrigger stays in sync.
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const setLenis = useUi((s) => s.setLenis);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 1 });
    setLenis(lenis);
    // Hold scrolling while the preloader is still covering the page.
    if (!useUi.getState().ready) lenis.stop();

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
    };
  }, [setLenis]);

  return (
    <>
      <Suspense fallback={null}>
        <ScrollTriggerNavigationListener />
      </Suspense>
      {children}
    </>
  );
}
