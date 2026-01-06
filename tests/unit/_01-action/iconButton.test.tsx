import { render, screen, fireEvent } from "@testing-library/react";
import { it, expect, vi } from "vitest";
import { IconButton } from "../../../src/components/_01-action/IconButton";

it("iconが表示される", () => {
  render(<IconButton icon="star" aria-label="お気に入り" />);
  expect(screen.getByText("star")).toBeInTheDocument();
});

it("aria-labelが反映される", () => {
  render(<IconButton icon="edit" aria-label="編集" />);
  const btn = screen.getByLabelText("編集");
  expect(btn).toBeInTheDocument();
});

it("disabledのときボタンが無効化される", () => {
  render(<IconButton icon="delete" aria-label="削除" disabled />);
  const btn = screen.getByRole("button");
  expect(btn).toBeDisabled();
});

it("onClickイベントが発火する", () => {
  const handleClick = vi.fn();
  render(<IconButton icon="add" aria-label="追加" onClick={handleClick} />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(handleClick).toHaveBeenCalled();
});

it("checkedの場合、アイコンの色が変わる", () => {
  render(<IconButton icon="star" aria-label="お気に入り" checked={true} />);
  const iconText = screen.getByText("star");
  const iconSpan = iconText.closest("span");
  expect(iconSpan).toHaveClass("icon-fill");
});

it("isLoadingのとき、スピナーが表示される", () => {
  render(<IconButton icon="sync" aria-label="同期" isLoading />);
  expect(screen.getByTestId("spinner")).toBeInTheDocument();
});

it("size='s'で小さいサイズが適用される", () => {
  render(<IconButton icon="small" aria-label="小さい" size="s" />);
  const btn = screen.getByRole("button");
  expect(btn.className).toContain("w-7 h-7");
});
