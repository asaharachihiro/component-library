import * as React from "react";
import * as Select from "@radix-ui/react-select";
import { cn } from "../../../utils/cn";
import { ErrorText, FormLabel } from "../../0-common";

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

export const SelectBox = React.forwardRef<HTMLButtonElement, SelectBoxProps>(
  (
    {
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
    },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = React.useState(value);

    React.useEffect(() => {
      setSelectedValue(value);
    }, [value]);

    const handleChange = (newValue: string) => {
      setSelectedValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    };

    const boxStyle = {
      "text-black-sub pointer-events-none bg-black-3-opacity": disabled,
      "border-danger": !isValid && !disabled,
      "border-black-20-opacity focus:border-black-sub": isValid && !disabled,
      "text-black": selectedValue,
      "text-black-20-opacity": !selectedValue,
      "text-sm p-1 pl-2 rounded-md": size === "s",
      "rounded-lg border p-2": size !== "s",
    };

    return (
      <div>
        {label && <FormLabel label={label} isRequired={isRequired} />}
        <Select.Root value={selectedValue} onValueChange={handleChange}>
          <Select.Trigger
            id={id}
            ref={ref}
            className={cn(
              "flex w-full items-center justify-between bg-white hover:bg-black-5-opacity",
              boxStyle
            )}
          >
            <Select.Value placeholder={placeholder} />
            <Select.Icon className="mr-1 flex items-center justify-center text-black-sub">
              <span className="material-symbols-rounded">expand_more</span>
            </Select.Icon>
          </Select.Trigger>
          <Select.Content className="rounded-lg bg-white">
            <Select.ScrollUpButton className="mr-1 items-center justify-center text-black-sub">
              <span className="material-symbols-rounded">expand_less</span>
            </Select.ScrollUpButton>
            <Select.Viewport className="rounded-lg border-none shadow-low">
              {hasDefaultOption && (
                <Select.Item
                  value="none"
                  className="flex cursor-pointer p-2 text-black-sub transition-all hover:bg-black-5-opacity focus-visible:bg-black-5-opacity focus-visible:outline-none"
                >
                  <Select.ItemIndicator className="mr-1 flex items-center text-lg text-main">
                    <span className="material-symbols-rounded">check</span>
                  </Select.ItemIndicator>
                  <Select.ItemText>{placeholder}</Select.ItemText>
                </Select.Item>
              )}

              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="flex cursor-pointer p-2 transition-all hover:bg-black-5-opacity focus-visible:bg-black-5-opacity focus-visible:outline-none"
                >
                  <Select.ItemIndicator className="mr-1 flex items-center text-lg text-main">
                    <span className="material-symbols-rounded">check</span>
                  </Select.ItemIndicator>
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center p-2">
              <span className="material-symbols-rounded">expand_more</span>
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Root>
        {supportMessage && (
          <span className="text-xs text-black-sub">{supportMessage}</span>
        )}
        {!isValid && errorMessage && <ErrorText text={errorMessage} />}
      </div>
    );
  }
);

SelectBox.displayName = "SelectBox";
