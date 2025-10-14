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
  // スタイルの設定
  const itemStyle = cn(
    "flex h-[56px] w-full cursor-pointer items-center space-x-2 text-xl transition-all focus-visible:-outline-offset-1",
    selected
      ? "border-l-4 border-main bg-main-bg pl-3 pr-4 text-main hover:bg-main-bg"
      : "px-4 text-black-sub hover:bg-black-3-opacity focus-visible:bg-black-3-opacity"
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
SidebarItem.displayName = "SidebarItem";
