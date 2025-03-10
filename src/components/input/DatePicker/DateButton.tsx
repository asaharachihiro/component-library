import * as React from "react";
import { cn } from "../../../utils/cn";

interface DateButtonProps {
  id: string;
  number?: string;
  selected?: boolean;
  isToday?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const DateButton = React.forwardRef<HTMLButtonElement, DateButtonProps>(
  (
    {
      id,
      number = "",
      selected = false,
      isToday = false,
      disabled = false,
      onClick,
    },
    ref
  ) => {
    const className = cn(
      "w-7 h-7 select-none rounded-full text-xs relative group",
      {
        "text-black-20-opacity pointer-events-none": disabled,
        "border border-main text-main": isToday,
        "bg-main text-white font-bold": selected,
        "text-black": !disabled && !isToday && !selected,
      }
    );

    return (
      <button
        onClick={onClick}
        id={id}
        className={className}
        ref={ref}
        aria-label={`date ${number}`}
        aria-pressed={selected}
        disabled={disabled}
        type="button"
      >
        {number}
        <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-5 group-active:opacity-10" />
      </button>
    );
  }
);
DateButton.displayName = "DateButton";
