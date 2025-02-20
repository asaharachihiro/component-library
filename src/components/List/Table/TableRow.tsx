import { Row } from "@tanstack/react-table";
import { TableCell } from "./TableCell";

interface TableRowProps<TData> {
  row: Row<TData>;
}

export const TableRow = <TData,>({ row }: TableRowProps<TData>) => {
  return (
    <tr key={row.id} className="hover:bg-black-5-opacity">
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id} cell={cell} />
      ))}
    </tr>
  );
};
TableRow.displayName = "TableRow";
