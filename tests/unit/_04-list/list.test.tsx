import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { List } from "../../../src/components/_04-list/List/List";

describe("List", () => {
  it("childrenが表示される", () => {
    render(<List id="list2">テスト内容</List>);
    expect(screen.getByText("テスト内容")).toBeInTheDocument();
  });

  it("selected=trueでliとbuttonのaria-selectedがtrueになる", () => {
    render(
      <List id="list3" selected>
        選択済み
      </List>
    );
    const li = screen.getByRole("option");
    const btn = screen.getByRole("button");
    expect(li).toHaveAttribute("aria-selected", "true");
    expect(btn).toHaveAttribute("aria-selected", "true");
    expect(btn.className).toContain("bg-primary-sub");
  });

  it("selected=falseでliとbuttonのaria-selectedがfalseになる", () => {
    render(
      <List id="list4" selected={false}>
        未選択
      </List>
    );
    const li = screen.getByRole("option");
    const btn = screen.getByRole("button");
    expect(li).toHaveAttribute("aria-selected", "false");
    expect(btn).toHaveAttribute("aria-selected", "false");
  });

  it("disabled=trueでliのaria-disabledとbuttonのdisabled属性がtrueになる", () => {
    render(
      <List id="list5" disabled>
        無効
      </List>
    );
    const li = screen.getByRole("option");
    const btn = screen.getByRole("button");
    expect(li).toHaveAttribute("aria-disabled", "true");
    expect(btn).toBeDisabled();
    expect(btn.className).toContain("pointer-events-none");
  });

  it("onClickが発火する", () => {
    const handleClick = vi.fn();
    render(
      <List id="list6" onClick={handleClick}>
        クリック
      </List>
    );
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });

  it("EnterキーでonClickが発火する", () => {
    const handleClick = vi.fn();
    render(
      <List id="list7" onClick={handleClick}>
        キーボード
      </List>
    );
    const btn = screen.getByRole("button");
    btn.focus();
    fireEvent.keyDown(btn, { key: "Enter" });
    expect(handleClick).toHaveBeenCalled();
  });

  it("onKeyDownが発火する", () => {
    const handleKeyDown = vi.fn();
    render(
      <List id="list8" onKeyDown={handleKeyDown}>
        キー
      </List>
    );
    const btn = screen.getByRole("button");
    fireEvent.keyDown(btn, { key: "ArrowDown" });
    expect(handleKeyDown).toHaveBeenCalled();
  });

  it("tabIndexが0でフォーカス可能", () => {
    render(<List id="list9">フォーカス</List>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("tabIndex", "0");
    btn.focus();
    expect(document.activeElement).toBe(btn);
  });
});
