import * as React from "react";
import { cn } from "../../../utils/cn";
import { ErrorText, InputBox } from "@components/0-common";
import { useFormContext } from "../Form";

interface SearchBoxProps {
  id: string;
  className?: string;
  placeholder?: string;
  value?: string;
  isValid?: boolean;
  disabled?: boolean;
  onChange?: (id: string, value: string) => void;
  onBlur?: (id: string, value: string) => void;
  onFocus?: (id: string, value: string) => void;
  supportMessage?: string;
  errorMessage?: string;
}

export const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  (
    {
      id,
      className = "",
      placeholder,
      value,
      onChange,
      onBlur,
      onFocus,
      supportMessage,
      errorMessage,
      disabled = false,
      isValid = true,
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

    const handleChenge = (newValue: string) => {
      setInputValue(newValue);
      if (context) {
        handleInputChange(id, newValue);
      }

      if (onChange) {
        onChange(id, newValue);
      }
    };

    const ButtonStyle = cn(
      "flex w-[42px] h-[42px] min-w-[42px] items-center justify-center rounded-lg rounded-l-none border border-l-0  text-2xl  text-black-sub transition-all",
      isValidStatus ? "border-black-20-opacity" : "border-danger",
      disabled
        ? "text-black-20-opacity bg-black-3-opacity pointer-events-none"
        : "hover:bg-black-5-opacity active:bg-black-10-opacity"
    );

    return (
      <div className={className}>
        <div className={cn("flex text-black", className)}>
          <InputBox
            id={id}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => handleChenge(e.target.value)}
            onBlur={onBlur}
            isValid={isValidStatus}
            disabled={disabled}
            onFocus={onFocus}
            className="rounded-r-none"
            aria-label="Search Input"
            type={"text"}
            ref={ref}
            {...props}
          />
          <button
            type="button"
            aria-label="Search Button"
            className={ButtonStyle}
            disabled={disabled}
          >
            <span className="material-symbols-rounded">search</span>
          </button>
        </div>
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
SearchBox.displayName = "SearchBox";
