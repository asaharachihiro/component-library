import { Primitive } from "@radix-ui/react-primitive";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "../../../utils/cn";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  icon: string;
  className?: string;
  isToggled?: boolean;
  size?: "s" | "m";
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { asChild, icon, isToggled = false, className, size = "s", ...props },
    ref
  ) => {
    const Comp = (asChild ? Slot : Primitive.button) as React.ElementType;

    const IconButtonStyle = cn(
      "flex justify-center items-center hover:bg-black-5-opacity shrink-0 active:bg-black-10-opacity disabled:text-black-20-opacity disabled:pointer-events-none select-none transition-all",
      {
        "text-2xl w-9 h-9 rounded-lg text-main": size === "m",
        "text-base disabled:text-black-20-opacity w-7 h-7 rounded-md text-black-sub":
          size !== "m",
      }
    );

    return (
      <Comp ref={ref} {...props} className={cn(IconButtonStyle, className)}>
        <span
          className={cn(
            "material-symbols-rounded",
            isToggled && "text-main icon-fill"
          )}
        >
          {icon}
        </span>
      </Comp>
    );
  }
);
IconButton.displayName = "IconButton";
