import * as React from "react";
import { BaseSelectBox } from "./BaseSelectBox";
import { useFormContext } from "@components/_02-input/Form";
import { CheckIcon } from "@components/_00-common/CheckIcon";
import { IconButton } from "@components/_01-action/IconButton";
import { List, ListGroup } from "@components/_04-list/List";
import { useClickOutside } from "../../../utils/useClickOutside";

interface MultiSelectBoxProps {
  id: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  values?: { value: string; label: string }[];
  label?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  size?: "s" | "m";
  supportMessage?: string;
  errorMessage?: string;
  disabled?: boolean;
  hasDefaultOption?: boolean;
  onChange?: (
    id: string,
    values: Array<{ value: string; label: string }>
  ) => void;
  tooltip?: React.ReactNode;
  tabIndex?: number;
}

export const MultiSelectBox = React.forwardRef<
  HTMLDivElement,
  MultiSelectBoxProps
>(
  (
    {
      id,
      options,
      label,
      placeholder = "未選択",
      values = [],
      isRequired = false,
      isInvalid,
      onChange,
      supportMessage,
      errorMessage,
      disabled = false,
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
    const isInvalidStatus =
      typeof isInvalid === "boolean" ? isInvalid : errors[id] != null;

    //　初期値の設定
    const initialSelected =
      typeof values !== "undefined"
        ? values
        : typeof formData[id] !== "undefined"
          ? formData[id]
          : [];

    // 内部state
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedValues, setSelectedValues] =
      React.useState<{ value: string; label: string }[]>(initialSelected);

    const optionRefs = React.useRef<
      (HTMLButtonElement | null)[] & { [key: string]: HTMLButtonElement | null }
    >(
      {} as (HTMLButtonElement | null)[] & {
        [key: string]: HTMLButtonElement | null;
      }
    );

    React.useEffect(() => {
      if (typeof values !== "undefined") {
        setSelectedValues(values);
      }
    }, []);

    React.useEffect(() => {
      if (isOpen) {
        setTimeout(() => {
          optionRefs.current[0]?.focus();
        }, 0);
      }
    }, [isOpen]);

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
    const handleChange = (value: string) => {
      const isSelected = selectedValues.some((item) => item.value === value);

      const newValues = isSelected
        ? selectedValues.filter((item) => item.value !== value)
        : [
            ...selectedValues,
            options.find((option) => option.value === value)!,
          ];

      const sortedValues = newValues.sort(
        (a, b) =>
          options.findIndex((option) => option.value === a.value) -
          options.findIndex((option) => option.value === b.value)
      );

      setSelectedValues(sortedValues);
      if (onChange) {
        onChange(id, newValues);
      }
      if (context) {
        handleInputChange(id, sortedValues);
      }
    };

    // キーボード操作
    const handleOnKeyDown =
      (idx: number, value: string) =>
      (e: React.KeyboardEvent<HTMLButtonElement>) => {
        // 上下キーでフォーカス移動
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          const dir = e.key === "ArrowDown" ? 1 : -1;
          let nextIdx = idx + dir;
          const itemsLength = options.length;
          if (nextIdx < 0) nextIdx = itemsLength - 1;
          if (nextIdx >= itemsLength) nextIdx = 0;
          optionRefs.current[nextIdx]?.focus();
          return;
        }
        // Enterキーで選択
        if (!disabled && e.key === "Enter") {
          e.preventDefault();
          handleChange(value);
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
    const selectedItemsStyle =
      "flex items-center text-nowrap rounded-md bg-primary-sub pl-2 typo-label-sm";
    const listContainerStyle =
      "mt-1 max-h-60 overflow-y-auto rounded-lg bg-white shadow-low";

    return (
      <BaseSelectBox
        ref={SelectRef}
        id={id}
        label={label}
        isRequired={isRequired}
        isInvalid={isInvalidStatus}
        supportMessage={supportMessage}
        errorMessage={
          errors[id] || errorMessage || "入力がエラーになっています。"
        }
        disabled={disabled}
        placeholder={placeholder}
        size="m"
        onToggle={handleToggle}
        isOpen={isOpen}
        tooltip={tooltip}
        {...props}
        selectedValue={
          selectedValues.length > 0 ? (
            <div className="flex space-x-2">
              {selectedValues.map((option) => (
                <div
                  data-testid={`selected-item-${option.value}`}
                  key={option.value}
                  className={selectedItemsStyle}
                >
                  {option.label}
                  <IconButton
                    type="button"
                    disabled={disabled}
                    icon="close"
                    size="s"
                    className="ml-1"
                    onClick={(e) => {
                      if (disabled) return;
                      e.stopPropagation();
                      handleChange(option.value);
                    }}
                  />
                </div>
              ))}
            </div>
          ) : null
        }
      >
        <ListGroup
          id={`${id}-list`}
          className={listContainerStyle}
          items={options.map((option, index) => {
            const isSelected = selectedValues.some(
              (item) => item.value === option.value
            );
            return {
              id: option.value,
              selected: isSelected,
              key: option.value,
              ref: (el: HTMLButtonElement | null) => {
                optionRefs.current[index] = el;
              },
              onClick: () => handleChange(option.value),
              onKeyDown: handleOnKeyDown(index, option.value),
              children: (
                <>
                  <CheckIcon
                    id={option.value}
                    checked={isSelected}
                    className="mr-1"
                  />
                  <span data-testid={`option-label-${option.value}`}>
                    {option.label}
                  </span>
                </>
              ),
            };
          })}
        />
      </BaseSelectBox>
    );
  }
);
