import * as React from "react";
import { cn } from "../../../utils/cn";
import { ErrorText, FormLabel } from "@components/_00-common";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";

interface BaseSelectBoxProps {
  id: string;
  label?: string;
  isRequired?: boolean;
  className?: string;
  isValid?: boolean;
  placeholder?: string;
  supportMessage?: string;
  errorMessage?: string;
  disabled?: boolean;
  selectedValue?: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  size?: "s" | "m";
  tooltip?: React.ReactNode;
}

export const BaseSelectBox = React.forwardRef<
  HTMLDivElement,
  BaseSelectBoxProps
>(
  (
    {
      id,
      label,
      className = "",
      isRequired = false,
      isValid,
      placeholder = "未選択",
      supportMessage,
      errorMessage,
      disabled,
      selectedValue,
      children,
      isOpen = false,
      onToggle,
      size = "m",
      tooltip,
    },
    ref
  ) => {
    const boxStyle = cn(
      "w-full cursor-pointer border bg-white flex items-center justify-between",
      {
        "group-hover:bg-black-5-opacity cursor-pointer group": !disabled,
        "text-black-sub pointer-events-none bg-black-3-opacity border-black-20-opacity":
          disabled,
        "border-danger": !disabled && !isValid,
        "border-black-20-opacity": !disabled && isValid,
        "text-sm p-1 pl-2 rounded-md border-transparent": size === "s",
        "rounded-lg p-2": size !== "s",
      }
    );

    // メニューのフローティング
    const { refs, floatingStyles } = useFloating({
      placement: "bottom-start",
      middleware: [offset(8), flip(), shift()],
      whileElementsMounted: autoUpdate,
    });

    return (
      <div ref={ref} className={className}>
        {label && (
          <FormLabel label={label} isRequired={isRequired} tooltip={tooltip} />
        )}
        <div
          className="focus-visible:bordr-main group relative flex min-w-[40px] items-center truncate"
          onClick={onToggle}
          onKeyDown={(e) => {
            if (!isOpen && ["ArrowDown", "ArrowUp", "Enter"].includes(e.key)) {
              e.preventDefault();
              onToggle && onToggle();
            }
            if (isOpen && e.key === "Escape") {
              e.preventDefault();
              onToggle && onToggle();
            }
          }}
          data-testid={"selectbox" + id}
        >
          <input
            role="select"
            id={id}
            className={boxStyle}
            aria-labelledby={label}
            aria-haspopup="listbox"
            aria-disabled={disabled}
            aria-describedby={supportMessage}
            aria-invalid={!isValid}
            aria-errormessage={errorMessage}
            disabled={disabled}
            readOnly
            ref={refs.setReference}
          />

          <div className="absolute flex w-full cursor-pointer select-none items-center justify-between">
            {selectedValue ? (
              <div className="inset-y-0 left-0 select-none overflow-hidden overflow-x-auto pl-2">
                {selectedValue}
              </div>
            ) : (
              <span className="inset-y-0 left-0 select-none truncate text-nowrap pl-2 text-black-20-opacity">
                {placeholder}
              </span>
            )}
            <span
              className={cn(
                "material-symbols-rounded right-0 mr-2 text-black-sub transition-all duration-300",
                isOpen ? "-rotate-180" : "rotate-0"
              )}
            >
              expand_more
            </span>
          </div>
        </div>
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className="absolute z-10"
          >
            {children}
          </div>
        )}
        {supportMessage && (
          <span className="text-xs text-black-sub">{supportMessage}</span>
        )}
        {!isValid && (
          <ErrorText text={errorMessage || "入力がエラーになっています。"} />
        )}
      </div>
    );
  }
);
