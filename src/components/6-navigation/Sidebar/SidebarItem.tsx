import * as React from "react";
import { cn } from "../../../utils/cn";

interface SidebarItemProps {
  id: string;
  className?: string;
  icon?: string;
  href: string;
  label?: string;
  selected?: boolean;
  onClick?: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  id,
  className,
  icon,
  label,
  selected = false,
  onClick,
  href,
}) => {
  const itemStyle = selected
    ? "bg-main-bg hover:bg-main-bg text-main border-main border-l-4 pl-3 pr-4"
    : "hover:bg-black-3-opacity text-black-sub focus-visible:bg-black-3-opacity px-4";

  return (
    <li className={cn(className, "list-none")}>
      <a
        id={id}
        href={href}
        role="menuitem"
        aria-selected={selected}
        className={cn(
          "flex h-[56px] w-full cursor-pointer items-center space-x-2 text-2xl transition-all focus-visible:-outline-offset-1",
          itemStyle
        )}
        onClick={onClick}
      >
        {icon && (
          <span className="material-symbols-rounded select-none">{icon}</span>
        )}
        {label && (
          <span className="text-nowrap text-lg font-bold"> {label}</span>
        )}
      </a>
    </li>
  );
};
SidebarItem.displayName = "SidebarItem";
