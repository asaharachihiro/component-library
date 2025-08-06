import * as React from "react";
import { cn } from "../../../utils/cn";

export interface ListProps {
  id: string;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  onClick?: () => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}
export const List = React.forwardRef<HTMLButtonElement, ListProps>(
  (
    {
      id,
      disabled = false,
      className = "",
      selected = false,
      onClick,
      onKeyDown,
      children,
      ...props
    },
    ref
  ) => {
    const buttonStyle = cn(
      "flex w-full items-center justify-start p-2 px-4 text-base truncate transition-all",
      {
        "pointer-events-none text-black-20-opacity": disabled,
        "cursor-pointer hover:bg-black-5-opacity active:bg-black-10-opacity focus-visible:bg-black-5-opacity font-medium":
          !disabled && !selected,
        "bg-main-bg text-main font-bold": !disabled && selected,
      }
    );

    return (
      <li
        id={id}
        className="list-none"
        role="option"
        aria-selected={selected}
        aria-disabled={disabled}
        // tabIndex={typeof selected !== "undefined" ? (selected ? 0 : -1) : 0}
      >
        <button
          ref={ref}
          className={cn(buttonStyle, className)}
          disabled={disabled}
          aria-selected={selected}
          onClick={onClick}
          type="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (onKeyDown) {
              onKeyDown(e);
            }
            if (e.key === "Enter" && onClick) {
              onClick();
            }
          }}
          {...props}
        >
          {children}
        </button>
      </li>
    );
  }
);
List.displayName = "List";
