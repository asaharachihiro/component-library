import { flexRender, Row } from "@tanstack/react-table";

interface TableRowProps<TData> {
  row: Row<TData>;
}

export const TableRow = <TData,>({ row }: TableRowProps<TData>) => {
  return (
    <tr key={row.id} className="hover:bg-black-5-opacity">
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id} className="p-4">
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  );
};
TableRow.displayName = "TableRow";
