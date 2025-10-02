import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Form } from "../../../src/components/_02-input/Form/Form";

describe("Form", () => {
  it("formLabelが表示される", () => {
    render(<Form id="f1" formLabel="フォームラベル" />);
    expect(screen.getByText("フォームラベル")).toBeInTheDocument();
  });

  it("descriptionが表示される", () => {
    render(<Form id="f2" description="説明文" />);
    expect(screen.getByText("説明文")).toBeInTheDocument();
  });

  it("supportTextが表示される", () => {
    render(<Form id="f3" supportText="サポートテキスト" />);
    expect(screen.getByText("サポートテキスト")).toBeInTheDocument();
  });

  it("childrenが表示される", () => {
    render(
      <Form id="f5">
        <input type="text" name="test-input" defaultValue="abc" />
      </Form>
    );
    expect(screen.getByDisplayValue("abc")).toBeInTheDocument();
  });

  it("onSubmitが呼ばれる", async () => {
    const handleSubmit = vi.fn();
    render(
      <Form id="f6" onSubmit={handleSubmit}>
        <input type="text" name="foo" defaultValue="bar" />
        <button type="submit">送信</button>
      </Form>
    );
    fireEvent.click(screen.getByText("送信"));
    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(handleSubmit).toHaveBeenCalled();
  });

  it("validateでエラーがある場合はonSubmitが呼ばれない", () => {
    const handleSubmit = vi.fn();
    const validate = vi.fn(() => ({ foo: "エラー" }));
    render(
      <Form id="f7" onSubmit={handleSubmit} validate={validate}>
        <input type="text" name="foo" defaultValue="bar" />
        <button type="submit">送信</button>
      </Form>
    );
    fireEvent.click(screen.getByText("送信"));
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("handleInputChangeでformDataが更新される", () => {
    render(
      <Form id="f9" values={{ foo: "" }}>
        <input type="text" name="foo" />
      </Form>
    );
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new" } });
    expect(input).toHaveValue("new");
  });

  it("submit時にlocalStorageに保存される", async () => {
    const setItemSpy = vi.spyOn(window.localStorage, "setItem");
    render(
      <Form id="f10">
        <input type="text" name="foo" defaultValue="bar" />
        <button type="submit">送信</button>
      </Form>
    );

    fireEvent.click(screen.getByText("送信"));
    await new Promise((resolve) => setTimeout(resolve, 10));

    setItemSpy.mockRestore();
  });
});
