import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Radio } from "../../../src/components/_03-selection/Radio/Radio";
import { Children } from "react";

const options = [
  { label: "選択肢A", value: "A" },
  { label: "選択肢B", value: "B" },
  { label: "選択肢C", value: "C" },
];

describe("Radio", () => {
  it("optionsのラベルが表示される", () => {
    render(<Radio id="r1" options={options} />);
    expect(screen.getByText("選択肢A")).toBeInTheDocument();
    expect(screen.getByText("選択肢B")).toBeInTheDocument();
    expect(screen.getByText("選択肢C")).toBeInTheDocument();
  });

  it("classNameが反映される", () => {
    render(<Radio id="r2" className="custom-class" options={options} />);
    const wrapper = screen.getByRole("group");
    expect(wrapper.className).toContain("custom-class");
  });

  it("valueで初期選択が反映される", () => {
    render(<Radio id="r3" value="B" options={options} />);
    const btns = screen.getAllByRole("radio");
    expect(btns[1]).toHaveAttribute("aria-selected", "true");
    expect(btns[0]).toHaveAttribute("aria-selected", "false");
  });

  it("onChangeが発火し、選択値が渡る", () => {
    const handleChange = vi.fn();
    render(<Radio id="r4" options={options} onChange={handleChange} />);
    const btns = screen.getAllByRole("radio");
    fireEvent.click(btns[2]);
    expect(handleChange).toHaveBeenCalledWith("C");
    fireEvent.click(btns[0]);
    expect(handleChange).toHaveBeenCalledWith("A");
  });

  it("disabledで操作できなくなる", () => {
    render(<Radio id="r5" disabled options={options} />);
    const btns = screen.getAllByRole("radio");
    fireEvent.click(btns[1]);
    expect(btns[1]).toHaveAttribute("aria-disabled", "true");
  });

  it("errorMessageが表示される", () => {
    render(
      <Radio
        id="r6"
        errorMessage="エラーです"
        options={options}
        isInvalid={true}
      />
    );
    expect(screen.getByText("エラーです")).toBeInTheDocument();
  });

  it("キーボード操作で選択肢のフォーカスが移動する", () => {
    render(<Radio id="r7" options={options} />);
    const btns = screen.getAllByRole("radio");
    btns[0].focus();
    fireEvent.keyDown(btns[0], { key: "ArrowRight" });
    expect(document.activeElement).toBe(btns[1]);
    fireEvent.keyDown(btns[1], { key: "ArrowLeft" });
    expect(document.activeElement).toBe(btns[0]);
  });

  it("Enterキーで選択状態が切り替わる", () => {
    render(<Radio id="r8" options={options} />);
    const btns = screen.getAllByRole("radio");
    btns[0].focus();
    fireEvent.keyDown(btns[0], { key: "Enter" });
    expect(btns[0]).toHaveAttribute("aria-selected", "true");
    fireEvent.keyDown(btns[2], { key: "Enter" });
    expect(btns[2]).toHaveAttribute("aria-selected", "true");
  });

  it("childrenが表示される", () => {
    const addedOptions = [
      { label: "選択肢A", value: "A" },
      { label: "選択肢B", value: "B" },
      { label: "選択肢C", value: "C", children: <span>追加要素</span> },
    ];
    render(<Radio id="r9" options={addedOptions} />);
    expect(screen.getByText("追加要素")).toBeInTheDocument();
  });
});
