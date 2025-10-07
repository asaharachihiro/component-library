import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Tag } from "../../../src/components/_05-notification/Tag/Tag";

describe("Tag", () => {
  it("idとclassNameが反映される", () => {
    render(<Tag id="tag1" className="custom-class" label="Test" />);
    const root = document.getElementById("tag1");
    expect(root).toBeTruthy();
    expect(root?.className).toContain("custom-class");
  });

  it("labelが表示される", () => {
    render(<Tag id="tag2" label="ラベルテスト" />);
    expect(screen.getByText("ラベルテスト")).toBeInTheDocument();
  });

  it("type=primaryのスタイルが適用される", () => {
    render(<Tag id="tag3" label="Primary" type="primary" />);
    const span = screen.getByText("Primary");
    expect(span.className).toContain("bg-black-sub");
    expect(span.className).toContain("text-white");
  });

  it("type=secondaryのスタイルが適用される", () => {
    render(<Tag id="tag4" label="Secondary" type="secondary" />);
    const span = screen.getByText("Secondary");
    expect(span.className).toContain("bg-white");
    expect(span.className).toContain("border");
    expect(span.className).toContain("text-black-sub");
  });

  it("type=dangerのスタイルが適用される", () => {
    render(<Tag id="tag5" label="Danger" type="danger" />);
    const span = screen.getByText("Danger");
    expect(span.className).toContain("border-danger");
    expect(span.className).toContain("text-danger");
    expect(span.className).toContain("bg-white");
  });

  it("disabledのときdisabledスタイルとaria-disabled属性が付与される", () => {
    render(<Tag id="tag6" label="Disabled" disabled />);
    const root = document.getElementById("tag6");
    const span = screen.getByText("Disabled");
    expect(root).toHaveAttribute("aria-disabled", "true");
    expect(span.className).toContain("bg-black-5-opacity");
    expect(span.className).toContain("text-black-50-opacity");
  });

  it("type未指定時はprimaryスタイルになる", () => {
    render(<Tag id="tag7" label="Default" />);
    const span = screen.getByText("Default");
    expect(span.className).toContain("bg-black-sub");
    expect(span.className).toContain("text-white");
  });
});
