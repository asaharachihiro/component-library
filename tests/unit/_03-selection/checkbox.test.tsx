import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "../../../src/components/_03-selection/Checkbox/Checkbox";

const options = [
  { id: "opt1", label: "選択肢1" },
  { id: "opt2", label: "選択肢2" },
  { id: "opt3", label: "選択肢3", disabled: true },
];

describe("Checkbox", () => {
  it("labelが表示される", () => {
    render(<Checkbox id="cb1" label="チェックボックス" options={options} />);
    expect(screen.getByText("チェックボックス")).toBeInTheDocument();
  });

  it("optionsのラベルが表示される", () => {
    render(<Checkbox id="cb2" options={options} />);
    expect(screen.getByText("選択肢1")).toBeInTheDocument();
    expect(screen.getByText("選択肢2")).toBeInTheDocument();
    expect(screen.getByText("選択肢3")).toBeInTheDocument();
  });

  it("isRequiredで必須マークが表示される", () => {
    render(
      <Checkbox id="cb3" label="オプション" isRequired options={options} />
    );
    expect(screen.getByText("必須")).toBeInTheDocument();
  });

  it("checkedが初期値として反映される", () => {
    render(
      <Checkbox
        id="cb5"
        options={[
          { id: "opt1", label: "選択肢1", checked: true },
          { id: "opt2", label: "選択肢2" },
        ]}
      />
    );
    const checkIcons = screen.getAllByTestId("check-icon");
    expect(checkIcons[0]).toHaveAttribute("aria-checked", "true");
    expect(checkIcons[1]).toHaveAttribute("aria-checked", "false");
  });

  it("onChangeが発火し、checkedIdsが渡る", () => {
    const handleChange = vi.fn();
    render(<Checkbox id="cb6" options={options} onChange={handleChange} />);
    const labels = screen.getAllByText(/選択肢/);
    fireEvent.click(labels[0]);
    expect(handleChange).toHaveBeenCalledWith(["opt1"]);
    fireEvent.click(labels[1]);
    expect(handleChange).toHaveBeenCalledWith(["opt1", "opt2"]);
    fireEvent.click(labels[0]);
    expect(handleChange).toHaveBeenCalledWith(["opt2"]);
  });

  it("disabledのoptionは選択できない", () => {
    const handleChange = vi.fn();
    render(<Checkbox id="cb7" options={options} onChange={handleChange} />);
    const labels = screen.getAllByText(/選択肢/);
    fireEvent.click(labels[2]);
    expect(handleChange).not.toHaveBeenCalledWith(
      expect.arrayContaining(["opt3"])
    );
  });

  it("errorMessageが表示される", () => {
    render(<Checkbox id="cb8" errorMessage="エラーです" options={options} />);
    expect(screen.getByText("エラーです")).toBeInTheDocument();
  });

  it("tooltipが表示される", () => {
    render(
      <Checkbox
        id="cb9"
        label="ヘルプ"
        tooltip={<span>説明</span>}
        options={options}
      />
    );
    expect(screen.getByText("info")).toBeInTheDocument();
  });
});
