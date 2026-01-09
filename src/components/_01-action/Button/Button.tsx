import * as React from "react";
import { cn } from "../../../utils/cn";
import { Spinner } from "@components/_08-loading/Spinner/Spinner";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
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
  "flex items-center justify-center cursor-pointer relative overflow-hidden group shrink-0 text-nowrap";
const sizeS = "h-7 px-2 typo-label-md rounded-md min-w-12";
const sizeM = "h-9 px-6 typo-label-lg rounded-lg";

// primary, danger
const ContainedBaseButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { variant: "primary" | "danger" }
>(
  (
    {
      label,
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
    const ButtonStyle = cn(baseButtonStyle, size === "s" ? sizeS : sizeM, {
      "bg-primary text-white": !disabled && !isLoading && variant === "primary",
      "bg-danger text-white": !disabled && !isLoading && variant === "danger",
      "bg-black-5-opacity text-black-20-opacity border-black-20-opacity pointer-events-none":
        disabled || isLoading,
    });

    return (
      <button
        ref={ref}
        className={cn(ButtonStyle, className)}
        disabled={disabled || isLoading}
        {...props}
      >
        <div className="absolute bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10" />
        {isLoading && <Spinner className="absolute flex" />}
        {icon && (
          <div
            className={cn(
              "typo-title-sm",
              isLoading ? "opacity-0" : "mr-1 flex"
            )}
          >
            <span className={"material-symbols-rounded"}>{icon}</span>
          </div>
        )}
        <span className={cn(isLoading && "opacity-0")}>{label}</span>
      </button>
    );
  }
);

// secondary
const OutlinedBaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
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
    const ButtonStyle = cn(baseButtonStyle, {
      "border border-primary text-primary": !disabled && !isLoading,
      [sizeS]: size === "s",
      [sizeM]: size !== "s",
      "text-black-20-opacity border-black-20-opacity pointer-events-none border":
        disabled || isLoading,
      "bg-primary-sub": !disabled && !isLoading && isActive,
    });

    return (
      <button
        ref={ref}
        className={cn(ButtonStyle, className)}
        disabled={disabled || isLoading}
        {...props}
      >
        <div className="absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10" />
        {isLoading && <Spinner className="absolute flex" />}
        {icon && (
          <div
            className={cn(
              "typo-title-sm",
              isLoading ? "opacity-0" : "mr-1 flex"
            )}
          >
            <span className="material-symbols-rounded">{icon}</span>
          </div>
        )}
        <span className={cn(isLoading && "opacity-0")}>{label}</span>
      </button>
    );
  }
);

// textPrimary, textSecondary, textDanger
const TextBaseButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { variant: "textPrimary" | "textSecondary" | "textDanger" }
>(
  (
    {
      label,
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
    const ButtonStyle = cn(baseButtonStyle, [sizeS], {
      "text-primary": variant === "textPrimary",
      "text-black-sub": variant === "textSecondary",
      "text-danger": variant === "textDanger",
      "text-black-20-opacity border-black-20-opacity pointer-events-none":
        disabled || isLoading,
      "bg-primary-sub text-primary":
        !disabled && !isLoading && variant !== "textDanger" && isActive,
    });

    return (
      <button
        ref={ref}
        className={cn(ButtonStyle, className)}
        disabled={disabled || isLoading}
        {...props}
      >
        <div className="absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-5 group-focus-visible:opacity-5 group-active:opacity-10" />
        {isLoading && <Spinner className="absolute flex" />}
        {icon && (
          <div
            className={cn(
              "typo-title-sm",
              isLoading ? "opacity-0" : "mr-1 flex"
            )}
          >
            <span className="material-symbols-rounded">{icon}</span>
          </div>
        )}
        <span className={cn(isLoading && "opacity-0")}>{label}</span>
      </button>
    );
  }
);

// variantでコンポーネントをマッピング
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
      label,
      className,
      variant,
      size,
      isLoading = false,
      disabled,
      isActive,
      icon,
      type = "button",
      ...props
    },
    ref
  ) => {
    const Component = ButtonComponentMap[variant];

    return (
      <Component
        label={label}
        className={className}
        variant={variant}
        size={size}
        disabled={disabled}
        isActive={isActive}
        isLoading={isLoading}
        icon={icon}
        ref={ref}
        type={type}
        data-is-active={isActive}
        {...props}
      />
    );
  }
);
