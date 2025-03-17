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
  defaultValue?: string;
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
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      isValid,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const { formData, errors, handleInputChange } = useFormContext();
    const isValidStatus =
      !isValid && (errors[id] === null || errors[id] === undefined);
    console.log(isValidStatus, isValid, errors[id]);
    return (
      <div className={className}>
        {label && <FormLabel label={label} isRequired={isRequired}></FormLabel>}
        <InputBox
          id={id}
          defaultValue={formData[id] || defaultValue}
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
