import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
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

export const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupItem>,
  RadioProps
>(
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
    const [selected, setSelected] = React.useState(value);
    const context = useFormContext();
    // FormContextが提供されていない場合
    const formData = context?.formData || {};
    const errors = context?.errors || {};
    const handleInputChange = context?.handleInputChange || (() => {});

    React.useEffect(() => {
      setSelected(formData[id] || value);
    }, [formData[id], value]);

    const handleChange = (newValue: string) => {
      if (onChange) {
        onChange(newValue);
      }

      setSelected(newValue);
      handleInputChange(id, newValue.toString());
    };

    const isValidStatus = isValid ? isValid : errors[id] == null;

    const disabledStyle =
      disabled && "text-black-20-opacity pointer-events-none";
    const errorStyle = !disabled && !isValidStatus && "text-danger";
    const isNormalStyle = !disabled && isValidStatus;

    return (
      <RadioGroup
        id={id}
        value={selected}
        onValueChange={handleChange}
        className={cn("flex flex-col transition-all", className)}
        {...props}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={cn("flex cursor-pointer items-center", disabledStyle)}
          >
            <RadioGroupItem
              key={option.value}
              id={option.value}
              value={option.value}
              ref={ref}
              className="mb-4 flex items-center"
            >
              <div
                className={cn(
                  errorStyle,
                  "flex w-8 select-none items-center justify-center rounded-full text-2xl hover:bg-black-5-opacity"
                )}
              >
                {selected === option.value ? (
                  <span
                    className={cn(
                      "material-symbols-rounded",
                      isNormalStyle && "text-main"
                    )}
                  >
                    radio_button_checked
                  </span>
                ) : (
                  <span
                    className={cn(
                      "material-symbols-rounded",
                      isNormalStyle && "text-black-sub"
                    )}
                  >
                    radio_button_unchecked
                  </span>
                )}
              </div>
              <span
                className={cn(
                  isNormalStyle && selected === option.value
                    ? ""
                    : "text-black-sub",
                  "ml-1 flex w-full text-base"
                )}
              >
                {option.label}
                {option.children}
              </span>
            </RadioGroupItem>
          </div>
        ))}
      </RadioGroup>
    );
  }
);
Radio.displayName = "Radio";
