import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Topbar } from "../../../src/components/_06-navigation/Topbar/Topbar";

describe("Topbar", () => {
  it("idがnav要素に反映される", () => {
    render(
      <Topbar id="topbar1">
        <li>Item</li>
      </Topbar>
    );
    const nav = document.getElementById("topbar1");
    expect(nav).toBeTruthy();
  });

  it("childrenがul内に描画される", () => {
    render(
      <Topbar id="topbar2">
        <li>Item1</li>
        <li>Item2</li>
      </Topbar>
    );
    const ul = screen.getByRole("list");
    expect(ul.children.length).toBe(2);
    expect(screen.getByText("Item1")).toBeInTheDocument();
    expect(screen.getByText("Item2")).toBeInTheDocument();
  });

  it("align=leftのときjustify-startが付与される", () => {
    render(
      <Topbar id="topbar3" align="left">
        <li>Item</li>
      </Topbar>
    );
    const div = document.querySelector(".fixed.left-0.top-0");
    expect(div?.className).toContain("justify-start");
  });

  it("align=centerのときjustify-centerが付与される", () => {
    render(
      <Topbar id="topbar4" align="center">
        <li>Item</li>
      </Topbar>
    );
    const div = document.querySelector(".fixed.left-0.top-0");
    expect(div?.className).toContain("justify-center");
  });

  it("align=rightのときjustify-endが付与される", () => {
    render(
      <Topbar id="topbar5" align="right">
        <li>Item</li>
      </Topbar>
    );
    const div = document.querySelector(".fixed.left-0.top-0");
    expect(div?.className).toContain("justify-end");
  });

  it("align未指定時はjustify-endが付与される", () => {
    render(
      <Topbar id="topbar6">
        <li>Item</li>
      </Topbar>
    );
    const div = document.querySelector(".fixed.left-0.top-0");
    expect(div?.className).toContain("justify-end");
  });
});
