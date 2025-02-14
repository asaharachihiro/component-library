import * as React from "react";
import { cn } from "../../utils/cn";
import { ErrorText } from "./ErrorText";

interface InputBoxProps {
  id: string;
  type?: string;
  supportMassage?: string;
  errorMassage?: string;
  isRequire?: boolean;
  className?: string;
  placeholder?: string;
  value?: string;
  isValid?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export const InputBox = React.forwardRef<HTMLInputElement, InputBoxProps>(
  (
    {
      id,
      type = "text",
      supportMassage,
      errorMassage,
      className,
      placeholder,
      value,
      isValid = true,
      onChange,
      ...props
    },
    ref
  ) => {
    const boxStyle = !isValid
      ? "border-danger"
      : "border-black-20-opacity focus:border-black-sub";
    console.log(isValid);
    return (
      <div className={cn(className)}>
        <input
          id={id}
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn("w-full rounded-lg border p-2 text-black", boxStyle)}
          aria-invalid={!isValid}
          {...props}
        />
        {supportMassage && (
          <span className="text-xs text-black-sub">{supportMassage}</span>
        )}
        {!isValid && <ErrorText text={errorMassage} />}
      </div>
    );
  }
);
InputBox.displayName = "InputBox";
