import React from "react";

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <span
        className="material-symbols-rounded  animate-spin text-black-20-opacity"
        style={{ fontSize: "16px" }}
      >
        progress_activity
      </span>
    </div>
  );
};
