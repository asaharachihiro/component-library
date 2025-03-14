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
  defaultValue?: string;
  isValid?: boolean;
  disabled?: boolean;
  onChange?: (id: string, value: string) => void;
  onBlur?: (id: string, value: string) => void;
  onFocus?: (id: string, value: string) => void;
}

export const TextBox: React.FC<TextBoxProps> = ({
  label,
  id,
  type = "text",
  isRequired = false,
  className = "",
  placeholder,
  supportMessage,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  isValid,
  disabled = false,
  ...props
}) => {
  const { formData, errors, handleInputChange } = useFormContext();
  return (
    <div className={className}>
      {label && <FormLabel label={label} isRequired={isRequired}></FormLabel>}
      <InputBox
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        isValid={errors[id] ? false : isValid}
        onChange={(id, value) => {
          handleInputChange(id, value);
          onChange && onChange(id, value);
        }}
        onBlur={(id, value) => onBlur && onBlur(id, value)}
        onFocus={(id, value) => onFocus && onFocus(id, value)}
        defaultValue={formData[id] || defaultValue}
        asTextArea={type === "textArea"}
        {...props}
      />
      {supportMessage && (
        <span className="text-xs text-black-sub">{supportMessage}</span>
      )}
      {errors[id] && <ErrorText text={errors[id]} />}
    </div>
  );
};
TextBox.displayName = "TextBox";
