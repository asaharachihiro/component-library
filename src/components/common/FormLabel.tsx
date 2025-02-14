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
        <span className="text-sm text-black">{label}</span>
        {isRequire && (
          <span className="text-xs text-black-sub font-bold bg-black-10-opacity px-2 h-5 rounded-md m-2 flex items-center">
            必須
          </span>
        )}
      </Label>
    );
  }
);

FormLabel.displayName = "FormLabel";
