import * as React from "react";
import { List, ListProps } from "./List";

interface ListGroupProps {
  id: string;
  items: ListProps[];
  className?: string;
}

export const ListGroup: React.FC<ListGroupProps> = ({
  id,
  className = "",
  items = [],
}) => {
  const listRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  listRefs.current.length = items.length;

  // キーボードの操作
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
          ref={(el) => {
            listRefs.current[idx] = el;
          }}
          onKeyDown={(e) => {
            handleListKeyDown(idx)(e);
            item.onKeyDown?.(e);
          }}
          {...item}
        />
      ))}
    </ul>
  );
};
ListGroup.displayName = "ListGroup";
