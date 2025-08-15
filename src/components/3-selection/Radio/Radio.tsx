import * as React from "react";
import { cn } from "../../../utils/cn";
import { useFormContext } from "@components/2-input/Form";
import { ErrorText } from "@components/0-common";

interface RadioProps {
  id: string;
  className?: string;
  value?: string;
  children?: React.ReactNode;
  isValid?: boolean;
  disabled?: boolean;
  options: { label: string; value: string; children?: React.ReactNode }[];
  onChange?: (value: string) => void;
  errorMessage?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      className = "",
      value,
      children,
      isValid,
      disabled = false,
      onChange,
      options = [],
      errorMessage,
      ...props
    },
    ref
  ) => {
    const context = useFormContext();
    // FormContextが提供されていない場合
    const formData = context?.formData || {};
    const errors = context?.errors || {};
    const handleInputChange = context?.handleInputChange || (() => {});

    const initialValue =
      typeof value !== "undefined"
        ? value
        : typeof formData[id] !== "undefined"
          ? formData[id]
          : "";

    const [selected, setSelected] = React.useState(initialValue);

    React.useEffect(() => {
      if (typeof value !== "undefined" && value !== formData[id]) {
        handleInputChange(id, value);
      }
    }, []);

    React.useEffect(() => {
      if (typeof value !== "undefined") {
        setSelected(value);
      }
    }, [value]);

    const handleChange = (newValue: string) => {
      if (onChange) {
        onChange(newValue);
      }

      setSelected(newValue);
      if (handleInputChange) {
        handleInputChange(id, newValue);
      }
    };

    const handleOnKeyDown = (
      e: React.KeyboardEvent<HTMLButtonElement>,
      newValue: string,
      index: number
    ) => {
      if (disabled) return;
      if (e.key === "Enter") {
        e.preventDefault();
        handleChange(newValue);
        return;
      }
      if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
        let nextIdx = index + dir;
        if (nextIdx < 0) nextIdx = options.length - 1;
        if (nextIdx >= options.length) nextIdx = 0;

        // フォーカスも移動
        const btns =
          e.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
            'button[role="radio"]'
          );
        btns?.[nextIdx]?.focus();
      }
    };

    const isValidStatus =
      typeof isValid === "boolean" ? isValid : errors[id] == null;

    const radioStyle = cn(
      "flex flex-col text-black-sub",
      disabled ? "text-black-20-opacity pointer-events-none" : "cursor-pointer"
    );

    return (
      <div
        id={id}
        ref={ref}
        role="group"
        aria-labelledby={id}
        aria-invalid={!isValidStatus}
        aria-disabled={disabled}
        className={className}
        {...props}
      >
        <div className={radioStyle}>
          {options.map((option, index) => {
            const isSelected = selected === option.value;
            return (
              <button
                type="button"
                role="radio"
                aria-selected={isSelected}
                aria-label={option.label}
                key={index}
                className={cn(
                  "group flex items-center rounded-lg p-1 text-black-sub",
                  isSelected && "text-black",
                  disabled && isSelected && "text-black-sub",
                  disabled && !isSelected && "text-20-opacity"
                )}
                onClick={() => handleChange(option.value)}
                onKeyDown={(e) => {
                  handleOnKeyDown(e, option.value, index);
                }}
              >
                <div
                  className={cn(
                    "flex shrink-0 select-none items-center justify-center rounded-full text-xl transition-all group-hover:bg-black-5-opacity group-focus-visible:bg-black-5-opacity"
                  )}
                >
                  <span className="material-symbols-rounded">
                    <span className={cn(isSelected && "text-main")}>
                      {isSelected
                        ? "radio_button_checked"
                        : "radio_button_unchecked"}
                    </span>
                  </span>
                </div>

                <div className="ml-1 flex h-full w-full text-base">
                  {option.label}
                  {option.children}
                </div>
              </button>
            );
          })}
        </div>
        {!isValidStatus && (
          <ErrorText
            className="mt-1"
            text={errors[id] || errorMessage || "入力がエラーになっています。"}
          />
        )}
      </div>
    );
  }
);
Radio.displayName = "Radio";
