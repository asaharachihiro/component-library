import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CheckIcon } from "../../../src/components/_00-common/CheckIcon";

describe("CheckIcon", () => {
  it("checked=false のとき未チェックアイコンが表示される", () => {
    render(<CheckIcon id="test" checked={false} />);
    expect(screen.getByText("check_box_outline_blank")).toBeInTheDocument();
  });

  it("checked=true のときチェック済みアイコンが表示される", () => {
    render(<CheckIcon id="test" checked={true} />);
    expect(screen.getByText("check_box")).toBeInTheDocument();
  });

  it("checked='indeterminate' のときインデターミネートアイコンが表示される", () => {
    render(<CheckIcon id="test" checked="indeterminate" />);
    expect(screen.getByText("indeterminate_check_box")).toBeInTheDocument();
  });

  it("disabled のとき input が disabled になる", () => {
    render(<CheckIcon id="test" disabled />);
    const input = screen.getByRole("checkbox");
    expect(input).toBeDisabled();
  });

  it("isInvalid=true のとき aria-invalid が true になる", () => {
    render(<CheckIcon id="test" isInvalid={true} />);
    const input = screen.getByRole("checkbox");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("onChange が呼ばれる", () => {
    const handleChange = vi.fn();
    render(<CheckIcon id="test" onChange={handleChange} />);
    const input = screen.getByRole("checkbox");
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalled();
  });

  it("disabled のとき onChange は呼ばれない", () => {
    const handleChange = vi.fn();
    render(<CheckIcon id="test" disabled onChange={handleChange} />);
    const input = screen.getByRole("checkbox");
    fireEvent.click(input);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("children が表示される", () => {
    render(<CheckIcon id="test">child</CheckIcon>);
    expect(screen.getByText("child")).toBeInTheDocument();
  });
});
