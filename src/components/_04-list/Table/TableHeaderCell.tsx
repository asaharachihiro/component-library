import * as React from "react";
import {
  ColumnPinningState,
  ColumnSizingState,
  flexRender,
  Header,
  OnChangeFn,
  SortingState,
} from "@tanstack/react-table";
import { SortButton } from "./SortButton";
import { cn } from "../../../utils/cn";
import { useClickOutside } from "../../../utils/useClickOutside";
import { ColumnPanel } from "./ColumnPanel";

interface HeaderCellProps<TData> {
  header: Header<TData, any>;

  columnSizing: ColumnSizingState;
  resizing: {
    isResizing: boolean;
    offset: number;
  };
  isPinned: boolean;
  showPanel: string | null;
  setShowPanel: React.Dispatch<React.SetStateAction<string | null>>;
  panelPosition: { top: number; left: number };
  setPanelPosition: React.Dispatch<
    React.SetStateAction<{ top: number; left: number }>
  >;
  setColumnPinning: React.Dispatch<React.SetStateAction<ColumnPinningState>>;
  sorting: SortingState;
  setSorting: OnChangeFn<SortingState>;
  handleMouseDown: (
    e: React.MouseEvent | React.TouchEvent,
    header: Header<TData, any>
  ) => void;
  handleColumnDrop: (id: string, targetId: string) => void;
}

export const HeaderCell = <TData,>({
  header,
  sorting,
  columnSizing,
  resizing = { isResizing: false, offset: 0 },
  isPinned = false,
  showPanel = null,
  setShowPanel,
  panelPosition,
  setPanelPosition,
  setColumnPinning,
  setSorting,
  handleMouseDown,
  handleColumnDrop,
}: HeaderCellProps<TData>) => {
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

  // refの設定
  const panelRef = React.useRef<HTMLDivElement>(null);

  // パネル外クリックで閉じる
  useClickOutside(
    panelRef as React.RefObject<HTMLElement>,
    () => setShowPanel && setShowPanel(null)
  );

  // カラムの固定・解除
  const togglePinColumn = (id: string, isPinned: boolean) => {
    setColumnPinning((prev) => ({
      ...prev,
      left: isPinned
        ? prev.left?.filter((colId) => colId !== id)
        : [...(prev.left || []), id],
    }));
    setShowPanel?.(null);
  };

  // ソートの切り替え
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

  return (
    <th
      key={header.id}
      draggable="true"
      className={cn(
        sorting?.some((sort) => sort.id === header.id) && "font-bold text-main",
        "relative w-full overflow-visible border-b border-black-20-opacity bg-black-3-opacity"
      )}
      style={{
        width: columnSizing?.[header.id] || header.getSize(),
      }}
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", header.id);
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const draggedId = e.dataTransfer.getData("text/plain");
        handleColumnDrop(draggedId, header.id);
      }}
    >
      <div
        data-testid={`column-${header.id}-button`}
        className="inset-0 flex h-full w-full items-center p-4 transition-all hover:bg-black-5-opacity active:bg-black-10-opacity"
        onClick={(e) => togglePanel(header.id, e)}
      >
        {flexRender(header.column.columnDef.header, header.getContext())}
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
};
HeaderCell.displayName = "HeaderCell";
