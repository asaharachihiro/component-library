import * as React from "react";
import { IconButton } from "@components/1-action/IconButton";
import { useClickOutside } from "../../../utils/useClickOutside";
import { cn } from "../../../utils/cn";

interface MeatballsMenuProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const MeatballsMenu: React.FC<MeatballsMenuProps> = ({
  id,
  className = "",
  children,
  disabled,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const MenuRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(MenuRef as React.RefObject<HTMLElement>, () =>
    setIsOpen(false)
  );

  return (
    <div id={id} className={cn("size-fit", className)} ref={MenuRef}>
      <IconButton
        icon={"more_horiz"}
        className="m-2"
        onClick={handleToggle}
        disabled={disabled}
      />
      {isOpen && (
        <div
          className={cn(
            "flex size-fit overflow-hidden rounded-lg bg-white shadow-low"
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
MeatballsMenu.displayName = "MeatballsMenu";
