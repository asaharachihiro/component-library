import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SearchBox } from "../../../src/components/_02-input/SearchBox/SearchBox";

describe("SearchBox", () => {
  it("placeholderが表示される", () => {
    render(<SearchBox id="sb1" placeholder="検索してください" />);
    expect(screen.getByPlaceholderText("検索してください")).toBeInTheDocument();
  });

  it("valueが反映される", () => {
    render(<SearchBox id="sb2" value="テスト検索" />);
    expect(screen.getByDisplayValue("テスト検索")).toBeInTheDocument();
  });

  it("onChangeが発火する", () => {
    const handleChange = vi.fn();
    render(<SearchBox id="sb3" onChange={handleChange} />);
    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "abc" } });
    expect(handleChange).toHaveBeenCalledWith("sb3", "abc");
  });

  it("onBlurが発火する", () => {
    const handleBlur = vi.fn();
    render(<SearchBox id="sb4" onBlur={handleBlur} />);
    const input = screen.getByTestId("search-input");
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });

  it("onFocusが発火する", () => {
    const handleFocus = vi.fn();
    render(<SearchBox id="sb5" onFocus={handleFocus} />);
    const input = screen.getByTestId("search-input");
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
  });

  it("onClickが発火する", () => {
    const handleClick = vi.fn();
    render(<SearchBox id="sb6" value="abc" onClick={handleClick} />);
    const button = screen.getByLabelText("Search Button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledWith("sb6", "abc");
  });

  it("supportMessageが表示される", () => {
    render(<SearchBox id="sb7" supportMessage="サポートメッセージ" />);
    expect(screen.getByText("サポートメッセージ")).toBeInTheDocument();
  });

  it("errorMessageが表示される", () => {
    render(<SearchBox id="sb8" errorMessage="エラーです" isValid={false} />);
    expect(screen.getByText("エラーです")).toBeInTheDocument();
  });

  it("disabledでinputとボタンが無効化される", () => {
    render(<SearchBox id="sb9" disabled />);
    const input = screen.getByTestId("search-input");
    const button = screen.getByLabelText("Search Button");
    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });

  it("classNameが反映される", () => {
    render(<SearchBox id="sb10" className="custom-class" />);
    const wrapper = screen.getByTestId("search-input").closest("div");
    expect(wrapper?.className).toContain("custom-class");
  });

  it("検索アイコンが表示される", () => {
    render(<SearchBox id="sb11" />);
    expect(screen.getByText("search")).toBeInTheDocument();
  });
});
