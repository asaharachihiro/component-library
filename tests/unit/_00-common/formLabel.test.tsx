import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FormLabel } from "../../../src/components/_00-common/FormLabel";

describe("FormLabel", () => {
  it("labelテキストが表示される", () => {
    render(<FormLabel label="ユーザー名" />);
    expect(screen.getByText("ユーザー名")).toBeInTheDocument();
  });

  it("必須マークが表示される", () => {
    render(<FormLabel label="パスワード" isRequired={true} />);
    expect(screen.getByText("必須")).toBeInTheDocument();
  });

  it("Tooltipが表示される", () => {
    render(
      <FormLabel label="メール" tooltip={<span>"メールアドレス形式"</span>} />
    );
    expect(screen.getByText("info")).toBeInTheDocument();
  });
});
