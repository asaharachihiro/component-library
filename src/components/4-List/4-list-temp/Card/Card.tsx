import * as React from "react";
import { cn } from "../../../utils/cn";

interface CardProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  selected?: boolean;
  onClick?: (id: string) => void;
}

export const Card: React.FC<CardProps> = ({
  id,
  className = "",
  selected = false,
  children,
  onClick,
}) => {
  // 親要素のクリック処理
  const handleParentClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  // 子要素のクリック処理
  const enhanceChild = (child: React.ReactNode) => {
    if (!React.isValidElement(child)) return child;

    const interactiveEvents = ["onClick", "onChange"];

    const enhancedProps = interactiveEvents.reduce(
      (acc, eventName) => {
        const childEvent = (child as React.ReactElement<any>).props[eventName];
        if (childEvent) {
          acc[eventName] = (event: React.SyntheticEvent) => {
            event.stopPropagation();
            childEvent?.(event);
          };
        }
        return acc;
      },
      {} as Record<string, (event: React.SyntheticEvent) => void>
    );

    // 型を明示的に指定
    return React.cloneElement(child as React.ReactElement<any>, enhancedProps);
  };
  const cardStyle = cn(
    "rounded-lg shadow-low transition-all hover:bg-black-3-opacity p-2",
    {
      "active:bg-black-10-opacity hover:bg-black-3-opacity": !selected,
      "bg-main-bg hover:bg-main-bg": selected,
      "cursor-pointer": onClick,
    }
  );
  return (
    <div id={id} className={className} data-selected={selected}>
      <div className={cardStyle} onClick={handleParentClick}>
        {React.Children.map(children, enhanceChild)}
      </div>
    </div>
  );
};
Card.displayName = "Card";
