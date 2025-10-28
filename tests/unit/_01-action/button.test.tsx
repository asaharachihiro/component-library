import { render, screen } from "@testing-library/react";
import { Button } from "../../../src/components/_01-action/Button/Button";
import { it, expect } from "vitest";

it("label が表示される", () => {
  render(<Button label="Click me" variant="primary" />);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

it("icon が表示される", () => {
  render(<Button label="Icon" icon="star" variant="primary" />);
  expect(screen.getByText("star")).toBeInTheDocument();
});

it("isLoading のとき Spinner が表示される", () => {
  render(<Button label="Loading" isLoading variant="primary" />);
  expect(screen.getByText("progress_activity")).toBeInTheDocument();
});

it("disabled のときボタンが無効化される", () => {
  render(<Button label="Disabled" disabled={true} variant="primary" />);
  expect(screen.getByRole("button")).toBeDisabled();
});

it("variant='primary' で primary スタイルが適用される", () => {
  render(<Button label="primary" variant="primary" />);
  const btn = screen.getByRole("button");
  expect(btn.className).toContain("bg-primary");
});

it("variant='secondary' で secondary スタイルが適用される", () => {
  render(<Button label="Secondary" variant="secondary" />);
  const btn = screen.getByRole("button");
  expect(btn.className).toContain("border-primary");
});
it("variant='textPrimary' で textPrimary スタイルが適用される", () => {
  render(<Button label="textPrimary" variant="textPrimary" />);
  const btn = screen.getByRole("button");
  expect(btn.className).toContain("text-primary");
});
it("variant='textSecondary' で textSecondary スタイルが適用される", () => {
  render(<Button label="textSecondary" variant="textSecondary" />);
  const btn = screen.getByRole("button");
  expect(btn.className).toContain("text-black-sub");
});
it("variant='danger' で danger スタイルが適用される", () => {
  render(<Button label="Danger" variant="danger" />);
  const btn = screen.getByRole("button");
  expect(btn.className).toContain("bg-danger");
});
it("variant='textDanger' で textDanger スタイルが適用される", () => {
  render(<Button label="textDanger" variant="textDanger" />);
  const btn = screen.getByRole("button");
  expect(btn.className).toContain("text-danger");
});

it("size='s' で小さいサイズが適用される", () => {
  render(<Button label="Small" variant="primary" size="s" />);
  const btn = screen.getByRole("button");
  expect(btn.className).toContain("h-7");
});

it("isActive のときスタイルが変化する", () => {
  render(<Button label="Active" variant="secondary" isActive />);
  const btn = screen.getByRole("button");
  expect(btn.className).toContain("bg-primary-sub");
});

it("type 属性が 'button' である", () => {
  render(<Button label="Type" variant="primary" />);
  const btn = screen.getByRole("button");
  expect(btn).toHaveAttribute("type", "button");
});
