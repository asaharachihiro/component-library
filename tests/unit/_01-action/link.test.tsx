import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Link } from "../../../src/components/_01-action/Link/Link";

describe("Link", () => {
  it("labelが表示される", () => {
    render(<Link label="公式サイト" href="https://example.com" />);
    expect(screen.getByText("公式サイト")).toBeInTheDocument();
  });

  it("href属性が反映される", () => {
    render(<Link label="リンク" href="https://example.com" />);
    const anchor = screen.getByRole("link");
    expect(anchor).toHaveAttribute("href", "https://example.com");
  });

  it("target='_blank'のときopen_in_newアイコンが表示される", () => {
    render(<Link label="新規" href="#" target="_blank" />);
    expect(screen.getByText("open_in_new")).toBeInTheDocument();
  });

  it("target='_blank'のときrel属性がnoopener noreferrerになる", () => {
    render(<Link label="新規" href="#" target="_blank" />);
    const anchor = screen.getByRole("link");
    expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("target未指定のときrel属性はprops.relが反映される", () => {
    render(<Link label="通常" href="#" rel="author" />);
    const anchor = screen.getByRole("link");
    expect(anchor).toHaveAttribute("rel", "author");
  });
});
