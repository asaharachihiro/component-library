import { flexRender, Cell } from "@tanstack/react-table";

interface TableCellProps<TData> {
  cell: Cell<TData, any>;
  children?: React.ReactNode;
}

export const TableCell = <TData,>({
  cell,
  children,
}: TableCellProps<TData>) => {
  return (
    <td className="p-4">
      {children
        ? children
        : flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};
TableCell.displayName = "TableCell";
