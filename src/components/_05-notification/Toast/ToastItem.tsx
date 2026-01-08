import * as React from "react";
import { cn } from "../../../utils/cn";

export interface ToastItemProps {
  id: string;
  type?: "normal" | "success" | "error";
  message: string;
  children?: React.ReactNode; // Link、TextButton、IconButtonなどを含めることができます。
  autoDelete?: boolean;
}

export const ToastItem: React.FC<ToastItemProps> = ({
  id,
  type = "normal",
  message = "",
  children,
  autoDelete = false,
}) => {
  // 内部state
  const [isVisible, setIsVisible] = React.useState(true);
  const [isRender, setIsRender] = React.useState(true);

  // スタイルの設定
  const toastStyle = cn(
    "m-2 flex w-[500px] items-center justify-between space-x-2 rounded-lg bg-white p-4 text-title-md shadow-high transition-all duration-300",
    {
      "border border-success text-success": type === "success",
      "border border-danger text-danger": type === "error",
      "animate-fadeSlideInTop": isVisible,
      "animate-fadeout": isVisible !== true,
    }
  );

  // 5秒経ったら消える
  React.useEffect(() => {
    if (autoDelete) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setIsRender(false);
        }, 1000);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [autoDelete]);

  return (
    <>
      {isRender && (
        <div id={id} className={toastStyle}>
          <div className="flex items-center space-x-2">
            {type !== "normal" && (
              <span className="material-symbols-rounded icon-fill">
                {type === "success" && "check_circle"}
                {type === "error" && "emergency_home"}
              </span>
            )}
            <span className="text-body-md text-black">{message}</span>
          </div>
          {children}
        </div>
      )}
    </>
  );
};
ToastItem.displayName = "ToastItem";
