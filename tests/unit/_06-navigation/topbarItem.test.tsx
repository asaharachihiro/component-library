import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TopbarItem } from "../../../src/components/_06-navigation/Topbar/TopbarItem";

describe("TopbarItem", () => {
  it("id, hrefがaタグに反映される", () => {
    render(<TopbarItem id="topbar1" href="/test" label="テスト" />);
    const link = document.getElementById("topbar1");
    expect(link).toBeTruthy();
    expect(link).toHaveAttribute("href", "/test");
  });

  it("iconが表示される", () => {
    render(<TopbarItem id="topbar2" href="/icon" icon="home" label="ホーム" />);
    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("home").className).toContain(
      "material-symbols-rounded"
    );
  });

  it("labelが表示される", () => {
    render(<TopbarItem id="topbar3" href="/label" label="ラベル" />);
    expect(screen.getByText("ラベル")).toBeInTheDocument();
    expect(screen.getByText("ラベル").className).toContain("font-medium");
  });

  it("selected=trueのとき選択スタイルが付与される", () => {
    render(
      <TopbarItem id="topbar4" href="/selected" label="選択中" selected />
    );
    const link = document.getElementById("topbar4");
    expect(link?.className).toContain("bg-primary-sub");
    expect(link?.className).toContain("border-primary");
    expect(link).toHaveAttribute("aria-selected", "true");
  });

  it("selected=falseのとき未選択スタイルが付与される", () => {
    render(<TopbarItem id="topbar5" href="/notselected" label="未選択" />);
    const link = document.getElementById("topbar5");
    expect(link?.className).toContain("hover:bg-black-3-opacity");
    expect(link?.className).toContain("text-black-sub");
    expect(link).toHaveAttribute("aria-selected", "false");
  });

  it("onClickが呼ばれる", () => {
    const handleClick = vi.fn();
    render(
      <TopbarItem
        id="topbar6"
        href="/click"
        label="クリック"
        onClick={handleClick}
      />
    );
    const link = document.getElementById("topbar6");
    link?.click();
    expect(handleClick).toHaveBeenCalled();
  });

  it("label未指定の場合はラベルが描画されない", () => {
    render(<TopbarItem id="topbar7" href="/nolabel" />);
    // labelが描画されないこと
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument();
  });

  it("icon未指定の場合はアイコンが描画されない", () => {
    render(<TopbarItem id="topbar8" href="/noicon" label="アイコンなし" />);
    // material-symbols-roundedクラスの要素がないこと
    expect(document.querySelector(".material-symbols-rounded")).toBeNull();
  });
});
