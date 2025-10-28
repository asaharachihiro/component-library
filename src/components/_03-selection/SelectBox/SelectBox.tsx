import * as React from "react";
import { useFormContext } from "@components/_02-input/Form";
import { useClickOutside } from "../../../utils/useClickOutside";
import { BaseSelectBox } from "./BaseSelectBox";
import { ListGroup } from "@components/_04-list/List";
import { ListProps } from "@components/_04-list/List/List";

interface SelectBoxProps {
  id: string;
  className?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  value?: string;
  label?: string;
  isRequired?: boolean;
  isValid?: boolean;
  size?: "s" | "m";
  supportMessage?: string;
  errorMessage?: string;
  disabled?: boolean;
  hasDefaultOption?: boolean;
  onChange?: (value: string) => void;
  tooltip?: React.ReactNode;
  tabIndex?: number;
}

export const SelectBox = React.forwardRef<HTMLDivElement, SelectBoxProps>(
  (
    {
      id,
      options,
      label,
      className = "",
      placeholder = "未選択",
      value,
      isRequired = false,
      isValid,
      size = "m",
      onChange,
      supportMessage,
      errorMessage,
      disabled = false,
      hasDefaultOption = false,
      tooltip,
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
    const isValidStatus =
      typeof isValid === "boolean" ? isValid : errors[id] == null;

    // 初期値の設定
    const initialValue =
      typeof value !== "undefined"
        ? value
        : typeof formData[id] !== "undefined"
          ? formData[id]
          : "none";
    // 内部state
    const [selectedValue, setSelectedValue] = React.useState(initialValue);
    const [isOpen, setIsOpen] = React.useState(false);

    // 初期値の更新
    React.useEffect(() => {
      if (typeof value !== "undefined" && value !== formData[id]) {
        handleInputChange(id, value);
      }
    }, []);

    React.useEffect(() => {
      setSelectedValue(value);
    }, [value]);

    const selectedLabel = React.useMemo(() => {
      const selectedOption = options.find(
        (option) => option.value === selectedValue
      );
      return selectedOption ? selectedOption.label : null;
    }, [selectedValue, options]);

    // 選択肢の開閉
    const handleToggle = () => {
      if (disabled) return;
      setIsOpen(!isOpen);
    };

    const SelectRef = React.useRef<HTMLDivElement>(null);
    useClickOutside(SelectRef as React.RefObject<HTMLElement>, () => {
      setIsOpen(false);
    });

    // onChangeハンドラー
    const handleChange = (newValue: string) => {
      setIsOpen(false);
      setSelectedValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
      if (context && formData[id] !== undefined) {
        handleInputChange(id, newValue);
      }
    };

    const optionRefs = React.useRef<
      (HTMLButtonElement | null)[] & { [key: string]: HTMLButtonElement | null }
    >(
      {} as (HTMLButtonElement | null)[] & {
        [key: string]: HTMLButtonElement | null;
      }
    );

    // 選択された項目までスクロール
    React.useEffect(() => {
      if (isOpen && selectedValue) {
        const selectedIndex = options.findIndex(
          (option) => option.value === selectedValue
        );
        if (selectedIndex !== -1 && optionRefs.current[selectedIndex]) {
          optionRefs.current[selectedIndex]?.scrollIntoView({
            block: "start",
          });
        }
      }
    }, [isOpen, selectedValue, options]);

    // ドロップダウンオープン時に最初の項目にフォーカス
    React.useEffect(() => {
      if (isOpen) {
        setTimeout(() => {
          if (hasDefaultOption) {
            optionRefs.current["none"]?.focus();
          } else {
            optionRefs.current[0]?.focus();
          }
        }, 0);
      }
    }, [isOpen]);

    // キーボード操作
    const handleOnKeyDown =
      (idx: number) => (e: React.KeyboardEvent<HTMLButtonElement>) => {
        // 上下キーでフォーカス移動
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          const dir = e.key === "ArrowDown" ? 1 : -1;
          let nextIdx = idx + dir;
          const itemsLength = hasDefaultOption
            ? options.length + 1
            : options.length;
          if (nextIdx < 0) nextIdx = itemsLength - 1;
          if (nextIdx >= itemsLength) nextIdx = 0;
          if (hasDefaultOption && nextIdx === 0) {
            optionRefs.current["none"]?.focus();
          } else {
            optionRefs.current[
              hasDefaultOption ? nextIdx - 1 : nextIdx
            ]?.focus();
          }
          return;
        }
        // Enterキーで選択
        if (e.key === "Enter" && !disabled) {
          e.preventDefault();
          handleToggle();
          return;
        }
        // Escapeキーで閉じる
        if (e.key === "Escape") {
          e.preventDefault();
          setIsOpen(false);
          return;
        }
      };

    //スタイルの設定
    const listContainerStyle =
      "mt-1 max-h-60 overflow-y-auto rounded-lg bg-white shadow-low";
    const checkIconStyle = "mr-1 flex items-center text-lg text-primary";

    return (
      <BaseSelectBox
        ref={SelectRef}
        className={className}
        id={id}
        label={label}
        isRequired={isRequired}
        isValid={isValidStatus}
        supportMessage={supportMessage}
        errorMessage={
          errors[id] || errorMessage || "入力がエラーになっています。"
        }
        disabled={disabled}
        placeholder={placeholder}
        selectedValue={selectedLabel}
        isOpen={isOpen}
        onToggle={handleToggle}
        size={size}
        tooltip={tooltip}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        <ListGroup
          id={`${id}-list`}
          className={listContainerStyle}
          items={[
            ...(hasDefaultOption
              ? [
                  {
                    id: "none",
                    "aria-selected": selectedValue === "none",
                    "aria-label": placeholder,
                    onClick: () => handleChange("none"),
                    className: "font-regular text-black-sub",
                    onKeyDown: handleOnKeyDown(0),
                    ref: (el: HTMLButtonElement | null) => {
                      optionRefs.current["none"] = el;
                    },
                    children: placeholder,
                  } as ListProps,
                ]
              : []),
            ...options.map((option, index) => ({
              id: option.value,
              "aria-selected": selectedValue === option.value,
              "aria-label": option.label,
              key: option.value,
              ref: (el: HTMLButtonElement | null) => {
                optionRefs.current[index] = el;
              },
              className: "font-regular",
              onClick: () => handleChange(option.value),
              onKeyDown: handleOnKeyDown(hasDefaultOption ? index + 1 : index),
              children: (
                <>
                  {selectedValue === option.value && (
                    <span className={checkIconStyle}>
                      <span className="material-symbols-rounded">check</span>
                    </span>
                  )}
                  {option.label}
                </>
              ),
            })),
          ]}
        />
      </BaseSelectBox>
    );
  }
);

SelectBox.displayName = "SelectBox";
