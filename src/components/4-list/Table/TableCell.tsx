import { flexRender, Cell } from "@tanstack/react-table";
import { cn } from "../../../utils/cn";

interface TableCellProps<TData> {
  cell: Cell<TData, any> | null;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const TableCell = <TData,>({
  cell,
  children,
  style,
  className = "",
}: TableCellProps<TData>) => {
  return (
    <td className={cn("p-4", className)} style={style}>
      {children
        ? children
        : cell
          ? flexRender(cell.column.columnDef.cell, cell.getContext())
          : ""}
      {""}
    </td>
  );
};
TableCell.displayName = "TableCell";
