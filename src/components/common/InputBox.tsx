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
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
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
      <div className={className}>
        <InputComponent
          id={id}
          ref={
            ref as React.Ref<HTMLInputElement> & React.Ref<HTMLTextAreaElement>
          }
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange && onChange(e)}
          disabled={disabled}
          className={inputStyle}
          aria-invalid={!isValid}
          {...(asTextArea ? { rows: 4 } : {})}
          {...props}
        />
      </div>
    );
  }
);
InputBox.displayName = "InputBox";
