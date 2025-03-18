import * as React from "react";
import { IconButton } from "../../1-action/IconButton";
import { cn } from "../../../utils/cn";

interface SidebarProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  type?: "fixed" | "drawer";
  defaultShow?: boolean;
  headerItem?: React.ReactNode;
  onShowChange?: (show: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  id,
  className = "",
  children,
  type = "fixed",
  defaultShow = true,
  headerItem,
  onShowChange,
}) => {
  const [show, setShow] = React.useState(defaultShow);

  const handleShowChange = (show: boolean) => {
    setShow(show);
    if (onShowChange) {
      onShowChange(show);
    }
  };

  return (
    <>
      {type === "drawer" && (
        <IconButton
          id="sidebar"
          icon={"menu"}
          onClick={() => handleShowChange(true)}
          className="fixed left-4 top-4"
        />
      )}
      <nav id={id} className={className}>
        <div
          className={cn(
            "fixed left-0 top-0 z-50 block h-screen w-[240px] overflow-y-scroll bg-white shadow-high transition-all duration-300",
            show ? "translate-x-0" : "-translate-x-full shadow-none"
          )}
        >
          <div className="flex items-center">
            {headerItem && (
              <div className="m-4 w-full overflow-hidden">{headerItem}</div>
            )}
            {type === "drawer" && (
              <IconButton
                id="sidebarClose"
                icon={"keyboard_double_arrow_left"}
                className="m-4 ml-auto"
                onClick={() => handleShowChange(false)}
              />
            )}
          </div>

          <ul>{children}</ul>
        </div>
      </nav>
    </>
  );
};
Sidebar.displayName = "Sidebar";
