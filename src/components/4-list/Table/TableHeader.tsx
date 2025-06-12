import {
  ColumnPinningState,
  ColumnSizingState,
  flexRender,
  Header,
  HeaderGroup,
  OnChangeFn,
  SortingState,
} from "@tanstack/react-table";
import { SortButton } from "./SortButton";
import { cn } from "../../../utils/cn";
import * as React from "react";
import { VirtualColumn } from "./Virtualizer";
import { useClickOutside } from "../../../utils/useClickOutside";
import { ColumnPanel } from "./ColumnPanel";

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
}: TableHeaderProps<TData>) => {
  const [panelPosition, setPanelPosition] = React.useState({ top: 0, left: 0 });
  const [resizing, setResizing] = React.useState({
    isResizing: false,
    offset: 0,
  });

  // isFixedで表示を切り替える
  const displayColumns = React.useMemo(() => {
    return virtualColumns.filter((virtualColumn) =>
      isFixed
        ? columnPinning.left?.includes(virtualColumn.id)
        : !columnPinning.left?.includes(virtualColumn.id)
    );
  }, [virtualColumns, columnPinning.left, isFixed]);

  //ColumsPanelの表示
  const togglePanel = (id: string, e: React.MouseEvent) => {
    if (resizing.isResizing) return;
    if (showPanel === id) {
      setShowPanel && setShowPanel(null);
      return;
    }

    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setPanelPosition({ top: rect.bottom, left: rect.left });
    setShowPanel && setShowPanel(id);
  };

  const panelRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(
    panelRef as React.RefObject<HTMLElement>,
    () => setShowPanel && setShowPanel(null)
  );

  const togglePinColumn = (id: string, isPinned: boolean) => {
    setColumnPinning((prev) => ({
      ...prev,
      left: isPinned
        ? prev.left?.filter((colId) => colId !== id)
        : [...(prev.left || []), id],
    }));
    setShowPanel?.(null);
  };

  const toggleSort = (header: Header<TData, any>) => {
    if (!setSorting) return;
    const nextSortOrder = header.column.getNextSortingOrder();
    setSorting(() => {
      if (!nextSortOrder) {
        return [];
      }
      return [{ id: header.id, desc: nextSortOrder === "desc" }];
    });
  };

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

  return (
    <thead className="w-full text-sm font-medium text-black-sub transition-all">
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id} className="z-5 sticky top-0 bg-white">
          {virtualPaddingLeft > 0 && (
            <th style={{ width: virtualPaddingLeft }} />
          )}

          {displayColumns.map((virtualColumn) => {
            const header = headerGroup.headers.find(
              (header) => header.id === virtualColumn.id
            );
            if (!header) {
              return null;
            }
            return (
              <th
                key={header.id}
                className={cn(
                  sorting?.some((sort) => sort.id === header.id) &&
                    "font-bold text-main",
                  "relative w-full overflow-visible border-b border-black-20-opacity bg-black-3-opacity"
                )}
                style={{
                  width: columnSizing?.[header.id] || header.getSize(),
                }}
              >
                <div
                  className="inset-0 flex h-full w-full items-center p-4 transition-all hover:bg-black-5-opacity active:bg-black-10-opacity"
                  onClick={(e) => togglePanel(header.id, e)}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getCanSort() && (
                    <SortButton
                      className="ml-1"
                      sorting={header.column.getIsSorted() as string}
                      nextSortOrder={header.column.getNextSortingOrder()}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSort(header);
                      }}
                    />
                  )}
                </div>
                {header.column.getCanResize() && (
                  //リサイズハンドル
                  <div
                    draggable="true"
                    onMouseDown={(e) => handleMouseDown(e, header)}
                    onTouchStart={(e) => handleMouseDown(e, header)}
                    onDragStart={(e) => e.preventDefault()}
                    className={cn(
                      "z-6 absolute right-0 top-0 inline-block h-full w-1 transform cursor-col-resize transition-all hover:bg-main-bg",
                      header.column.getIsResizing() && "bg-main-bg"
                    )}
                    style={{
                      transform: header.column.getIsResizing()
                        ? `translateX(${resizing.offset}px)`
                        : "",
                    }}
                  />
                )}
                {showPanel === header.id &&
                  (() => {
                    const isPinned =
                      columnPinning.left?.includes(header.id) || false;
                    return (
                      <ColumnPanel
                        id={`${header.id}-columnPanel`}
                        ref={panelRef}
                        isFixed={isPinned}
                        onClick={() => togglePinColumn(header.id, isPinned)}
                        panelPosition={{
                          top: panelPosition.top,
                          left: panelPosition.left,
                        }}
                      />
                    );
                  })()}
              </th>
            );
          })}
          {virtualPaddingRight > 0 && (
            <th style={{ width: virtualPaddingRight }} />
          )}
        </tr>
      ))}
    </thead>
  );
};
TableHeader.displayName = "TableHeader";
