import * as React from "react";
import { cn } from "../../../utils/cn";

interface TagProps {
  id: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  type?: "primary" | "secondary" | "danger";
}

export const Tag: React.FC<TagProps> = ({
  id,
  className = "",
  label = "",
  disabled = false,
  type = "primary",
}) => {
  // スタイルの設定
  const tagStyle = cn(
    " px-2 h-6 inline-flex h-[22px] items-center text-sm shrink-0 nowrap font-medium select-none rounded-sm",
    {
      "bg-black-5-opacity text-black-50-opacity": disabled,
      "bg-black-sub text-white": type === "primary" && !disabled,
      "bg-white border border-black-sub text-black-sub":
        type === "secondary" && !disabled,
      "border border-danger text-danger bg-white":
        type === "danger" && !disabled,
    }
  );

  return (
    <div id={id} className={className} aria-disabled={disabled}>
      <span className={tagStyle}>{label}</span>
    </div>
  );
};
Tag.displayName = "Tag";
