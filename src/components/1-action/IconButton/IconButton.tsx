import * as React from "react";
import { cn } from "../../../utils/cn";
import { Spinner } from "@components/8-loading/Spinner/Spinner";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  className?: string;
  checked?: boolean;
  size?: "s" | "m";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      checked = false,
      isLoading = false,
      disabled = false,
      className,
      size = "s",
      onClick,
      ...props
    },
    ref
  ) => {
    const [toggleChecked, setToggleChecked] = React.useState(checked || false);

    React.useEffect(() => {
      setToggleChecked(checked);
    }, [checked]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setToggleChecked((prev) => !prev);
      if (onClick) {
        onClick(e);
      }
    };

    const IconButtonStyle = cn(
      "flex relative justify-center items-center hover:bg-black-5-opacity shrink-0 active:bg-black-10-opacity disabled:text-black-20-opacity disabled:pointer-events-none select-none transition-all focus-visible:bg-black-5-opacity",
      {
        "text-2xl w-9 h-9 rounded-lg text-main": size === "m",
        "text-lg disabled:text-black-20-opacity w-7 h-7 rounded-md text-black-sub":
          size !== "m",
        "text-black-20-opacity pointer-events-none": disabled || isLoading,
        "text-main": !isLoading && toggleChecked,
        "text-black-sub": !isLoading && !toggleChecked,
      }
    );

    return (
      <div className={className}>
        <button
          ref={ref}
          className={cn(IconButtonStyle)}
          onClick={(e) => handleClick(e)}
          aria-checked={toggleChecked}
          disabled={disabled || isLoading}
          {...props}
        >
          {isLoading && <Spinner className="absolute flex" />}
          <span
            className={cn(
              "material-symbols-rounded",
              isLoading && "opacity-0",
              toggleChecked && "icon-fill"
            )}
          >
            {icon}
          </span>
        </button>
      </div>
    );
  }
);
IconButton.displayName = "IconButton";
