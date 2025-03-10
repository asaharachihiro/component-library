import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../../../utils/cn";

interface CheckboxProps {
  id: string;
  className?: string;
  checked?: boolean | "indeterminate";
  disabled?: boolean;
  isValid?: boolean;
  children?: React.ReactNode;
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      id,
      className,
      children,
      checked = false,
      onCheckedChange,
      disabled = false,
      isValid = true,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState<
      boolean | "indeterminate"
    >(checked);

    React.useEffect(() => {
      if (checked !== undefined) {
        setInternalChecked(checked);
      }
    }, [checked]);

    const handleCheckedChange = () => {
      let newChecked: boolean | "indeterminate";
      if (internalChecked === "indeterminate" || !internalChecked) {
        newChecked = true;
      } else {
        newChecked = false;
      }

      setInternalChecked(newChecked);
      if (onCheckedChange) {
        onCheckedChange(newChecked);
      }
    };

    const disabledStyle =
      disabled && "text-black-20-opacity pointer-events-none";
    const errorStyle = !disabled && !isValid && "text-danger";
    const isNomalStyle = !disabled && isValid;

    return (
      <div
        className={cn(
          disabledStyle,
          className,
          "flex cursor-pointer items-center text-base transition-all"
        )}
        onClick={handleCheckedChange}
      >
        <CheckboxPrimitive.Root
          id={id}
          className={cn(
            errorStyle,
            "flex h-7 w-7 select-none items-center justify-center rounded-md text-2xl hover:bg-black-5-opacity active:bg-black-10-opacity"
          )}
          checked={
            internalChecked === "indeterminate" ? false : internalChecked
          }
          onCheckedChange={handleCheckedChange}
          {...props}
          ref={ref}
          disabled={disabled}
        >
          <span className="material-symbols-rounded">
            {internalChecked === "indeterminate" ? (
              <span className={cn("icon-fill", isNomalStyle && "text-main")}>
                indeterminate_check_box
              </span>
            ) : internalChecked ? (
              <span className={cn("icon-fill", isNomalStyle && "text-main")}>
                check_box
              </span>
            ) : (
              <span className={cn(isNomalStyle && "text-black-sub")}>
                check_box_outline_blank
              </span>
            )}
          </span>
        </CheckboxPrimitive.Root>
        <span className={cn("ml-1 text-base")}>{children}</span>
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
