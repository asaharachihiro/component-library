import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Pagenation } from "../../../src/components/_07-display/Pagenation/Pagenation";

describe("Pagenation", () => {
  it("idがdivに反映される", () => {
    render(<Pagenation id="pagenation1" total={5} />);
    const root = document.getElementById("pagenation1");
    expect(root).toBeTruthy();
  });

  it("totalが1以下の場合は何も描画されない", () => {
    render(<Pagenation id="pagenation2" total={1} />);
    expect(document.getElementById("pagenation2")).toBeNull();
  });

  it("totalがmaxLength以下の場合は全ページ番号が表示される", () => {
    render(<Pagenation id="pagenation3" total={5} maxLength={7} />);
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByText(i.toString())).toBeInTheDocument();
    }
    expect(screen.queryByText("…")).toBeNull();
  });

  it("totalがmaxLengthより多い場合は省略記号が表示される", () => {
    render(<Pagenation id="pagenation4" total={10} maxLength={7} />);
    expect(screen.getAllByText("…").length).toBeGreaterThan(0);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("初期値valueが反映される", () => {
    render(<Pagenation id="pagenation5" total={5} value={3} />);
    const selected = screen.getByText("3").parentElement;
    expect(selected?.className).toContain("rounded-full bg-black-10-opacity");
  });

  it("ページ番号をクリックすると選択状態が変わる", () => {
    render(<Pagenation id="pagenation6" total={5} />);
    const page3 = screen.getByText("3");
    fireEvent.click(page3);
    expect(page3.parentElement?.className).toContain(
      "rounded-full bg-black-10-opacity"
    );
  });

  it("左矢印は1ページ目でdisabled、右矢印は最終ページでdisabled", () => {
    render(<Pagenation id="pagenation7" total={3} />);
    const leftArrow = screen.getByText("chevron_left");
    const rightArrow = screen.getByText("chevron_right");
    expect(leftArrow.closest("button")).toBeDisabled();
    fireEvent.click(screen.getByText("2"));
    expect(leftArrow.closest("button")).not.toBeDisabled();
    fireEvent.click(screen.getByText("3"));
    expect(rightArrow.closest("button")).toBeDisabled();
  });

  it("maxLengthを変更すると表示されるページ数が変わる", () => {
    render(<Pagenation id="pagenation8" total={10} maxLength={5} />);
    // 1, …, 4, 5, …, 10 などが表示される
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getAllByText("…").length).toBeGreaterThan(0);
  });
});
