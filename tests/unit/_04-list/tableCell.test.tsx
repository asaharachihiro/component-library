import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TableCell } from "../../../src/components/_04-list/Table/TableCell";

// ダミーcellオブジェクト
const dummyCell = {
  column: {
    columnDef: {
      cell: () => "セル内容",
    },
  },
  getContext: () => ({}),
} as any;

describe("TableCell", () => {
  it("childrenが表示される", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell cell={null}>テスト内容</TableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText("テスト内容")).toBeInTheDocument();
  });

  it("cellが渡された場合flexRenderの内容が表示される", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell cell={dummyCell} />
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText("セル内容")).toBeInTheDocument();
  });

  it("cellもchildrenもない場合は空文字になる", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell cell={null} />
          </tr>
        </tbody>
      </table>
    );
    const td = screen.getByRole("cell");
    expect(td.textContent).toBe("");
  });
});
