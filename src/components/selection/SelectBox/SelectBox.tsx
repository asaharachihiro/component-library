import * as React from "react";
import * as Select from "@radix-ui/react-select";
import { cn } from "../../../utils/cn";
import { ErrorText, FormLabel } from "../../common";

interface SelectBoxProps {
  id: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  value?: string;
  label?: string;
  isRequired?: boolean;
  isValid?: boolean;
  onChange?: (value: string) => void;
  supportMassage?: string;
  errorMassage?: string;
  disabled?: boolean;
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
      onChange,
      supportMassage,
      errorMassage,
      disabled = false,
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

    const boxStyle = !isValid
      ? "border-danger"
      : "border-black-20-opacity focus:border-black-sub";
    const disabledStyle =
      disabled && "text-black-sub pointer-events-none bg-black-3-opacity";
    const placeholderStyle =
      selectedValue === "none" || selectedValue === undefined
        ? "text-black-20-opacity"
        : "text-black";

    return (
      <div>
        {label && <FormLabel label={label} isRequire={isRequired} />}
        <Select.Root value={selectedValue} onValueChange={handleChange}>
          <Select.Trigger
            id={id}
            ref={ref}
            className={cn(
              "flex w-full justify-between rounded-lg border bg-white p-2",
              boxStyle,
              disabledStyle,
              placeholderStyle
            )}
          >
            <Select.Value placeholder={placeholder} />
            <Select.Icon className="mr-2 items-center justify-center text-black-sub">
              <span className="material-symbols-rounded">expand_more</span>
            </Select.Icon>
          </Select.Trigger>
          <Select.Content className="rounded-lg bg-white">
            <Select.ScrollUpButton className="mr-2 items-center justify-center text-black-sub">
              <span className="material-symbols-rounded">expand_less</span>
            </Select.ScrollUpButton>
            <Select.Viewport className="rounded-lg border-none shadow-low">
              <Select.Item
                value="none"
                className="cursor-pointer p-2 text-black-sub hover:bg-black-5-opacity focus-visible:bg-black-5-opacity focus-visible:outline-none"
              >
                <Select.ItemIndicator className="mr-1 text-main">
                  <span className="material-symbols-rounded">check</span>
                </Select.ItemIndicator>
                <Select.ItemText>{placeholder}</Select.ItemText>
              </Select.Item>
              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="cursor-pointer p-2 hover:bg-black-5-opacity focus-visible:bg-black-5-opacity focus-visible:outline-none"
                >
                  <Select.ItemIndicator className="mr-1 text-main">
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
        {supportMassage && (
          <span className="text-xs text-black-sub">{supportMassage}</span>
        )}
        {!isValid && <ErrorText text={errorMassage} />}
      </div>
    );
  }
);

SelectBox.displayName = "SelectBox";
