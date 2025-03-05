import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "../../common";

interface TextBoxProps {
  label?: string;
  id: string;
  type?: "text" | "textArea";
  isRequired?: boolean;
  className?: string;
  placeholder?: string;
  supportMassage?: string;
  errorMassage?: string;
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
      supportMassage,
      errorMassage,
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
            supportMassage,
            errorMassage,
            ref,
          }}
          asTextArea={type === "textArea"}
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
TextBox.displayName = "TextBox";
