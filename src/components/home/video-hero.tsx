"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useUi } from "@/lib/ui-store";
import { cn } from "@/lib/utils";

const TOTAL_FRAMES = 384;
const FRAME_PREFIX = "/hero/KOO_Enhanced_1080p_30fps_Frames/frame_";
const FRAME_EXT = ".jpg";

/**
 * Returns formatted frame URL (e.g., /hero/KOO_Enhanced_1080p_30fps_Frames/frame_0001.jpg).
 */
function getFrameUrl(index: number): string {
  const padded = String(index).padStart(4, "0");
  return `${FRAME_PREFIX}${padded}${FRAME_EXT}`;
}

/**
 * High-performance, scroll-driven Canvas Frame Sequence with Next.js Hydration & Smooth Parallax.
 *
 * Next.js Hydration Architecture:
 * - Server-rendered initial frame via Next.js <Image priority /> ensures zero flash on page load
 *   and optimal Core Web Vitals (LCP) before client scripts execute.
 * - Client hydration handshake smoothly transitions from static SSR image to interactive 2D canvas.
 * - Direct 2D Canvas rendering with devicePixelRatio Retina scaling.
 * - Progressive keyframe preloading & non-blocking concurrent batch queue.
 * - Nearest-frame fallback ensuring 100% flicker-free rendering on fast scrolls.
 * - Calibrated 2-3 scroll completion across a responsive h-[340vh] track.
 * - Visually clean (zero text overlay) with accessible sr-only SEO title.
 */
