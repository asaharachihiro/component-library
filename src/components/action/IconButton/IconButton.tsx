import { Primitive } from "@radix-ui/react-primitive";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../../utils/cn";

const IconButtonVariants = cva(
  "flex justify-center items-center hover:bg-black-5-opacity active:bg-black-10-opacity disabled:text-black-20-opacity disabled:pointer-events-none",
  {
    variants: {
      variant: {
        global: "text-2xl w-9 h-9 rounded-lg text-main",
        function:
          "text-base disabled:text-black-20-opacity w-7 h-7 rounded-md text-black-sub",
      },
    },
    defaultVariants: {
      variant: "function",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof IconButtonVariants> {
  asChild?: boolean;
  icon: string;
  className?: string;
  variant?: "function" | "global";
  isToggled?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ asChild, icon, variant, isToggled = false, className, ...props }, ref) => {
    const Comp = (asChild ? Slot : Primitive.button) as React.ElementType;

    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(IconButtonVariants({ variant }), className)}
      >
        <span
          className={cn(
            "material-symbols-rounded",
            isToggled && "icon-fill text-main"
          )}
        >
          {icon}
        </span>
      </Comp>
    );
  }
);
IconButton.displayName = "IconButton";
