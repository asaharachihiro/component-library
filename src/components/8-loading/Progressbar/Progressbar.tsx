import * as React from "react";

interface ProgressbarProps {
  id?: string;
  className?: string;
  percentage?: number; // 0-100の範囲で指定できる。値がない場合、アニメーションをリピート表示する
}

export const Progressbar: React.FC<ProgressbarProps> = ({
  id,
  className = "",
  percentage,
}) => {
  return (
    <div id={id} className={className}>
      <div className="flex h-1 w-full overflow-hidden rounded-full bg-main-bg">
        {typeof percentage === "number" ? (
          <div
            className="h-1 rounded-full bg-main transition-all duration-200"
            style={{ width: `${Math.max(0, Math.min(percentage, 100))}%` }}
          />
        ) : (
          <div className="h-1 w-[100%] animate-progress rounded-full bg-main" />
        )}
      </div>
    </div>
  );
};
Progressbar.displayName = "Progressbar";
