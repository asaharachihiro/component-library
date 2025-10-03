import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SortButton } from "../../../src/components/_04-list/Table/SortButton";

describe("SortButton", () => {
  it("refが設定できる", () => {
    const ref = { current: null };
    render(<SortButton ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("sorting='asc'で上矢印アイコンが表示される", () => {
    render(<SortButton sorting="asc" />);
    expect(screen.getByText("arrow_upward")).toBeInTheDocument();
  });

  it("sorting='desc'で下矢印アイコンが表示される", () => {
    render(<SortButton sorting="desc" />);
    expect(screen.getByText("arrow_downward")).toBeInTheDocument();
  });

  it("nextSortOrder='asc'で上矢印アイコンが表示される", () => {
    render(<SortButton nextSortOrder="asc" />);
    expect(screen.getByText("arrow_upward")).toBeInTheDocument();
  });

  it("nextSortOrder='desc'で下矢印アイコンが表示される", () => {
    render(<SortButton nextSortOrder="desc" />);
    expect(screen.getByText("arrow_downward")).toBeInTheDocument();
  });

  it("sorting/nextSortOrderがfalse/noneの場合アイコンが表示されない", () => {
    render(<SortButton sorting={undefined} nextSortOrder={false} />);
    const icon = screen
      .getByRole("button")
      .querySelector(".material-symbols-rounded");
    expect(icon?.textContent).toBe("");
  });

  it("onClickが発火する", () => {
    const handleClick = vi.fn();
    render(<SortButton onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("propsがbuttonに渡る", () => {
    render(<SortButton type="submit" aria-label="sort" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("type", "submit");
    expect(btn).toHaveAttribute("aria-label", "sort");
  });
});
