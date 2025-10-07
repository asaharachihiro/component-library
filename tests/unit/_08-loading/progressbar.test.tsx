import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Progressbar } from "../../../src/components/_08-loading/Progressbar/Progressbar";

describe("Progressbar", () => {
  it("idがdivに反映される", () => {
    render(<Progressbar id="pb1" />);
    const root = document.getElementById("pb1");
    expect(root).toBeTruthy();
  });

  it("percentage指定時はwidthが正しく反映される", () => {
    render(<Progressbar percentage={75} />);
    const bar = document.querySelector(".bg-main.transition-all");
    expect(bar).toBeTruthy();
    expect(bar).toHaveStyle({ width: "75%" });
  });

  it("percentageが0未満の場合はwidthが0%になる", () => {
    render(<Progressbar percentage={-10} />);
    const bar = document.querySelector(".bg-main.transition-all");
    expect(bar).toHaveStyle({ width: "0%" });
  });

  it("percentageが100を超える場合はwidthが100%になる", () => {
    render(<Progressbar percentage={120} />);
    const bar = document.querySelector(".bg-main.transition-all");
    expect(bar).toHaveStyle({ width: "100%" });
  });

  it("percentage未指定時はアニメーションバーが表示される", () => {
    render(<Progressbar />);
    const bar = document.querySelector(".animate-progress");
    expect(bar).toBeTruthy();
    expect(bar?.className).toContain("w-[100%]");
  });
});
