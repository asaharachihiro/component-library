import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FilePicker } from "../../../src/components/_02-input/FilePicker/FilePicker";

function createFile(name: string, type = "text/plain") {
  return new File(["dummy content"], name, { type });
}

describe("FilePicker", () => {
  it("fileFormatsがaccept属性に反映される", () => {
    render(<FilePicker id="fp3" fileFormats={[".jpg", ".png"]} />);
    const input = screen.getByTestId("file-input");
    expect(input).toHaveAttribute("accept", ".jpg,.png");
  });

  it("disabledでinputとボタンが無効化される", () => {
    render(<FilePicker id="fp4" disabled />);
    const input = screen.getByTestId("file-input");
    expect(input).toBeDisabled();
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
  });

  it("isMultipleで複数ファイル選択できる", () => {
    render(<FilePicker id="fp5" isMultiple />);
    const input = screen.getByTestId("file-input");
    expect(input).toHaveAttribute("multiple");
  });

  it("onChangeがファイル選択時に発火する", () => {
    const handleChange = vi.fn();
    render(<FilePicker id="fp6" onChange={handleChange} />);
    const input = screen.getByTestId("file-input");
    const file = createFile("test.txt");
    fireEvent.change(input, { target: { files: [file] } });
    expect(handleChange).toHaveBeenCalledWith([file]);
  });

  it("ドラッグ＆ドロップでファイル選択できる", () => {
    const handleChange = vi.fn();
    render(<FilePicker id="fp7" onChange={handleChange} />);
    const dropArea = screen
      .getByText("ファイルをドラッグ＆ドロップ")
      .closest("div");
    const file = createFile("drag.txt");
    fireEvent.dragOver(dropArea!);
    fireEvent.drop(dropArea!, {
      dataTransfer: { files: [file] },
    });
    expect(handleChange).toHaveBeenCalledWith([file]);
  });

  it("選択したファイル名が表示される", () => {
    render(<FilePicker id="fp8" />);
    const input = screen.getByTestId("file-input");
    const file = createFile("visible.txt");
    fireEvent.change(input, { target: { files: [file] } });
    expect(screen.getByText("visible.txt")).toBeInTheDocument();
  });

  it("ファイル削除ボタンでファイルが消える", () => {
    render(<FilePicker id="fp9" />);
    const input = screen.getByTestId("file-input");
    const file = createFile("delete.txt");
    fireEvent.change(input, { target: { files: [file] } });
    const deleteBtn = screen.getByRole("button", { name: /close/ });
    fireEvent.click(deleteBtn);
    expect(screen.queryByText("delete.txt")).not.toBeInTheDocument();
  });
});
