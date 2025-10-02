import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TextBox } from "../../../src/components/_02-input/TextBox/TextBox";

describe("TextBox", () => {
  it("labelが表示される", () => {
    render(<TextBox id="tb1" label="テキストラベル" />);
    expect(screen.getByText("テキストラベル")).toBeInTheDocument();
  });

  it("isRequiredで必須マークが表示される", () => {
    render(<TextBox id="tb2" label="必須項目" isRequired />);
    expect(screen.getByText("必須項目")).toBeInTheDocument();
    // 必須マーク自体はFormLabelのテストで検証済み
  });

  it("supportMessageが表示される", () => {
    render(<TextBox id="tb3" supportMessage="サポートメッセージ" />);
    expect(screen.getByText("サポートメッセージ")).toBeInTheDocument();
  });

  it("errorMessageが表示される", () => {
    render(<TextBox id="tb4" errorMessage="エラーです" isValid={false} />);
    expect(screen.getByText("エラーです")).toBeInTheDocument();
  });

  it("disabledでinputが無効化される", () => {
    render(<TextBox id="tb6" disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("placeholderが表示される", () => {
    render(<TextBox id="tb7" placeholder="入力してください" />);
    expect(screen.getByPlaceholderText("入力してください")).toBeInTheDocument();
  });

  it("valueが反映される", () => {
    render(<TextBox id="tb8" value="テスト値" />);
    expect(screen.getByDisplayValue("テスト値")).toBeInTheDocument();
  });

  it("onChangeが発火する", () => {
    const handleChange = vi.fn();
    render(<TextBox id="tb9" onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "abc" } });
    expect(handleChange).toHaveBeenCalledWith("tb9", "abc");
  });

  it("onBlurが発火する", () => {
    const handleBlur = vi.fn();
    render(<TextBox id="tb10" onBlur={handleBlur} />);
    const input = screen.getByRole("textbox");
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });

  it("onFocusが発火する", () => {
    const handleFocus = vi.fn();
    render(<TextBox id="tb11" onFocus={handleFocus} />);
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
  });

  it("tooltipが表示される", () => {
    render(<TextBox id="tb12" label="テキストラベル" tooltip="説明" />);
    expect(screen.getByText("説明")).toBeInTheDocument();
  });

  it("currency='jpy'で金額フォーマットされる", () => {
    render(<TextBox id="tb13" value="1000" currency="jpy" />);
    expect(screen.getByDisplayValue("￥1,000")).toBeInTheDocument();
  });

  it("unit指定で単位付きで表示される", () => {
    render(<TextBox id="tb14" value="50" unit="kg" />);
    expect(screen.getByDisplayValue("50 kg")).toBeInTheDocument();
  });

  it("type='textArea'でtextareaが表示される", () => {
    render(<TextBox id="tb15" type="textArea" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea.tagName).toBe("TEXTAREA");
  });
});
