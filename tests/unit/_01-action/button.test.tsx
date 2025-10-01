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

it("variant='danger' で danger スタイルが適用される", () => {
  render(<Button label="Danger" variant="danger" />);
  const btn = screen.getByRole("button");
  expect(btn.className).toContain("bg-danger");
});

it("variant='secondary' で secondary スタイルが適用される", () => {
  render(<Button label="Secondary" variant="secondary" />);
  const btn = screen.getByRole("button");
  expect(btn.className).toContain("border-main");
});

it("size='s' で小さいサイズが適用される", () => {
  render(<Button label="Small" variant="primary" size="s" />);
  const btn = screen.getByRole("button");
  expect(btn.className).toContain("h-7");
});

it("isActive のときスタイルが変化する", () => {
  render(<Button label="Active" variant="secondary" isActive />);
  const btn = screen.getByRole("button");
  expect(btn.className).toContain("bg-main-bg");
});

it("type 属性が 'button' である", () => {
  render(<Button label="Type" variant="primary" />);
  const btn = screen.getByRole("button");
  expect(btn).toHaveAttribute("type", "button");
});
