import * as React from "react";
import { Label } from "@radix-ui/react-label";
import { cn } from "../../utils/cn";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  isRequire?: boolean;
  className?: string;
}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ label, isRequire, className, htmlFor, ...props }, ref) => {
    return (
      <Label
        ref={ref}
        className={cn("flex flex-nowrap items-center", className)}
        htmlFor={htmlFor || "defaultId"}
        {...props}
      >
        <span className="text-sm font-medium text-black">{label}</span>
        {isRequire && (
          <span className="m-2 flex h-5 items-center rounded-md bg-black-10-opacity px-2 text-xs font-bold text-black-sub">
            必須
          </span>
        )}
      </Label>
    );
  }
);

FormLabel.displayName = "FormLabel";
