import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SidebarItem } from "../../../src/components/_06-navigation/Sidebar/SidebarItem";

describe("SidebarItem", () => {
  it("id, hrefeが反映される", () => {
    render(<SidebarItem id="item1" href="/test" label="テスト" />);
    const link = document.getElementById("item1");
    expect(link).toBeTruthy();
    expect(link).toHaveAttribute("href", "/test");
  });

  it("iconが表示される", () => {
    render(<SidebarItem id="item2" href="/icon" icon="home" label="ホーム" />);
    expect(screen.getByText("home")).toBeInTheDocument();
  });

  it("labelが表示される", () => {
    render(<SidebarItem id="item3" href="/label" label="ラベル" />);
    expect(screen.getByText("ラベル")).toBeInTheDocument();
  });

  it("selected=trueのとき選択スタイルが付与される", () => {
    render(<SidebarItem id="item4" href="/selected" label="選択中" selected />);
    const link = document.getElementById("item4");
    expect(link?.className).toContain("bg-main-bg");
    expect(link?.className).toContain("border-main");
    expect(link).toHaveAttribute("aria-selected", "true");
  });

  it("selected=falseのとき未選択スタイルが付与される", () => {
    render(<SidebarItem id="item5" href="/notselected" label="未選択" />);
    const link = document.getElementById("item5");
    expect(link?.className).toContain("hover:bg-black-3-opacity");
    expect(link?.className).toContain("text-black-sub");
    expect(link).toHaveAttribute("aria-selected", "false");
  });

  it("onClickが呼ばれる", () => {
    const handleClick = vi.fn();
    render(
      <SidebarItem
        id="item6"
        href="/click"
        label="クリック"
        onClick={handleClick}
      />
    );
    const link = document.getElementById("item6");
    link?.click();
    expect(handleClick).toHaveBeenCalled();
  });

  it("label未指定の場合はラベルが描画されない", () => {
    render(<SidebarItem id="item7" href="/nolabel" />);
    // labelが描画されないこと
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument();
  });

  it("icon未指定の場合はアイコンが描画されない", () => {
    render(<SidebarItem id="item8" href="/noicon" label="アイコンなし" />);
    // material-symbols-roundedクラスの要素がないこと
    expect(document.querySelector(".material-symbols-rounded")).toBeNull();
  });
});
