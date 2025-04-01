import * as React from "react";
import { cn } from "../../../utils/cn";
import { useFormContext } from "../../2-input/Form";

interface RadioProps {
  id: string;
  className?: string;
  value?: string;
  children?: React.ReactNode;
  isValid?: boolean;
  disabled?: boolean;
  options: { label: string; value: string; children?: React.ReactNode }[];
  onChange?: (value: string) => void;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      className = "",
      value,
      children,
      isValid = true,
      disabled = false,
      onChange,
      options = [],
      ...props
    },
    ref
  ) => {
    const context = useFormContext();
    // FormContextが提供されていない場合
    const formData = context?.formData || {};
    const errors = context?.errors || {};
    const handleInputChange = context?.handleInputChange || (() => {});

    const [selected, setSelected] = React.useState(formData[id] || value);

    const handleChange = (newValue: string) => {
      if (onChange) {
        onChange(newValue);
      }

      setSelected(newValue);
      if (handleInputChange) {
        handleInputChange(id, newValue);
      }
    };

    const isValidStatus = isValid ? isValid : errors[id] == null;

    const radioStyle = cn("flex flex-col ", {
      "text-black-20-opacity pointer-events-none": disabled,
      "cursor-pointer": !disabled,
      "text-danger": !disabled && !isValidStatus,
    });

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
                  "group flex items-center rounded-lg p-2",
                  !isSelected && "text-black-sub"
                )}
                onClick={() => handleChange(option.value)}
              >
                <div
                  className={cn(
                    "flex w-7 select-none items-center justify-center rounded-full text-2xl transition-all group-hover:bg-black-5-opacity"
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
      </div>
    );
  }
);
Radio.displayName = "Radio";
