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
    <div className="overflow-hidden rounded-lg border border-black-20-opacity">
      <table className="w-full border-collapse">
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
