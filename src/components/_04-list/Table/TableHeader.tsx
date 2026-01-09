import {
  ColumnPinningState,
  ColumnSizingState,
  Header,
  HeaderGroup,
  OnChangeFn,
  SortingState,
} from "@tanstack/react-table";
import * as React from "react";
import { VirtualColumn } from "./Virtualizer";
import { HeaderCell } from "./TableHeaderCell";

interface TableHeaderProps<TData> {
  headerGroups: HeaderGroup<TData>[];
  virtualPaddingLeft: number;
  virtualPaddingRight: number;
  virtualColumns: VirtualColumn<TData>[];
  columnPinning: ColumnPinningState;
  setColumnPinning: React.Dispatch<React.SetStateAction<ColumnPinningState>>;
  showPanel?: string | null;
  setShowPanel?: React.Dispatch<React.SetStateAction<string | null>>;
  isFixed?: boolean;
  sorting?: SortingState;
  setSorting?: OnChangeFn<SortingState>;
  columnSizing?: ColumnSizingState;
  setColumnSizing?: React.Dispatch<React.SetStateAction<ColumnSizingState>>;
  handleColumnDrop: (id: string, targetId: string) => void;
}

export const TableHeader = <TData,>({
  headerGroups,
  virtualPaddingLeft,
  virtualPaddingRight,
  virtualColumns,
  showPanel = null,
  setShowPanel,
  columnPinning,
  setColumnPinning,
  isFixed = false,
  sorting,
  setSorting,
  columnSizing,
  setColumnSizing,
  handleColumnDrop,
}: TableHeaderProps<TData>) => {
  // 内部state
  const [panelPosition, setPanelPosition] = React.useState({ top: 0, left: 0 });
  const [resizing, setResizing] = React.useState({
    isResizing: false,
    offset: 0,
  });

  // isFixedで表示を切り替える
  const displayColumns = isFixed
    ? virtualColumns.filter((col) => columnPinning.left?.includes(col.id))
    : virtualColumns.filter(
        (col) =>
          !columnPinning.left?.includes(col.id) &&
          !columnPinning.right?.includes(col.id)
      );

  // カラム幅を手動変更するハンドラー
  const handleMouseDown = (
    e: React.MouseEvent | React.TouchEvent,
    header: Header<TData, any>
  ) => {
    e.stopPropagation();
    setResizing((prev) => ({
      ...prev,
      isResizing: true,
    }));

    const mouseMoveHandler = (event: MouseEvent) => {
      if (!resizing.isResizing) return;

      const rect = (event.target as HTMLElement).getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      setResizing((prev) => {
        return {
          ...prev,
          offset: offsetX,
        };
      });
    };

    const mouseUpHandler = () => {
      setColumnSizing?.((prev) => ({
        ...prev,
        [header.id]: Math.max(50, (prev[header.id] || 0) + resizing.offset),
      }));
      setResizing({
        isResizing: false,
        offset: 0,
      });
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, { once: true });

    header.getResizeHandler()(e);
  };

  // スタイルの設定
  const containerStyle = "w-full typo-label-md text-black-sub transition-all";

  return (
    <thead className={containerStyle}>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id} className="z-5 sticky top-0 bg-white">
          {virtualPaddingLeft > 0 && (
            <th
              style={{ width: virtualPaddingLeft }}
              data-testid="padding-th"
            />
          )}

          {displayColumns.map((virtualColumn) => {
            const header = headerGroup.headers.find(
              (header) => header.id === virtualColumn.id
            );
            if (!header) {
              return null;
            }
            return (
              <HeaderCell
                header={header}
                key={header.id}
                sorting={sorting || []}
                columnSizing={columnSizing || {}}
                resizing={resizing}
                isPinned={columnPinning.left?.includes(header.id) || false}
                showPanel={showPanel}
                setShowPanel={setShowPanel || (() => {})}
                panelPosition={panelPosition}
                setPanelPosition={setPanelPosition}
                setColumnPinning={setColumnPinning}
                setSorting={setSorting || (() => {})}
                handleMouseDown={(e) => handleMouseDown(e, header)}
                handleColumnDrop={handleColumnDrop}
              />
            );
          })}
          {virtualPaddingRight > 0 && (
            <th
              style={{ width: virtualPaddingRight }}
              data-testid="padding-th"
            />
          )}
        </tr>
      ))}
    </thead>
  );
};
TableHeader.displayName = "TableHeader";
