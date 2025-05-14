import { useVirtualizer } from "@tanstack/react-virtual";

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

export const useTableVirtualizer = ({
  rowCount,
  columnCount,
  columnIds,
  containerRef,
  rowHeight,
  columnWidth,
  tableWidth,
  tableHeight,
}: VirtualizerProps) => {
  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => containerRef.current,
    estimateSize: () => rowHeight,
    overscan: 3,
    initialRect: { width: tableWidth, height: tableHeight },
  });

  const columnVirtualizer = useVirtualizer({
    count: columnCount,
    getScrollElement: () => containerRef.current,
    estimateSize: () => columnWidth,
    horizontal: true,
    overscan: 3,
    initialRect: { width: tableWidth, height: tableHeight },
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  const virtualColumns = columnVirtualizer
    .getVirtualItems()
    .map((column, index) => ({
      ...column,
      id: columnIds[index],
    }));

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
