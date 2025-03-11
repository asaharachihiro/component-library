import { Row } from "@tanstack/react-table";
import { TableCell } from "./TableCell";

interface TableRowProps<TData> {
  row: Row<TData>;
  virtualColumns: { index: number; size: number }[];
  virtualPaddingLeft: number;
  virtualPaddingRight: number;
}

export const TableRow = <TData,>({
  row,
  virtualColumns,
  virtualPaddingLeft,
  virtualPaddingRight,
}: TableRowProps<TData>) => {
  return (
    <tr key={row.id} className="hover:bg-black-5-opacity">
      {virtualPaddingLeft > 0 && <td style={{ width: virtualPaddingLeft }} />}
      {virtualColumns.map((virtualColumn) => {
        const cell = row.getVisibleCells()[virtualColumn.index];
        return (
          <TableCell
            key={cell.id}
            cell={cell}
            style={{ width: virtualColumn.size }}
          />
        );
      })}
      {virtualPaddingRight > 0 && <td style={{ width: virtualPaddingRight }} />}
    </tr>
  );
};
TableRow.displayName = "TableRow";
