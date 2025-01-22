import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Primitive } from "@radix-ui/react-primitive";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold cursor-pointer ",
  {
    variants: {
      variant: {
        primary: "bg-main text-white",
        secondary: "border border-main text-main",
        textPrimary: "text-main underline underline-offset-4",
        textSecondary: "text-black-sub underline underline-offset-4",
        danger: "bg-danger text-white",
        textDanger: "text-danger underline underline-offset-4",
      },
      size: {
        sm: "h-7 px-2 text-sm rounded-md min-w-12",
        md: "h-9 px-6 text-base rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, children, disabled, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : Primitive.button;
    const computedSize = variant?.startsWith("text") ? "sm" : size;
    const disabledStyle = cn(
      disabled && [
        "text-black-20-opacity border-black-20-opacity pointer-events-none",
        variant == null || ["primary", "danger"].includes(variant)
          ? "bg-black-20-opacity"
          : "",
      ]
    );
    const hoverStyle = disabled
      ? ""
      : "bg-black opacity-0 group-hover:opacity-5 transition-all group-active:opacity-10";

    return (
      <Comp
        ref={ref}
        className={cn(
          "relative overflow-hidden group ",
          buttonVariants({ variant, size: computedSize }),
          disabledStyle,
          className
        )}
        {...props}
      >
        <div className={cn("absolute inset-0", hoverStyle)} />
        <span className="flex space-x-1">{children}</span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
