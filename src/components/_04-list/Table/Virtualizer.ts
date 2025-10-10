import { useVirtualizer } from "@tanstack/react-virtual";
import { Header } from "@tanstack/react-table";
export interface VirtualColumn<TData> {
  id: string;
  size: number;
  start: number;
  end: number;
  header: Header<TData, unknown>;
  index: number;
}
interface VirtualizerProps {
  rowCount: number;
  columnCount: number;
  columnIds: string[];
  containerRef: React.RefObject<HTMLDivElement>;
  rowHeight: number;
  columnWidth: number;
  tableWidth: number;
  tableHeight: number;
}

export const useTableVirtualizer = <TData>({
  rowCount,
  columnCount,
  columnIds,
  containerRef,
  rowHeight,
  columnWidth,
  tableWidth,
  tableHeight,
  table,
}: VirtualizerProps & { table: any }) => {
  // 行の仮想化
  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => containerRef.current,
    estimateSize: () => rowHeight,
    overscan: 5,
    initialRect: { width: tableWidth, height: tableHeight },
  });

  // 列の仮想化
  const columnVirtualizer = useVirtualizer({
    count: columnCount,
    getScrollElement: () => containerRef.current,
    estimateSize: () => columnWidth,
    horizontal: true,
    overscan: 10,
    initialRect: { width: tableWidth, height: tableHeight },
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  const virtualColumns: VirtualColumn<TData>[] = columnVirtualizer
    .getVirtualItems()
    .map((column, index) => {
      const header = table
        .getHeaderGroups()[0]
        .headers.find(
          (header: Header<TData, unknown>) => header.id === columnIds[index]
        );

      if (!header) {
        throw new Error(`Header not found for column ID: ${columnIds[index]}`);
      }

      return {
        ...column,
        id: columnIds[index],
        header,
      };
    });

  // パディングの計算
  const virtualPaddingTop = virtualRows.length > 0 ? virtualRows[0].start : 0;
  const virtualPaddingBottom =
    virtualRows.length > 0
      ? rowVirtualizer.getTotalSize() - virtualRows[virtualRows.length - 1].end
      : 0;
  const virtualPaddingLeft =
    virtualColumns.length > 0 ? virtualColumns[0].start : 0;
  const virtualPaddingRight =
    virtualColumns.length > 0
      ? columnVirtualizer.getTotalSize() -
        virtualColumns[virtualColumns.length - 1].end
      : 0;

  return {
    rowVirtualizer,
    columnVirtualizer,
    virtualRows,
    virtualColumns,
    virtualPaddingTop,
    virtualPaddingBottom,
    virtualPaddingLeft,
    virtualPaddingRight,
  };
};
