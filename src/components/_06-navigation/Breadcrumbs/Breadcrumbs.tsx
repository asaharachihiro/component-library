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
  return (
    <nav id={id} className={className}>
      <div className="flex flex-wrap items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-2xl text-black-sub"
          >
            {0 < index && (
              <div className="m-1 flex select-none text-base text-black-20-opacity">
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
                className={cn("text-nowrap text-base", {
                  "pointer-events-none text-base font-medium text-black":
                    item.selected,
                  "underline underline-offset-4": !item.selected,
                })}
                tabIndex={item.selected ? -1 : 0}
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
