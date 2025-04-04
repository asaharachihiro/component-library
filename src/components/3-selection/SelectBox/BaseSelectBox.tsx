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
  isOpen: boolean;
  onToggle: () => void;
  selectedValue?: React.ReactNode;
  children: React.ReactNode;
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
  isOpen,
  onToggle,
  selectedValue,
  children,
}) => {
  const boxStyle = cn(
    "w-full cursor-pointer rounded-lg border p-2 bg-white flex items-center justify-between hover:bg-black-5-opacity",
    {
      "text-black-sub pointer-events-none bg-black-3-opacity": disabled,
      "border-danger": !isValid && !disabled,
      "border-black-20-opacity focus:border-black-sub": isValid && !disabled,
    }
  );

  return (
    <div>
      {label && <FormLabel label={label} isRequired={isRequired} />}
      <div className="relative flex items-center">
        <input
          role="select"
          id={id}
          className={boxStyle}
          onClick={onToggle}
          tabIndex={0}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-disabled={disabled}
        />
        <div className="absolute flex w-full items-center justify-between">
          <span
            className={cn(
              "inset-y-0 left-0 select-none overflow-hidden overflow-x-auto pl-2",
              selectedValue === null && "text-black-20-opacity"
            )}
          >
            {selectedValue || placeholder}
          </span>
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
      {isOpen && children}
      {supportMessage && (
        <span className="text-xs text-black-sub">{supportMessage}</span>
      )}
      {!isValid && (
        <ErrorText text={errorMessage || "入力がエラーになっています。"} />
      )}
    </div>
  );
};
