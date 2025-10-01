import * as React from "react";
import { ErrorText, FormLabel } from "./index";
import { cn } from "../../utils/cn";

interface OptionsGroupProps {
  id: string;
  label?: string;
  isRequired?: boolean;
  className?: string;
  errorText?: string;
  children?: React.ReactNode;
  supportText?: string;
  isHorizontal?: boolean;
  tooltip?: React.ReactNode;
}

export const OptionsGroup = React.forwardRef<
  HTMLInputElement,
  OptionsGroupProps
>(
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
      tooltip,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("", className)} {...props} ref={ref}>
        {label && (
          <FormLabel label={label} isRequired={isRequired} tooltip={tooltip} />
        )}
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
OptionsGroup.displayName = "OptionsGroup";
