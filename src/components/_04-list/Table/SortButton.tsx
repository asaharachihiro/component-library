import * as React from "react";
import { cn } from "../../../utils/cn";

export interface SortButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  nextSortOrder?: "asc" | "desc" | false;
  sorting?: string;
}

export const SortButton = React.forwardRef<HTMLButtonElement, SortButtonProps>(
  ({ nextSortOrder = "none", sorting, className, ...props }, ref) => {
    // ソートアイコンの取得
    const getIcon = (sort: string) => {
      if (sort === "asc") {
        return "arrow_upward";
      }
      if (sort === "desc") {
        return "arrow_downward";
      }
      return null;
    };

    // スタイルの設定
    const iconStyle = cn(
      className,
      !sorting && "text-black-20-opacity",
      "flex h-7 w-7 items-center justify-center rounded-md text-body-lg transition-all hover:bg-black-5-opacity active:bg-black-10-opacity"
    );

    return (
      <button ref={ref} {...props} className={iconStyle}>
        <span className="material-symbols-rounded">
          {sorting
            ? getIcon(sorting)
            : nextSortOrder
              ? getIcon(nextSortOrder)
              : null}
        </span>
      </button>
    );
  }
);
SortButton.displayName = "SortButton";
