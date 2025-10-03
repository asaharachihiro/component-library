import * as React from "react";
import Portal from "../../../utils/Portal";

interface ColumnPanelProps {
  id: string;
  panelPosition: {
    top: number;
    left: number;
  };
  onClick: (id: string) => void;
  isFixed?: boolean;
}

export const ColumnPanel = React.forwardRef<HTMLDivElement, ColumnPanelProps>(
  ({ id, panelPosition, onClick, isFixed = false }, ref) => {
    return (
      <Portal>
        <div
          id={id}
          className="absolute mt-2 size-fit rounded-lg bg-white text-lg text-black-sub shadow-low"
          onClick={() => onClick(id)}
          role="dialog"
          style={{
            top: panelPosition.top,
            left: panelPosition.left,
            zIndex: 1000,
          }}
        >
          <div className="flex items-center rounded-lg p-4 hover:bg-black-5-opacity active:bg-black-10-opacity">
            {isFixed ? (
              <>
                <span className="material-symbols-rounded mr-2 select-none">
                  keep_off
                </span>
                <span className="text-base font-regular">固定を解除</span>
              </>
            ) : (
              <>
                <span className="material-symbols-rounded mr-2 select-none">
                  keep
                </span>
                <span className="text-base font-regular">列を固定</span>
              </>
            )}
          </div>
        </div>
      </Portal>
    );
  }
);
ColumnPanel.displayName = "ColumnPanel";
