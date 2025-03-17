import * as React from "react";
import { cn } from "../../utils/cn";

interface InputBoxProps {
  id: string;
  type: string;
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  isValid?: boolean;
  disabled?: boolean;
  asTextArea?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (id: string, value: string) => void;
  onFocus?: (id: string, value: string) => void;
  autoComplete?: string;
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
      defaultValue = "",
      isValid = true,
      disabled = false,
      asTextArea = false,
      autoComplete,
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
        defaultValue={defaultValue || ""}
        onChange={onChange}
        onBlur={(e) => onBlur && onBlur(id, e.target.value)}
        onFocus={(e) => onFocus && onFocus(id, e.target.value)}
        disabled={disabled}
        className={cn(inputStyle, className)}
        autoComplete={autoComplete}
        aria-disabled={disabled}
        aria-invalid={!isValid}
        {...(asTextArea ? { rows: 4 } : {})}
        {...props}
      />
    );
  }
);
InputBox.displayName = "InputBox";
