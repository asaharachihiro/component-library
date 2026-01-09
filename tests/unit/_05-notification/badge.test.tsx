import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "../../../src/components/_05-notification/Badge/Badge";

describe("Badge", () => {
  it("countが0以下の場合は何も描画しない", () => {
    const { container } = render(<Badge id="badge1" count={0} />);
    expect(container.querySelector("#badge1")).toBeNull();
  });

  it("typeがdotの場合はドットのみ描画される", () => {
    render(<Badge id="badge2" count={1} type="dot" />);
    const badge =
      screen.getByRole("presentation", { hidden: true }) ||
      document.getElementById("badge2");
    expect(badge).toBeTruthy();
    expect(badge?.textContent).toBe("");
    expect(badge?.className).toContain("h-2 w-2");
  });

  it("typeがcounterの場合はカウントが描画される", () => {
    render(<Badge id="badge3" count={5} type="counter" />);
    const badge = document.getElementById("badge3");
    expect(badge).toBeTruthy();
    expect(badge?.textContent).toBe("5");
  });

  it("countが99より大きい場合は99+と表示される", () => {
    render(<Badge id="badge4" count={120} type="counter" />);
    const badge = document.getElementById("badge4");
    expect(badge).toBeTruthy();
    expect(badge?.textContent).toBe("99+");
  });

  it("classNameが追加される", () => {
    render(<Badge id="badge5" count={1} className="custom-class" />);
    const badge = document.getElementById("badge5");
    expect(badge).toBeTruthy();
    expect(badge?.className).toContain("custom-class");
  });

  it("type未指定時はdotとして描画される", () => {
    render(<Badge id="badge6" count={2} />);
    const badge = document.getElementById("badge6");
    expect(badge).toBeTruthy();
    expect(badge?.className).toContain("h-2 w-2");
  });
});
