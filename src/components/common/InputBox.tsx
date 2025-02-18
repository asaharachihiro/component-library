import * as React from "react";
import { cn } from "../../utils/cn";
import { ErrorText } from "./ErrorText";

interface InputBoxProps {
  id: string;
  type: "text" | "textarea";
  supportMassage?: string;
  errorMassage?: string;
  isRequire?: boolean;
  className?: string;
  placeholder?: string;
  value?: string;
  isValid?: boolean;
  disabled?: boolean;
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
      supportMassage,
      errorMassage,
      className,
      placeholder,
      value,
      isValid = true,
      disabled = false,
      onChange,
      ...props
    },
    ref
  ) => {
    const boxStyle = !isValid
      ? "border-danger"
      : "border-black-20-opacity focus:border-black-sub text-black";
    const disabledStyle =
      disabled && "text-black-sub pointer-events-none bg-black-3-opacity";
    const InputComponent = type === "text" ? "input" : type;

    return (
      <>
        <InputComponent
          id={id}
          ref={
            ref as React.Ref<HTMLInputElement> & React.Ref<HTMLTextAreaElement>
          }
          type={type === "textarea" ? undefined : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange && onChange(e)}
          disabled={disabled}
          className={cn(
            "mb-1 w-full rounded-lg border p-2",
            boxStyle,
            disabledStyle,
            className
          )}
          aria-invalid={!isValid}
          {...(type === "textarea" ? { rows: 4 } : {})}
          {...props}
        />
        {supportMassage && (
          <span className="text-xs text-black-sub">{supportMassage}</span>
        )}
        {!isValid && <ErrorText text={errorMassage} />}
      </>
    );
  }
);
InputBox.displayName = "InputBox";
