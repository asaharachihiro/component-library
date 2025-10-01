import * as React from "react";

export const Spinner: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <span className="flex animate-spin items-center justify-center text-xl text-black-20-opacity">
        <span className="material-symbols-rounded">progress_activity</span>
      </span>
    </div>
  );
};
Spinner.displayName = "Spinner";
