import { flexRender, Cell } from "@tanstack/react-table";

interface TableCellProps<TData> {
  cell: Cell<TData, any>;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const TableCell = <TData,>({
  cell,
  children,
  style,
}: TableCellProps<TData>) => {
  return (
    <td className="p-4" style={style}>
      {children
        ? children
        : flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};
TableCell.displayName = "TableCell";
