import * as React from "react";
import { List } from "./List";

interface ListGroupProps {
  id: string;
  items: {
    id: string;
    label: string;
    disabled?: boolean;
    selected?: boolean;
    onClick?: () => void;
  }[];
  className?: string;
}

export const ListGroup: React.FC<ListGroupProps> = ({
  id,
  className = "",
  items = [],
}) => {
  const listRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const handleListKeyDown =
    (idx: number) => (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const dir = e.key === "ArrowDown" ? 1 : -1;
        let nextIdx = idx + dir;
        if (nextIdx < 0) nextIdx = listRefs.current.length - 1;
        if (nextIdx >= listRefs.current.length) nextIdx = 0;
        listRefs.current[nextIdx]?.focus();
      }
    };
  return (
    <ul id={id} role="listbox" className={className}>
      {items.map((item, idx) => (
        <List
          key={item.id}
          label={item.label}
          id={item.id}
          selected={item.selected}
          disabled={item.disabled}
          onClick={item.onClick}
          ref={(el) => {
            listRefs.current[idx] = el;
          }}
          onKeyDown={handleListKeyDown(idx)}
        />
      ))}
    </ul>
  );
};
ListGroup.displayName = "ListGroup";
