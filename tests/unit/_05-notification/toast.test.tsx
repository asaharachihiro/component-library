import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Toast } from "../../../src/components/_05-notification/Toast/Toast";

describe("Toast", () => {
  it("childrenが描画される", () => {
    render(<Toast>テストトースト</Toast>);
    expect(document.body.textContent).toContain("テストトースト");
  });

  it("positionがtop-rightのとき正しいクラスが付与される", () => {
    render(<Toast position="top-right">top-right</Toast>);
    const toast = document.querySelector(".absolute");
    expect(toast?.className).toContain("top-0 right-0");
    expect(toast?.className).toContain("flex-col-reverse");
  });

  it("positionがtop-leftのとき正しいクラスが付与される", () => {
    render(<Toast position="top-left">top-left</Toast>);
    const toast = document.querySelector(".absolute");
    expect(toast?.className).toContain("top-0 left-0");
    expect(toast?.className).toContain("flex-col-reverse");
  });

  it("positionがtop-centerのとき正しいクラスが付与される", () => {
    render(<Toast position="top-center">top-center</Toast>);
    const toast = document.querySelector(".absolute");
    expect(toast?.className).toContain("top-0 left-1/2");
    expect(toast?.className).toContain("-translate-x-1/2");
    expect(toast?.className).toContain("flex-col-reverse");
  });

  it("positionがbottom-rightのとき正しいクラスが付与される", () => {
    render(<Toast position="bottom-right">bottom-right</Toast>);
    const toast = document.querySelector(".absolute");
    expect(toast?.className).toContain("bottom-0 right-0");
    expect(toast?.className).not.toContain("flex-col-reverse");
  });

  it("positionがbottom-leftのとき正しいクラスが付与される", () => {
    render(<Toast position="bottom-left">bottom-left</Toast>);
    const toast = document.querySelector(".absolute");
    expect(toast?.className).toContain("bottom-0 left-0");
    expect(toast?.className).not.toContain("flex-col-reverse");
  });

  it("positionがbottom-centerのとき正しいクラスが付与される", () => {
    render(<Toast position="bottom-center">bottom-center</Toast>);
    const toast = document.querySelector(".absolute");
    expect(toast?.className).toContain("bottom-0 left-1/2");
    expect(toast?.className).toContain("-translate-x-1/2");
    expect(toast?.className).not.toContain("flex-col-reverse");
  });

  it("position未指定時はtop-rightのクラスが付与される", () => {
    render(<Toast>default</Toast>);
    const toast = document.querySelector(".absolute");
    expect(toast?.className).toContain("top-0 right-0");
    expect(toast?.className).toContain("flex-col-reverse");
  });
});
