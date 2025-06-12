import React from "react";
import {
  ColumnDef,
  ColumnPinningState,
  ColumnSizingState,
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

export interface FixedTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  rowHeight?: number;
  columnWidth?: number;
  showPanel?: string | null;
  setShowPanel?: React.Dispatch<React.SetStateAction<string | null>>;
  setColumnPinning: React.Dispatch<React.SetStateAction<ColumnPinningState>>;
  columnPinning: ColumnPinningState;
  hoveredRowIndex?: number | null;
  setHoveredRowIndex?: React.Dispatch<React.SetStateAction<number | null>>;
  onMouseEnter?: (index: number) => void;
  onMouseLeave?: () => void;
  sorting?: SortingState;
  setSorting?: OnChangeFn<SortingState>;
  columnSizing?: ColumnSizingState;
  setColumnSizing?: React.Dispatch<React.SetStateAction<ColumnSizingState>>;
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
      columnWidth = 100,
      showPanel,
      setShowPanel,
      columnPinning,
      setColumnPinning,
      hoveredRowIndex = null,
      setHoveredRowIndex,
      onMouseEnter = () => {},
      onMouseLeave = () => {},
      sorting,
      setSorting,
    }: FixedTableProps<TData>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { containerRef, tableWidth, tableHeight } = useTableSize();
    const fixedTableRef = ref as React.RefObject<HTMLDivElement | null>;
    const internalRef = React.useRef<HTMLDivElement>(null);
    const resolvedRef = fixedTableRef || internalRef;

    const table = useReactTable({
      data,
      columns,
      state: { sorting, columnPinning },
      onColumnPinningChange: setColumnPinning,
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

    const [totalWidth, setTotalWidth] = React.useState<number>(0);

    const getTextWidth = (text: string, font = "16px Noto Sans JP"): number => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) return 0;
      context.font = font;
      return context.measureText(text).width;
    };

    const getMaxcolumnWidth = (
      visibleRows: any[],
      pinnedColumns: string[],
      columns: ColumnDef<any>[]
    ): number[] => {
      return pinnedColumns.map((colId) => {
        const column = columns.find((col) => col.id === colId);
        if (!column) return 0;

        // Header Width (HeaderText + SortButton)
        const headerWidth =
          getTextWidth(String(column.header || ""), "14px Noto Sans JP") + 36;

        // Cell Width
        const maxCellWidth = visibleRows.reduce((maxWidth, row) => {
          const cellValue = String(row.getValue(colId) || "");
          return Math.max(maxWidth, getTextWidth(cellValue));
        }, 0);

        // Header Width ＋ Cell Width
        return Math.max(headerWidth, maxCellWidth);
      });
    };

    const getTotalWidth = (
      visibleRows: any[],
      pinnedColumns: string[],
      columns: ColumnDef<any>[]
    ): number => {
      const columnWidths = getMaxcolumnWidth(
        visibleRows,
        pinnedColumns,
        columns
      );
      return columnWidths.reduce((total, width) => total + width, 0);
    };

    React.useEffect(() => {
      const visibleRows = fixedVirtualRows.map((virtualRow) => {
        return table.getRowModel().rows[virtualRow.index];
      });
      const pinnedColumns = columnPinning.left || [];
      const newTotalWidth = getTotalWidth(visibleRows, pinnedColumns, columns);

      setTotalWidth(newTotalWidth);
    }, [fixedVirtualRows, columnPinning, columns]);

    return (
      <div
        className="z-10 flex h-full w-full overflow-hidden overflow-x-auto overflow-y-auto border-r border-black-20-opacity bg-white text-left shadow-high"
        ref={fixedTableRef}
        style={{
          width: totalWidth,
        }}
      >
        <div ref={containerRef} className="h-full w-full">
          <table
            className="h-full w-full table-auto border-separate border-spacing-0"
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
              columnPinning={columnPinning}
              setColumnPinning={setColumnPinning}
              sorting={sorting}
              setSorting={setSorting}
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
                    columnPinning={columnPinning}
                    onMouseEnter={() => {
                      setHoveredRowIndex?.(virtualRow.index);
                      onMouseEnter(virtualRow.index);
                    }}
                    onMouseLeave={() => {
                      setHoveredRowIndex?.(null);
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
