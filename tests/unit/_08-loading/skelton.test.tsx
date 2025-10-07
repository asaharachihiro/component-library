import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Skelton } from "../../../src/components/_08-loading/Skelton/Skelton";

describe("Skelton", () => {
  it("rounded=mdのときrounded-mdが付与される", () => {
    render(<Skelton rounded="md" />);
    const inner = document.querySelector(".rounded-md");
    expect(inner).toBeTruthy();
  });

  it("rounded=lgのときrounded-lgが付与される", () => {
    render(<Skelton rounded="lg" />);
    const inner = document.querySelector(".rounded-lg");
    expect(inner).toBeTruthy();
  });

  it("rounded=fullのときrounded-fullが付与される", () => {
    render(<Skelton rounded="full" />);
    const inner = document.querySelector(".rounded-full");
    expect(inner).toBeTruthy();
  });

  it("rounded未指定時はrounded-mdが付与される", () => {
    render(<Skelton />);
    const inner = document.querySelector(".rounded-md");
    expect(inner).toBeTruthy();
  });

  it("アニメーションと背景スタイルが付与される", () => {
    render(<Skelton />);
    const inner = document.querySelector(".animate-shimmer");
    expect(inner).toBeTruthy();
    expect(inner).toHaveStyle({
      backgroundImage:
        "linear-gradient(90deg, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 75%)",
      backgroundSize: "200% 100%",
    });
    expect(inner?.className).toContain("bg-black-10-opacity");
  });
});
