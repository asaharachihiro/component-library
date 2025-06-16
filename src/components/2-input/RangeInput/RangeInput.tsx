import * as React from "react";
import { ErrorText } from "@components/0-common";
import { cn } from "../../../utils/cn";

interface RangeInputProps {
  id: string;
  children: [React.ReactNode, React.ReactNode];
  className?: string;
  isValid?: boolean;
  supportMessage?: string;
  errorMessage?: string;
}

export const RangeInput: React.FC<RangeInputProps> = ({
  id,
  isValid,
  children,
  className,
  supportMessage,
  errorMessage,
}) => {
  const childArray = React.Children.toArray(children);

  return (
    <div className={className} id={id}>
      <div className={"flex items-end"}>
        {childArray.map((child, index) => (
          <React.Fragment key={index}>
            {child}
            {index === 0 && (
              <span className="mx-2 flex h-10 items-center text-xs text-black-sub">
                〜
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className={cn(supportMessage || errorMessage ? "mt-1" : "")}>
        {supportMessage && (
          <span className="text-xs text-black-sub">{supportMessage}</span>
        )}
        {isValid === false && (
          <ErrorText text={errorMessage || "入力がエラーになっています。"} />
        )}
      </div>
    </div>
  );
};
RangeInput.displayName = "RangeInput";
