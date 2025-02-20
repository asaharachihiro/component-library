import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

export const Table = <TData,>({ data, columns }: TableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="h-full w-full overflow-hidden overflow-x-scroll overflow-y-scroll text-nowrap rounded-lg border border-black-20-opacity text-left">
      <table className="border-separate border-spacing-0">
        <TableHeader headerGroups={table.getHeaderGroups()} />
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TableRow row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
Table.displayName = "Table";
