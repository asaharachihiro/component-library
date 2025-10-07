import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HeaderCell } from "../../../src/components/_04-list/Table/TableHeaderCell";
import { fi } from "date-fns/locale";

// ダミーheaderオブジェクト
const dummyHeader = {
  id: "col1",
  column: {
    columnDef: {
      header: () => "ヘッダー",
    },
    getCanSort: () => true,
    getIsSorted: () => "asc",
    getNextSortingOrder: () => "desc",
    getCanResize: () => true,
    getIsResizing: () => false,
  },
  getContext: () => ({}),
  getSize: () => 120,
} as any;

describe("HeaderCell", () => {
  it("ヘッダー内容が表示される", () => {
    render(
      <table>
        <thead>
          <tr>
            <HeaderCell
              header={dummyHeader}
              sorting={[]}
              columnSizing={{}}
              resizing={{ isResizing: false, offset: 0 }}
              isPinned={false}
              showPanel={null}
              setShowPanel={vi.fn()}
              panelPosition={{ top: 0, left: 0 }}
              setPanelPosition={vi.fn()}
              setColumnPinning={vi.fn()}
              setSorting={vi.fn()}
              handleMouseDown={vi.fn()}
              handleColumnDrop={vi.fn()}
            />
          </tr>
        </thead>
      </table>
    );
    expect(screen.getByText("ヘッダー")).toBeInTheDocument();
  });

  it("ソートボタンが表示される", () => {
    render(
      <table>
        <thead>
          <tr>
            <HeaderCell
              header={dummyHeader}
              sorting={[]}
              columnSizing={{}}
              resizing={{ isResizing: false, offset: 0 }}
              isPinned={false}
              showPanel={null}
              setShowPanel={vi.fn()}
              panelPosition={{ top: 0, left: 0 }}
              setPanelPosition={vi.fn()}
              setColumnPinning={vi.fn()}
              setSorting={vi.fn()}
              handleMouseDown={vi.fn()}
              handleColumnDrop={vi.fn()}
            />
          </tr>
        </thead>
      </table>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("リサイズハンドルが表示される", () => {
    render(
      <table>
        <thead>
          <tr>
            <HeaderCell
              header={dummyHeader}
              sorting={[]}
              columnSizing={{}}
              resizing={{ isResizing: false, offset: 0 }}
              isPinned={false}
              showPanel={null}
              setShowPanel={vi.fn()}
              panelPosition={{ top: 0, left: 0 }}
              setPanelPosition={vi.fn()}
              setColumnPinning={vi.fn()}
              setSorting={vi.fn()}
              handleMouseDown={vi.fn()}
              handleColumnDrop={vi.fn()}
            />
          </tr>
        </thead>
      </table>
    );
    // リサイズハンドルはclassNameで判定
    expect(
      screen.getByRole("columnheader").querySelector(".cursor-col-resize")
    ).toBeInTheDocument();
  });

  it("onDragStartでhandleColumnDropが呼ばれる", () => {
    const handleColumnDrop = vi.fn();
    render(
      <table>
        <thead>
          <tr>
            <HeaderCell
              header={dummyHeader}
              sorting={[]}
              columnSizing={{}}
              resizing={{ isResizing: false, offset: 0 }}
              isPinned={false}
              showPanel={null}
              setShowPanel={vi.fn()}
              panelPosition={{ top: 0, left: 0 }}
              setPanelPosition={vi.fn()}
              setColumnPinning={vi.fn()}
              setSorting={vi.fn()}
              handleMouseDown={vi.fn()}
              handleColumnDrop={handleColumnDrop}
            />
          </tr>
        </thead>
      </table>
    );
    const th = screen.getByRole("columnheader");
    // ドラッグ&ドロップイベントをシミュレート
    const event = new window.Event("drop", { bubbles: true });
    Object.defineProperty(event, "dataTransfer", {
      value: {
        getData: () => "col2",
      },
    });
    th.dispatchEvent(event);
    expect(handleColumnDrop).toHaveBeenCalledWith("col2", "col1");
  });

  it("ソートボタンのクリックでsetSortingが呼ばれる", () => {
    const setSorting = vi.fn();
    render(
      <table>
        <thead>
          <tr>
            <HeaderCell
              header={dummyHeader}
              sorting={[]}
              columnSizing={{}}
              resizing={{ isResizing: false, offset: 0 }}
              isPinned={false}
              showPanel={null}
              setShowPanel={vi.fn()}
              panelPosition={{ top: 0, left: 0 }}
              setPanelPosition={vi.fn()}
              setColumnPinning={vi.fn()}
              setSorting={setSorting}
              handleMouseDown={vi.fn()}
              handleColumnDrop={vi.fn()}
            />
          </tr>
        </thead>
      </table>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(setSorting).toHaveBeenCalled();
  });

  it("togglePanel: resizing中はパネルを開かない", () => {
    const setShowPanel = vi.fn();
    render(
      <table>
        <thead>
          <tr>
            <HeaderCell
              header={dummyHeader}
              sorting={[]}
              columnSizing={{}}
              resizing={{ isResizing: true, offset: 0 }}
              isPinned={false}
              showPanel={null}
              setShowPanel={setShowPanel}
              panelPosition={{ top: 0, left: 0 }}
              setPanelPosition={vi.fn()}
              setColumnPinning={vi.fn()}
              setSorting={vi.fn()}
              handleMouseDown={vi.fn()}
              handleColumnDrop={vi.fn()}
            />
          </tr>
        </thead>
      </table>
    );
    fireEvent.click(screen.getByText("ヘッダー"));
    expect(setShowPanel).not.toHaveBeenCalled();
  });

  it("togglePanel: showPanelが同じidならパネルを閉じる", () => {
    const setShowPanel = vi.fn();
    render(
      <table>
        <thead>
          <tr>
            <HeaderCell
              header={dummyHeader}
              sorting={[]}
              columnSizing={{}}
              resizing={{ isResizing: false, offset: 0 }}
              isPinned={false}
              showPanel={dummyHeader.id}
              setShowPanel={setShowPanel}
              panelPosition={{ top: 0, left: 0 }}
              setPanelPosition={vi.fn()}
              setColumnPinning={vi.fn()}
              setSorting={vi.fn()}
              handleMouseDown={vi.fn()}
              handleColumnDrop={vi.fn()}
            />
          </tr>
        </thead>
      </table>
    );
    fireEvent.click(screen.getByText("ヘッダー"));
    expect(setShowPanel).toHaveBeenCalledWith(null);
  });

  it("togglePanel: showPanelが違うidならパネルを開く", () => {
    const setShowPanel = vi.fn();
    const setPanelPosition = vi.fn();
    render(
      <table>
        <thead>
          <tr>
            <HeaderCell
              header={dummyHeader}
              sorting={[]}
              columnSizing={{}}
              resizing={{ isResizing: false, offset: 0 }}
              isPinned={false}
              showPanel={"other-id"}
              setShowPanel={setShowPanel}
              panelPosition={{ top: 0, left: 0 }}
              setPanelPosition={setPanelPosition}
              setColumnPinning={vi.fn()}
              setSorting={vi.fn()}
              handleMouseDown={vi.fn()}
              handleColumnDrop={vi.fn()}
            />
          </tr>
        </thead>
      </table>
    );
    fireEvent.click(screen.getByText("ヘッダー"));
    expect(setPanelPosition).toHaveBeenCalled();
    expect(setShowPanel).toHaveBeenCalledWith(dummyHeader.id);
  });
});
