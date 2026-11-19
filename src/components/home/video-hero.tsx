"use client";

import { useRef, useEffect, useCallback } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

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
 * High-performance, scroll-driven Canvas Frame Sequence with Smooth Parallax.
 * Replaces traditional video with 384 scroll-scrubbed frames of Sydney Harbour.
 *
 * Features:
 * - Direct 2D Canvas rendering with devicePixelRatio Retina scaling.
 * - Progressive keyframe preloading & non-blocking concurrent batch queue.
 * - Nearest-frame fallback ensuring 100% flicker-free rendering on fast scrolls.
 * - Smooth lerped scrub with subtle cinematic parallax scale and depth shifts.
 * - Visually clean (zero text overlay) with accessible sr-only SEO title.
 */
export function VideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

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
      const img = new Image();
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

      // Smooth lerp (0.12 factor provides cinematic damping)
      if (Math.abs(diff) > 0.0003) {
        state.currentProgress += diff * 0.12;
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

  // Preloading sequence
  useEffect(() => {
    let isCancelled = false;

    // 1. Immediately load frame 1 and draw
    loadFrame(1)
      .then((firstImg) => {
        if (isCancelled) return;
        renderImageToCanvas(firstImg);
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

      const poolSize = 6;
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
      : window.innerHeight * 2.4;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Kooo Insurance interactive visual experience"
      className="relative h-[340vh] w-full bg-navy text-white"
    >
      {/* Visually hidden heading for SEO and screen readers */}
      <h1 className="sr-only">Kooo Insurance — Protect your tomorrow, today</h1>

      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 h-svh min-h-[580px] w-full overflow-hidden">
        {/* Full-Bleed High-Performance Parallax Canvas (1080p Full HD) */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover will-change-transform [filter:contrast(1.03)_brightness(1.01)_saturate(1.05)]"
        />

        {/* Soft Vignette Gradients (Lightweight so the frames stay vibrant and bright) */}
        {/* Top subtle vignette so the site navbar remains legible */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy/60 via-navy/20 to-transparent" />
        {/* Bottom subtle transition fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/40 to-transparent" />

        {/* Animated "SCROLL TO PLAY" with Vertical Line (Shifted upwards, enhanced scale & blue pulse) */}
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
          className="absolute bottom-16 left-1/2 z-20 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-3.5 transition-opacity duration-300 select-none sm:bottom-20 md:bottom-24"
        >
          {/* Animated Blue Shimmer Text - Increased Size */}
          <span className="font-button text-sm font-bold uppercase tracking-[0.35em] text-transparent sm:text-base md:text-lg animate-scroll-shimmer-blue drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            SCROLL TO PLAY
          </span>

          {/* Vertical Line with Blue Pulse Animation - Proportional Size */}
          <div className="relative h-11 w-[2px] overflow-hidden rounded-full bg-white/35 sm:h-14">
            <div className="absolute inset-x-0 h-1/2 w-full animate-scroll-line-blue rounded-full bg-gradient-to-b from-transparent via-[#38bdf8] to-transparent shadow-[0_0_10px_#38bdf8]" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Named alias for convenience
export const FrameHero = VideoHero;
