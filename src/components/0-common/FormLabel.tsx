import * as React from "react";
import { cn } from "../../utils/cn";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  isRequired?: boolean;
  className?: string;
}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ label, isRequired, className, htmlFor, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn("mb-1 flex flex-nowrap items-center", className)}
        htmlFor={htmlFor || "defaultId"}
        {...props}
      >
        <span className="text-sm font-medium text-black">{label}</span>
        {isRequired && (
          <span className="ml-2 flex h-5 items-center rounded-md bg-black-10-opacity px-2 text-xs font-bold text-black-sub">
            必須
          </span>
        )}
      </label>
    );
  }
);

FormLabel.displayName = "FormLabel";
