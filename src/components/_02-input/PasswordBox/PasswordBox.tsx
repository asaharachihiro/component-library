import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "@components/_00-common";
import { useFormContext } from "../Form/FormContext";
import { IconButton } from "@components/_01-action/IconButton";

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
  tooltip?: React.ReactNode;
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
      tooltip,
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

    const initialValue =
      typeof value !== "undefined"
        ? value
        : typeof formData[id] !== "undefined"
          ? formData[id]
          : "";

    const [inputValue, setInputValue] = React.useState(initialValue);

    React.useEffect(() => {
      if (typeof value !== "undefined" && value !== formData[id]) {
        handleInputChange(id, value);
      }
    }, []);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const handleChange = (newValue: string) => {
      setInputValue(newValue);
      if (context) {
        handleInputChange(id, newValue);
      }

      if (onChange) {
        onChange(id, newValue);
      }
    };

    return (
      <div className={className}>
        {label && (
          <FormLabel
            label={label}
            isRequired={isRequired}
            tooltip={tooltip}
          ></FormLabel>
        )}
        <div className="relative mb-1">
          <InputBox
            id={id}
            value={inputValue}
            type={showPassword ? "text" : "password"}
            isValid={isValidStatus}
            disabled={disabled}
            onChange={(e) => handleChange(e.target.value)}
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
