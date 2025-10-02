import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { PasswordBox } from "../../../src/components/_02-input/PasswordBox/PasswordBox";

describe("PasswordBox", () => {
  it("labelが表示される", () => {
    render(<PasswordBox id="pw1" label="パスワード" />);
    expect(screen.getByText("パスワード")).toBeInTheDocument();
  });

  it("isRequiredで必須マークが表示される", () => {
    render(<PasswordBox id="pw2" label="必須項目" isRequired />);
    expect(screen.getByText("必須項目")).toBeInTheDocument();
    // 必須マーク自体はFormLabelのテストで検証済み
  });

  it("supportMessageが表示される", () => {
    render(<PasswordBox id="pw3" supportMessage="サポートメッセージ" />);
    expect(screen.getByText("サポートメッセージ")).toBeInTheDocument();
  });

  it("errorMessageが表示される", () => {
    render(<PasswordBox id="pw4" errorMessage="エラーです" isValid={false} />);
    expect(screen.getByText("エラーです")).toBeInTheDocument();
  });

  it("disabledでinputが無効化される", () => {
    render(<PasswordBox id="pw6" disabled />);
    const input = screen.getByTestId("password-input");
    expect(input).toBeDisabled();
  });

  it("placeholderが表示される", () => {
    render(<PasswordBox id="pw7" placeholder="パスワードを入力" />);
    expect(screen.getByPlaceholderText("パスワードを入力")).toBeInTheDocument();
  });

  it("valueが反映される", () => {
    render(<PasswordBox id="pw8" value="secret" />);
    fireEvent.click(screen.getByLabelText("show password"));
    expect(screen.getByDisplayValue("secret")).toBeInTheDocument();
  });

  it("onChangeが発火する", () => {
    const handleChange = vi.fn();
    render(<PasswordBox id="pw9" onChange={handleChange} />);
    const input = screen.getByTestId("password-input");
    fireEvent.change(input, { target: { value: "newpass" } });
    expect(handleChange).toHaveBeenCalledWith("pw9", "newpass");
  });

  it("onBlurが発火する", () => {
    const handleBlur = vi.fn();
    render(<PasswordBox id="pw10" onBlur={handleBlur} />);
    const input = screen.getByTestId("password-input");
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });

  it("onFocusが発火する", () => {
    const handleFocus = vi.fn();
    render(<PasswordBox id="pw11" onFocus={handleFocus} />);
    const input = screen.getByTestId("password-input");
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
  });

  it("tooltipが表示される", () => {
    render(
      <PasswordBox id="pw12" label="パスワード" tooltip={<span>説明</span>} />
    );
    expect(screen.getByText("info")).toBeInTheDocument();
  });

  it("アイコンボタンでパスワード表示/非表示が切り替わる", () => {
    render(<PasswordBox id="pw13" />);
    const input = screen.getByTestId("password-input");
    const iconBtn = screen.getByLabelText("show password");
    // 初期はtype=password
    expect(input).toHaveAttribute("type", "password");
    fireEvent.click(iconBtn);
    // クリック後はtype=text
    expect(input).toHaveAttribute("type", "text");
    fireEvent.click(iconBtn);
    // 再度クリックでtype=password
    expect(input).toHaveAttribute("type", "password");
  });
});
