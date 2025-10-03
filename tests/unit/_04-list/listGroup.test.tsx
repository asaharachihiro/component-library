import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ListGroup } from "../../../src/components/_04-list/List/ListGroup";

const items = [
  { id: "item1", children: "リスト1" },
  { id: "item2", children: "リスト2" },
  { id: "item3", children: "リスト3" },
];

describe("ListGroup", () => {
  it("idとclassNameがul要素に反映される", () => {
    render(<ListGroup id="lg1" className="custom-class" items={items} />);
    const ul = screen.getByRole("listbox");
    expect(ul).toHaveAttribute("id", "lg1");
    expect(ul.className).toContain("custom-class");
  });

  it("itemsのchildrenがすべて表示される", () => {
    render(<ListGroup id="lg2" items={items} />);
    expect(screen.getByText("リスト1")).toBeInTheDocument();
    expect(screen.getByText("リスト2")).toBeInTheDocument();
    expect(screen.getByText("リスト3")).toBeInTheDocument();
  });

  it("ArrowDownキーで次のListにフォーカスが移動する", () => {
    render(<ListGroup id="lg3" items={items} />);
    const btns = screen.getAllByRole("button");
    btns[0].focus();
    fireEvent.keyDown(btns[0], { key: "ArrowDown" });
    expect(document.activeElement).toBe(btns[1]);
    fireEvent.keyDown(btns[1], { key: "ArrowDown" });
    expect(document.activeElement).toBe(btns[2]);
    fireEvent.keyDown(btns[2], { key: "ArrowDown" });
    expect(document.activeElement).toBe(btns[0]); // 末尾→先頭
  });

  it("ArrowUpキーで前のListにフォーカスが移動する", () => {
    render(<ListGroup id="lg4" items={items} />);
    const btns = screen.getAllByRole("button");
    btns[0].focus();
    fireEvent.keyDown(btns[0], { key: "ArrowUp" });
    expect(document.activeElement).toBe(btns[2]); // 先頭→末尾
    fireEvent.keyDown(btns[2], { key: "ArrowUp" });
    expect(document.activeElement).toBe(btns[1]);
    fireEvent.keyDown(btns[1], { key: "ArrowUp" });
    expect(document.activeElement).toBe(btns[0]);
  });

  it("各ListのonKeyDownが呼ばれる", () => {
    const keyDownSpies = [vi.fn(), vi.fn(), vi.fn()];
    const testItems = items.map((item, idx) => ({
      ...item,
      onKeyDown: keyDownSpies[idx],
    }));
    render(<ListGroup id="lg5" items={testItems} />);
    const btns = screen.getAllByRole("button");
    fireEvent.keyDown(btns[0], { key: "ArrowDown" });
    expect(keyDownSpies[0]).toHaveBeenCalled();
    fireEvent.keyDown(btns[1], { key: "ArrowUp" });
    expect(keyDownSpies[1]).toHaveBeenCalled();
    fireEvent.keyDown(btns[2], { key: "ArrowDown" });
    expect(keyDownSpies[2]).toHaveBeenCalled();
  });
});
