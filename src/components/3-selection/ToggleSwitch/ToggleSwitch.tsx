import * as React from "react";
import { cn } from "../../../utils/cn";
import { useFormContext } from "@components/2-input/Form";

interface ToggleSwitchProps {
  id: string;
  className?: string;
  label?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  isValid?: boolean;
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void;
}

export const ToggleSwitch = React.forwardRef<
  HTMLInputElement,
  ToggleSwitchProps
>(
  (
    {
      id,
      className,
      label,
      children,
      defaultChecked = false,
      onChange,
      disabled = false,
      isValid = true,
      ...props
    },
    ref
  ) => {
    const [toggle, setToggle] = React.useState<boolean>(defaultChecked);
    const context = useFormContext();
    // FormContextが提供されていない場合
    const formData = context?.formData || {};
    const handleInputChange = context?.handleInputChange || (() => {});

    React.useEffect(() => {
      setToggle(formData[id] || defaultChecked);
    }, [formData[id], defaultChecked]);

    const handleToggled = () => {
      let newChecked = !toggle;
      setToggle(newChecked);
      if (onChange) {
        onChange(newChecked);
      }
      handleInputChange(id, newChecked.toString());
    };

    const switchStyle = cn(
      "flex shrink-0 items-center mt-1 h-7 w-[52px] rounded-full border-2 relative after:absolute after:content-[''] after:w-[16px] after:h-[16px] after:rounded-full  after:transition-transform after:duration-300",
      {
        "border-none after:bg-white after:translate-x-[28px]": toggle,
        "bg-main": toggle && !disabled,
        "bg-black": toggle && disabled,
        "after:translate-x-[4px] border-black after:bg-black": !toggle,
        "opacity-50": !toggle && !disabled,
        "opacity-20": disabled,
      }
    );

    return (
      <label
        htmlFor={id}
        className={cn(
          disabled
            ? "pointer-events-none text-black-20-opacity"
            : "cursor-pointer",
          "flex justify-between"
        )}
      >
        {label && (
          <span className="m-1 mr-4 text-left text-base leading-[180%]">
            {label}
          </span>
        )}
        <input
          id={id}
          ref={ref}
          type="checkbox"
          checked={toggle}
          onChange={handleToggled}
          disabled={disabled}
          className="hidden"
          {...props}
        />
        <div className={switchStyle} />
      </label>
    );
  }
);
ToggleSwitch.displayName = "ToggleSwitch";
