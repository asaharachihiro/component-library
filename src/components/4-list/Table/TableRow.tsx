import * as React from "react";

import { ColumnPinningState, Row } from "@tanstack/react-table";
import { TableCell } from "./TableCell";
import { VirtualColumn } from "./Virtualizer";
import { cn } from "../../../utils/cn";

interface TableRowProps<TData> {
  row: Row<TData>;
  virtualColumns: VirtualColumn<TData>[];
  virtualPaddingLeft: number;
  virtualPaddingRight: number;
  columnPinning: ColumnPinningState;
  isPinned?: boolean;
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const TableRow = <TData,>({
  row,
  virtualColumns,
  virtualPaddingLeft,
  virtualPaddingRight,
  columnPinning,
  isPinned = false,
  isHovered = false,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}: TableRowProps<TData>) => {
  const pinnedColumns = React.useMemo(
    () =>
      virtualColumns.filter((virtualColumn) =>
        columnPinning.left?.includes(virtualColumn.id)
      ),
    [virtualColumns, columnPinning]
  );

  const unpinnedColumns = React.useMemo(
    () =>
      virtualColumns.filter(
        (virtualColumn) =>
          !columnPinning.left?.includes(virtualColumn.id) &&
          !columnPinning.right?.includes(virtualColumn.id)
      ),
    [virtualColumns, columnPinning]
  );

  const displayColumns: VirtualColumn<TData>[] = isPinned
    ? pinnedColumns
    : unpinnedColumns;

  return (
    <>
      <tr
        key={row.id}
        className={cn(isHovered && "bg-black-5-opacity")}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {virtualPaddingLeft > 0 && <td style={{ width: virtualPaddingLeft }} />}

        {displayColumns.map((Column) => {
          const cell = row
            .getVisibleCells()
            .find((cell) => cell.column.id === Column.id);

          return <TableCell key={cell?.id} cell={cell || null} />;
        })}
        {virtualPaddingRight > 0 && (
          <td style={{ width: virtualPaddingRight }} />
        )}
      </tr>
    </>
  );
};
TableRow.displayName = "TableRow";
