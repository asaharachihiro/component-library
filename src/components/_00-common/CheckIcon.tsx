import * as React from "react";
import { cn } from "../../utils/cn";

interface CheckIconProps {
  id: string;
  className?: string;
  checked?: boolean | "indeterminate";
  disabled?: boolean;
  isValid?: boolean;
  children?: React.ReactNode;
  onChange?: (checked: boolean | "indeterminate") => void;
}

export const CheckIcon = React.forwardRef<HTMLInputElement, CheckIconProps>(
  (
    {
      id,
      className = "",
      children,
      checked = false,
      onChange,
      disabled = false,
      isValid = true,
      ...props
    },
    ref
  ) => {
    // スタイル設定
    const isNormalStyle = !disabled && isValid;
    const checkBoxtyle = cn(
      "flex h-7 w-7 select-none items-center justify-center rounded-md text-xl hover:bg-black-5-opacity active:bg-black-10-opacity",
      {
        "text-black-20-opacity pointer-events-none": disabled,
        "text-danger": !disabled && !isValid,
      }
    );

    return (
      <div className={className}>
        <div className={checkBoxtyle}>
          <input
            type="checkbox"
            id={id}
            checked={checked === "indeterminate" ? false : !!checked}
            aria-checked={checked === "indeterminate" ? "mixed" : !!checked}
            aria-disabled={disabled}
            data-checked={checked ? "true" : "false"}
            aria-invalid={!isValid}
            onChange={
              disabled
                ? undefined
                : (e) => {
                    if (onChange) onChange(e.target.checked);
                  }
            }
            {...props}
            disabled={disabled}
            className="hidden"
            tabIndex={0}
          />
          <span className="material-symbols-rounded">
            {checked === "indeterminate" ? (
              <span className={cn("icon-fill", isNormalStyle && "text-main")}>
                indeterminate_check_box
              </span>
            ) : checked ? (
              <span className={cn("icon-fill", isNormalStyle && "text-main")}>
                check_box
              </span>
            ) : (
              <span className={cn(isNormalStyle && "text-black-sub")}>
                check_box_outline_blank
              </span>
            )}
          </span>
        </div>
        {children && children}
      </div>
    );
  }
);
CheckIcon.displayName = "CheckIcon";
