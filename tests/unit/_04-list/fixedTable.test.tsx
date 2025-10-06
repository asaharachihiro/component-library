import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FixedTable } from "../../../src/components/_04-list/Table/FixedTable";
import {
  columns,
  sampleAnimalsData,
} from "../../../src/components/_04-list/Table/sampleData";
import {
  ColumnPinningState,
  SortingState,
  ColumnSizingState,
} from "@tanstack/react-table";
import React from "react";

describe("FixedTable", () => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

  const columnOrder = columns.map((col) => col.id as string);

  const defaultProps = {
    data: sampleAnimalsData,
    columns,
    columnOrder,
    columnPinning: {
      left: [columns[0].id as string],
      right: [],
    } as ColumnPinningState,
    setColumnPinning: vi.fn(),
    showPanel: null,
    setShowPanel: vi.fn(),
    hoveredRowIndex: null,
    setHoveredRowIndex: vi.fn(),
    onMouseEnter: vi.fn(),
    onMouseLeave: vi.fn(),
    sorting: [],
    setSorting: vi.fn(),
    columnSizing: {},
    setColumnSizing: vi.fn(),
    handleColumnDrop: vi.fn(),
  };

  it("div, table, thead, tbodyが描画される", () => {
    render(<FixedTable {...defaultProps} />);
    expect(screen.getByRole("table")).toBeInTheDocument();
    const rowgroups = screen.getAllByRole("rowgroup");
    expect(rowgroups.length).toBe(2); // thead, tbody
    expect(screen.getAllByRole("row")).toBeTruthy();
  });

  it("refをforwardできる", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<FixedTable {...defaultProps} ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.nodeName).toBe("DIV");
  });

  it("rowHeight, columnWidth, tableWidth, tableHeightのスタイルが反映される", () => {
    render(<FixedTable {...defaultProps} rowHeight={60} columnWidth={120} />);
    const table = screen.getByRole("table");
    // tableのheightがrowHeightの合計以上になっていること
    expect(Number(table.style.height.replace("px", ""))).toBeGreaterThanOrEqual(
      60
    );
  });

  it("columnPinningの変更がsetColumnPinningで呼ばれる", () => {
    render(<FixedTable {...defaultProps} />);
    defaultProps.handleColumnDrop("name", "id");
    expect(defaultProps.handleColumnDrop).toHaveBeenCalledWith("name", "id");
  });

  it("sortingの変更がsetSortingで呼ばれる", () => {
    render(<FixedTable {...defaultProps} />);
    defaultProps.setSorting([{ id: "name", desc: true }]);
    expect(defaultProps.setSorting).toHaveBeenCalledWith([
      { id: "name", desc: true },
    ]);
  });

  it("columnSizingの変更がsetColumnSizingで呼ばれる", () => {
    render(<FixedTable {...defaultProps} />);
    defaultProps.setColumnSizing({ name: 200 });
    expect(defaultProps.setColumnSizing).toHaveBeenCalledWith({ name: 200 });
  });

  it("showPanelとsetShowPanelが渡される", () => {
    render(<FixedTable {...defaultProps} showPanel="name" />);
    expect(defaultProps.setShowPanel).not.toBeNull();
  });

  it("hoveredRowIndexとsetHoveredRowIndexが渡される", () => {
    render(<FixedTable {...defaultProps} hoveredRowIndex={2} />);
    expect(defaultProps.setHoveredRowIndex).not.toBeNull();
  });

  it("onMouseEnter, onMouseLeaveが渡される", () => {
    render(<FixedTable {...defaultProps} />);
    expect(defaultProps.onMouseEnter).not.toBeNull();
    expect(defaultProps.onMouseLeave).not.toBeNull();
  });
});
