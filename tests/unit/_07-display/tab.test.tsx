import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Tab } from "../../../src/components/_07-display/Tab/Tab";

const tabs = [
  { id: "tab1", label: "タブ1", content: <div>コンテンツ1</div> },
  { id: "tab2", label: "タブ2", content: <div>コンテンツ2</div> },
  { id: "tab3", label: "タブ3", content: <div>コンテンツ3</div> },
];

describe("Tab", () => {
  it("idがdivに反映される", () => {
    render(<Tab id="tab-root" tabs={tabs} />);
    const root = document.getElementById("tab-root");
    expect(root).toBeTruthy();
  });

  it("tabsのlabelがすべて描画される", () => {
    render(<Tab id="tab-root2" tabs={tabs} />);
    tabs.forEach((tab) => {
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });
  });

  it("初期状態でselectedのタブが開いている", () => {
    render(<Tab id="tab-root3" tabs={tabs} selected="tab2" />);
    expect(screen.getByText("コンテンツ2")).toBeInTheDocument();
    expect(screen.queryByText("コンテンツ1")).toBeNull();
    expect(screen.queryByText("コンテンツ3")).toBeNull();
  });

  it("タブをクリックすると対応するコンテンツが表示される", () => {
    render(<Tab id="tab-root4" tabs={tabs} />);
    fireEvent.click(screen.getByText("タブ3"));
    expect(screen.getByText("コンテンツ3")).toBeInTheDocument();
    expect(screen.queryByText("コンテンツ1")).toBeNull();
    expect(screen.queryByText("コンテンツ2")).toBeNull();
  });

  it("role=tablist, tab, tabpanelが正しく付与される", () => {
    render(<Tab id="tab-root5" tabs={tabs} />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    tabs.forEach((tab) => {
      expect(screen.getByRole("tab", { name: tab.label })).toBeInTheDocument();
    });
    // 開いているタブのtabpanelのみ表示
    expect(screen.getByRole("tabpanel")).toBeInTheDocument();
  });

  it("tabsが空の場合は何も描画されない", () => {
    render(<Tab id="tab-root7" tabs={[]} />);
    expect(screen.queryByRole("tab")).toBeNull();
    expect(screen.queryByRole("tabpanel")).toBeNull();
  });
});
