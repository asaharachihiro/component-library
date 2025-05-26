import React from "react";
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
  hoveredRowIndex: number | null;
  setHoveredRowIndex: React.Dispatch<React.SetStateAction<number | null>>;
  onMouseEnter?: (index: number) => void;
  onMouseLeave?: () => void;
}

export const FixedTable = React.forwardRef<
  HTMLDivElement,
  FixedTableProps<any>
>(
  <TData,>(
    {
      data,
      columns,
      rowHeight = 52,
      columnWidth,
      showPanel,
      setShowPanel,
      columnPinning,
      setColumnPinning,
      hoveredRowIndex = null,
      setHoveredRowIndex,
      onMouseEnter = () => {},
      onMouseLeave = () => {},
    }: FixedTableProps<TData>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { containerRef, tableWidth, tableHeight } = useTableSize();
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const fixedTableRef = ref as React.RefObject<HTMLDivElement | null>;
    const internalRef = React.useRef<HTMLDivElement>(null);
    const resolvedRef = fixedTableRef || internalRef;

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
      rowVirtualizer: fixedRowVirtualizer,
      virtualRows: fixedVirtualRows,
      virtualColumns,
      virtualPaddingTop,
      virtualPaddingBottom,
      virtualPaddingLeft,
      virtualPaddingRight,
    } = useTableVirtualizer<TData>({
      table,
      rowCount: data.length,
      columnCount: columns.length,
      columnIds: columns
        .map((col) => col.id)
        .filter((id): id is string => id !== undefined),
      containerRef: resolvedRef as React.RefObject<HTMLDivElement>,
      rowHeight,
      columnWidth,
      tableWidth,
      tableHeight,
    });

    return (
      <div
        className="z-10 flex h-full w-full overflow-hidden overflow-y-auto border-r border-black-20-opacity bg-white text-left shadow-low"
        ref={fixedTableRef}
      >
        <div ref={containerRef} className="h-full w-full">
          <table
            className="h-full w-full border-separate border-spacing-0"
            style={{
              height: fixedRowVirtualizer.getTotalSize(),
            }}
          >
            <TableHeader
              isPinned={true}
              headerGroups={table.getHeaderGroups() as HeaderGroup<any>[]}
              virtualPaddingLeft={virtualPaddingLeft}
              virtualPaddingRight={virtualPaddingRight}
              virtualColumns={virtualColumns}
              showPanel={showPanel}
              setShowPanel={setShowPanel}
              columnPinning={
                table.getState().columnPinning as Record<
                  string,
                  "left" | "right"
                >
              }
              setColumnPinning={setColumnPinning}
            />
            <tbody>
              {virtualPaddingTop > 0 && (
                <tr>
                  <td style={{ height: virtualPaddingTop }} />
                </tr>
              )}
              {fixedVirtualRows.map((virtualRow) => {
                const row = table.getRowModel().rows[virtualRow.index];

                return (
                  <TableRow
                    isPinned={true}
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
                    onMouseEnter={() => {
                      setHoveredRowIndex(virtualRow.index);
                      onMouseEnter(virtualRow.index);
                    }}
                    onMouseLeave={() => {
                      setHoveredRowIndex(null);
                      onMouseLeave();
                    }}
                    isHovered={hoveredRowIndex === virtualRow.index}
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
  }
);
FixedTable.displayName = "FixedTable";
