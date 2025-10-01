import * as React from "react";
import { Button } from "@components/_01-action/Button";
import { useClickOutside } from "../../../utils/useClickOutside";

interface FilterButtonProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
  isActive?: boolean;
  isOpen?: boolean;
  fotterElements?: React.ReactNode;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  id,
  className,
  children,
  isActive = false,
  isOpen = false,
  fotterElements,
}) => {
  const [showPanel, setShowPanel] = React.useState(isOpen);

  const panelRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(panelRef as React.RefObject<HTMLElement>, () =>
    setShowPanel(false)
  );

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setShowPanel(false);
    }
  };

  return (
    <div className={className} onKeyDown={handleOnKeyDown}>
      <Button
        id={id}
        variant="textPrimary"
        icon="filter_list"
        className="mb-1"
        onClick={() => setShowPanel(!showPanel)}
        isActive={isActive}
        label="フィルター"
      />
      {showPanel && (
        <div className="rounded-lg bg-white shadow-low" ref={panelRef}>
          <div className="flex-col space-y-4 p-6">{children}</div>
          {fotterElements && (
            <div className="sticky flex justify-between border-t border-black-20-opacity p-6">
              {fotterElements}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
FilterButton.displayName = "FilterButton";
