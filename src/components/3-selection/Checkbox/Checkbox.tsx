import * as React from "react";
import { cn } from "../../../utils/cn";
import { useFormContext } from "@components/2-input/Form";
import { CheckIcon, ErrorText, FormLabel } from "@components/0-common";
interface CheckboxOption {
  id: string;
  label: string;
  checked?: boolean | "indeterminate";
  disabled?: boolean;
  children?: React.ReactNode;
}

interface CheckboxProps {
  id: string;
  label?: string;
  className?: string;
  options: CheckboxOption[];
  onChange?: (checkedIds: string[]) => void;
  errorMessage?: string;
  isValid?: boolean;
  tooltip?: React.ReactNode;
  isRequired?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  className,
  label,
  isValid,
  options = [],
  onChange,
  errorMessage,
  isRequired = false,
  tooltip,

  ...props
}) => {
  const context = useFormContext();
  // FormContextが提供されていない場合
  const formData = context?.formData || {};
  const errors = context?.errors || {};
  const handleInputChange = context?.handleInputChange || (() => {});
  const isValidStatus =
    typeof isValid === "boolean" ? isValid : errors[id] == null;

  const initialChecked: string[] = options
    .filter((opt) => opt.checked)
    .map((opt) => opt.id);

  const initialCheckedIds: string[] = Array.isArray(initialChecked)
    ? initialChecked
    : Array.isArray(formData[id])
      ? formData[id]
      : [];

  const [checkedIds, setCheckedIds] =
    React.useState<string[]>(initialCheckedIds);

  React.useEffect(() => {
    if (Array.isArray(initialChecked) && Array.isArray(formData[id])) {
      handleInputChange(id, initialChecked);
    }
  }, []);

  const handleChange = (
    optionId: string,
    checked: boolean | "indeterminate"
  ) => {
    let newCheckedIds: string[];
    if (checked) {
      newCheckedIds = [...checkedIds, optionId];
    } else {
      newCheckedIds = checkedIds.filter((id) => id !== optionId);
    }
    setCheckedIds(newCheckedIds);
    if (onChange) onChange(newCheckedIds);
    if (context) {
      handleInputChange(id, newCheckedIds);
    }
  };

  const checkboxRefs = React.useRef<(HTMLLabelElement | null)[]>([]);
  const handleKeyDown =
    (idx: number) => (e: React.KeyboardEvent<HTMLLabelElement>) => {
      if (["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(e.key)) {
        e.preventDefault();
        const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
        let nextIdx = idx + dir;
        if (nextIdx < 0) nextIdx = options.length - 1;
        if (nextIdx >= options.length) nextIdx = 0;
        checkboxRefs.current[nextIdx]?.focus();
      }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const option = options[idx];
        const isChecked = checkedIds.includes(option.id);
        handleChange(option.id, !isChecked);
      }
    };

  return (
    <div id={id} className={className} role="group" aria-labelledby={id}>
      {label && (
        <FormLabel label={label} tooltip={tooltip} isRequired={isRequired} />
      )}
      {options.map((option, idx) => (
        <label
          key={option.id}
          className={cn(
            "flex cursor-pointer items-center p-1",
            option.disabled && "pointer-events-none text-black-20-opacity"
          )}
          onKeyDown={handleKeyDown(idx)}
          tabIndex={option.disabled ? -1 : 0}
          ref={(el) => {
            checkboxRefs.current[idx] = el;
          }}
        >
          <CheckIcon
            id={option.id}
            checked={checkedIds.includes(option.id)}
            disabled={option.disabled}
            isValid={isValidStatus && !option.disabled}
            onChange={(checked) => handleChange(option.id, checked)}
          />
          <span className="ml-2">{option.label}</span>
          {option.children}
        </label>
      ))}
      {errorMessage && <ErrorText text={errorMessage} />}
    </div>
  );
};

Checkbox.displayName = "Checkbox";
