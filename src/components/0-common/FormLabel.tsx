import * as React from "react";
import { cn } from "../../utils/cn";
import { Tooltip } from "@components/5-notification/Tooltip";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  isRequired?: boolean;
  className?: string;
  tooltip?: React.ReactNode;
}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ label, isRequired, className, htmlFor, tooltip, ...props }, ref) => {
    return (
      <div className={cn("relative mb-1 flex items-center", className)}>
        <label
          ref={ref}
          className="flex flex-nowrap"
          htmlFor={htmlFor || "defaultId"}
          {...props}
        >
          <span className="text-sm font-medium text-black">{label}</span>
          {isRequired && (
            <span className="ml-2 flex h-5 shrink-0 items-center rounded-md bg-black-10-opacity px-2 text-xs font-bold text-black-sub">
              必須
            </span>
          )}
        </label>
        {tooltip && (
          <Tooltip id={`${htmlFor}-tooltip`} className="ml-2">
            {tooltip}
          </Tooltip>
        )}
      </div>
    );
  }
);

FormLabel.displayName = "FormLabel";
