window.HTMLElement.prototype.scrollIntoView = function () {};

import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MultiSelectBox } from "../../../src/components/_03-selection/SelectBox/MultiSelectBox";

const options = [
  { value: "a", label: "選択肢A" },
  { value: "b", label: "選択肢B" },
  { value: "c", label: "選択肢C" },
];

describe("MultiSelectBox", () => {
  it("optionsのラベルが表示される（メニュー展開時）", () => {
    render(<MultiSelectBox id="msb1" options={options} />);
    fireEvent.click(screen.getByTestId("selectboxmsb1"));
    expect(screen.getByText("選択肢A")).toBeInTheDocument();
    expect(screen.getByText("選択肢B")).toBeInTheDocument();
    expect(screen.getByText("選択肢C")).toBeInTheDocument();
  });

  it("valuesで初期選択が反映される", () => {
    render(
      <MultiSelectBox
        id="msb2"
        options={options}
        values={[{ value: "b", label: "選択肢B" }]}
      />
    );
    expect(screen.getByText("選択肢B")).toBeInTheDocument();
  });

  it("onChangeが発火し、選択値が渡る", () => {
    const handleChange = vi.fn();
    render(
      <MultiSelectBox id="msb3" options={options} onChange={handleChange} />
    );
    fireEvent.click(screen.getByTestId("selectboxmsb3"));
    fireEvent.click(screen.getByTestId("option-label-a"));
    expect(handleChange).toHaveBeenCalledWith("msb3", [
      { value: "a", label: "選択肢A" },
    ]);
    fireEvent.click(screen.getByTestId("option-label-b"));
    expect(handleChange).toHaveBeenCalledWith("msb3", [
      { value: "a", label: "選択肢A" },
      { value: "b", label: "選択肢B" },
    ]);

    const selectedItem = screen.getByTestId("selected-item-a");
    const closeBtn = within(selectedItem).getByRole("button", {
      name: "close",
    });
    fireEvent.click(closeBtn);
    expect(handleChange).toHaveBeenCalledWith("msb3", [
      { value: "b", label: "選択肢B" },
    ]);
  });

  it("選択済み値にcloseアイコンが表示され、クリックで解除できる", () => {
    render(
      <MultiSelectBox
        id="msb4"
        options={options}
        values={[{ value: "a", label: "選択肢A" }]}
      />
    );
    const closeBtn = screen.getByRole("button", { name: "close" });
    expect(closeBtn).toBeInTheDocument();
    fireEvent.click(closeBtn);
    expect(screen.queryByTestId("selected-item-a")).not.toBeInTheDocument();
  });
});
