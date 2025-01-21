import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export interface NeoButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "mint" | "peach" | "yellow" | "lavender" | "aqua";
  asChild?: boolean;
}

const NeoButton = forwardRef<HTMLButtonElement, NeoButtonProps>(
  ({ className, variant = "mint", asChild = false, ...props }, ref) => {
    const variantStyles = {
      mint: "bg-[#DAF5F0]",
      peach: "bg-[#F8D6B3]",
      yellow: "bg-[#FFFD96]",
      lavender: "bg-[#E3DFF2]",
      aqua: "bg-[#A7DBD8]",
    };

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn("neo-button", variantStyles[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
NeoButton.displayName = "NeoButton";

export { NeoButton };
