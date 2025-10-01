import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { NumberButton } from "../../../src/components/_00-common/NumberButton";

describe("NumberButton", () => {
  it("numberが表示される", () => {
    render(<NumberButton number={"7"} id={"7"} />);
    expect(screen.getByText("7")).toBeInTheDocument();
  });

  it("disabledのときボタンが無効化される", () => {
    render(<NumberButton number={"8"} disabled id={"8"} />);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
  });

  it("selectedのときselectedスタイルが適用される", () => {
    render(<NumberButton number={"9"} selected id={"9"} />);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("bg-main");
  });

  it("isToday=trueのときTodayスタイルが適用される", () => {
    render(<NumberButton number={"9"} isToday id={"9"} />);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("border-main");
  });

  it("onClickイベントが発火する", () => {
    const handleClick = vi.fn();
    render(<NumberButton number={"0"} onClick={handleClick} id={"0"} />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });
});
