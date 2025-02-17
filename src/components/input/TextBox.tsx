import * as React from "react";
import { FormLabel, InputBox } from "../common";

interface TextBoxProps {
  label?: string;
  id: string;
  type?: string;
  isRequire?: boolean;
  className?: string;
  placeholder?: string;
  supportMassage?: string;
  errorMassage?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isValid?: boolean;
  disabled?: boolean;
}

export const TextBox = React.forwardRef<HTMLInputElement, TextBoxProps>(
  (
    {
      label,
      id,
      type = "text",
      isRequire = false,
      className = "",
      placeholder,
      supportMassage,
      errorMassage,
      value,
      onChange,
      isValid,
      disabled = false,
    },
    ref
  ) => {
    return (
      <div className={className}>
        {label && <FormLabel label={label} isRequire={isRequire}></FormLabel>}
        <InputBox
          {...{
            id,
            type,
            value,
            isValid,
            disabled,
            onChange,
            placeholder,
            supportMassage,
            errorMassage,
          }}
          ref={ref}
        ></InputBox>
      </div>
    );
  }
);
TextBox.displayName = "TextBox";
