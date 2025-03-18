import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../../../utils/cn";
import { useFormContext } from "../../2-input/Form";

interface CheckboxProps {
  id: string;
  className?: string;
  defaultChecked?: boolean | "indeterminate";
  disabled?: boolean;
  isValid?: boolean;
  children?: React.ReactNode;
  onChange?: (checked: boolean | "indeterminate") => void;
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
      defaultChecked = false,
      onChange,
      disabled = false,
      isValid = true,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState<
      boolean | "indeterminate"
    >(defaultChecked);

    const context = useFormContext();
    // FormContextが提供されていない場合
    const formData = context?.formData || {};
    const errors = context?.errors || {};
    const handleInputChange = context?.handleInputChange || (() => {});
    const isValidStatus = isValid ? isValid : errors[id] == null;

    React.useEffect(() => {
      setInternalChecked(formData[id] || defaultChecked);
    }, [formData[id], defaultChecked]);

    const handleCheckedChange = () => {
      let newChecked: boolean | "indeterminate";
      if (internalChecked === "indeterminate" || !internalChecked) {
        newChecked = true;
      } else {
        newChecked = false;
      }
      setInternalChecked(newChecked);

      if (onChange) {
        onChange(newChecked);
      }
      handleInputChange(id, newChecked.toString());
    };

    const disabledStyle =
      disabled && "text-black-20-opacity pointer-events-none";
    const errorStyle = !disabled && isValidStatus && "text-danger";
    const isNormalStyle = !disabled && isValidStatus;

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
              <span className={cn("icon-fill", isNormalStyle && "text-main")}>
                indeterminate_check_box
              </span>
            ) : internalChecked ? (
              <span className={cn("icon-fill", isNormalStyle && "text-main")}>
                check_box
              </span>
            ) : (
              <span className={cn(isNormalStyle && "text-black-sub")}>
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
