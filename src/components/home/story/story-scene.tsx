"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { story, ramp } from "./story-timeline";

interface StorySceneProps {
  active?: boolean;
}

/**
 * Photorealistic Cinematic Stage with Kooo's Overlapping Circle Identity.
 *
 * Renders four authentic Australian scenes:
 * 1. Melbourne laneway café owner at dawn (Small Business)
 * 2. Heavy-duty freight road train on open Australian highway (Transport & Fleet)
 * 3. Commercial construction engineers & tradies on site (Trades & Infrastructure)
 * 4. Contemporary Australian family arriving home at golden hour (Home & Personal)
 * 5. Kooo Overlapping Circle Shield ("ooo") Brand Resolution
 *
 * Engineered with 100% reliable full-bleed GPU-accelerated HTML image layers,
 * smooth Ken Burns camera drift, and interactive floating optical rings.
 */
export default function StoryScene({ active = true }: StorySceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringGroupRef = useRef<SVGGElement>(null);
  const lensGroupRef = useRef<SVGGElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Mouse move handler for tactile optical parallax
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouse.current.targetX = (e.clientX / innerWidth - 0.5) * 2;
      mouse.current.targetY = (e.clientY / innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, []);

  // Main 60-120fps render loop via GSAP ticker
  useEffect(() => {
    if (!active) return;

    const tick = () => {
      const p = story.p; // Current playhead 0 → 1

      // Smooth mouse lerp with organic damping
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.08;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.08;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      // ── Crossfade weights for the 4 Australian scenes ──
      // Scene 0: Café Owner (Melbourne Laneway Dawn)      → p: 0.00 to 0.32
      // Scene 1: Outback Freight Road Train               → p: 0.28 to 0.54
      // Scene 2: Construction Project Team               → p: 0.50 to 0.74
      // Scene 3: Family Arriving Home                    → p: 0.70 to 1.00
      const w0 = 1 - ramp(p, 0.26, 0.34);
      const w1 = ramp(p, 0.26, 0.34) * (1 - ramp(p, 0.48, 0.56));
      const w2 = ramp(p, 0.48, 0.56) * (1 - ramp(p, 0.68, 0.76));
      const w3 = ramp(p, 0.68, 0.76);
      const weights = [w0, w1, w2, w3];

      // Update full-bleed image layers directly on DOM
      imageRefs.current.forEach((el, idx) => {
        if (!el) return;
        const w = weights[idx] ?? 0;
        el.style.opacity = w.toFixed(3);
        el.style.visibility = w > 0.005 ? "visible" : "hidden";

        // Subtle Ken Burns cinematic drift & parallax
        const scale = 1.02 + p * 0.05 + idx * 0.005;
        const panX = mx * -14 + (idx % 2 === 0 ? p * 16 : -p * 16);
        const panY = my * -10 + Math.sin(p * Math.PI + idx) * 8;
        el.style.transform = `scale(${scale}) translate3d(${panX}px, ${panY}px, 0)`;
      });

      // ── Overlapping Circles Signature Geometry ──
      // Three interlocking rings ("ooo" identity) that glide and adapt to each scene
      const centerX = 500 + mx * 22;
      const centerY = 300 + my * 15;

      // Finale convergence: at p > 0.88, the rings lock into exact Kooo brand geometry
      const isFinale = ramp(p, 0.88, 0.98);
      const baseRadius = 145 * (1 + Math.sin(p * Math.PI) * 0.08 - isFinale * 0.05);
      const separation = (180 - isFinale * 35) * (1 + mx * 0.03);

      // Organic dynamic wave as user travels through the Australian continent
      const wave = Math.sin(p * Math.PI * 3) * 12;
      const c1X = centerX - separation;
      const c1Y = centerY + wave * 0.4;
      const c2X = centerX;
      const c2Y = centerY - wave * 0.3;
      const c3X = centerX + separation;
      const c3Y = centerY + wave * 0.2;

      // Update SVG ring outlines
      if (ringGroupRef.current) {
        const rings = ringGroupRef.current.children;
        if (rings.length >= 3) {
          rings[0].setAttribute("cx", c1X.toFixed(1));
          rings[0].setAttribute("cy", c1Y.toFixed(1));
          rings[0].setAttribute("r", baseRadius.toFixed(1));

          rings[1].setAttribute("cx", c2X.toFixed(1));
          rings[1].setAttribute("cy", c2Y.toFixed(1));
          rings[1].setAttribute("r", (baseRadius * 1.02).toFixed(1));

          rings[2].setAttribute("cx", c3X.toFixed(1));
          rings[2].setAttribute("cy", c3Y.toFixed(1));
          rings[2].setAttribute("r", baseRadius.toFixed(1));
        }
      }

      // Update lens highlight glints
      if (lensGroupRef.current) {
        const lenses = lensGroupRef.current.children;
        if (lenses.length >= 3) {
          lenses[0].setAttribute("cx", c1X.toFixed(1));
          lenses[0].setAttribute("cy", c1Y.toFixed(1));
          lenses[0].setAttribute("r", (baseRadius * 0.98).toFixed(1));

          lenses[1].setAttribute("cx", c2X.toFixed(1));
          lenses[1].setAttribute("cy", c2Y.toFixed(1));
          lenses[1].setAttribute("r", baseRadius.toFixed(1));

          lenses[2].setAttribute("cx", c3X.toFixed(1));
          lenses[2].setAttribute("cy", c3Y.toFixed(1));
          lenses[2].setAttribute("r", (baseRadius * 0.98).toFixed(1));
        }
      }
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [active]);

  const sceneImages = [
    { src: "/images/hero/hero-cafe.jpg", title: "Café Owner Opening at Dawn", place: "Melbourne, VIC" },
    { src: "/images/hero/hero-truck.jpg", title: "Transport Freight Road Train", place: "Stuart Highway, SA" },
    { src: "/images/hero/hero-construction.jpg", title: "Commercial Construction Team", place: "Sydney, NSW" },
    { src: "/images/hero/hero-home.jpg", title: "Family Arriving Home at Golden Hour", place: "Australia" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden select-none bg-[#0a192f]"
    >
      {/* ── 1. Photorealistic Full-Bleed Australian Scenes ── */}
      {/* Clean, vibrant, photorealistic images. NO blur or dark filters blocking the view! */}
      <div className="absolute inset-0 z-0">
        {sceneImages.map((scene, i) => (
          <div
            key={scene.src}
            ref={(el) => {
              imageRefs.current[i] = el;
            }}
            className="absolute inset-0 bg-cover bg-center transition-opacity will-change-transform"
            style={{
              backgroundImage: `url('${scene.src}')`,
              opacity: i === 0 ? 1 : 0,
              filter: "brightness(0.92) contrast(1.04) saturate(1.05)",
            }}
          />
        ))}

        {/* ── Subtle Cinematic Film Vignette & Scrim ── */}
        {/* Soft gradient in bottom-left ONLY so white text is crystal clear while scenes stay bright and vibrant */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06142e]/90 via-[#06142e]/35 via-45% to-transparent md:bg-gradient-to-r md:from-[#06142e]/85 md:via-[#06142e]/40 md:via-40% md:to-transparent"
        />

        {/* Delicate perimeter vignette for cinematic depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-radial from-transparent via-transparent to-black/40"
        />
      </div>

      {/* ── 2. The Overlapping Circles Visual Signature ("ooo") ── */}
      {/* Floating luminous optical rings that connect and frame the Australian scenes */}
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1000 600"
          aria-hidden
        >
          <defs>
            {/* Luminous Platinum & White Gradient for the Circle Edges */}
            <linearGradient id="kooo-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#e2e8f0" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.8" />
            </linearGradient>

            {/* Glowing filter */}
            <filter id="ring-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Radial soft highlight fill for inside the lenses */}
            <radialGradient id="lens-highlight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Semi-transparent optical lens fills */}
          <g ref={lensGroupRef} fill="url(#lens-highlight)">
            <circle cx="320" cy="300" r="142" />
            <circle cx="500" cy="300" r="145" />
            <circle cx="680" cy="300" r="142" />
          </g>

          {/* Three Interlocking Luminous Rings */}
          <g
            ref={ringGroupRef}
            fill="none"
            stroke="url(#kooo-ring-gradient)"
            strokeWidth="2.8"
            filter="url(#ring-glow)"
            opacity="0.92"
          >
            {/* Circle 1: Left */}
            <circle cx="320" cy="300" r="145" />
            {/* Circle 2: Middle (Primary Brand Anchor with Pure White glint) */}
            <circle cx="500" cy="300" r="148" stroke="#ffffff" strokeWidth="3.2" />
            {/* Circle 3: Right */}
            <circle cx="680" cy="300" r="145" />
          </g>

          {/* Precision Optical Grid Marks & Compass Ticks */}
          <g opacity="0.35" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 4">
            <line x1="500" y1="70" x2="500" y2="110" />
            <line x1="500" y1="490" x2="500" y2="530" />
            <line x1="150" y1="300" x2="190" y2="300" />
            <line x1="810" y1="300" x2="850" y2="300" />
          </g>
        </svg>
      </div>

      {/* ── 3. Atmospheric Watermark & Geographic Coordinates ── */}
      <div className="absolute bottom-6 left-6 md:left-12 z-20 hidden md:flex items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-white/50 select-none pointer-events-none">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          AUSTRALIA-WIDE COVERAGE
        </span>
        <span className="h-2 w-px bg-white/20" />
        <span>LAT −33.737 / LON 150.963</span>
        <span className="h-2 w-px bg-white/20" />
        <span>BELLA VISTA NSW</span>
        <span className="h-2 w-px bg-white/20" />
        <span>KOOO OVERLAPPING CIRCLE IDENTITY</span>
      </div>
    </div>
  );
}
