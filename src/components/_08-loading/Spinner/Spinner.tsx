import * as React from "react";
import { cn } from "../../../utils/cn";

export const Spinner: React.FC<{ className?: string }> = ({ className }) => {
  // スタイルの設定
  const iconStyle =
    "h-4 w-4 animate-spin rounded-full border-2 border-black-20-opacity border-r-transparent shrink-0";

  return (
    <div className={cn(className, "flex items-center justify-center")}>
      <span className={iconStyle} aria-label="loading" />
    </div>
  );
};
Spinner.displayName = "Spinner";
