import * as React from "react";
import { cn } from "../../../utils/cn";

interface TopbarItemProps {
  id: string;
  className?: string;
  icon?: string;
  href: string;
  label?: string;
  selected?: boolean;
  onClick?: () => void;
}

export const TopbarItem: React.FC<TopbarItemProps> = ({
  id,
  className,
  icon,
  label,
  selected = false,
  onClick,
  href,
}) => {
  const itemStyle = cn(
    "flex h-[48px] w-full cursor-pointer items-center space-x-2 px-4 text-xl transition-all focus-visible:-outline-offset-1",
    selected
      ? "bg-main-bg hover:bg-main-bg text-main border-main border-b-4 pt-4 pb-3"
      : "hover:bg-black-3-opacity text-black-sub focus-visible:bg-black-3-opacity py-4"
  );

  return (
    <li className={cn(className, "list-none")}>
      <a
        id={id}
        href={href}
        role="menuitem"
        aria-selected={selected}
        className={itemStyle}
        onClick={onClick}
      >
        {icon && (
          <span className="material-symbols-rounded select-none">{icon}</span>
        )}
        {label && (
          <span className="text-nowrap text-lg font-medium"> {label}</span>
        )}
      </a>
    </li>
  );
};
TopbarItem.displayName = "TopbarItem";
