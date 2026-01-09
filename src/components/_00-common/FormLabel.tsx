import * as React from "react";
import { cn } from "../../utils/cn";
import { Tooltip } from "@components/_05-notification/Tooltip";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  isRequired?: boolean;
  className?: string;
  tooltip?: React.ReactNode;
}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ label, isRequired, className, htmlFor, tooltip, ...props }, ref) => {
    // スタイル設定
    const labelStyle = "typo-label-md text-black";
    const requiredLabelStyle =
      "ml-2 flex h-5 shrink-0 items-center rounded-md bg-black-10-opacity px-2 typo-label-sm text-black-sub";

    return (
      <div
        className={cn("relative mb-1 flex items-center font-sans", className)}
      >
        <label
          ref={ref}
          className="flex flex-nowrap"
          htmlFor={htmlFor || "defaultId"}
          {...props}
        >
          <span className={labelStyle}>{label}</span>
          {isRequired && <span className={requiredLabelStyle}>必須</span>}
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
