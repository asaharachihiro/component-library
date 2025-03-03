import * as React from "react";
import { ErrorText, FormLabel } from ".";
import { cn } from "../../utils/cn";

interface OptionGroupProps {
  id: string;
  label?: string;
  isRequired?: boolean;
  className?: string;
  errorText?: string;
  children?: React.ReactNode;
  supportText?: string;
  isHorizontal?: boolean;
}

export const OptionGroup = React.forwardRef<HTMLInputElement, OptionGroupProps>(
  (
    {
      id,
      label,
      isRequired = false,
      className = "",
      errorText = "",
      children,
      supportText,
      isHorizontal = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("", className)} {...props} ref={ref}>
        {label && <FormLabel label={label} isRequired={isRequired} />}
        {supportText && (
          <span className="text-xs text-black-sub">{supportText}</span>
        )}
        {errorText && <ErrorText text={errorText} />}
        <div
          className={cn(
            isHorizontal
              ? "mt-2 flex space-x-4"
              : "mt-2 flex flex-col items-start space-y-2"
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);
OptionGroup.displayName = "OptionGroup";
