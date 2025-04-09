import * as React from "react";
import { cn } from "../../../utils/cn";
import { BaseSelectBox } from "./BaseSelectBox";
import { useFormContext } from "../../2-input/Form";
import { CheckIcon } from "../../0-common/CheckIcon";
import { IconButton } from "../../1-action/IconButton";

interface MultiSelectBoxProps {
  id: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  values?: { value: string; label: string }[];
  label?: string;
  isRequired?: boolean;
  isValid?: boolean;
  size?: "s" | "m";
  supportMessage?: string;
  errorMessage?: string;
  disabled?: boolean;
  hasDefaultOption?: boolean;
  onChange?: (
    id: string,
    values: Array<{ value: string; label: string }>
  ) => void;
}

export const MultiSelectBox: React.FC<MultiSelectBoxProps> = ({
  id,
  options,
  label,
  placeholder = "未選択",
  values = [],
  isRequired = false,
  isValid = true,
  onChange,
  supportMessage,
  errorMessage,
  disabled = false,
}) => {
  const context = useFormContext();
  // FormContextが提供されていない場合
  const formData = context?.formData || {};
  const errors = context?.errors || {};
  const isValidStatus = isValid ? isValid : errors[id] == null;
  const handleInputChange = context?.handleInputChange || (() => {});

  const [selectedValues, setSelectedValues] = React.useState<
    { value: string; label: string }[]
  >(formData[id] || values);

  const handleChange = (value: string) => {
    const isSelected = selectedValues.some((item) => item.value === value);

    const newValues = isSelected
      ? selectedValues.filter((item) => item.value !== value)
      : [...selectedValues, options.find((option) => option.value === value)!];

    const sortedValues = newValues.sort(
      (a, b) =>
        options.findIndex((option) => option.value === a.value) -
        options.findIndex((option) => option.value === b.value)
    );
    setSelectedValues(sortedValues);

    if (onChange) {
      onChange(id, newValues);
    }
    handleInputChange(id, newValues.join(","));
  };

  return (
    <BaseSelectBox
      id={id}
      label={label}
      isRequired={isRequired}
      isValid={isValidStatus}
      supportMessage={supportMessage}
      errorMessage={errorMessage}
      disabled={disabled}
      placeholder={placeholder}
      selectedValue={
        selectedValues.length > 0 ? (
          <div className="flex space-x-2">
            {selectedValues.map((option) => (
              <div
                key={option.value}
                className="flex items-center text-nowrap rounded-md bg-main-bg pl-2 text-xs"
              >
                {option.label}
                <IconButton
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
      <div
        className="absolute z-10 mt-1 max-h-60 overflow-y-auto rounded-lg bg-white shadow-low"
        role="listbox"
      >
        {options.map((option, index) => {
          const isSelected = selectedValues.some(
            (item) => item.value === option.value
          );
          return (
            <button
              type="button"
              role="option"
              aria-selected={isSelected}
              key={index}
              className={cn(
                "flex w-full cursor-pointer p-2 transition-all focus-visible:bg-black-5-opacity focus-visible:outline-none",
                {
                  "bg-main-bg hover:bg-main-bg": isSelected,
                  "hover:bg-black-5-opacity": !isSelected,
                }
              )}
              onClick={() => handleChange(option.value)}
            >
              <CheckIcon id={option.value} checked={isSelected} />
              {option.label}
            </button>
          );
        })}
      </div>
    </BaseSelectBox>
  );
};
