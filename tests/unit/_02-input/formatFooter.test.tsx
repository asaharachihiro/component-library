import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FormFooter } from "../../../src/components/_02-input/Form/FormFooter";

describe("FormFooter", () => {
  it("stepが指定されていない場合はchildrenのみ表示される", () => {
    render(
      <FormFooter id="footer2">
        <span>完了</span>
      </FormFooter>
    );
    expect(screen.getByText("完了")).toBeInTheDocument();
    expect(screen.queryByText("もどる")).not.toBeInTheDocument();
    expect(screen.queryByText("次へ")).not.toBeInTheDocument();
  });

  it("stepが2以上の場合、初期は次へボタンが表示される", () => {
    render(<FormFooter id="footer3" step={2} />);
    expect(screen.getByText("次へ")).toBeInTheDocument();
    expect(screen.queryByText("もどる")).not.toBeInTheDocument();
  });

  it("次へボタンを押すとページが進み、もどるボタンが表示される", () => {
    render(<FormFooter id="footer4" step={2} />);
    fireEvent.click(screen.getByText("次へ"));
    expect(screen.getByText("もどる")).toBeInTheDocument();
    // step=2なので次へボタンは消える
    expect(screen.queryByText("次へ")).not.toBeInTheDocument();
  });

  it("stepの最終ページではchildrenが表示される", () => {
    render(
      <FormFooter id="footer5" step={2}>
        <span>最終</span>
      </FormFooter>
    );
    // 1ページ目: 次へ
    fireEvent.click(screen.getByText("次へ"));
    // 2ページ目: children
    expect(screen.getByText("最終")).toBeInTheDocument();
  });

  it("stepが3の場合、ページ遷移ごとにボタン表示が変わる", () => {
    render(
      <FormFooter id="footer6" step={3}>
        <span>完了</span>
      </FormFooter>
    );
    // 1ページ目: 次へのみ
    expect(screen.getByText("次へ")).toBeInTheDocument();
    expect(screen.queryByText("もどる")).not.toBeInTheDocument();

    // 2ページ目: もどると次へ
    fireEvent.click(screen.getByText("次へ"));
    expect(screen.getByText("もどる")).toBeInTheDocument();
    expect(screen.getByText("次へ")).toBeInTheDocument();

    // 3ページ目: もどるとchildren
    fireEvent.click(screen.getByText("次へ"));
    expect(screen.getByText("もどる")).toBeInTheDocument();
    expect(screen.getByText("完了")).toBeInTheDocument();
    expect(screen.queryByText("次へ")).not.toBeInTheDocument();
  });
});
