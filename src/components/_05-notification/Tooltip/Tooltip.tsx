import * as React from "react";
import { cn } from "../../../utils/cn";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";

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
  // 内部state(表示状態)
  const [isVisible, setIsVisible] = React.useState(false);

  // 表示用のフローティング
  const { refs, floatingStyles } = useFloating({
    placement: "top-start",
    middleware: [offset(8), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  // スタイルの設定
  const baseStyle =
    "group flex select-none items-center text-2xl text-black-sub";
  const iconStyle = cn("material-symbols-rounded", "peer -ml-2");
  const panelStyle = cn(
    "z-100 text-nowrap rounded-md bg-white p-4 text-sm shadow-low peer-hover:animate-fadeIn",
    isVisible
      ? "pointer-events-auto opacity-100"
      : "pointer-events-none animate-fadeOut opacity-0"
  );

  return (
    <div
      id={id}
      className={cn("flex", className)}
      role="tooltip"
      aria-describedby={`${id}-tooltip`}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className={baseStyle}>
        <span
          className={iconStyle}
          aria-hidden="true"
          onMouseEnter={() => setIsVisible(true)}
          ref={refs.setReference}
          tabIndex={0}
          onFocus={() => setIsVisible(true)}
          onBlur={() => setIsVisible(false)}
        >
          info
        </span>
        <div
          className={panelStyle}
          style={floatingStyles}
          ref={refs.setFloating}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
Tooltip.displayName = "Tooltip";
