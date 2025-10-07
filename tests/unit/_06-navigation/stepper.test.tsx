import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stepper } from "../../../src/components/_06-navigation/Stepper/Stepper";

const steps: {
  label: string;
  status: "completed" | "inprogress" | "incomplete";
}[] = [
  { label: "ステップ1", status: "completed" },
  { label: "ステップ2", status: "inprogress" },
  { label: "ステップ3", status: "incomplete" },
];

describe("Stepper", () => {
  it("idとclassNameがdivに反映される", () => {
    render(<Stepper id="stepper1" className="custom-class" steps={steps} />);
    const root = document.getElementById("stepper1");
    expect(root).toBeTruthy();
    expect(root?.className).toContain("custom-class");
  });

  it("stepsのlabelがすべて描画される", () => {
    render(<Stepper id="stepper2" steps={steps} />);
    steps.forEach((step) => {
      expect(screen.getByText(step.label)).toBeInTheDocument();
    });
  });

  it("completedステップはcheck_circleアイコンが表示される", () => {
    render(<Stepper id="stepper3" steps={steps} />);
    expect(screen.getByText("check_circle")).toBeInTheDocument();
  });

  it("inprogressステップは番号とbg-main, text-white, font-boldが付与される", () => {
    render(<Stepper id="stepper4" steps={steps} />);
    const inprogressStep = screen.getByLabelText("ステップ 2: ステップ2");
    const icon = inprogressStep.querySelector("span");
    expect(icon?.className).toContain("bg-main");
    expect(icon?.className).toContain("text-white");
    expect(icon?.className).toContain("font-bold");
    expect(icon?.textContent).toBe("2");
    const label = inprogressStep.querySelector("div");
    expect(label?.className).toContain("text-main");
    expect(label?.className).toContain("font-bold");
  });

  it("incompleteステップは番号とborder, text-black-subが付与される", () => {
    render(<Stepper id="stepper5" steps={steps} />);
    const incompleteStep = screen.getByLabelText("ステップ 3: ステップ3");
    const icon = incompleteStep.querySelector("span");
    expect(icon?.className).toContain("border");
    expect(icon?.className).toContain("text-black-sub");
    expect(icon?.textContent).toBe("3");
    const label = incompleteStep.querySelector("div");
    expect(label?.className).toContain("text-black-sub");
  });

  it("separatorがステップ間に描画される", () => {
    render(<Stepper id="stepper6" steps={steps} />);
    // separatorはsteps.length-1個
    const separators = document.querySelectorAll(".bg-black-20-opacity");
    expect(separators.length).toBe(steps.length - 1);
  });

  it("inprogressステップにはaria-current=stepが付与される", () => {
    render(<Stepper id="stepper7" steps={steps} />);
    const inprogressStep = screen.getByLabelText("ステップ 2: ステップ2");
    expect(inprogressStep).toHaveAttribute("aria-current", "step");
  });

  it("completed/incompleteステップにはaria-currentが付与されない", () => {
    render(<Stepper id="stepper8" steps={steps} />);
    const completedStep = screen.getByLabelText("ステップ 1: ステップ1");
    const incompleteStep = screen.getByLabelText("ステップ 3: ステップ3");
    expect(completedStep).not.toHaveAttribute("aria-current");
    expect(incompleteStep).not.toHaveAttribute("aria-current");
  });
});
