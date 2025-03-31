import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "../../0-common";
import { useFormContext } from "../Form/FormContext";

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
  onChange?: (id: string, value: string) => void;
  onBlur?: (id: string, value: string) => void;
  onFocus?: (id: string, value: string) => void;
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
      onBlur,
      onFocus,
      isValid,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const context = useFormContext();
    // FormContextが提供されていない場合
    const formData = context?.formData || {};
    const errors = context?.errors || {};
    const handleInputChange = context?.handleInputChange || (() => {});

    const isValidStatus = isValid ? isValid : errors[id] == null;

    return (
      <div className={className}>
        {label && <FormLabel label={label} isRequired={isRequired}></FormLabel>}
        <InputBox
          id={id}
          value={formData[id] || value}
          type={type}
          isValid={isValidStatus}
          disabled={disabled}
          onChange={(e) => handleInputChange(id, e.target.value)}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          ref={ref}
          asTextArea={type === "textArea"}
          {...props}
        />
        {supportMessage && (
          <span className="text-xs text-black-sub">{supportMessage}</span>
        )}
        {!isValidStatus && (
          <ErrorText
            text={errors[id] || errorMessage || "入力がエラーになっています。"}
          />
        )}
      </div>
    );
  }
);
TextBox.displayName = "TextBox";
