import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ErrorText } from "../../../src/components/_00-common/ErrorText";

describe("ErrorText", () => {
  it("textが表示される", () => {
    render(<ErrorText text="エラーです" />);
    expect(screen.getByText("エラーです")).toBeInTheDocument();
  });

  it("アイコンが表示される", () => {
    render(<ErrorText text="エラー" />);
    expect(screen.getByText("emergency_home")).toBeInTheDocument();
  });

  it("classNameが反映される", () => {
    render(<ErrorText text="エラー" className="custom-class" />);
    const div = screen.getByText("エラー").closest("div");
    expect(div).toHaveClass("custom-class");
  });
});
