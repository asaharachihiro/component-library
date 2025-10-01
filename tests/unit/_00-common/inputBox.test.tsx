import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InputBox } from "../../../src/components/_00-common/InputBox";

describe("InputBox", () => {
  it("placeholderが表示される", () => {
    render(
      <InputBox
        placeholder="入力してください"
        id={"input-placeholder"}
        type={"text"}
      />
    );
    expect(screen.getByPlaceholderText("入力してください")).toBeInTheDocument();
  });

  it("valueが反映される", () => {
    render(<InputBox value="テスト値" id={"input-value"} type={"text"} />);
    expect(screen.getByDisplayValue("テスト値")).toBeInTheDocument();
  });

  it("disabledのとき入力できない", () => {
    render(<InputBox disabled id={"input-disabled"} type={"text"} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("isValidがfalseのときborder-dangerクラスが適用される", () => {
    render(<InputBox isValid={false} id={"input-invalid"} type={"text"} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-danger");
  });

  it("type属性が反映される", () => {
    render(<InputBox type="textarea" id={"input-type"} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "textarea");
  });

  it("asTextのときtextareaがレンダリングされる", () => {
    render(<InputBox asTextArea={true} id={"input-textarea"} type={"text"} />);
    const textarea = screen.getByRole("textbox");
    expect(textarea.tagName).toBe("TEXTAREA");
  });
});
