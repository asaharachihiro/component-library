import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

const useColumnVirtualizer = (
  count: number,
  columnWidth: number,
  tableWidth: number,
  rowHeight: number,
  dataLength: number
) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const columnVirtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => columnWidth,
    horizontal: true,
    overscan: 5,
    initialRect: { width: tableWidth, height: rowHeight * dataLength },
  });

  const virtualColumns = columnVirtualizer.getVirtualItems();
  const virtualPaddingLeft =
    virtualColumns.length > 0 ? virtualColumns[0].start : 0;
  const virtualPaddingRight =
    virtualColumns.length > 0
      ? columnVirtualizer.getTotalSize() -
        virtualColumns[virtualColumns.length - 1].end
      : 0;

  return {
    parentRef,
    virtualColumns,
    virtualPaddingLeft,
    virtualPaddingRight,
    totalSize: columnVirtualizer.getTotalSize(),
  };
};

export default useColumnVirtualizer;
