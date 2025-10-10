import * as React from "react";
import { cn } from "../../../utils/cn";

interface TopbarProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  onShowChange?: (show: boolean) => void;
  align?: "left" | "center" | "right";
  type?: "fixed" | "drawer";
}

export const Topbar: React.FC<TopbarProps> = ({
  id,
  className,
  children,
  align = "right",
}) => {
  // スタイルの設定
  const navStyle = cn(
    "fixed left-0 top-0 z-50 flex h-[48px] w-full items-center overflow-y-scroll bg-white px-4 shadow-low transition-all duration-300",
    align === "left" && "justify-start",
    align === "center" && "justify-center",
    align === "right" && "justify-end"
  );

  return (
    <nav id={id} className={cn(className, "h-[48px] w-full")}>
      <div className={navStyle}>
        <ul className="flex items-center">{children}</ul>
      </div>
    </nav>
  );
};
Topbar.displayName = "Topbar";
