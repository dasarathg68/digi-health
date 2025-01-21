import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface NeoCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "mint" | "peach" | "yellow" | "lavender" | "aqua";
}

const NeoCard = forwardRef<HTMLDivElement, NeoCardProps>(
  ({ className, variant = "mint", ...props }, ref) => {
    const variantStyles = {
      mint: "bg-[#DAF5F0]",
      peach: "bg-[#F8D6B3]",
      yellow: "bg-[#FFFD96]",
      lavender: "bg-[#E3DFF2]",
      aqua: "bg-[#A7DBD8]",
    };

    return (
      <div
        className={cn("neo-card", variantStyles[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
NeoCard.displayName = "NeoCard";

export { NeoCard };
