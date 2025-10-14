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
  // 値の更新
  React.useEffect(() => {
    if (percentage !== undefined) {
      if (percentage < 0 || percentage > 100) {
        console.warn("Progressbar: 'percentage' should be between 0 and 100.");
      }
    }
  }, [percentage]);

  // スタイルの設定
  const basebarStyle =
    "flex h-1 w-full overflow-hidden rounded-full bg-main-bg";
  const progressbarStyle =
    "h-1 rounded-full bg-main transition-all duration-200";
  const infiniteStyle = "h-1 w-[100%] animate-progress rounded-full bg-main";

  return (
    <div id={id} className={className}>
      <div className={basebarStyle}>
        {typeof percentage === "number" ? (
          <div
            className={progressbarStyle}
            style={{ width: `${Math.max(0, Math.min(percentage, 100))}%` }}
          />
        ) : (
          <div className={infiniteStyle} />
        )}
      </div>
    </div>
  );
};
Progressbar.displayName = "Progressbar";
