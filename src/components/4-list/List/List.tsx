import * as React from "react";
import { cn } from "../../../utils/cn";

export interface ListProps {
  id: string;
  children: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  onClick?: () => void;
}
export const List = React.forwardRef<HTMLLIElement, ListProps>(
  (
    {
      id,
      children,
      disabled = false,
      className = "",
      selected = false,
      onClick,
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
      <li id={id} className="list-none" ref={ref}>
        <button
          className={cn(buttonStyle, className)}
          disabled={disabled}
          aria-selected={selected}
          onClick={onClick}
          type="button"
        >
          {children}
        </button>
      </li>
    );
  }
);
List.displayName = "List";
