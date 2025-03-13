import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "../../0-common";

interface TextBoxProps {
  id: string;
  className?: string;
  label?: string;
  type?: "text" | "textArea";
  isRequired?: boolean;
  placeholder?: string;
  supportMessage?: string;
  errorMessage?: string;
  value?: string;
  isValid?: boolean;
  disabled?: boolean;
  validate: (value: string) => void;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  onFocus?: (value: string) => void;
}

export const TextBox = React.forwardRef<HTMLInputElement, TextBoxProps>(
  (
    {
      label,
      id,
      type = "text",
      isRequired = false,
      className = "",
      placeholder,
      supportMessage,
      errorMessage,
      value,
      onChange,
      validate,
      onBlur,
      onFocus,
      isValid,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className={className}>
        {label && <FormLabel label={label} isRequired={isRequired}></FormLabel>}
        <InputBox
          {...{
            id,
            value,
            type,
            isValid,
            disabled,
            onChange,
            onBlur,
            onFocus,
            placeholder,
            ref,
          }}
          asTextArea={type === "textArea"}
          {...props}
        />
        {supportMessage && (
          <span className="text-xs text-black-sub">{supportMessage}</span>
        )}
        {!isValid && errorMessage && <ErrorText text={errorMessage} />}
      </div>
    );
  }
);
TextBox.displayName = "TextBox";
