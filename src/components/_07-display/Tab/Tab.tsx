import * as React from "react";
import { cn } from "../../../utils/cn";

interface TabProps {
  id: string;
  className?: string;
  selected?: string;
  tabs: { id: string; label: string; content: React.ReactNode }[];
}

export const Tab: React.FC<TabProps> = ({
  id,
  className = "",
  selected = "",
  tabs = [],
}) => {
  // 内部state
  const [openTab, setOpenTab] = React.useState(selected || tabs[0]?.id);
  const [focusedTab, setFocusedTab] = React.useState(selected || tabs[0]?.id);

  // タブを表示
  const handleTabClick = (tabId: string) => {
    setOpenTab(tabId);
  };

  // キーボードの操作
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number
  ) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const dir = e.key === "ArrowRight" ? 1 : -1;
      let nextIdx = idx + dir;
      if (nextIdx < 0) nextIdx = tabs.length - 1;
      if (nextIdx >= tabs.length) nextIdx = 0;
      setFocusedTab(tabs[nextIdx].id);
      tabRefs.current[nextIdx]?.focus();
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenTab(tabs[idx].id);
    }
  };

  // スタイルの設定
  const indexStyle = (id: string) => {
    return cn(
      "px-8 py-2 text-base hover:bg-black-5-opacity text-nowrap active:bg-black-10-opacity rounded-t-lg focus-visible:bg-black-5-opacity",
      {
        "text-primary font-bold border-b-4 border-primary": openTab === id,
        "text-black-sub": openTab !== id,
      }
    );
  };

  return (
    <div id={id} className={cn(className)}>
      <div role="tablist" className="flex-nowrap">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            id={tab.id}
            role="tab"
            aria-selected={openTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => handleTabClick(tab.id)}
            className={indexStyle(tab.id)}
            tabIndex={focusedTab === tab.id ? 0 : -1}
            ref={(el) => {
              tabRefs.current[idx] = el;
            }}
            onKeyDown={(e) => {
              handleOnKeyDown(e, idx);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="-my-[2px] border-b border-black-20-opacity" />
      {tabs.map(
        (tab) =>
          openTab === tab.id && (
            <div
              key={tab.id}
              className="p-4"
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={openTab !== tab.id}
            >
              {tab.content}
            </div>
          )
      )}
    </div>
  );
};
Tab.displayName = "Tab";
