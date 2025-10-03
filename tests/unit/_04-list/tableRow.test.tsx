import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TableRow } from "../../../src/components/_04-list/Table/TableRow";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import {
  columns,
  sampleAnimalsData,
} from "../../../src/components/_04-list/Table/sampleData";
import { Header } from "@tanstack/react-table";
import { VirtualColumn } from "../../../src/components/_04-list/Table/Virtualizer";

// ダミーVirtualColumn（型アサーションはそのまま使えます）
const virtualColumns = [
  {
    id: "col1",
    size: 100,
    start: 0,
    end: 100,
    header: ((props: any) => <span>ヘッダー1</span>) as unknown as Header<
      unknown,
      unknown
    >,
    index: 0,
  },
  {
    id: "col2",
    size: 100,
    start: 100,
    end: 200,
    header: ((props: any) => <span>ヘッダー2</span>) as unknown as Header<
      unknown,
      unknown
    >,
    index: 1,
  },
  {
    id: "col3",
    size: 100,
    start: 200,
    end: 300,
    header: ((props: any) => <span>ヘッダー3</span>) as unknown as Header<
      unknown,
      unknown
    >,
    index: 2,
  },
] as VirtualColumn<unknown>[];

// ラッパーコンポーネント
const TableRowWrapper = (props: any) => {
  const table = useReactTable({
    data: sampleAnimalsData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const row = table.getRowModel().rows[0];
  return (
    <table>
      <tbody>
        <TableRow
          row={row}
          virtualColumns={virtualColumns}
          virtualPaddingLeft={props.virtualPaddingLeft ?? 0}
          virtualPaddingRight={props.virtualPaddingRight ?? 0}
          columnPinning={props.columnPinning ?? { left: [], right: [] }}
          isHovered={props.isHovered}
          isPinned={props.isPinned}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
          onClick={props.onClick}
        />
      </tbody>
    </table>
  );
};

describe("TableRow", () => {
  it("tr要素が表示され、keyとtabIndexが設定される", () => {
    render(<TableRowWrapper />);
    const tr = screen.getByRole("row");
    expect(tr).toHaveAttribute("tabIndex", "0");
  });

  it("classNameにisHoveredでbg-black-5-opacityが付与される", () => {
    render(<TableRowWrapper isHovered={true} />);
    const tr = screen.getByRole("row");
    expect(tr.className).toContain("bg-black-5-opacity");
  });

  it("onMouseEnterとonMouseLeaveが発火する", () => {
    const enterSpy = vi.fn();
    const leaveSpy = vi.fn();
    render(<TableRowWrapper onMouseEnter={enterSpy} onMouseLeave={leaveSpy} />);
    const tr = screen.getByRole("row");
    fireEvent.mouseEnter(tr);
    expect(enterSpy).toHaveBeenCalled();
    fireEvent.mouseLeave(tr);
    expect(leaveSpy).toHaveBeenCalled();
  });

  it("onClickが発火し、row.idが渡る", () => {
    const clickSpy = vi.fn();
    render(<TableRowWrapper onClick={clickSpy} />);
    const tr = screen.getByRole("row");
    fireEvent.click(tr);
    expect(clickSpy).toHaveBeenCalledWith(expect.any(String)); // row.id
  });

  it("isPinned=trueでpinnedColumnsのみ表示される", () => {
    const pinning = { left: ["col1"], right: [] };
    render(<TableRowWrapper columnPinning={pinning} isPinned={true} />);
    const cells = screen.getAllByRole("cell");
    expect(cells.length).toBe(1);
  });

  it("unpinnedColumnsのみ表示される（isPinned=false）", () => {
    const pinning = { left: ["col1"], right: ["col3"] };
    render(<TableRowWrapper columnPinning={pinning} isPinned={false} />);
    const cells = screen.getAllByRole("cell");
    expect(cells.length).toBe(1);
  });

  it("virtualPaddingLeft/Rightが0より大きい場合、td要素が追加される", () => {
    render(
      <TableRowWrapper virtualPaddingLeft={50} virtualPaddingRight={30} />
    );
    const tds = screen.getAllByRole("cell");
    expect(tds.length).toBe(5);
    expect(tds[0]).toHaveStyle("width: 50px");
    expect(tds[tds.length - 1]).toHaveStyle("width: 30px");
  });
});
