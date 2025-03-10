import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Primitive } from "@radix-ui/react-primitive";
import { cn } from "../../../utils/cn";
import { Spinner } from "../../loading/Spinner/Spinner";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  size?: "s" | "m";
}

const baseButtonStyle =
  "flex items-center justify-center font-bold cursor-pointer relative overflow-hidden group";
const sizeS = "h-7 px-2 text-sm rounded-md min-w-12";
const sizeM = "h-9 px-6 text-base rounded-lg";

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
      size = "m",
      disabled,
      isActive,
      isLoading = false,
      icon,
      ...props
    },
    ref
  ) => {
    const Comp = (asChild ? Slot : Primitive.button) as React.ElementType;

    const ButtonStyle = cn(baseButtonStyle, {
      "bg-main text-white": !disabled && !isLoading && variant === "primary",
      "bg-danger text-white": !disabled && !isLoading && variant === "danger",
      [sizeM]: variant == "danger" || size !== "s",
      [sizeS]: size === "s" && variant !== "danger",
      "bg-black-20-opacity text-black-20-opacity border-black-20-opacity pointer-events-none":
        disabled || isLoading,
    });

    return (
      <Comp ref={ref} className={cn(ButtonStyle, className)} {...props}>
        <div className="absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10" />
        {isLoading && <Spinner className="absolute flex" />}
        {icon && (
          <div className={isLoading ? "opacity-0" : "mr-1 flex"}>
            <span className={"material-symbols-rounded"}>{icon}</span>
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
      size = "m",
      disabled,
      isActive,
      isLoading = false,
      icon,
      ...props
    },
    ref
  ) => {
    const Comp = (asChild ? Slot : Primitive.button) as React.ElementType;

    const ButtonStyle = cn(baseButtonStyle, {
      "border border-main text-main": !disabled && !isLoading,
      [sizeS]: size === "s",
      [sizeM]: size !== "s",
      "text-black-20-opacity border-black-20-opacity pointer-events-none":
        disabled || isLoading,
      "bg-main-bg": !disabled && !isLoading && isActive,
    });

    return (
      <Comp ref={ref} className={cn(ButtonStyle, className)} {...props}>
        <div className="absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10" />
        {isLoading && <Spinner className="absolute flex" />}
        {icon && (
          <div className={isLoading ? "opacity-0" : "mr-1 flex"}>
            <span className="material-symbols-rounded">{icon}</span>
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

    const ButtonStyle = cn(baseButtonStyle, [sizeS], {
      "text-main": variant === "textPrimary",
      "text-black-sub": variant === "textSecondary",
      "text-danger": variant === "textDanger",
      "text-black-20-opacity border-black-20-opacity pointer-events-none":
        disabled || isLoading,
      "bg-main-bg text-main":
        !disabled && !isLoading && variant !== "textDanger" && isActive,
    });

    return (
      <Comp ref={ref} className={cn(ButtonStyle, className)} {...props}>
        <div className="absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10" />
        {isLoading && <Spinner className="absolute flex" />}
        {icon && (
          <div className={isLoading ? "opacity-0" : "mr-1 flex"}>
            <span className="material-symbols-rounded">{icon}</span>
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
