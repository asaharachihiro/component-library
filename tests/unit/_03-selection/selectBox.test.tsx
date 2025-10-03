import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SelectBox } from "../../../src/components/_03-selection/SelectBox/SelectBox";

const options = [
  { value: "a", label: "選択肢A" },
  { value: "b", label: "選択肢B" },
  { value: "c", label: "選択肢C" },
];

describe("SelectBox", () => {
  it("optionsのラベルが表示される（メニュー展開時）", () => {
    render(<SelectBox id="sb1" options={options} />);
    fireEvent.click(screen.getByTestId("selectboxsb1"));
    expect(screen.getByText("選択肢A")).toBeInTheDocument();
    expect(screen.getByText("選択肢B")).toBeInTheDocument();
    expect(screen.getByText("選択肢C")).toBeInTheDocument();
  });

  it("valueで初期選択が反映される", () => {
    render(<SelectBox id="sb2" options={options} value="b" />);
    expect(screen.getByText("選択肢B")).toBeInTheDocument();
  });

  it("onChangeが発火し、選択値が渡る", () => {
    const handleChange = vi.fn();
    render(<SelectBox id="sb3" options={options} onChange={handleChange} />);
    fireEvent.click(screen.getByTestId("selectboxsb3"));
    fireEvent.click(screen.getByText("選択肢C"));
    expect(handleChange).toHaveBeenCalledWith("c");
  });

  it("hasDefaultOption=trueで未選択項目が表示される", () => {
    render(<SelectBox id="sb4" options={options} hasDefaultOption />);
    expect(screen.getByText("未選択")).toBeInTheDocument();
  });

  it("選択肢にチェックアイコンが表示される（選択時）", () => {
    window.HTMLElement.prototype.scrollIntoView = function () {};
    render(<SelectBox id="sb9" options={options} value="a" />);
    fireEvent.click(screen.getByTestId("selectboxsb9"));
    const checkIcon = screen.getByText("check");
    expect(checkIcon).toBeInTheDocument();
  });
});
