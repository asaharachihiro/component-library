import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { useVirtualizer } from "@tanstack/react-virtual";
import useTableSize from "../../../utils/useTableSize";

interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  rowHeight?: number;
  columnWidth: number;
}

export const Table = <TData,>({
  data,
  columns,
  rowHeight = 52,
  columnWidth,
}: TableProps<TData>) => {
  const { containerRef, tableWidth, tableHeight } = useTableSize();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const rowVirtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => containerRef.current,
    estimateSize: () => rowHeight,
    overscan: 3,
    initialRect: { width: tableWidth, height: tableHeight },
  });

  const columnVirtualizer = useVirtualizer({
    count: table.getVisibleLeafColumns().length,
    getScrollElement: () => containerRef.current,
    estimateSize: () => columnWidth,
    horizontal: true,
    overscan: 3,
    initialRect: { width: tableWidth, height: tableHeight },
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  const virtualColumns = columnVirtualizer.getVirtualItems();

  const virtualPaddingTop = virtualRows.length > 0 ? virtualRows[0].start : 0;
  const virtualPaddingBottom =
    virtualRows.length > 0
      ? rowVirtualizer.getTotalSize() - virtualRows[virtualRows.length - 1].end
      : 0;
  const virtualPaddingLeft =
    virtualColumns.length > 0 ? virtualColumns[0].start : 0;
  const virtualPaddingRight =
    virtualColumns.length > 0
      ? columnVirtualizer.getTotalSize() -
        virtualColumns[virtualColumns.length - 1].end
      : 0;
  return (
    <div
      ref={containerRef}
      className="h-full w-full overflow-hidden overflow-x-auto overflow-y-auto text-nowrap rounded-lg border border-black-20-opacity text-left"
    >
      <div
        style={{
          width: columnVirtualizer.getTotalSize(),
          height: rowVirtualizer.getTotalSize(),
        }}
      >
        <table className="border-separate border-spacing-0">
          <TableHeader
            headerGroups={table.getHeaderGroups()}
            virtualPaddingLeft={virtualPaddingLeft}
            virtualPaddingRight={virtualPaddingRight}
            virtualColumns={virtualColumns}
          />
          <tbody>
            {virtualPaddingTop > 0 && (
              <tr>
                <td style={{ height: virtualPaddingTop }} /> // 変更
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
                />
              );
            })}
            {virtualPaddingBottom > 0 && (
              <tr>
                <td style={{ height: virtualPaddingBottom }} /> // 変更
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
Table.displayName = "Table";
