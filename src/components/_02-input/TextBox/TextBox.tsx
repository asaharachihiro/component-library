import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "@components/_00-common";
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
  isInvalid?: boolean;
  disabled?: boolean;
  onChange?: (id: string, value: string) => void;
  onBlur?: (id: string, value: string) => void;
  onFocus?: (id: string, value: string) => void;
  tooltip?: React.ReactNode;
  currency?: "jpy";
  unit?: string;
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
      isInvalid,
      disabled = false,
      tooltip,
      currency,
      unit,
      ...props
    },
    ref
  ) => {
    // FormContext
    const context = useFormContext();
    const formData = context?.formData || {};
    const errors = context?.errors || {};
    const handleInputChange = context?.handleInputChange || (() => {});

    // バリデーションの判定
    const isInvalidStatus =
      typeof isInvalid === "boolean" ? isInvalid : errors[id] != null;

    // 金額のフォーマット関数
    const formatJpy = (val: string) => {
      const raw = val.replace(/[￥,]/g, "");
      if (!isNaN(Number(raw)) && raw !== "") {
        return "￥" + Number(raw).toLocaleString("ja-JP");
      }
      return val;
    };

    // 単位のフォーマット
    const formatWithUnit = (val: string) => {
      const raw = unit ? val.replace(new RegExp(unit + "$"), "") : val;
      return raw + (raw ? " " : "") + unit;
    };

    // 初期値の設定
    const initialValue =
      typeof value !== "undefined"
        ? value
        : typeof formData[id] !== "undefined"
          ? formData[id]
          : "";

    // 内部state
    const [inputValue, setInputValue] = React.useState(initialValue);
    const [displayValue, setDisplayValue] = React.useState(() => {
      let v = initialValue;
      if (currency === "jpy") v = formatJpy(v);
      if (unit) v = formatWithUnit(v);
      return v;
    });

    // 初期値の更新
    React.useEffect(() => {
      if (typeof value !== "undefined" && value !== formData[id]) {
        handleInputChange(id, value);
      }
    }, []);

    // onChangeハンドラー
    const handleChange = (newValue: string) => {
      setInputValue(newValue);
      setDisplayValue(newValue);
      if (context) {
        handleInputChange(id, newValue);
      }

      if (onChange) {
        onChange(id, newValue);
      }
    };

    // onBlurハンドラー
    const handleBlur = (id: string, newValue: string) => {
      let v = newValue;
      if (currency === "jpy") v = formatJpy(v.replace(/[￥,]/g, ""));
      if (unit) v = formatWithUnit(v);
      setDisplayValue(v);
      setInputValue(newValue);
      if (context) handleInputChange(id, inputValue);
      if (onBlur) onBlur(id, inputValue);
    };

    // onFocusハンドラー
    const handleFocus = (id: string, value: string) => {
      setDisplayValue(inputValue);
      if (onFocus) onFocus(id, value);
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
          value={displayValue}
          type={type}
          isInvalid={isInvalidStatus}
          disabled={disabled}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
          ref={ref}
          asTextArea={type === "textArea"}
          {...props}
        />
        <div className={cn(supportMessage || errorMessage ? "mt-1" : "")}>
          {supportMessage && (
            <span className="typo-label-sm text-black-sub">
              {supportMessage}
            </span>
          )}
          {isInvalidStatus && (
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
