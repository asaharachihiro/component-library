import * as React from "react";
import { cn } from "../../../utils/cn";
import { ErrorText, FormLabel } from "../../0-common";
import { useFormContext } from "../../2-input/Form";
import { useClickOutside } from "../../../utils/useClickOutside";

interface SelectBoxProps {
  id: string;
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
}

export const SelectBox: React.FC<SelectBoxProps> = ({
  id,
  options,
  label,
  placeholder = "未選択",
  value,
  isRequired = false,
  isValid = true,
  size = "m",
  onChange,
  supportMessage,
  errorMessage,
  disabled = false,
  hasDefaultOption = false,
}) => {
  const context = useFormContext();
  // FormContextが提供されていない場合
  const formData = context?.formData || {};
  const errors = context?.errors || {};
  const handleInputChange = context?.handleInputChange || (() => {});

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(
    formData[id] || value
  );

  React.useEffect(() => {
    setSelectedValue(formData[id] || value);
  }, [formData[id], value]);

  const selectedLabel = React.useMemo(() => {
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    return selectedOption ? selectedOption.label : null;
  }, [selectedValue, options]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleChange = (newValue: string) => {
    setSelectedValue(newValue);
    setIsOpen(false);
    if (onChange) {
      onChange(newValue);
    }
    handleInputChange(id, newValue);
  };

  const listRef = React.useRef<HTMLDivElement>(null);
  const optionRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

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

  useClickOutside(listRef as React.RefObject<HTMLElement>, () =>
    setIsOpen(false)
  );

  const isValidStatus = isValid ? isValid : errors[id] == null;
  const boxStyle = cn(
    "relative w-full cursor-pointer rounded-lg border p-2  bg-white flex w-full items-center justify-between hover:bg-black-5-opacity",
    {
      "text-black-sub pointer-events-none bg-black-3-opacity": disabled,
      "border-danger": !isValidStatus && !disabled,
      "border-black-20-opacity focus:border-black-sub":
        isValidStatus && !disabled,
      "text-black": selectedValue,
      "text-black-20-opacity": selectedValue === "none",
      "text-sm p-1 pl-2 rounded-md border-none": size === "s",
      "rounded-lg border p-2": size !== "s",
    }
  );

  return (
    <div>
      {label && <FormLabel label={label} isRequired={isRequired} />}
      <button
        type="button"
        role="select"
        id={id}
        className={boxStyle}
        onClick={handleToggle}
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-disabled={disabled}
      >
        <span>{selectedLabel || placeholder}</span>
        <span
          className={cn(
            "material-symbols-rounded ml-2 text-black-sub transition-all",
            isOpen ? "-rotate-180" : "rotate-0"
          )}
        >
          expand_more
        </span>
      </button>
      {isOpen && (
        <div
          ref={listRef}
          className="absolute z-10 mt-1 max-h-60 overflow-y-auto rounded-lg bg-white shadow-low"
          role="listbox"
        >
          {hasDefaultOption && (
            <button
              type="button"
              role="option"
              aria-selected={selectedValue === "none"}
              aria-label={placeholder}
              className="flex w-full cursor-pointer p-2 text-black-sub transition-all hover:bg-black-5-opacity focus-visible:bg-black-5-opacity focus-visible:outline-none"
              onClick={() => handleChange("none")}
            >
              {placeholder}
            </button>
          )}
          {options.map((option, index) => {
            const isSelected = selectedValue === option.value;
            return (
              <button
                type="button"
                role="option"
                aria-selected={isSelected}
                aria-label={option.label}
                key={index}
                ref={(el) => {
                  if (el) {
                    optionRefs.current[index] = el;
                  }
                }}
                className="flex w-full cursor-pointer p-2 *:transition-all hover:bg-black-5-opacity focus-visible:bg-black-5-opacity focus-visible:outline-none"
                onClick={() => handleChange(option.value)}
              >
                {isSelected && (
                  <span className="mr-1 flex items-center text-lg text-main">
                    <span className="material-symbols-rounded">check</span>
                  </span>
                )}
                {option.label}
              </button>
            );
          })}
        </div>
      )}

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
};

SelectBox.displayName = "SelectBox";
