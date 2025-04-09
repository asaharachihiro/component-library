import * as React from "react";
import { cn } from "../../../utils/cn";
import { ErrorText, FormLabel } from "../../0-common";

interface BaseSelectBoxProps {
  id: string;
  label?: string;
  isRequired?: boolean;
  isValid?: boolean;
  placeholder?: string;
  supportMessage?: string;
  errorMessage?: string;
  disabled?: boolean;
  selectedValue?: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  size?: "s" | "m";
}

export const BaseSelectBox: React.FC<BaseSelectBoxProps> = ({
  id,
  label,
  isRequired = false,
  isValid = true,
  placeholder = "未選択",
  supportMessage,
  errorMessage,
  disabled = false,
  selectedValue,
  children,
  isOpen = false,
  onToggle,
  size = "m",
}) => {
  const boxStyle = cn(
    "w-full cursor-pointer rounded-lg border p-2 bg-white flex items-center justify-between border-danger",
    {
      "group-hover:bg-black-5-opacity cursor-pointer group focus:border-black-sub":
        !disabled,
      "text-black-sub pointer-events-none bg-black-3-opacity border-black-20-opacity":
        disabled,
      "border-danger": !isValid && !disabled,
      "border-black-20-opacity": !disabled,
    }
  );

  return (
    <div>
      {label && <FormLabel label={label} isRequired={isRequired} />}
      <div
        className="group relative flex items-center"
        onClick={() => onToggle?.(isOpen)}
      >
        <input
          role="select"
          id={id}
          className={boxStyle}
          tabIndex={0}
          aria-labelledby={label}
          aria-haspopup="listbox"
          aria-disabled={disabled}
          aria-describedby={supportMessage}
          aria-invalid={!isValid}
          aria-errormessage={errorMessage}
          disabled={disabled}
          readOnly
        />

        <div className="absolute flex w-full cursor-pointer select-none items-center justify-between">
          {selectedValue ? (
            <div className="inset-y-0 left-0 select-none overflow-hidden overflow-x-auto pl-2">
              {selectedValue}
            </div>
          ) : (
            <span className="inset-y-0 left-0 select-none pl-2 text-black-20-opacity">
              {placeholder}
            </span>
          )}
          <span
            className={cn(
              "material-symbols-rounded right-0 mr-2 text-black-sub transition-all",
              isOpen ? "-rotate-180" : "rotate-0"
            )}
          >
            expand_more
          </span>
        </div>
      </div>
      {isOpen && <>{children}</>}
      {supportMessage && (
        <span className="text-xs text-black-sub">{supportMessage}</span>
      )}
      {!isValid && (
        <ErrorText text={errorMessage || "入力がエラーになっています。"} />
      )}
    </div>
  );
};
