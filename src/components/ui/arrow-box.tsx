import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ArrowBoxProps = {
  className?: string;
  /** Point down-left (e.g. an open accordion item). */
  open?: boolean;
  /** Also turn when the surrounding `group` is hovered or focused. */
  rotateOnHover?: boolean;
};

// Square arrow badge used on cards, rows and accordions.
export function ArrowBox({ className, open, rotateOnHover = true }: ArrowBoxProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center bg-navy text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        rotateOnHover && "group-hover:rotate-180 group-focus-visible:rotate-180",
        open && "rotate-180",
        className,
      )}
    >
      <ArrowUpRight className="size-5" strokeWidth={2} />
    </span>
  );
}
