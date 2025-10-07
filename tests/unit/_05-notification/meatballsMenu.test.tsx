import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MeatballsMenu } from "../../../src/components/_05-notification/MeatballsMenu/MeatballsMenu";

describe("MeatballsMenu", () => {
  it("idとclassNameが反映される", () => {
    render(<MeatballsMenu id="menu1" className="custom-class" />);
    const root = document.getElementById("menu1");
    expect(root).toBeTruthy();
    expect(root?.className).toContain("custom-class");
  });

  it("childrenが表示される（メニューオープン時のみ）", () => {
    render(
      <MeatballsMenu id="menu2">
        <div data-testid="menu-content">Menu Content</div>
      </MeatballsMenu>
    );
    // 初期状態ではchildrenは表示されない
    expect(screen.queryByTestId("menu-content")).toBeNull();
    // ボタンをクリックすると表示される
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByTestId("menu-content")).toBeInTheDocument();
  });

  it("disabledの場合はボタンが押せずメニューが開かない", () => {
    render(
      <MeatballsMenu id="menu3" disabled>
        <div data-testid="menu-content">Menu Content</div>
      </MeatballsMenu>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.queryByTestId("menu-content")).toBeNull();
    expect(button).toBeDisabled();
  });

  it("Escapeキーでメニューが閉じる", () => {
    render(
      <MeatballsMenu id="menu4">
        <div data-testid="menu-content">Menu Content</div>
      </MeatballsMenu>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByTestId("menu-content")).toBeInTheDocument();
    // メニューにEscapeキーを送る
    fireEvent.keyDown(button, { key: "Escape" });
    expect(screen.queryByTestId("menu-content")).toBeNull();
  });

  it("外側クリックでメニューが閉じる", () => {
    render(
      <div>
        <MeatballsMenu id="menu5">
          <div data-testid="menu-content">Menu Content</div>
        </MeatballsMenu>
        <div data-testid="outside">Outside</div>
      </div>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByTestId("menu-content")).toBeInTheDocument();
    // 外側をクリック
    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(screen.queryByTestId("menu-content")).toBeNull();
  });
});
