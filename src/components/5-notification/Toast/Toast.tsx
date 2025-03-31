import * as React from "react";
import { cn } from "../../../utils/cn";

interface ToastProps {
  children?: React.ReactNode;
  position?:
    | "top-center"
    | "top-left"
    | "top-right"
    | "bottom-center"
    | "bottom-left"
    | "bottom-right";
}

export const Toast: React.FC<ToastProps> = ({
  children,
  position = "top-right",
}) => {
  const className = cn("absolute p-6 flex", {
    "flex-col-reverse": position.startsWith("top"),
    "top-0 left-0": position === "top-left",
    "top-0 right-0": position === "top-right",
    "top-0 left-1/2 -translate-x-1/2": position === "top-center",
    "bottom-0 left-0": position === "bottom-left",
    "bottom-0 right-0": position === "bottom-right",
    "bottom-0 left-1/2 -translate-x-1/2": position === "bottom-center",
  });

  return <div className={className}>{children}</div>;
};
Toast.displayName = "Toast";
