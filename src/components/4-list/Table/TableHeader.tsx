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
import Portal from "../../../utils/Portal";

interface TableHeaderProps<TData> {
  headerGroups: HeaderGroup<TData>[];
  virtualPaddingLeft: number;
  virtualPaddingRight: number;
  virtualColumns: VirtualColumn<TData>[];
  showPanel?: string | null;
  setShowPanel?: React.Dispatch<React.SetStateAction<string | null>>;
  columnPinning: ColumnPinningState;
  setColumnPinning: React.Dispatch<React.SetStateAction<ColumnPinningState>>;
  isPinned?: boolean;
  sorting?: SortingState;
  setSorting?: OnChangeFn<SortingState>;
  columnSizing?: ColumnSizingState;
  setColumnSizing?: React.Dispatch<React.SetStateAction<ColumnSizingState>>;
  offset?: number;
  resizeMode?: "onChange" | "onEnd";
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
  isPinned = false,
  sorting,
  setSorting,
  columnSizing,
  setColumnSizing,
  offset = 0,
  resizeMode = "onEnd",
}: TableHeaderProps<TData>) => {
  const [panelPosition, setPanelPosition] = React.useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const togglePinColumn = (id: string) => {
    const isPinned = columnPinning.left?.includes(id);
    const newPinning = { ...columnPinning };

    if (isPinned) {
      newPinning.left = (newPinning.left || []).filter((colId) => colId !== id);
    } else {
      newPinning.left = [...(newPinning.left || []), id];
    }
    setColumnPinning(newPinning);
    setShowPanel?.(null);
  };

  const [isResizing, setIsResizing] = React.useState(false);
  const [resizeOffset, setResizeOffset] = React.useState(0);

  // ColumsPanelの表示
  // const togglePanel = (id: string, e: React.MouseEvent) => {
  //   if (isResizing) return;
  //   if (showPanel === id) {
  //     setShowPanel && setShowPanel(null);
  //     return;
  //   }

  //   const rect = (e.target as HTMLElement).getBoundingClientRect();
  //   setPanelPosition({ top: rect.bottom, left: rect.left });
  //   setShowPanel && setShowPanel(id);
  // };

  // const toggleSort = (header: Header<TData, any>) => {
  //   if (!setSorting) return;
  //   const nextSortOrder = header.column.getNextSortingOrder();
  //   setSorting(() => {
  //     if (!nextSortOrder) {
  //       return [];
  //     }
  //     return [{ id: header.id, desc: nextSortOrder === "desc" }];
  //   });
  // };

  const pinnedColumns = React.useMemo(
    () =>
      virtualColumns.filter((virtualColumn) =>
        columnPinning.left?.includes(virtualColumn.id)
      ),
    [virtualColumns, columnPinning]
  );

  const unpinnedColumns = React.useMemo(
    () =>
      virtualColumns.filter(
        (virtualColumn) => !columnPinning.left?.includes(virtualColumn.id)
      ),
    [virtualColumns, columnPinning]
  );

  const displayColumns: VirtualColumn<TData>[] = isPinned
    ? pinnedColumns
    : unpinnedColumns;

  const panelRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(
    panelRef as React.RefObject<HTMLElement>,
    () => setShowPanel && setShowPanel(null)
  );

  const handleMouseDown = (
    e: React.MouseEvent | React.TouchEvent,
    header: Header<TData, any>,
    setIsResizing: React.Dispatch<React.SetStateAction<boolean>>,
    getResizeHandler: (e: React.MouseEvent | React.TouchEvent) => void
  ) => {
    e.stopPropagation();
    setIsResizing(true);

    const mouseMoveHandler = (event: MouseEvent) => {
      if (!isResizing) return;

      const rect = (event.target as HTMLElement).getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      setResizeOffset(offsetX);
    };

    const mouseUpHandler = () => {
      setIsResizing(false);
      console.log("set column sizing");
      setColumnSizing?.((prev) => ({
        ...prev,
        [header.id]: Math.max(50, (prev[header.id] || 0) + resizeOffset),
      }));

      setResizeOffset(0);
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, { once: true });

    getResizeHandler(e);
  };

  React.useEffect(() => {
    //デバッグ用
    console.log("isResizing:", isResizing);
    console.log(columnSizing?.distribution);
  }, [isResizing, resizeOffset]);

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
              console.error(
                "Header not found for Virtual Column ID:",
                virtualColumn.id
              );
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
                  // onClick={(e) => togglePanel(header.id, e)}
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
                      // onClick={(e) => {
                      //   e.stopPropagation();
                      //   toggleSort(header);
                      // }}
                    />
                  )}
                </div>
                {header.column.getCanResize() && (
                  //リサイズハンドル
                  <div
                    draggable="true"
                    onMouseDown={(e) =>
                      handleMouseDown(
                        e,
                        header,
                        setIsResizing,
                        header.getResizeHandler()
                      )
                    }
                    onTouchStart={(e) =>
                      handleMouseDown(
                        e,
                        header,
                        setIsResizing,
                        header.getResizeHandler()
                      )
                    }
                    onDragStart={(e) => e.preventDefault()}
                    className={cn(
                      "z-6 absolute right-0 top-0 inline-block h-full w-1 transform cursor-col-resize transition-all hover:bg-main-bg",
                      header.column.getIsResizing() && "bg-main-bg"
                    )}
                    style={{
                      transform: header.column.getIsResizing()
                        ? `translateX(${resizeOffset}px)`
                        : "",
                    }}
                  />
                )}
                {showPanel === header.id &&
                  (() => {
                    const isFixed = columnPinning.left?.includes(header.id);
                    return (
                      <ColumnPanel
                        ref={panelRef}
                        id={`${header.id}-columnPanel`}
                        panelPosition={{
                          top: panelPosition.top,
                          left: panelPosition.left,
                        }}
                        onClick={() => togglePinColumn(header.id)}
                        isFixed={isFixed}
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
