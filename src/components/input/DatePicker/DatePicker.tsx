import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "../../common";
import { Calendar } from ".";
import { IconButton } from "../../action/IconButton";

interface DatePickerProps {
  id: string;
  label?: string;
  supportMassage?: string;
  errorMassage?: string;
  className?: string;
  value?: string;
  isValid?: boolean;
  disabled?: boolean;
  isJPera?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      id,
      label,
      supportMassage,
      errorMassage,
      className,
      value,
      isValid = true,
      disabled = false,
      isJPera = false,
      onChange,
      ...props
    },
    ref
  ) => {
    const [showCalendar, setShowCalendar] = React.useState(false);
    const [inputDate, setInputDate] = React.useState(value ? value : null);
    React.useEffect(() => {
      setInputDate(value ? value : null);
    }, [value]);

    const handleIconClick = () => {
      setShowCalendar(!showCalendar);
    };

    const onSelectChange = (date: string) => {
      setInputDate(date);
      if (onChange) {
        onChange({
          target: { value: date },
        } as React.ChangeEvent<HTMLInputElement>);
      }
      setShowCalendar(false);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputDate(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className={className}>
        {label && <FormLabel label={label} />}
        <div className="relative mb-1">
          <InputBox
            {...{ id, value, isValid, disabled, onChange, ref }}
            type="tel"
            aria-haspopup="dialog"
            onChange={
              onInputChange as (
                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => void
            }
            {...props}
          />
          {!inputDate && (
            <div className="absolute inset-y-0 left-0 flex select-none items-center pl-2 text-black-20-opacity">
              <span>年 / 月 / 日</span>
            </div>
          )}
          <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2">
            <IconButton
              disabled={disabled}
              icon="calendar_month"
              variant="function"
              onClick={handleIconClick}
              aria-label="Open calendar"
              isToggled={showCalendar}
            />
          </div>
        </div>
        {showCalendar && (
          <Calendar
            onSelectDate={onSelectChange}
            className="absolute z-10 rounded-lg bg-white shadow-low"
          />
        )}
        {supportMassage && (
          <span className="text-xs text-black-sub">{supportMassage}</span>
        )}
        {!isValid && <ErrorText text={errorMassage} />}
      </div>
    );
  }
);
DatePicker.displayName = "DatePicker";
