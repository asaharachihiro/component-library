import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Card } from "../../../src/components/_04-list/Card/Card";
import React from "react";

describe("Card", () => {
  it("childrenが表示される", () => {
    render(<Card id="card2">テスト内容</Card>);
    expect(screen.getByText("テスト内容")).toBeInTheDocument();
  });

  it("selected=trueでdata-selected属性がtrueになる", () => {
    render(
      <Card id="3" selected>
        選択済み
      </Card>
    );
    const wrapper = screen.getByTestId("card-3");
    expect(wrapper).toHaveAttribute("data-selected", "true");
  });

  it("selected=falseでdata-selected属性がfalseになる", () => {
    render(
      <Card id="4" selected={false}>
        未選択
      </Card>
    );
    const wrapper = screen.getByTestId("card-4");
    expect(wrapper).toHaveAttribute("data-selected", "false");
  });

  it("onClickが親要素クリックで発火する", () => {
    const handleClick = vi.fn();
    render(
      <Card id="5" onClick={handleClick}>
        クリック
      </Card>
    );
    const wrapper = screen.getByTestId("card-5");
    fireEvent.click(wrapper);
    expect(handleClick).toHaveBeenCalledWith("5");
  });

  it("EnterキーでonClickが発火する", () => {
    const handleClick = vi.fn();
    render(
      <Card id="6" onClick={handleClick}>
        キーボード
      </Card>
    );
    const wrapper = screen.getByTestId("card-6");

    wrapper?.focus();
    fireEvent.keyDown(wrapper, { key: "Enter" });
    expect(handleClick).toHaveBeenCalledWith("6");
  });

  it("子要素のonClickは親のonClickを発火させず、stopPropagationされる", () => {
    const parentClick = vi.fn();
    const childClick = vi.fn();
    render(
      <Card id="card7" onClick={parentClick}>
        <button onClick={childClick}>子ボタン</button>
      </Card>
    );
    const childBtn = screen.getByText("子ボタン");
    fireEvent.click(childBtn);
    expect(childClick).toHaveBeenCalled();
    expect(parentClick).not.toHaveBeenCalled();
  });

  it.skip("子要素のonChangeは親のonClickを発火させず、stopPropagationされる", () => {
    const parentClick = vi.fn();
    const childChange = vi.fn();
    const ControlledCheckbox = ({
      onChange,
    }: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }) => {
      const [checked, setChecked] = React.useState(false);
      return (
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
            onChange(e);
          }}
        />
      );
    };

    render(
      <Card id="card8" onClick={parentClick}>
        <ControlledCheckbox onChange={childChange} />
      </Card>
    );
    const input = screen.getByRole("checkbox");
    fireEvent.change(input, { target: { checked: true } });
    expect(childChange).toHaveBeenCalled();
    expect(parentClick).not.toHaveBeenCalled();
  });
});
