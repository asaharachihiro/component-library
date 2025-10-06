import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TableHeader } from "../../../src/components/_04-list/Table/TableHeader";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import {
  columns,
  sampleAnimalsData,
} from "../../../src/components/_04-list/Table/sampleData";
import { Header } from "@tanstack/react-table";
import { VirtualColumn } from "../../../src/components/_04-list/Table/Virtualizer";

// columnsからVirtualColumn型を生成（テスト用ダミー）
const virtualColumns: VirtualColumn<unknown>[] = columns.map((col, idx) => ({
  id: col.id ?? `col${idx}`,
  size: 100,
  start: idx * 100,
  end: (idx + 1) * 100,
  header: ((props: any) => (
    <span>
      {typeof col.header === "function" ? col.header(props) : col.header}
    </span>
  )) as unknown as Header<unknown, unknown>,
  index: idx,
}));

const TableHeaderWrapper = (props: any) => {
  const table = useReactTable({
    data: sampleAnimalsData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const headerGroups = table.getHeaderGroups();
  return (
    <table>
      <TableHeader
        headerGroups={headerGroups}
        virtualColumns={props.virtualColumns ?? virtualColumns}
        virtualPaddingLeft={props.virtualPaddingLeft ?? 0}
        virtualPaddingRight={props.virtualPaddingRight ?? 0}
        columnPinning={props.columnPinning ?? { left: [], right: [] }}
        setColumnPinning={props.setColumnPinning ?? vi.fn()}
        showPanel={props.showPanel ?? null}
        setShowPanel={props.setShowPanel ?? vi.fn()}
        isFixed={props.isFixed ?? false}
        sorting={props.sorting ?? []}
        setSorting={props.setSorting ?? vi.fn()}
        columnSizing={props.columnSizing ?? {}}
        setColumnSizing={props.setColumnSizing ?? vi.fn()}
        handleColumnDrop={props.handleColumnDrop ?? vi.fn()}
      />
    </table>
  );
};

describe("TableHeader", () => {
  it("thead要素が表示される", () => {
    render(<TableHeaderWrapper />);
    expect(screen.getByRole("rowgroup")).toBeInTheDocument();
  });

  it("virtualPaddingLeft/Rightが0より大きい場合、th要素が追加される", () => {
    render(
      <TableHeaderWrapper virtualPaddingLeft={50} virtualPaddingRight={30} />
    );
    const ths = screen.getAllByRole("columnheader");
    expect(screen.getByRole("row").firstChild).toHaveStyle("width: 50px");
    expect(screen.getByRole("row").lastChild).toHaveStyle("width: 30px");
  });

  it("isFixed=trueでpinnedColumnsのみ表示される", () => {
    const pinning = { left: [virtualColumns[0].id], right: [] };
    render(
      <TableHeaderWrapper
        columnPinning={pinning}
        isFixed={true}
        virtualColumns={virtualColumns} // ← 全カラム渡す
      />
    );
    const ths = screen
      .getAllByRole("columnheader")
      .filter((th) => th.getAttribute("data-testid") !== "padding-th");
    expect(ths.length).toBe(pinning.left.length);
    expect(ths[0].textContent).toContain("ID");
  });

  it("unpinnedColumnsのみ表示される（isFixed=false）", () => {
    const pinning = {
      left: [virtualColumns[0].id],
      right: [virtualColumns[2].id],
    };
    render(
      <TableHeaderWrapper
        columnPinning={pinning}
        isFixed={false}
        virtualColumns={virtualColumns}
      />
    );

    const firstRow = screen.getAllByRole("row")[0];
    const ths = Array.from(firstRow.children).filter(
      (th) => th.getAttribute("data-testid") !== "padding-th"
    );
    ths.forEach((th) => {
      console.log(th.textContent); // どんなヘッダーが描画されているか確認
    });
    const expectedLength = virtualColumns.filter(
      (col) => !pinning.left.includes(col.id) && !pinning.right.includes(col.id)
    ).length;
    expect(ths.length).toBe(expectedLength);

    ths.forEach((th) => {
      expect(th.textContent).not.toContain("ID");
      expect(th.textContent).not.toContain("種類");
    });
  });

  it("handleColumnDropが呼ばれる", () => {
    const dropSpy = vi.fn();
    render(<TableHeaderWrapper handleColumnDrop={dropSpy} />);
    const th = screen.getAllByRole("columnheader")[0];
    const event = new window.Event("drop", { bubbles: true });
    Object.defineProperty(event, "dataTransfer", {
      value: {
        getData: () => "name",
      },
    });
    th.dispatchEvent(event);
    expect(dropSpy).toHaveBeenCalled();
  });
});
