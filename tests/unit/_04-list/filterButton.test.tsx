import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FilterButton } from "../../../src/components/_04-list/FilterButton/FilterButton";

describe("FilterButton", () => {
  it("Buttonが表示される", () => {
    render(<FilterButton id="fb1" />);
    expect(screen.getByText("フィルター")).toBeInTheDocument();
  });

  it("isActiveでButtonがアクティブになる", () => {
    render(<FilterButton id="fb3" isActive />);
    const btn = screen.getByRole("button", { name: "filter_list フィルター" });
    expect(btn).toBeInTheDocument();
    expect(btn.dataset.isActive).toBe("true");
  });

  it("isOpenで初期表示時にパネルが開いている", () => {
    render(
      <FilterButton id="fb6" isOpen>
        <span>パネル内容</span>
      </FilterButton>
    );
    expect(screen.getByText("パネル内容")).toBeInTheDocument();
  });

  it("Buttonクリックでパネルが開閉する", () => {
    render(<FilterButton id="fb5" />);
    const btn = screen.getByRole("button", { name: "filter_list フィルター" });
    fireEvent.click(btn);
    expect(screen.getByText("フィルター")).toBeInTheDocument();
    // パネルが開く
    expect(screen.getByTestId("filter-panel")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("filter-panel")).not.toBeInTheDocument();
  });

  it("fotterElementsがパネル下部に表示される", () => {
    render(
      <FilterButton id="fb7" isOpen fotterElements={<span>フッター</span>}>
        <span>パネル内容</span>
      </FilterButton>
    );
    expect(screen.getByText("フッター")).toBeInTheDocument();
  });

  it("Escapeキーでパネルが閉じる", () => {
    render(<FilterButton id="fb8" isOpen />);
    fireEvent.keyDown(screen.getByTestId("filter-panel").closest("div")!, {
      key: "Escape",
    });
    // パネルが閉じていることを確認
    expect(screen.queryByTestId("filter-panel")).not.toBeInTheDocument();
  });

  it("外部クリックでパネルが閉じる", () => {
    render(
      <div>
        <FilterButton id="fb9" isOpen />
        <button>外部ボタン</button>
      </div>
    );
    fireEvent.mouseDown(screen.getByText("外部ボタン"));
    waitFor(() => {
      expect(screen.queryByTestId("filter-panel")).not.toBeInTheDocument();
    });
  });
});
