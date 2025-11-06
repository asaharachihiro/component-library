import * as React from "react";
import { cn } from "../../../utils/cn";

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: string;
  selected?: boolean;
}

interface BreadcrumbsProps {
  id: string;
  items: BreadcrumbItem[];
  className?: string;
  onClick?: () => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  id,
  className = "",
  items = [],
  onClick = () => {},
}) => {
  // スタイルの設定
  const arrowStyle = cn("m-1 flex select-none text-base text-black-20-opacity");
  const labelStyle = (selected: boolean | undefined) => {
    return cn("text-nowrap text-base", {
      "pointer-events-none text-base font-medium text-black": selected,
    });
  };

  return (
    <nav id={id} className={className}>
      <div className="flex flex-wrap items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-2xl text-black-sub"
          >
            {0 < index && (
              <div className={arrowStyle}>
                <span className="material-symbols-rounded">
                  arrow_forward_ios
                </span>
              </div>
            )}
            <div className="flex items-center">
              {item.icon && (
                <span className="material-symbols-rounded">{item.icon}</span>
              )}
              <a
                href={item.href}
                className={labelStyle(item.selected)}
                tabIndex={item.selected ? -1 : 0}
                onClick={onClick}
              >
                {item.label}
              </a>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};
Breadcrumbs.displayName = "Breadcrumbs";
