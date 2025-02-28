import * as React from "react";
import { cn } from "../../../utils/cn";
import { InputBox } from "../../common";

interface SearchBoxProps {
  id: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ id, className = "", placeholder, value, onChange }, ref) => {
    const ButtonStyle =
      "flex w-[42px] h-[42px] items-center justify-center rounded-lg rounded-l-none border border-l-0 border-black-20-opacity text-2xl hover:bg-black-5-opacity active:bg-black-10-opacity text-black-sub";
    return (
      <div className={cn("flex text-black", className)}>
        <InputBox
          id={id}
          className="rounded-r-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={ref}
          aria-label="検索ボックス"
          type={"text"}
        />
        <button type="button" aria-label="検索ボタン" className={ButtonStyle}>
          <span className="material-symbols-rounded">search</span>
        </button>
      </div>
    );
  }
);
SearchBox.displayName = "SearchBox";
