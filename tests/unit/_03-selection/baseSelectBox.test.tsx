import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BaseSelectBox } from "../../../src/components/_03-selection/SelectBox/BaseSelectBox";

describe("BaseSelectBox", () => {
  it("labelが表示される", () => {
    render(<BaseSelectBox id="bsb1" label="セレクトラベル" children={null} />);
    expect(screen.getByText("セレクトラベル")).toBeInTheDocument();
  });

  it("isRequiredで必須マークが表示される", () => {
    render(<BaseSelectBox id="bsb2" label="職業" isRequired children={null} />);
    expect(screen.getByText("必須")).toBeInTheDocument();
  });

  it("placeholderが表示される（selectedValueなし）", () => {
    render(<BaseSelectBox id="bsb4" placeholder="未選択" children={null} />);
    expect(screen.getByText("未選択")).toBeInTheDocument();
  });

  it("selectedValueが表示される", () => {
    render(
      <BaseSelectBox id="bsb5" selectedValue="選択済み" children={null} />
    );
    expect(screen.getByText("選択済み")).toBeInTheDocument();
  });

  it("supportMessageが表示される", () => {
    render(
      <BaseSelectBox
        id="bsb6"
        supportMessage="サポートメッセージ"
        children={null}
      />
    );
    expect(screen.getByText("サポートメッセージ")).toBeInTheDocument();
  });

  it("errorMessageが表示される", () => {
    render(
      <BaseSelectBox
        id="bsb7"
        errorMessage="エラーです"
        isValid={false}
        children={null}
      />
    );
    expect(screen.getByText("エラーです")).toBeInTheDocument();
  });

  it("disabledで操作できなくなる", () => {
    render(<BaseSelectBox id="bsb8" disabled children={null} />);
    const input = screen.getByRole("select");
    expect(input).toBeDisabled();
  });

  it("size='s'で小さいスタイルが適用される", () => {
    render(<BaseSelectBox id="bsb9" size="s" children={null} />);
    const input = screen.getByRole("select");
    expect(input.className).toContain("text-sm");
  });

  it("size='m'でデフォルトスタイルが適用される", () => {
    render(<BaseSelectBox id="bsb10" size="m" children={null} />);
    const input = screen.getByRole("select");
    expect(input.className).toContain("rounded-lg");
  });

  it("tooltipが表示される", () => {
    render(
      <BaseSelectBox
        id="bsb11"
        label="ラベル"
        tooltip={<span>説明</span>}
        children={null}
      />
    );
    expect(screen.getByText("info")).toBeInTheDocument();
  });

  it("onToggleがクリックで発火する", () => {
    const handleToggle = vi.fn();
    render(
      <BaseSelectBox id="bsb12" onToggle={handleToggle} children={null} />
    );
    const box = screen.getByRole("select").closest("div");
    fireEvent.click(box!);
    expect(handleToggle).toHaveBeenCalled();
  });

  it("onToggleがキーボード操作で発火する", () => {
    const handleToggle = vi.fn();
    render(
      <BaseSelectBox id="bsb13" onToggle={handleToggle} children={null} />
    );
    const box = screen.getByRole("select").closest("div");
    fireEvent.keyDown(box!, { key: "ArrowDown" });
    expect(handleToggle).toHaveBeenCalled();
    fireEvent.keyDown(box!, { key: "Enter" });
    expect(handleToggle).toHaveBeenCalled();
    fireEvent.keyDown(box!, { key: "Escape" });
    expect(handleToggle).toHaveBeenCalled();
  });

  it("isOpen=trueでchildrenが表示される", () => {
    render(<BaseSelectBox id="bsb14" isOpen children={<div>メニュー</div>} />);
    expect(screen.getByText("メニュー")).toBeInTheDocument();
  });

  it("expand_moreアイコンが表示される", () => {
    render(<BaseSelectBox id="bsb15" children={null} />);
    expect(screen.getByText("expand_more")).toBeInTheDocument();
  });
});
