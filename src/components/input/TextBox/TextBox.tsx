import * as React from "react";
import { FormLabel, InputBox } from "../../common";

interface TextBoxProps {
  label?: string;
  id: string;
  type?: "text" | "textarea";
  isRequire?: boolean;
  className?: string;
  placeholder?: string;
  supportMassage?: string;
  errorMassage?: string;
  value?: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
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
            value,
            type,
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
