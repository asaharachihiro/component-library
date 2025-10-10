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
    // スタイルの設定
    const panelStyle =
      "absolute mt-2 size-fit rounded-lg bg-white text-lg text-black-sub shadow-low";
    const containerStyle =
      "flex items-center rounded-lg p-4 hover:bg-black-5-opacity active:bg-black-10-opacity";
    const iconStyle = "material-symbols-rounded mr-2 select-none";
    const labelStyle = "text-base font-regular";

    return (
      <Portal>
        <div
          id={id}
          data-testid={`column-${id}-panel`}
          className={panelStyle}
          onClick={() => onClick(id)}
          role="dialog"
          style={{
            top: panelPosition.top,
            left: panelPosition.left,
            zIndex: 1000,
          }}
        >
          <div className={containerStyle}>
            {isFixed ? (
              <>
                <span className={iconStyle}>keep_off</span>
                <span className={labelStyle}>固定を解除</span>
              </>
            ) : (
              <>
                <span className={iconStyle}>keep</span>
                <span className={labelStyle}>列を固定</span>
              </>
            )}
          </div>
        </div>
      </Portal>
    );
  }
);
ColumnPanel.displayName = "ColumnPanel";
