import * as React from "react";
import { cn } from "../../utils/cn";

interface InputBoxProps {
  id: string;
  type: string;
  className?: string;
  placeholder?: string;
  value?: string;
  isValid?: boolean;
  disabled?: boolean;
  asTextArea?: boolean;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  onFocus?: (value: string) => void;
}
export const InputBox = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputBoxProps
>(
  (
    {
      id,
      type,
      className = "",
      placeholder,
      value,
      isValid = true,
      disabled = false,
      asTextArea = false,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const InputComponent = asTextArea ? "textarea" : "input";

    const inputStyle = cn("w-full rounded-lg border p-2", {
      "border-black-20-opacity text-black-sub pointer-events-none bg-black-3-opacity":
        disabled,
      "border-danger": !disabled && !isValid,
      "border-black-20-opacity focus:border-black-sub text-black":
        !disabled && isValid,
    });

    return (
      <InputComponent
        id={id}
        ref={
          ref as React.Ref<HTMLInputElement> & React.Ref<HTMLTextAreaElement>
        }
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onBlur={(e) => onBlur && onBlur(e.target.value)}
        onFocus={(e) => onFocus && onFocus(e.target.value)}
        disabled={disabled}
        className={cn(inputStyle, className)}
        aria-invalid={!isValid}
        {...(asTextArea ? { rows: 4 } : {})}
        {...props}
      />
    );
  }
);
InputBox.displayName = "InputBox";
