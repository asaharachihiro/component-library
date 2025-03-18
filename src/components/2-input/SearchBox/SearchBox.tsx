import * as React from "react";
import { cn } from "../../../utils/cn";
import { InputBox } from "../../0-common";
import { useFormContext } from "../Form";

interface SearchBoxProps {
  id: string;
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (id: string, value: string) => void;
  onBlur?: (id: string, value: string) => void;
  onFocus?: (id: string, value: string) => void;
}

export const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  (
    {
      id,
      className = "",
      placeholder,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      ...props
    },
    ref
  ) => {
    const context = useFormContext();
    // FormContextが提供されていない場合
    const formData = context?.formData || {};
    const handleInputChange = context?.handleInputChange || (() => {});

    const ButtonStyle =
      "flex w-[42px] h-[42px] items-center justify-center rounded-lg rounded-l-none border border-l-0 border-black-20-opacity text-2xl hover:bg-black-5-opacity active:bg-black-10-opacity text-black-sub transition-all";
    return (
      <div className={cn("flex text-black", className)}>
        <InputBox
          id={id}
          placeholder={placeholder}
          defaultValue={formData[id] || defaultValue}
          onChange={(e) => {
            onChange && onChange(id, e.target.value);
            handleInputChange(id, e.target.value);
          }}
          onBlur={onBlur}
          onFocus={onFocus}
          className="rounded-r-none"
          aria-label="Search Input"
          type={"text"}
          ref={ref}
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
