import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ToastItem } from "../../../src/components/_05-notification/Toast/ToastItem";

describe("ToastItem", () => {
  it("idとmessageが正しく描画される", () => {
    render(<ToastItem id="toast1" message="テストメッセージ" />);
    const root = document.getElementById("toast1");
    expect(root).toBeTruthy();
    expect(screen.getByText("テストメッセージ")).toBeInTheDocument();
  });

  it("type=successのとき成功アイコンとスタイルが付与される", () => {
    render(<ToastItem id="toast2" message="成功" type="success" />);
    const root = document.getElementById("toast2");
    expect(root?.className).toContain("border-success");
    expect(root?.className).toContain("text-success");
    expect(screen.getByText("check_circle")).toBeInTheDocument();
  });

  it("type=errorのときエラーアイコンとスタイルが付与される", () => {
    render(<ToastItem id="toast3" message="エラー" type="error" />);
    const root = document.getElementById("toast3");
    expect(root?.className).toContain("border-danger");
    expect(root?.className).toContain("text-danger");
    expect(screen.getByText("emergency_home")).toBeInTheDocument();
  });

  it("type=normalのときアイコンは表示されない", () => {
    render(<ToastItem id="toast4" message="ノーマル" type="normal" />);
    expect(screen.queryByText("check_circle")).toBeNull();
    expect(screen.queryByText("emergency_home")).toBeNull();
  });

  it("childrenが描画される", () => {
    render(
      <ToastItem id="toast5" message="子要素">
        <button data-testid="child-btn">ボタン</button>
      </ToastItem>
    );
    expect(screen.getByTestId("child-btn")).toBeInTheDocument();
  });

  it("autoDelete=trueの場合、5秒後に非表示になり、さらに1秒後にDOMから消える", async () => {
    vi.useFakeTimers();
    render(<ToastItem id="toast6" message="自動削除" autoDelete />);
    expect(document.getElementById("toast6")).toBeTruthy();

    // 5秒後に非表示（isVisible=false, animate-fadeout）
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    const root = document.getElementById("toast6");
    expect(root?.className).toContain("animate-fadeout");

    // さらに1秒後にDOMから消える
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(document.getElementById("toast6")).toBeNull();

    vi.useRealTimers();
  });
});
