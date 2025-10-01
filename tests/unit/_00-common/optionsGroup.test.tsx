import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { OptionsGroup } from "../../../src/components/_00-common/OptionsGroup";

describe("OptionsGroup", () => {
  const options = [
    { label: "オプション1", value: "1" },
    { label: "オプション2", value: "2" },
    { label: "オプション3", value: "3" },
  ];

  it("childrenが表示される", () => {
    render(
      <OptionsGroup id={"options-group"}>
        {options.map((opt) => (
          <button key={opt.value}>{opt.label}</button>
        ))}
      </OptionsGroup>
    );
    options.forEach((opt) => {
      expect(screen.getByText(opt.label)).toBeInTheDocument();
    });
  });

  it("labelが表示される", () => {
    render(
      <OptionsGroup
        id={"options-group"}
        label="オプショングループ"
        isRequired={true}
      >
        {}
      </OptionsGroup>
    );
    expect(screen.getByText("オプショングループ")).toBeInTheDocument();
    expect(screen.getByText("必須")).toBeInTheDocument();
  });

  it("supportTextが表示される", () => {
    render(
      <OptionsGroup id={"options-group"} supportText="サポートテキスト">
        {}
      </OptionsGroup>
    );
    expect(screen.getByText("サポートテキスト")).toBeInTheDocument();
  });

  it("errorTextが表示される", () => {
    render(
      <OptionsGroup id={"options-group"} errorText="エラーテキスト">
        {}
      </OptionsGroup>
    );
    expect(screen.getByText("エラーテキスト")).toBeInTheDocument();
  });

  it("isHorizontalがtrueの場合、横並びになる", () => {
    const { container } = render(
      <OptionsGroup id={"options-group"} isHorizontal={true}>
        {options.map((opt) => (
          <button key={opt.value}>{opt.label}</button>
        ))}
      </OptionsGroup>
    );
    const horizontalDiv = Array.from(container.querySelectorAll("div")).find(
      (div) => div.className.includes("space-x-4")
    );
    expect(horizontalDiv).toBeInTheDocument();
  });
});
