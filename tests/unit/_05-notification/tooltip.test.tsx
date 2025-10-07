import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Tooltip } from "../../../src/components/_05-notification/Tooltip/Tooltip";

describe("Tooltip", () => {
  it("idがdivに反映される", () => {
    render(<Tooltip id="tooltip1">説明</Tooltip>);
    const root = document.getElementById("tooltip1");
    expect(root).toBeTruthy();
    expect(root).toHaveAttribute("role", "tooltip");
  });

  it("childrenがツールチップ内に描画される", () => {
    render(<Tooltip id="tooltip2">ツールチップ内容</Tooltip>);
    expect(screen.getByText("ツールチップ内容")).toBeInTheDocument();
  });

  it("infoアイコンが表示される", () => {
    render(<Tooltip id="tooltip3">内容</Tooltip>);
    expect(screen.getByText("info")).toBeInTheDocument();
    expect(screen.getByText("info").className).toContain(
      "material-symbols-rounded"
    );
  });
});
