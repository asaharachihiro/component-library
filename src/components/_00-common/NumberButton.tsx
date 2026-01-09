import * as React from "react";
import { cn } from "../../utils/cn";

interface NumberButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  number?: string;
  selected?: boolean;
  isToday?: boolean;
  disabled?: boolean;
  isFocused?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  tabIndex?: number;
}

export const NumberButton = React.forwardRef<
  HTMLButtonElement,
  NumberButtonProps
>(
  (
    {
      id,
      number = "",
      selected = false,
      isToday = false,
      disabled = false,
      isFocused = false,
      onClick,
      tabIndex = 0,
      ...props
    },
    ref
  ) => {
    // スタイル設定
    const buttonStyle = cn(
      "w-7 h-7 select-none rounded-full typo-label-sm relative group font-sans",
      {
        "text-black-20-opacity pointer-events-none": disabled,
        "border border-primary text-primary": isToday,
        "bg-primary text-white": selected,
        "text-black": !disabled && !isToday && !selected,
      }
    );
    const bgStyle = cn(
      "absolute inset-0 rounded-full bg-black opacity-0 transition-all group-hover:opacity-5 group-active:opacity-10",
      isFocused && "bg-black opacity-5"
    );

    const displayNum = Number(number).toString();
    return (
      <button
        onClick={disabled ? undefined : onClick}
        id={id}
        className={buttonStyle}
        ref={ref}
        aria-label={`${number}`}
        aria-pressed={selected}
        disabled={disabled}
        type="button"
        tabIndex={tabIndex}
        {...props}
      >
        {displayNum}
        <div className={bgStyle} />
      </button>
    );
  }
);
NumberButton.displayName = "NumberButton";
