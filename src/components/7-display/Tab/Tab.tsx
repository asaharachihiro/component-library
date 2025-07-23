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
  const [openTab, setOpenTab] = React.useState(selected || tabs[0]?.id);
  const handleTabClick = (tabId: string) => {
    setOpenTab(tabId);
  };
  const indexStyle = (id: string) => {
    return cn(
      "px-8 py-2 text-base hover:bg-black-5-opacity text-nowrap active:bg-black-10-opacity rounded-t-lg",
      {
        "text-main font-bold border-b-4 border-main": openTab === id,
        "text-black-sub": openTab !== id,
      }
    );
  };
  return (
    <div id={id} className={cn(className)}>
      <div role="tablist" className="flex-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={tab.id}
            role="tab"
            aria-selected={openTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => handleTabClick(tab.id)}
            className={indexStyle(tab.id)}
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
