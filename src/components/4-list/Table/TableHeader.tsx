import {
  ColumnPinningState,
  flexRender,
  HeaderGroup,
} from "@tanstack/react-table";
import { SortButton } from "./SortButton";
import { cn } from "../../../utils/cn";
import * as React from "react";
import { ColumnPanel } from "./ColumnPanel";
import { VirtualColumn } from "./Virtualizer";

interface TableHeaderProps<TData> {
  headerGroups: HeaderGroup<TData>[];
  virtualPaddingLeft: number;
  virtualPaddingRight: number;
  virtualColumns: VirtualColumn<TData>[];
  showPanel: string | null;
  setShowPanel: React.Dispatch<React.SetStateAction<string | null>>;
  columnPinning: ColumnPinningState;

  setColumnPinning: React.Dispatch<React.SetStateAction<ColumnPinningState>>;
  isPinned?: boolean;
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
    setShowPanel(null);
  };

  // ColumsPanelの表示
  const togglePanel = (id: string, e: React.MouseEvent) => {
    if (showPanel === id) {
      setShowPanel(null);
      return;
    }

    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setPanelPosition({ top: rect.bottom, left: rect.left });
    setShowPanel(id);
  };

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
        (virtualColumn) =>
          !columnPinning.left?.includes(virtualColumn.id) &&
          !columnPinning.right?.includes(virtualColumn.id)
      ),
    [virtualColumns, columnPinning]
  );

  const displayColumns: VirtualColumn<TData>[] = isPinned
    ? pinnedColumns
    : unpinnedColumns;

  return (
    <thead className="text-sm font-medium text-black-sub transition-all">
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id} className="sticky top-0 z-10 bg-white">
          {virtualPaddingLeft > 0 && (
            <th style={{ width: virtualPaddingLeft }} />
          )}

          {displayColumns.map((virtualColumn) => {
            const header = headerGroup.headers[virtualColumn.index];
            const isFixed =
              columnPinning[header.id as keyof ColumnPinningState]?.includes(
                "left"
              );
            return (
              <th
                key={header.id}
                // style={{ width: virtualColumns.size }}
                className={cn(
                  header.column.getIsSorted() && "font-bold text-main",
                  "relative border-b border-black-20-opacity bg-black-3-opacity"
                )}
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
                        const toggleSorting =
                          header.column.getToggleSortingHandler();
                        if (toggleSorting) {
                          toggleSorting(e);
                        }
                      }}
                    />
                  )}
                </div>
                {showPanel === header.id && (
                  <ColumnPanel
                    id={`${header.id}-columnPanel`}
                    panelPosition={{
                      top: panelPosition.top,
                      left: panelPosition.left,
                    }}
                    onClick={() => togglePinColumn(header.id)}
                    isFixed={isFixed}
                  />
                )}
              </th>
            );
          })}
          {/* </div> */}
          {virtualPaddingRight > 0 && (
            <th style={{ width: virtualPaddingRight }} />
          )}
        </tr>
      ))}
    </thead>
  );
};
TableHeader.displayName = "TableHeader";
