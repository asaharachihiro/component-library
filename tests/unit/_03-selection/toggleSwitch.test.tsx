import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ToggleSwitch } from "../../../src/components/_03-selection/ToggleSwitch/ToggleSwitch";

describe("ToggleSwitch", () => {
  it("labelが表示される", () => {
    render(<ToggleSwitch id="ts1" label="トグルラベル" />);
    expect(screen.getByText("トグルラベル")).toBeInTheDocument();
  });

  it("checkedで初期状態が反映される", () => {
    render(<ToggleSwitch id="ts2" checked={true} />);
    const input = screen.getByRole("checkbox");
    expect(input).toBeChecked();
  });

  it("checked=falseで初期状態が反映される", () => {
    render(<ToggleSwitch id="ts3" checked={false} />);
    const input = screen.getByRole("checkbox");
    expect(input).not.toBeChecked();
  });

  it("onChangeが発火し、値が渡る", () => {
    const handleChange = vi.fn();
    render(<ToggleSwitch id="ts4" onChange={handleChange} />);
    const input = screen.getByRole("checkbox");
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledWith(true);
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it("disabledで操作できなくなる", () => {
    render(<ToggleSwitch id="ts5" disabled />);
    const input = screen.getByRole("checkbox");
    expect(input).toBeDisabled();
    const label = screen.getByTestId("toggle-ts5");
    expect(label).toHaveClass("pointer-events-none");
  });

  it("errorMessageが表示される", () => {
    render(<ToggleSwitch id="ts6" errorMessage="エラーです" isValid={false} />);
    expect(screen.getByText("エラーです")).toBeInTheDocument();
  });
});
