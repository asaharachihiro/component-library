import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../../utils/cn";

interface CheckIconProps {
  id: string;
  className?: string;
  checked?: boolean | "indeterminate";
  disabled?: boolean;
  isValid?: boolean;
  children?: React.ReactNode;
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
}

export const CheckIcon = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckIconProps
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
      <CheckboxPrimitive.Root
        id={id}
        className={cn(
          "inline-flex h-7 w-7 select-none items-center justify-center rounded-md text-2xl hover:bg-black-5-opacity active:bg-black-10-opacity",
          disabledStyle,
          errorStyle,
          className
        )}
        checked={internalChecked === "indeterminate" ? false : internalChecked}
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
    );
  }
);
CheckIcon.displayName = "CheckIcon";
