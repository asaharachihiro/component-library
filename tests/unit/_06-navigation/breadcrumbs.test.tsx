import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Breadcrumbs } from "../../../src/components/_06-navigation/Breadcrumbs/Breadcrumbs";

const items = [
  { label: "ホーム", href: "/" },
  { label: "カテゴリ", href: "/category", icon: "folder" },
  { label: "詳細", selected: true },
];

describe("Breadcrumbs", () => {
  it("idとclassNameが反映される", () => {
    render(<Breadcrumbs id="bc1" items={items} className="custom-class" />);
    const nav = document.getElementById("bc1");
    expect(nav).toBeTruthy();
    expect(nav?.className).toContain("custom-class");
  });

  it("itemsのlabelがすべて描画される", () => {
    render(<Breadcrumbs id="bc2" items={items} />);
    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it("selected=trueのitemはpointer-events-noneが付与される", () => {
    render(<Breadcrumbs id="bc3" items={items} />);
    const selected = screen.getByText("詳細");
    expect(selected.className).toContain("pointer-events-none");
    expect(selected).toHaveAttribute("tabIndex", "-1");
  });

  it("selected=falseのitemはタブ選択できない", () => {
    render(<Breadcrumbs id="bc4" items={items} />);
    const link = screen.getByText("ホーム");
    expect(link).toHaveAttribute("tabIndex", "0");
  });

  it("iconが指定されたitemはアイコンが描画される", () => {
    render(<Breadcrumbs id="bc5" items={items} />);
    expect(screen.getByText("folder")).toBeInTheDocument();
  });

  it("2番目以降のitemには区切りアイコンが描画される", () => {
    render(<Breadcrumbs id="bc6" items={items} />);
    const separators = screen.getAllByText("arrow_forward_ios");
    expect(separators.length).toBe(items.length - 1);
  });

  it("onClickが渡された場合、aタグのクリックで呼ばれる", () => {
    const handleClick = vi.fn();
    render(<Breadcrumbs id="bc7" items={items} onClick={handleClick} />);
    const link = screen.getByText("ホーム");
    link.click();
    expect(handleClick).toHaveBeenCalled();
  });

  it("itemsが空の場合は何も描画されない", () => {
    render(<Breadcrumbs id="bc8" items={[]} />);
    expect(screen.queryByRole("link")).toBeNull();
  });
});
