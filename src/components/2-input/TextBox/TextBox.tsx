import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "../../0-common";

interface TextBoxProps {
  label?: string;
  id: string;
  type?: "text" | "textArea";
  isRequired?: boolean;
  className?: string;
  placeholder?: string;
  supportMessage?: string;
  errorMessage?: string;
  value?: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
  isValid?: boolean;
  disabled?: boolean;
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
