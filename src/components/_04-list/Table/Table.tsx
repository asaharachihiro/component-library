import {
  ColumnDef,
  ColumnPinningState,
  ColumnSizingInfoState,
  getCoreRowModel,
  getSortedRowModel,
  HeaderGroup,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import React from "react";
import { cn } from "../../../utils/cn";
import { useTableVirtualizer } from "./Virtualizer";
import useTableSize from "../../../utils/useTableSize";
import { FixedTable } from "./FixedTable";

interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  rowHeight?: number;
  columnWidth: number;
  columnPinning?: ColumnPinningState;
}

export const Table = <TData,>({
  data,
  columns,
  rowHeight = 52,
  columnWidth = 120,
  columnPinning = {},
}: TableProps<TData>) => {
  // テーブルのサイズ取得
  const { containerRef, tableWidth, tableHeight } = useTableSize();

  // 内部state
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnPinningState, setColumnPinningState] =
    React.useState<ColumnPinningState>(columnPinning);
  const [showPanel, setShowPanel] = React.useState<string | null>(null);
  const [hoveredRowIndex, setHoveredRowIndex] = React.useState<number | null>(
    null
  );
  const [columnOrder, setColumnOrder] = React.useState<string[]>(
    columns.map((col) => col.id!).filter(Boolean)
  );
  const [columnSizingState, setColumnSizingState] = React.useState({});
  const [columnSizingInfoState, setColumnSizingInfoState] =
    React.useState<ColumnSizingInfoState>({
      columnSizingStart: [],
      deltaOffset: 0,
      deltaPercentage: 0,
      isResizingColumn: false,
      startOffset: 0,
      startSize: 0,
    });

  // テーブルの設定
  const table = useReactTable<TData>({
    data,
    columns,
    state: {
      sorting,
      columnOrder,
      columnPinning: columnPinningState,
      columnSizing: columnSizingState,
      columnSizingInfo: columnSizingInfoState,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnPinningChange: setColumnPinningState,
    onColumnSizingChange: setColumnSizingState,
    onColumnSizingInfoChange: setColumnSizingInfoState,
    columnResizeDirection: "ltr",
    columnResizeMode: "onChange",
    onColumnOrderChange: setColumnOrder,
  });

  // refの設定
  const fixedTableRef = React.useRef<HTMLDivElement>(null);
  const scrollableTableRef = React.useRef<HTMLDivElement>(null);

  // 仮想化の設定
  const {
    rowVirtualizer: normalRowVirtualizer,
    columnVirtualizer,
    virtualRows: normalVirtualRows,
    virtualColumns,
    virtualPaddingTop,
    virtualPaddingBottom,
    virtualPaddingLeft,
    virtualPaddingRight,
  } = useTableVirtualizer({
    table,
    rowCount: data.length,
    columnCount: columns.length,
    columnIds: columnOrder,
    containerRef: scrollableTableRef as React.RefObject<HTMLDivElement>,
    rowHeight,
    columnWidth,
    tableWidth,
    tableHeight,
  });

  // スクロールの同期
  React.useEffect(() => {
    const scrollableTable = scrollableTableRef.current;
    const fixedTable = fixedTableRef.current;

    if (!scrollableTable || !fixedTable) return;

    let isSyncingFromScrollable = false;
    let isSyncingFromFixed = false;

    // 通常列のスクロール同期
    const handleScrollableScroll = () => {
      if (isSyncingFromFixed) {
        isSyncingFromFixed = false;
        return;
      }
      isSyncingFromScrollable = true;
      fixedTable.scrollTop = scrollableTable.scrollTop;
    };

    // 固定列のスクロール同期
    const handleFixedScroll = () => {
      if (isSyncingFromScrollable) {
        isSyncingFromScrollable = false;
        return;
      }
      isSyncingFromFixed = true;
      scrollableTable.scrollTop = fixedTable.scrollTop;
    };

    scrollableTable.addEventListener("scroll", handleScrollableScroll);
    fixedTable.addEventListener("scroll", handleFixedScroll);

    return () => {
      scrollableTable.removeEventListener("scroll", handleScrollableScroll);
      fixedTable.removeEventListener("scroll", handleFixedScroll);
    };
  }, []);

  // 行のホバー
  const handleMouseEnter = (index: number) => {
    setHoveredRowIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredRowIndex(null);
  };

  // 固定列の有無
  const hasFixedColumn = (columnPinningState.left ?? []).length > 0;

  // カラムの並び替え
  const handleColumnDrop = (draggedId: string, targetId: string) => {
    if (draggedId === targetId) return;
    const oldIndex = columnOrder.indexOf(draggedId);
    let newIndex = columnOrder.indexOf(targetId);
    if (oldIndex === -1 || newIndex === -1) return;

    const newOrder = [...columnOrder];
    newOrder.splice(oldIndex, 1);
    if (oldIndex < newIndex) newIndex--;
    newOrder.splice(newIndex, 0, draggedId);
    setColumnOrder(newOrder);
  };

  return (
    <div className="flex h-full w-full grow-0 overflow-hidden text-nowrap rounded-lg border border-black-20-opacity">
      {hasFixedColumn && (
        <FixedTable
          ref={fixedTableRef}
          data={data}
          columns={columns as ColumnDef<unknown>[]}
          columnOrder={columnOrder}
          columnWidth={columnWidth}
          showPanel={showPanel}
          setShowPanel={setShowPanel}
          columnPinning={columnPinningState}
          setColumnPinning={setColumnPinningState}
          hoveredRowIndex={hoveredRowIndex}
          setHoveredRowIndex={setHoveredRowIndex}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sorting={sorting}
          setSorting={setSorting}
          columnSizing={columnSizingState}
          setColumnSizing={setColumnSizingState}
          handleColumnDrop={handleColumnDrop}
        />
      )}

      <div
        ref={scrollableTableRef}
        className={cn(
          "flex h-full w-full overflow-hidden text-nowrap text-left",
          !showPanel && "overflow-x-auto overflow-y-auto"
        )}
      >
        <div ref={containerRef}>
          <table
            className="table-fixed border-separate border-spacing-0"
            style={{
              width: columnVirtualizer.getTotalSize(),
              height: normalRowVirtualizer.getTotalSize(),
            }}
          >
            <TableHeader
              isFixed={false}
              headerGroups={table.getHeaderGroups() as HeaderGroup<any>[]}
              virtualPaddingLeft={virtualPaddingLeft}
              virtualPaddingRight={virtualPaddingRight}
              virtualColumns={virtualColumns}
              showPanel={showPanel}
              setShowPanel={setShowPanel}
              columnPinning={columnPinningState}
              setColumnPinning={setColumnPinningState}
              sorting={sorting}
              setSorting={setSorting}
              columnSizing={columnSizingState}
              setColumnSizing={setColumnSizingState}
              handleColumnDrop={handleColumnDrop}
            />
            <tbody>
              {virtualPaddingTop > 0 && (
                <tr>
                  <td style={{ height: virtualPaddingTop }} />
                </tr>
              )}
              {normalVirtualRows.map((virtualRow) => {
                const row = table.getRowModel().rows[virtualRow.index];
                return (
                  <TableRow
                    isPinned={false}
                    key={row.id}
                    row={row}
                    virtualColumns={virtualColumns}
                    virtualPaddingLeft={virtualPaddingLeft}
                    virtualPaddingRight={virtualPaddingRight}
                    columnPinning={columnPinningState}
                    onMouseEnter={() => handleMouseEnter(virtualRow.index)}
                    onMouseLeave={handleMouseLeave}
                    isHovered={hoveredRowIndex === virtualRow.index}
                  />
                );
              })}
              {virtualPaddingBottom > 0 && (
                <tr>
                  <td style={{ height: virtualPaddingBottom }} />
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
Table.displayName = "Table";
