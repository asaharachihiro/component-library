import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Primitive } from "@radix-ui/react-primitive";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { Spinner } from "../../loading/Spinner/Spinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold cursor-pointer relative overflow-hidden group",
  {
    variants: {
      variant: {
        primary: "bg-main text-white",
        secondary: "border border-main text-main",
        textPrimary: "text-main",
        textSecondary: "text-black-sub",
        danger: "bg-danger text-white",
        textDanger: "text-danger",
      },
      size: {
        sm: "h-7 px-2 text-sm rounded-md min-w-12",
        md: "h-9 px-6 text-base rounded-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: string;
  isActive?: boolean;
  isLoading?: boolean;
  variant:
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "danger"
    | "textDanger";
}

const ContainedBaseButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { variant: "primary" | "danger" }
>(
  (
    {
      asChild = false,
      children,
      className,
      variant,
      size,
      disabled,
      isActive,
      isLoading = false,
      icon,
      ...props
    },
    ref
  ) => {
    const Comp = (asChild ? Slot : Primitive.button) as React.ElementType;

    const computedSize = variant === "danger" ? "md" : size;
    const disabledStyle =
      disabled || isLoading
        ? "bg-black-20-opacity text-black-20-opacity border-black-20-opacity pointer-events-none"
        : "";
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size: computedSize }),
          disabledStyle,
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10" />
        {isLoading && <Spinner className="absolute flex" />}
        {icon && (
          <div className={isLoading ? "opacity-0" : "mr-1 flex"}>
            <span
              className="material-symbols-rounded"
              style={{ fontSize: "16px" }}
            >
              {icon}
            </span>
          </div>
        )}
        <span className={cn(isLoading && "opacity-0")}>{children}</span>
      </Comp>
    );
  }
);

const OutlinedBaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      children,
      className,
      variant,
      size,
      disabled,
      isActive,
      isLoading = false,
      icon,
      ...props
    },
    ref
  ) => {
    const Comp = (asChild ? Slot : Primitive.button) as React.ElementType;
    const disabledStyle =
      disabled || isLoading
        ? "text-black-20-opacity border-black-20-opacity pointer-events-none"
        : "";
    const activeStyle = isActive && "bg-main-bg";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          disabledStyle,
          activeStyle,
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10" />
        {isLoading && <Spinner className="absolute flex" />}
        {icon && (
          <div className={isLoading ? "opacity-0" : "mr-1 flex"}>
            <span
              className="material-symbols-rounded"
              style={{ fontSize: "16px" }}
            >
              {icon}
            </span>
          </div>
        )}
        <span className={cn(isLoading && "opacity-0")}>{children}</span>
      </Comp>
    );
  }
);

const TextBaseButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { variant: "textPrimary" | "textSecondary" | "textDanger" }
>(
  (
    {
      asChild = false,
      children,
      className,
      variant,
      size,
      disabled,
      isActive,
      isLoading = false,
      icon,
      ...props
    },
    ref
  ) => {
    const Comp = (asChild ? Slot : Primitive.button) as React.ElementType;

    const disabledStyle =
      disabled || isLoading
        ? "text-black-20-opacity border-black-20-opacity pointer-events-none"
        : "";
    const activeStyle =
      variant !== "textDanger" && isActive && "bg-main-bg text-main";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          disabledStyle,
          activeStyle,
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10" />
        {isLoading && <Spinner className="absolute flex" />}
        {icon && (
          <div className={isLoading ? "opacity-0" : "mr-1 flex"}>
            <span
              className="material-symbols-rounded"
              style={{ fontSize: "16px" }}
            >
              {icon}
            </span>
          </div>
        )}
        <span
          className={isLoading ? "opacity-0" : "underline underline-offset-4"}
        >
          {children}
        </span>
      </Comp>
    );
  }
);

const ButtonComponentMap: Record<ButtonProps["variant"], React.ElementType> = {
  primary: ContainedBaseButton,
  secondary: OutlinedBaseButton,
  textPrimary: TextBaseButton,
  textSecondary: TextBaseButton,
  danger: ContainedBaseButton,
  textDanger: TextBaseButton,
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      disabled,
      isActive,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const Component = ButtonComponentMap[variant];

    return (
      <Component
        className={className}
        variant={variant}
        size={size}
        asChild={asChild}
        children={children}
        disabled={disabled}
        isActive={isActive}
        isLoading={isLoading}
        icon={icon}
        ref={ref}
        {...props}
      />
    );
  }
);
