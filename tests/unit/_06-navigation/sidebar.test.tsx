import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Sidebar } from "../../../src/components/_06-navigation/Sidebar/Sidebar";

describe("Sidebar", () => {
  it("idとclassNameがnav要素に反映される", () => {
    render(
      <Sidebar id="sidebar1" className="custom-class">
        <li>Item</li>
      </Sidebar>
    );
    const nav = document.getElementById("sidebar1");
    expect(nav).toBeTruthy();
    expect(nav?.className).toContain("custom-class");
  });

  it("childrenがul内に描画される", () => {
    render(
      <Sidebar id="sidebar2">
        <li>Item1</li>
        <li>Item2</li>
      </Sidebar>
    );
    const ul = screen.getByRole("list");
    expect(ul.children.length).toBe(2);
    expect(screen.getByText("Item1")).toBeInTheDocument();
    expect(screen.getByText("Item2")).toBeInTheDocument();
  });

  it("type=fixedの場合はメニューアイコンが表示されない", () => {
    render(
      <Sidebar id="sidebar3" type="fixed">
        <li>Item</li>
      </Sidebar>
    );
    expect(screen.queryByText("menu")).toBeNull();
  });

  it("type=drawerの場合はメニューアイコンが表示される", () => {
    render(
      <Sidebar id="sidebar4" type="drawer">
        <li>Item</li>
      </Sidebar>
    );
    expect(screen.getByText("menu")).toBeInTheDocument();
  });

  it("type=drawerの場合、メニューアイコンをクリックするとサイドバーが表示される", () => {
    render(
      <Sidebar id="sidebar5" type="drawer" defaultShow={false}>
        <li>Item</li>
      </Sidebar>
    );
    // 初期状態は非表示
    const sidebarDiv = document.querySelector(".fixed.left-0.top-0");
    expect(sidebarDiv?.className).toContain("-translate-x-full");
    // メニューアイコンをクリック
    fireEvent.click(screen.getByText("menu"));
    expect(sidebarDiv?.className).toContain("translate-x-0");
  });

  it("type=drawerの場合、閉じるアイコンをクリックするとサイドバーが非表示になる", () => {
    render(
      <Sidebar id="sidebar6" type="drawer" defaultShow={true}>
        <li>Item</li>
      </Sidebar>
    );
    const sidebarDiv = document.querySelector(".fixed.left-0.top-0");
    expect(sidebarDiv?.className).toContain("translate-x-0");
    // 閉じるアイコンをクリック
    fireEvent.click(screen.getByText("keyboard_double_arrow_left"));
    expect(sidebarDiv?.className).toContain("-translate-x-full");
  });

  it("headerItemが描画される", () => {
    render(
      <Sidebar
        id="sidebar7"
        headerItem={<span data-testid="header">Header</span>}
      >
        <li>Item</li>
      </Sidebar>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("onShowChangeが呼ばれる", () => {
    const handleShowChange = vi.fn();
    render(
      <Sidebar
        id="sidebar8"
        type="drawer"
        defaultShow={false}
        onShowChange={handleShowChange}
      >
        <li>Item</li>
      </Sidebar>
    );
    fireEvent.click(screen.getByText("menu"));
    expect(handleShowChange).toHaveBeenCalledWith(true);
    fireEvent.click(screen.getByText("keyboard_double_arrow_left"));
    expect(handleShowChange).toHaveBeenCalledWith(false);
  });
});
