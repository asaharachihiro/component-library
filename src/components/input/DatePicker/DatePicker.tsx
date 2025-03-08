import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "../../common";
import { Calendar } from ".";
import { IconButton } from "../../action/IconButton";
import { format, parseISO } from "date-fns";

interface DatePickerProps {
  id: string;
  label?: string;
  supportMessage?: string;
  errorMessage?: string;
  className?: string;
  value?: string;
  isValid?: boolean;
  disabled?: boolean;
  isJPLocale?: boolean;
  isStartonMonday?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      id,
      label,
      supportMessage,
      errorMessage,
      className,
      value,
      isValid = true,
      disabled = false,
      isJPLocale = false,
      isStartonMonday = false,
      onChange,
      ...props
    },
    ref
  ) => {
    const formatDisplayDate = (dateInput: string, isJPlocale?: boolean) => {
      const dateObj = parseISO(dateInput);

      if (isJPlocale) {
        // 元号と曜日を取得し、元号X年MM月DD日(曜日)形式で返す
        return dateObj.toLocaleDateString("ja-JP-u-ca-japanese", {
          era: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "narrow",
        });
      }
      // YYYY/MM/DD形式で返す
      return format(dateObj, "yyyy/MM/dd");
    };

    const [showCalendar, setShowCalendar] = React.useState(false);
    const [inputDate, setInputDate] = React.useState(value || "");
    const [displayDate, setDisplayDate] = React.useState(
      value ? formatDisplayDate(value, isJPLocale) : ""
    );

    React.useEffect(() => {
      setInputDate(value || "");
      setDisplayDate(value ? formatDisplayDate(value, isJPLocale) : "");
    }, [value, isJPLocale]);

    const handleIconClick = () => {
      setShowCalendar(!showCalendar);
    };

    const onSelectChange = (date: string) => {
      setInputDate(date);
      setDisplayDate(formatDisplayDate(date, isJPLocale));
      if (onChange) {
        onChange({
          target: { value: date },
        } as React.ChangeEvent<HTMLInputElement>);
      }
      setShowCalendar(false);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputDate(e.target.value);
      setDisplayDate(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const formattedDate = formatDisplayDate(e.target.value, isJPLocale);
      setDisplayDate(formattedDate);
      if (onChange) {
        onChange({
          target: { value: formattedDate },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    const onFocus = () => {
      setDisplayDate(inputDate || "");
    };

    return (
      <div className={className}>
        {label && <FormLabel label={label} />}
        <div className="relative mb-1">
          <InputBox
            id={id}
            value={displayDate || ""}
            isValid={isValid}
            disabled={disabled}
            type="tel"
            aria-haspopup="dialog"
            onChange={
              onInputChange as (
                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => void
            }
            onBlur={
              onBlur as (
                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => void
            }
            onFocus={onFocus}
            ref={ref}
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
            className="absolute z-10 rounded-lg bg-white shadow-low"
            inputDate={inputDate ? parseISO(inputDate) : undefined}
            onSelectDate={onSelectChange}
            onClosed={setShowCalendar}
            isStartonMonday={isStartonMonday}
          />
        )}
        {supportMessage && (
          <span className="text-xs text-black-sub">{supportMessage}</span>
        )}
        {!isValid && errorMessage && <ErrorText text={errorMessage} />}
      </div>
    );
  }
);
DatePicker.displayName = "DatePicker";
