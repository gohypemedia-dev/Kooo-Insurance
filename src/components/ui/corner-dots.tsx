import { cn } from "@/lib/utils";

// Small square "crop marks" in the four corners of the nearest positioned parent.
export function CornerDots({ className, inset = "0" }: { className?: string; inset?: string }) {
  const style = { "--dot-inset": inset } as React.CSSProperties;
  return (
    <span aria-hidden className={cn("pointer-events-none absolute inset-0 z-10 text-navy/35", className)} style={style}>
      <span className="absolute left-[var(--dot-inset)] top-[var(--dot-inset)] size-1.5 -translate-x-1/2 -translate-y-1/2 bg-current" />
      <span className="absolute right-[var(--dot-inset)] top-[var(--dot-inset)] size-1.5 -translate-y-1/2 translate-x-1/2 bg-current" />
      <span className="absolute bottom-[var(--dot-inset)] left-[var(--dot-inset)] size-1.5 -translate-x-1/2 translate-y-1/2 bg-current" />
      <span className="absolute bottom-[var(--dot-inset)] right-[var(--dot-inset)] size-1.5 translate-x-1/2 translate-y-1/2 bg-current" />
    </span>
  );
}
