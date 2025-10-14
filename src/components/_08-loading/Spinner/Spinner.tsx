import * as React from "react";

export const Spinner: React.FC<{ className?: string }> = ({ className }) => {
  // スタイルの設定
  const iconStyle =
    "flex animate-spin items-center justify-center text-xl text-black-20-opacity";

  return (
    <div className={className}>
      <span className={iconStyle}>
        <span className="material-symbols-rounded">progress_activity</span>
      </span>
    </div>
  );
};
Spinner.displayName = "Spinner";
