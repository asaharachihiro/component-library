import * as React from "react";
import { cn } from "../../../utils/cn";

interface SkeltonProps {
  className?: string;
  rounded?: "md" | "lg" | "full";
}

export const Skelton: React.FC<SkeltonProps> = ({
  className = "",
  rounded = "md",
}) => {
  return (
    <div className={cn(className, "overflow-hidden")}>
      <div
        className={cn("animate-shimmer h-full w-full bg-black-10-opacity", {
          "rounded-md": rounded === "md" || !rounded,
          "rounded-lg": rounded === "lg",
          "rounded-full": rounded === "full",
        })}
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 75%)",
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  );
};
Skelton.displayName = "Skelton";
