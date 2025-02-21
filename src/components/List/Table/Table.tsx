import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import useColumnVirtualizer from "./useColumnVirtualizer";

interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  rowHeight: number;
  columnWidth: number;
  tableWidth: number;
}

export const Table = <TData,>({
  data,
  columns,
  rowHeight,
  columnWidth,
  tableWidth,
}: TableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const {
    parentRef,
    virtualColumns,
    virtualPaddingLeft,
    virtualPaddingRight,
    totalSize,
  } = useColumnVirtualizer(
    table.getVisibleLeafColumns().length,
    columnWidth,
    tableWidth,
    rowHeight,
    data.length
  );

  return (
    <div
      ref={parentRef}
      className="h-full w-full overflow-hidden overflow-x-auto overflow-y-auto text-nowrap rounded-lg border border-black-20-opacity text-left"
    >
      <div style={{ width: totalSize, height: "100%" }}>
        <table className="border-separate border-spacing-0">
          <TableHeader
            headerGroups={table.getHeaderGroups()}
            virtualPaddingLeft={virtualPaddingLeft}
            virtualPaddingRight={virtualPaddingRight}
            virtualColumns={virtualColumns}
          />
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                row={row}
                virtualColumns={virtualColumns}
                virtualPaddingLeft={virtualPaddingLeft}
                virtualPaddingRight={virtualPaddingRight}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
Table.displayName = "Table";