export function VideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  // Hydration state tracking
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  // In-memory cache of loaded image elements
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const loadedFramesRef = useRef<Set<number>>(new Set());

  // Scrub playhead animation state
  const stateRef = useRef({
    currentProgress: 0,
    targetProgress: 0,
    currentFrame: 1,
    isRendering: false,
    animFrameId: 0,
  });

  /**
   * Helper to load a single frame image and cache it.
   */
  const loadFrame = useCallback((index: number): Promise<HTMLImageElement> => {
    const existing = imagesRef.current.get(index);
    if (existing && loadedFramesRef.current.has(index)) {
      return Promise.resolve(existing);
    }

    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.src = getFrameUrl(index);
      img.onload = () => {
        imagesRef.current.set(index, img);
        loadedFramesRef.current.add(index);
        resolve(img);
      };
      img.onerror = () => {
        reject(new Error(`Failed to load frame ${index}`));
      };
    });
  }, []);

  /**
   * Retrieves the best available image: the requested frame or the closest loaded one.
   */
  const getBestAvailableImage = useCallback((targetIndex: number): HTMLImageElement | null => {
    if (loadedFramesRef.current.has(targetIndex)) {
      return imagesRef.current.get(targetIndex) || null;
    }

    // Find nearest already-loaded frame
    let closestFrame = -1;
    let minDistance = Infinity;

    for (const loadedIndex of loadedFramesRef.current) {
      const dist = Math.abs(loadedIndex - targetIndex);
      if (dist < minDistance) {
        minDistance = dist;
        closestFrame = loadedIndex;
      }
    }

    if (closestFrame !== -1) {
      return imagesRef.current.get(closestFrame) || null;
    }

    return null;
  }, []);

  /**
   * Draw an image to canvas with cover fit and maximum HD interpolation quality.
   */
  const renderImageToCanvas = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
    if (!ctx) return;

    // Enable high-fidelity bicubic/lanczos image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || 1920;
    const ih = img.naturalHeight || 1080;

    if (iw === 0 || ih === 0) return;

    // object-fit: cover math
    const hRatio = cw / iw;
    const vRatio = ch / ih;
    const ratio = Math.max(hRatio, vRatio);

    const drawW = Math.ceil(iw * ratio);
    const drawH = Math.ceil(ih * ratio);
    const offsetX = Math.floor((cw - drawW) / 2);
    const offsetY = Math.floor((ch - drawH) / 2);

    ctx.drawImage(img, 0, 0, iw, ih, offsetX, offsetY, drawW, drawH);
  }, []);

  /**
   * Resize canvas to fill window with Retina crispness.
   */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const w = Math.round(rect.width * dpr);
    const h = Math.round(rect.height * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;

      // Re-draw current frame after resizing
      const currentImg = getBestAvailableImage(stateRef.current.currentFrame);
      if (currentImg) {
        renderImageToCanvas(currentImg);
      }
    }
  }, [getBestAvailableImage, renderImageToCanvas]);

  /**
   * Render loop that smoothly lerps progress and draws frames.
   */
  const startRenderLoop = useCallback(() => {
    if (stateRef.current.isRendering) return;
    stateRef.current.isRendering = true;

    const loop = () => {
      const state = stateRef.current;
      const diff = state.targetProgress - state.currentProgress;

      // Responsive lerp (0.18 factor provides snappy, low-latency tracking calibrated for ~3s completion)
      if (Math.abs(diff) > 0.0003) {
        state.currentProgress += diff * 0.18;
      } else {
        state.currentProgress = state.targetProgress;
      }

      // Map progress (0 -> 1) to frame (1 -> TOTAL_FRAMES)
      const frameIndex = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.round(state.currentProgress * (TOTAL_FRAMES - 1)) + 1)
      );

      if (frameIndex !== state.currentFrame || Math.abs(diff) > 0.0003) {
        state.currentFrame = frameIndex;

        // Fetch best image and render
        const img = getBestAvailableImage(frameIndex);
        if (img) {
          renderImageToCanvas(img);
        } else {
          // If not loaded, trigger on-demand load
          loadFrame(frameIndex).then((loaded) => {
            if (stateRef.current.currentFrame === frameIndex) {
              renderImageToCanvas(loaded);
            }
          });
        }

        // Apply smooth parallax scale and subtle depth translation to canvas
        const canvas = canvasRef.current;
        if (canvas) {
          // Gentle scale from 1.05 down to 1.00 as user scrolls
          const scale = 1.05 - state.currentProgress * 0.05;
          const yShift = (state.currentProgress - 0.5) * 16;
          canvas.style.transform = `scale(${scale.toFixed(4)}) translateY(${yShift.toFixed(2)}px)`;
        }

        // Keep "SCROLL TO PLAY" visible while scrolling through the hero,
        // and smoothly disappear as the hero section finishes (between 0.85 and 1.0 progress)
        const scrollHint = scrollHintRef.current;
        if (scrollHint) {
          let opacity = 1;
          if (state.currentProgress > 0.85) {
            opacity = Math.max(0, 1 - (state.currentProgress - 0.85) / 0.14);
          }
          scrollHint.style.opacity = opacity.toFixed(3);
          scrollHint.style.pointerEvents = opacity > 0.05 ? "auto" : "none";
          scrollHint.style.visibility = opacity <= 0.01 ? "hidden" : "visible";
        }
      }

      // Continue loop if not settled
      if (Math.abs(state.targetProgress - state.currentProgress) > 0.0002) {
        state.animFrameId = requestAnimationFrame(loop);
      } else {
        state.isRendering = false;
      }
    };

    stateRef.current.animFrameId = requestAnimationFrame(loop);
  }, [getBestAvailableImage, loadFrame, renderImageToCanvas]);

  // Preloading sequence and hydration handshake
  useEffect(() => {
    let isCancelled = false;

    // 1. Immediately load frame 1 and draw to canvas
    loadFrame(1)
      .then((firstImg) => {
        if (isCancelled) return;
        renderImageToCanvas(firstImg);
        // Canvas is now primed with the first frame; transition from SSR image to canvas
        setIsCanvasReady(true);
      })
      .catch(() => {});

    // 2. Preload keyframes across the timeline (every 8 frames) for immediate scrubbing capability
    const keyframes: number[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i += 8) {
      if (i !== 1) keyframes.push(i);
    }
    if (keyframes[keyframes.length - 1] !== TOTAL_FRAMES) {
      keyframes.push(TOTAL_FRAMES);
    }

    // Load keyframes first
    const loadKeyframes = async () => {
      for (const kf of keyframes) {
        if (isCancelled) break;
        await loadFrame(kf).catch(() => {});
      }

      if (isCancelled) return;

      // 3. Fill in all remaining frames with concurrent pool of 6 workers
      const remaining: number[] = [];
      for (let i = 2; i <= TOTAL_FRAMES; i++) {
        if (!loadedFramesRef.current.has(i)) {
          remaining.push(i);
        }
      }

      const poolSize = 8;
      let currentIndex = 0;

      const worker = async () => {
        while (currentIndex < remaining.length && !isCancelled) {
          const idx = remaining[currentIndex++];
          await loadFrame(idx).catch(() => {});
        }
      };

      await Promise.all(Array.from({ length: poolSize }, worker));
    };

    // Run progressive background loader
    loadKeyframes();

    return () => {
      isCancelled = true;
      if (stateRef.current.animFrameId) {
        cancelAnimationFrame(stateRef.current.animFrameId);
      }
    };
  }, [loadFrame, renderImageToCanvas]);

  // Handle window resizing
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // GSAP ScrollTrigger to tie track scroll to target progress
  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const st = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          stateRef.current.targetProgress = self.progress;
          startRenderLoop();
        },
      });

      return () => {
        st.kill();
      };
    },
    { scope: containerRef, dependencies: [startRenderLoop] }
  );

  const scrollToNext = useCallback(() => {
    const container = containerRef.current;
    const targetY = container
      ? container.offsetTop + container.offsetHeight - window.innerHeight
      : window.innerHeight * 1.75;

    const lenis = useUi.getState().lenis;
    if (lenis) {
      lenis.scrollTo(targetY, { duration: 3 });
    } else {
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Kooo Insurance interactive visual experience"
      className="relative h-[275vh] w-full bg-navy text-white"
    >
      {/* Visually hidden heading for SEO and screen readers */}
      <h1 className="sr-only">Kooo Insurance — Protect your tomorrow, today</h1>

      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 h-svh min-h-[580px] w-full overflow-hidden">
        {/* Next.js Hydration Layer: Instant SSR-rendered first frame to prevent blank canvas flash */}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 h-full w-full overflow-hidden transition-opacity duration-700 ease-out",
            isCanvasReady ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          <Image
            src={getFrameUrl(1)}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover [filter:contrast(1.03)_brightness(1.01)_saturate(1.05)]"
          />
        </div>

        {/* Full-Bleed High-Performance Parallax Canvas (1080p Full HD) */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className={cn(
            "absolute inset-0 h-full w-full object-cover will-change-transform [filter:contrast(1.03)_brightness(1.01)_saturate(1.05)] transition-opacity duration-500",
            isCanvasReady ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Soft Vignette Gradients (Lightweight so the frames stay vibrant and bright) */}
        {/* Top subtle vignette so the site navbar remains legible */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy/60 via-navy/20 to-transparent" />
        {/* Bottom subtle transition fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/40 to-transparent" />

        {/* Animated "SCROLL TO PLAY" with Vertical Line (Vibrant Electric Blue Sweep & Glowing Runner Bead) */}
        <div
          ref={scrollHintRef}
          onClick={scrollToNext}
          role="button"
          tabIndex={0}
          aria-label="Scroll to play"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              scrollToNext();
            }
          }}
          className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-3 transition-opacity duration-300 select-none filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] drop-shadow-[0_0_16px_rgba(0,30,80,0.6)] sm:bottom-24 md:bottom-28"
        >
          {/* Animated Electric Blue Shimmer Text */}
          <span className="font-button text-xs font-semibold uppercase tracking-[0.42em] sm:text-sm md:text-base animate-scroll-shimmer-blue">
            SCROLL TO PLAY
          </span>

          {/* Vertical Line with Glowing Blue Runner Bead */}
          <div className="relative h-11 w-[1.5px] overflow-hidden rounded-full bg-white/25 sm:h-12">
            <div className="absolute top-0 inset-x-0 h-2.5 w-full animate-scroll-line-runner-blue rounded-full bg-gradient-to-b from-[#ffffff] via-[#00f0ff] to-[#0055ff] shadow-[0_0_8px_#00f0ff,0_0_14px_#0062ff]" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Named alias for convenience
export const FrameHero = VideoHero;
