import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "@components/0-common";
import { useFormContext } from "../Form/FormContext";
import { cn } from "../../../utils/cn";

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
  tooltip?: React.ReactNode;
  currency?: "jpy";
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
      tooltip,
      currency,
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

    const formatJpy = (val: string) => {
      const raw = val.replace(/[￥,]/g, "");
      if (!isNaN(Number(raw)) && raw !== "") {
        return "￥" + Number(raw).toLocaleString("ja-JP");
      }
      return val;
    };

    const initialValue =
      typeof value !== "undefined"
        ? value
        : typeof formData[id] !== "undefined"
          ? formData[id]
          : "";

    const [inputValue, setInputValue] = React.useState(() => {
      if (currency === "jpy" && !isNaN(Number(initialValue))) {
        return formatJpy(initialValue);
      }
      return initialValue;
    });

    React.useEffect(() => {
      if (typeof value !== "undefined" && value !== formData[id]) {
        handleInputChange(id, value);
      }
    }, []);

    const handleChange = (newValue: string) => {
      setInputValue(newValue);
      if (context) {
        handleInputChange(id, newValue);
      }

      if (onChange) {
        onChange(id, newValue);
      }
    };

    const handleBlur = (id: string, newValue: string) => {
      if (currency === "jpy") {
        const formatted = formatJpy(newValue);
        if (formatted !== newValue) {
          setInputValue(formatted);
          if (context) handleInputChange(id, formatted);
          if (onBlur) onBlur(id, formatted);
          return;
        }
      }

      if (onBlur) {
        onBlur(id, newValue);
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
        <InputBox
          id={id}
          value={inputValue}
          type={type}
          isValid={isValidStatus}
          disabled={disabled}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          ref={ref}
          asTextArea={type === "textArea"}
          {...props}
        />
        <div className={cn(supportMessage || errorMessage ? "mt-1" : "")}>
          {supportMessage && (
            <span className="text-xs text-black-sub">{supportMessage}</span>
          )}
          {!isValidStatus && (
            <ErrorText
              text={
                errors[id] || errorMessage || "入力がエラーになっています。"
              }
            />
          )}
        </div>
      </div>
    );
  }
);
TextBox.displayName = "TextBox";
