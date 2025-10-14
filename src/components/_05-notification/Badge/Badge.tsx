import * as React from "react";
import { cn } from "../../../utils/cn";

interface BadgeProps {
  id: string;
  count: number;
  className?: string;
  type?: "counter" | "dot";
}

export const Badge: React.FC<BadgeProps> = ({
  id,
  count = 0,
  className = "",
  type = "dot",
}) => {
  const displayCount = count && count > 99 ? "99+" : count;

  // スタイルの設定
  const badgeStyle = cn(
    className,
    "pointer-events-none absolute z-10 flex shrink-0 select-none rounded-full bg-danger",
    type === "dot"
      ? "right-1 top-1 h-1 w-1"
      : "-right-[2px] -top-[2px] h-4 min-w-4 items-center justify-center px-1 text-[10px] font-bold text-white"
  );

  return (
    <>
      {count > 0 && (
        <div id={id} role="presentation" className={badgeStyle}>
          {type === "counter" && displayCount}
        </div>
      )}
    </>
  );
};

Badge.displayName = "Badge";
