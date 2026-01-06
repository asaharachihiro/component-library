import * as React from "react";
import { cn } from "../../../utils/cn";
import { useFormContext } from "@components/_02-input/Form";
import { ErrorText } from "@components/_00-common";

interface RadioProps {
  id: string;
  className?: string;
  value?: string;
  isInvalid?: boolean;
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
      isInvalid,
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

    // バリデーションの判定
    const isInvalidStatus =
      typeof isInvalid === "boolean" ? isInvalid : errors[id] != null;

    //　初期値の決定
    const initialValue =
      typeof value !== "undefined"
        ? value
        : typeof formData[id] !== "undefined"
          ? formData[id]
          : "";

    // 内部state
    const [selected, setSelected] = React.useState(initialValue);

    // 初期値の更新
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

    // onChangeハンドラー
    const handleChange = (newValue: string) => {
      if (onChange) {
        onChange(newValue);
      }

      setSelected(newValue);
      if (handleInputChange) {
        handleInputChange(id, newValue);
      }
    };

    // キーボードの操作
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

    // スタイルの設定
    const radioStyle = cn(
      "flex flex-col text-black-sub",
      disabled ? "text-black-20-opacity pointer-events-none" : "cursor-pointer"
    );
    const labelStyle = (isSelected: boolean, disabled: boolean) => {
      return cn(
        "group flex items-center rounded-lg p-1 text-black-sub",
        isSelected && "text-black",
        disabled && isSelected && "text-black-sub",
        disabled && !isSelected && "text-20-opacity"
      );
    };
    const iconStyle =
      "flex shrink-0 select-none items-center justify-center rounded-full text-xl transition-all group-hover:bg-black-5-opacity group-focus-visible:bg-black-5-opacity";

    return (
      <div
        id={id}
        ref={ref}
        role="group"
        aria-labelledby={id}
        aria-invalid={isInvalidStatus}
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
                aria-disabled={disabled}
                disabled={disabled}
                key={index}
                className={labelStyle(isSelected, disabled)}
                onClick={() => handleChange(option.value)}
                onKeyDown={(e) => {
                  handleOnKeyDown(e, option.value, index);
                }}
              >
                <div className={iconStyle}>
                  <span className="material-symbols-rounded">
                    <span className={cn(isSelected && "text-primary")}>
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
        {isInvalidStatus && (
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
