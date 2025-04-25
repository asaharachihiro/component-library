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
      <div className="flex items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 text-2xl text-black-sub"
          >
            <div className="flex items-center">
              <span className="material-symbols-rounded m-1">{item.icon}</span>
              <a
                href={item.href}
                className={cn("text-base", {
                  "text-base font-medium text-black": item.selected,
                  "underline underline-offset-4": !item.selected,
                })}
              >
                {item.label}
              </a>
            </div>
            {index < items.length - 1 && (
              <div className="flex select-none text-base text-black-20-opacity">
                <span className="material-symbols-rounded">
                  arrow_forward_ios
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};
Breadcrumbs.displayName = "Breadcrumbs";
