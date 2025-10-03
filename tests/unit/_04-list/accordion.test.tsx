import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Accordion } from "../../../src/components/_04-list/Accordion/Accordion";

describe("Accordion", () => {
  it("labelが表示される", () => {
    render(<Accordion id="acc1" label="アコーディオンラベル" />);
    expect(screen.getByText("アコーディオンラベル")).toBeInTheDocument();
  });

  it("childrenが表示される（開いている場合）", () => {
    render(
      <Accordion id="acc3" label="ラベル" defalutOpen>
        <div>内容</div>
      </Accordion>
    );
    expect(screen.getByText("内容")).toBeInTheDocument();
  });

  it("childrenが非表示になる（閉じている場合）", () => {
    render(
      <Accordion id="acc4" label="ラベル">
        <div>内容</div>
      </Accordion>
    );
    const content = screen.getByText("内容");
    expect(content.parentElement?.className).toContain("max-h-0");
  });

  it("ボタンをクリックすると開閉が切り替わる", () => {
    render(
      <Accordion id="acc5" label="ラベル">
        <div>内容</div>
      </Accordion>
    );
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    const content = screen.getByText("内容");
    expect(content.parentElement?.className).toContain("max-h-screen");
    fireEvent.click(btn);
    expect(content.parentElement?.className).toContain("max-h-0");
  });

  it("expand_moreアイコンが表示される", () => {
    render(<Accordion id="acc6" label="ラベル" />);
    expect(screen.getByText("expand_more")).toBeInTheDocument();
  });
});
