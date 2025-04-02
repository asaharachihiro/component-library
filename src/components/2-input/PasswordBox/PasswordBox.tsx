import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "../../0-common";
import { useFormContext } from "../Form/FormContext";
import { IconButton } from "../../1-action/IconButton";

interface PasswordBoxProps {
  id: string;
  className?: string;
  label?: string;
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

export const PasswordBox = React.forwardRef<HTMLInputElement, PasswordBoxProps>(
  (
    {
      label,
      id,
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
    const [showPassword, setShowPassword] = React.useState(false);

    const context = useFormContext();
    // FormContextが提供されていない場合
    const formData = context?.formData || {};
    const errors = context?.errors || {};
    const handleInputChange = context?.handleInputChange || (() => {});

    const isValidStatus = isValid ? isValid : errors[id] == null;

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className={className}>
        {label && <FormLabel label={label} isRequired={isRequired}></FormLabel>}
        <div className="relative mb-1">
          <InputBox
            id={id}
            value={formData[id] || value}
            type={showPassword ? "text" : "password"}
            isValid={isValidStatus}
            disabled={disabled}
            onChange={(e) => handleInputChange(id, e.target.value)}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            ref={ref}
            {...props}
          />
          <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2">
            <IconButton
              disabled={disabled}
              icon={showPassword ? "visibility" : "visibility_off"}
              aria-label="show password"
              onClick={toggleShowPassword}
            />
          </div>
        </div>
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
PasswordBox.displayName = "PasswordBox";
