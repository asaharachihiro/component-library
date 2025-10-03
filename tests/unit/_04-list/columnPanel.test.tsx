import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ColumnPanel } from "../../../src/components/_04-list/Table/ColumnPanel";

// Portalをモック（テスト環境でbody直下に描画されるようにする）
vi.mock("../../../utils/Portal", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("ColumnPanel", () => {
  const panelPosition = { top: 100, left: 200 };

  it("idがdiv要素に反映される", () => {
    render(
      <ColumnPanel id="cp1" panelPosition={panelPosition} onClick={() => {}} />
    );
    const panel =
      screen.getByRole("dialog") ||
      screen.getByText(/列を固定|固定を解除/).closest("div");
    expect(panel).toHaveAttribute("id", "cp1");
  });

  it("isFixed=falseで列を固定アイコンとテキストが表示される", () => {
    render(
      <ColumnPanel
        id="cp3"
        panelPosition={panelPosition}
        onClick={() => {}}
        isFixed={false}
      />
    );
    expect(screen.getByText("列を固定")).toBeInTheDocument();
    expect(screen.getByText("keep")).toBeInTheDocument();
  });

  it("isFixed=trueで固定を解除アイコンとテキストが表示される", () => {
    render(
      <ColumnPanel
        id="cp4"
        panelPosition={panelPosition}
        onClick={() => {}}
        isFixed={true}
      />
    );
    expect(screen.getByText("固定を解除")).toBeInTheDocument();
    expect(screen.getByText("keep_off")).toBeInTheDocument();
  });

  it("onClickが発火し、idが渡る", () => {
    const handleClick = vi.fn();
    render(
      <ColumnPanel
        id="cp5"
        panelPosition={panelPosition}
        onClick={handleClick}
      />
    );
    const panel = screen.getByText("列を固定").closest("div");
    fireEvent.click(panel!);
    expect(handleClick).toHaveBeenCalledWith("cp5");
  });
});
