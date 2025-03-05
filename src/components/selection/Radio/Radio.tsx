import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import * as React from "react";
import { cn } from "../../../utils/cn";

interface RadioProps {
  className?: string;
  value?: string;
  children?: React.ReactNode;
  isValid?: boolean;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  options: { label: string; value: string; children?: React.ReactNode }[];
}

export const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupItem>,
  RadioProps
>(
  (
    {
      className = "",
      value = "",
      children,
      isValid = true,
      disabled = false,
      onValueChange,
      options = [],
      ...props
    },
    ref
  ) => {
    const [selected, setSelected] = React.useState(value);
    React.useEffect(() => {
      if (value !== undefined) {
        setSelected(value);
      }
    }, [value]);

    const handleChange = (newValue: string) => {
      if (onValueChange) {
        onValueChange(newValue);
      }

      setSelected(newValue);
    };

    const disabledStyle =
      disabled && "text-black-20-opacity pointer-events-none";
    const errorStyle = !disabled && !isValid && "text-danger";
    const isNomalStyle = !disabled && isValid;

    return (
      <RadioGroup
        value={selected}
        onValueChange={handleChange}
        className={cn("flex flex-col", className)}
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
              className="mb-2 flex w-full items-center"
            >
              <div
                className={cn(
                  errorStyle,
                  "flex h-7 w-7 select-none items-center justify-center rounded-full text-2xl hover:bg-black-5-opacity"
                )}
              >
                {selected === option.value ? (
                  <span
                    className={cn(
                      "material-symbols-rounded",
                      isNomalStyle && "text-main"
                    )}
                  >
                    radio_button_checked
                  </span>
                ) : (
                  <span
                    className={cn(
                      "material-symbols-rounded",
                      isNomalStyle && "text-black-sub"
                    )}
                  >
                    radio_button_unchecked
                  </span>
                )}
              </div>
              <span
                className={cn(
                  isNomalStyle && selected === option.value
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
