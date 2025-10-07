import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "../../../src/components/_07-display/Modal/Modal";

describe("Modal", () => {
  it("isOpen=falseのとき何も描画されない", () => {
    render(
      <Modal id="modal1" title="タイトル" isOpen={false} onClose={() => {}} />
    );
    expect(screen.queryByText("タイトル")).toBeNull();
  });

  it("id, title, childrenが正しく描画される", () => {
    render(
      <Modal id="modal2" title="タイトル" isOpen={true} onClose={() => {}}>
        <div>モーダル内容</div>
      </Modal>
    );
    const modal = document.getElementById("modal2");
    expect(modal).toBeTruthy();
    expect(screen.getByText("タイトル")).toBeInTheDocument();
    expect(screen.getByText("モーダル内容")).toBeInTheDocument();
  });

  it("isDeletable=falseのとき閉じるボタンが表示されない", () => {
    render(
      <Modal
        id="modal3"
        title="タイトル"
        isOpen={true}
        isDeletable={false}
        onClose={() => {}}
      />
    );
    expect(screen.queryByLabelText("closeModal")).toBeNull();
  });

  it("isDeletable=trueのとき閉じるボタンが表示される", () => {
    render(
      <Modal
        id="modal4"
        title="タイトル"
        isOpen={true}
        isDeletable={true}
        onClose={() => {}}
      />
    );
    expect(screen.getByLabelText("closeModal")).toBeInTheDocument();
  });

  it("confirmButtonが表示される", () => {
    render(
      <Modal
        id="modal5"
        title="タイトル"
        isOpen={true}
        onClose={() => {}}
        confirmButton={<button>確認</button>}
      />
    );
    expect(screen.getByText("確認")).toBeInTheDocument();
  });

  it("閉じるボタンをクリックするとonCloseが呼ばれる", () => {
    const handleClose = vi.fn();
    render(
      <Modal id="modal6" title="タイトル" isOpen={true} onClose={handleClose} />
    );
    fireEvent.click(screen.getByLabelText("closeModal"));
    expect(handleClose).toHaveBeenCalled();
  });

  it("onBeforeCloseがfalseを返すとonCloseが呼ばれない", async () => {
    const handleClose = vi.fn();
    const handleBeforeClose = vi.fn().mockResolvedValue(false);
    render(
      <Modal
        id="modal7"
        title="タイトル"
        isOpen={true}
        onClose={handleClose}
        onBeforeClose={handleBeforeClose}
      />
    );
    await act(async () => {
      fireEvent.click(screen.getByLabelText("closeModal"));
    });
    expect(handleBeforeClose).toHaveBeenCalled();
    expect(handleClose).not.toHaveBeenCalled();
  });

  it("onBeforeCloseがtrueを返すとonCloseが呼ばれる", async () => {
    const handleClose = vi.fn();
    const handleBeforeClose = vi.fn().mockResolvedValue(true);
    render(
      <Modal
        id="modal8"
        title="タイトル"
        isOpen={true}
        onClose={handleClose}
        onBeforeClose={handleBeforeClose}
      />
    );
    await act(async () => {
      fireEvent.click(screen.getByLabelText("closeModal"));
    });
    expect(handleBeforeClose).toHaveBeenCalled();
    expect(handleClose).toHaveBeenCalled();
  });

  it("モーダル外側クリックでonCloseが呼ばれる", () => {
    const handleClose = vi.fn();
    render(
      <Modal id="modal9" title="タイトル" isOpen={true} onClose={handleClose} />
    );
    // モーダル外側（背景）をクリック
    const overlay = screen.getByText("タイトル").closest(".fixed");
    fireEvent.click(overlay!);
    expect(handleClose).toHaveBeenCalled();
  });

  it("モーダル内側クリックではonCloseが呼ばれない", () => {
    const handleClose = vi.fn();
    render(
      <Modal id="modal10" title="タイトル" isOpen={true} onClose={handleClose}>
        <div>モーダル内容</div>
      </Modal>
    );
    const modal = document.getElementById("modal10");
    fireEvent.click(modal!);
    expect(handleClose).not.toHaveBeenCalled();
  });
});
