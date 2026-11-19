import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RollText } from "@/components/motion/roll-text";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: string;
  variant?: "solid" | "outline" | "light" | "mint";
  className?: string;
};

// Base colours, and the colour that sweeps up from the bottom on hover.
const variants = {
  solid: { base: "bg-navy text-white hover:text-navy", fill: "bg-white" },
  outline: { base: "border border-navy text-navy hover:text-white", fill: "bg-navy" },
  light: { base: "bg-white text-navy hover:text-white", fill: "bg-navy" },
  mint: { base: "bg-white text-navy hover:text-white", fill: "bg-navy" },
};

// Pill button: a fill sweeps up behind the label while its letters roll.
export function CtaLink({ href, children, variant = "solid", className }: CtaLinkProps) {
  const v = variants[variant];
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex h-13 items-center gap-3 overflow-hidden rounded-full px-8 font-button text-[17px] font-medium transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
        v.base,
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 translate-y-full rounded-[inherit] transition-transform duration-[650ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0",
          v.fill,
        )}
      />
      <RollText text={children} className="relative" />
      <ArrowRight className="relative size-[18px] transition-transform duration-500 group-hover:translate-x-1" />
    </Link>
  );
}
