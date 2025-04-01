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

    const radioStyle = cn("flex flex-col space-y-4", {
      "text-black-20-opacity pointer-events-none": disabled,
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
          {options.map((option) => {
            const isSelected = selected === option.value;
            return (
              <div
                key={option.value}
                className={cn("flex", !isSelected && "text-black-sub")}
                onClick={() => handleChange(option.value)}
              >
                <input
                  type="radio"
                  key={option.value}
                  id={option.value}
                  value={option.value}
                  disabled={disabled}
                  onChange={() => handleChange(option.value)}
                  checked={isSelected}
                  className="hidden"
                />
                <div className="flex w-7 select-none items-center justify-center rounded-full text-2xl transition-all hover:bg-black-5-opacity">
                  <span className="material-symbols-rounded">
                    <span className={cn(isSelected && "text-main")}>
                      {isSelected
                        ? "radio_button_checked"
                        : "radio_button_unchecked"}
                    </span>
                  </span>
                </div>

                <span className="ml-1 flex w-full text-base">
                  {option.label}
                  {option.children}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
Radio.displayName = "Radio";
