import { describe, it, expect } from "vitest";
import { useTableVirtualizer } from "../../../src/components/_04-list/Table/Virtualizer";
import React from "react";
import { renderHook } from "@testing-library/react";

// モックtableオブジェクト
const mockTable = {
  getHeaderGroups: () => [
    {
      headers: [{ id: "name" }, { id: "type" }, { id: "length" }],
    },
  ],
};

describe("useTableVirtualizer", () => {
  // テスト用のcontainerRef
  const container = document.createElement("div");
  container.style.height = "600px";
  container.style.width = "800px";
  document.body.appendChild(container);
  const containerRef = {
    current: container,
  } as React.RefObject<HTMLDivElement>;

  const defaultProps = {
    rowCount: 10,
    columnCount: 3,
    columnIds: ["name", "type", "length"],
    containerRef,
    rowHeight: 50,
    columnWidth: 100,
    tableWidth: 300,
    tableHeight: 500,
    table: mockTable,
  };

  it("virtualRows, virtualColumnsが正しく返る", () => {
    const { result } = renderHook(() => useTableVirtualizer(defaultProps));
    expect(Array.isArray(result.current.virtualRows)).toBe(true);
    expect(Array.isArray(result.current.virtualColumns)).toBe(true);
    expect(result.current.virtualRows.length).toBeGreaterThan(0);
    expect(result.current.virtualColumns.length).toBeGreaterThan(0);
  });

  it("virtualColumnsのidとheaderがcolumnIdsと一致する", () => {
    const { result } = renderHook(() => useTableVirtualizer(defaultProps));
    result.current.virtualColumns.forEach((col, i) => {
      expect(col.id).toBe(defaultProps.columnIds[i]);
      expect(col.header.id).toBe(defaultProps.columnIds[i]);
    });
  });

  it("virtualPaddingTop, virtualPaddingBottom, virtualPaddingLeft, virtualPaddingRightが数値で返る", () => {
    const { result } = renderHook(() => useTableVirtualizer(defaultProps));
    expect(typeof result.current.virtualPaddingTop).toBe("number");
    expect(typeof result.current.virtualPaddingBottom).toBe("number");
    expect(typeof result.current.virtualPaddingLeft).toBe("number");
    expect(typeof result.current.virtualPaddingRight).toBe("number");
  });

  it("rowHeight, columnWidth, tableWidth, tableHeightの指定が反映される", () => {
    const { result } = renderHook(() => useTableVirtualizer(defaultProps));
    expect(result.current.rowVirtualizer.options.estimateSize(0)).toBe(
      defaultProps.rowHeight
    );
    expect(result.current.columnVirtualizer.options.estimateSize(0)).toBe(
      defaultProps.columnWidth
    );
    expect(result.current.rowVirtualizer.options.initialRect?.height).toBe(
      defaultProps.tableHeight
    );
    expect(result.current.columnVirtualizer.options.initialRect?.width).toBe(
      defaultProps.tableWidth
    );
  });

  it("columnIdsに存在しないidを渡すとエラーになる", () => {
    const errorProps = {
      ...defaultProps,
      columnIds: ["name", "notfound", "length"],
    };
    expect(() => renderHook(() => useTableVirtualizer(errorProps))).toThrow(
      "Header not found for column ID: notfound"
    );
  });
});
