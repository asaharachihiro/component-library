import React from "react";
import { TableCell } from "./TableCell";
import {
  ColumnDef,
  ColumnPinningState,
  getCoreRowModel,
  getSortedRowModel,
  HeaderGroup,
  OnChangeFn,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { cn } from "../../../utils/cn";
import { useTableVirtualizer } from "./Virtualizer";
import useTableSize from "../../../utils/useTableSize";

interface FixedTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  rowHeight?: number;
  columnWidth: number;
  showPanel: string | null;
  setShowPanel: React.Dispatch<React.SetStateAction<string | null>>;
  setColumnPinning: React.Dispatch<
    React.SetStateAction<Record<string, "left" | "right">>
  >;
  columnPinning: Record<string, "left" | "right">;
}

export const FixedTable = <TData,>({
  data,
  columns,
  rowHeight = 52,
  columnWidth,
  showPanel,
  setShowPanel,
  columnPinning,
  setColumnPinning,
}: FixedTableProps<TData>) => {
  const { containerRef, tableWidth, tableHeight } = useTableSize();
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnPinning },
    onColumnPinningChange: setColumnPinning as OnChangeFn<ColumnPinningState>,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const {
    rowVirtualizer,
    columnVirtualizer,
    virtualRows,
    virtualColumns,
    virtualPaddingTop,
    virtualPaddingBottom,
    virtualPaddingLeft,
    virtualPaddingRight,
  } = useTableVirtualizer({
    table,
    rowCount: data.length,
    columnCount: columns.length,
    columnIds: columns
      .map((col) => col.id)
      .filter((id): id is string => id !== undefined),
    containerRef: containerRef as React.RefObject<HTMLDivElement>,
    rowHeight,
    columnWidth,
    tableWidth,
    tableHeight,
  });

  return (
    <div
      ref={containerRef}
      className={cn("h-full w-full overflow-hidden text-nowrap text-left")}
    >
      <div
        style={{
          width: columnVirtualizer.getTotalSize(),
          height: rowVirtualizer.getTotalSize(),
        }}
      >
        <table className="border-separate border-spacing-0">
          <TableHeader
            isPinned={true}
            headerGroups={table.getHeaderGroups() as HeaderGroup<any>[]}
            virtualPaddingLeft={virtualPaddingLeft}
            virtualPaddingRight={virtualPaddingRight}
            virtualColumns={virtualColumns}
            showPanel={showPanel}
            setShowPanel={setShowPanel}
            columnPinning={
              table.getState().columnPinning as Record<string, "left" | "right">
            }
            setColumnPinning={setColumnPinning}
          />
          <tbody>
            {virtualPaddingTop > 0 && (
              <tr>
                <td style={{ height: virtualPaddingTop }} />
              </tr>
            )}
            {virtualRows.map((virtualRow) => {
              const row = table.getRowModel().rows[virtualRow.index];
              return (
                <TableRow
                  key={row.id}
                  row={row}
                  virtualColumns={virtualColumns}
                  virtualPaddingLeft={virtualPaddingLeft}
                  virtualPaddingRight={virtualPaddingRight}
                  columnPinning={
                    table.getState().columnPinning as Record<
                      string,
                      "left" | "right"
                    >
                  }
                />
              );
            })}
            {virtualPaddingBottom > 0 && (
              <tr>
                <td style={{ height: virtualPaddingBottom }} />
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
FixedTable.displayName = "FixedTable";
