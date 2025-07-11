import * as React from "react";
import { useFormContext } from "@components/2-input/Form";
import { useClickOutside } from "../../../utils/useClickOutside";
import { BaseSelectBox } from "./BaseSelectBox";
import { List } from "@components/4-list/List";

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
}

export const SelectBox: React.FC<SelectBoxProps> = ({
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
}) => {
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
        : "none";
  const [selectedValue, setSelectedValue] = React.useState(initialValue);
  const [isOpen, setIsOpen] = React.useState(false);

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

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const SelectRef = React.useRef<HTMLInputElement>(null);
  useClickOutside(SelectRef as React.RefObject<HTMLElement>, () => {
    setIsOpen(false);
  });

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

  const optionRefs = React.useRef<(HTMLLIElement | null)[]>([]);
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

  const isValidStatus =
    typeof isValid === "boolean" ? isValid : errors[id] == null;

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
      {...props}
    >
      <ul
        className="absolute z-10 mt-1 max-h-60 overflow-y-auto rounded-lg bg-white shadow-low"
        role="listbox"
      >
        {hasDefaultOption && (
          <List
            id={"none"}
            aria-selected={selectedValue === "none"}
            aria-label={placeholder}
            onClick={() => handleChange("none")}
            className="font-regular text-black-sub"
          >
            {placeholder}
          </List>
        )}
        {options.map((option, index) => {
          const isSelected = selectedValue === option.value;
          return (
            <List
              id={option.value}
              aria-selected={isSelected}
              aria-label={option.label}
              key={index}
              ref={(el) => {
                if (el) {
                  optionRefs.current[index] = el;
                }
              }}
              className="font-regular"
              onClick={() => handleChange(option.value)}
            >
              {isSelected && (
                <span className="mr-1 flex items-center text-lg text-main">
                  <span className="material-symbols-rounded">check</span>
                </span>
              )}
              {option.label}
            </List>
          );
        })}
      </ul>
    </BaseSelectBox>
  );
};

SelectBox.displayName = "SelectBox";
