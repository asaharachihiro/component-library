import * as React from "react";
import { cn } from "../../../utils/cn";

export interface ListProps {
  id: string;
  children: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
}
export const List: React.FC<ListProps> = ({
  id,
  children,
  disabled = false,
  selected = false,
  onClick,
}) => {
  const buttonStyle = cn(
    "flex h-[32px] w-full items-center justify-start p-2 px-4 text-base truncate",
    {
      "pointer-events-none text-black-20-opacity": disabled,
      "cursor-pointer hover:bg-black-5-opacity active:bg-black-10-opacity focus-visible:bg-black-5-opacity font-medium":
        !disabled && !selected,
      "bg-main-bg text-main font-bold": !disabled && selected,
    }
  );

  return (
    <li id={id} className="list-none">
      <button
        className={buttonStyle}
        disabled={disabled}
        aria-selected={selected}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
};
List.displayName = "List";
