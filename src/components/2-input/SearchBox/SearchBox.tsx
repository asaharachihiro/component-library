import * as React from "react";
import { cn } from "../../../utils/cn";
import { InputBox } from "../../0-common";

interface SearchBoxProps {
  id: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  onFocus?: (value: string) => void;
}

export const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  (
    {
      id,
      className = "",
      placeholder,
      value,
      onChange,
      onBlur,
      onFocus,
      ...props
    },
    ref
  ) => {
    const ButtonStyle =
      "flex w-[42px] h-[42px] items-center justify-center rounded-lg rounded-l-none border border-l-0 border-black-20-opacity text-2xl hover:bg-black-5-opacity active:bg-black-10-opacity text-black-sub transition-all";
    return (
      <div className={cn("flex text-black", className)}>
        <InputBox
          {...{ id, placeholder, value, onChange, onBlur, onFocus, ref }}
          className="rounded-r-none"
          aria-label="Search Input"
          type={"text"}
          {...props}
        />
        <button
          type="button"
          aria-label="Search Button"
          className={ButtonStyle}
        >
          <span className="material-symbols-rounded">search</span>
        </button>
      </div>
    );
  }
);
SearchBox.displayName = "SearchBox";
