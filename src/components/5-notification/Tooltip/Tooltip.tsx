import * as React from "react";
import { cn } from "../../../utils/cn";

interface TooltipProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  id,
  className = "",
  children,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div
      id={id}
      className={cn("flex", className)}
      role="tooltip"
      aria-describedby={`${id}-tooltip`}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="group relative flex select-none items-center text-2xl text-black-sub">
        <span
          className={cn("material-symbols-rounded", "peer -ml-2 p-2")}
          aria-hidden="true"
          onMouseEnter={() => setIsVisible(true)}
        >
          info
        </span>
        <div
          className={cn(
            "z-100 absolute bottom-0 -translate-y-[40px] translate-x-0 text-nowrap rounded-md bg-white p-4 text-sm shadow-low peer-hover:animate-fadeIn",
            isVisible
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none animate-fadeOut opacity-0"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
Tooltip.displayName = "Tooltip";
