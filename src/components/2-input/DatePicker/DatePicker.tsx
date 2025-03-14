import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "../../0-common";
import { Calendar } from ".";
import { IconButton } from "../../1-action/IconButton";
import { format, parseISO, isValid } from "date-fns";

interface DatePickerProps {
  id: string;
  label?: string;
  supportMessage?: string;
  errorMessage?: string;
  className?: string;
  defaultValue?: string;
  isValidValue?: boolean;
  disabled?: boolean;
  isJPLocale?: boolean;
  isStartOnMonday?: boolean;
  getCalendar?: (inputData: Date) => { date: Date; disabled: boolean }[];
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  onFocus?: (value: string) => void;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      id,
      label,
      supportMessage,
      errorMessage,
      className,
      defaultValue,
      isValidValue = true,
      disabled = false,
      isJPLocale = false,
      isStartOnMonday = false,
      getCalendar,
      onChange,
      onBlur,
      onFocus,
      ...props
    },
    ref
  ) => {
    const formatDisplayDate = (dateInput: string, isJPlocale?: boolean) => {
      if (!dateInput) return "";
      const dateObj = parseISO(dateInput);
      if (!isValid(dateObj)) return "";

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
    const [inputDate, setInputDate] = React.useState(defaultValue || "");
    const [displayDate, setDisplayDate] = React.useState(
      defaultValue ? formatDisplayDate(defaultValue, isJPLocale) : ""
    );

    React.useEffect(() => {
      setInputDate(defaultValue || "");
      setDisplayDate(
        defaultValue ? formatDisplayDate(defaultValue, isJPLocale) : ""
      );
    }, [defaultValue, isJPLocale]);

    const handleIconClick = () => {
      setShowCalendar(!showCalendar);
    };

    const onSelectChange = (date: string) => {
      setInputDate(date);
      setDisplayDate(formatDisplayDate(date, isJPLocale));
      if (onChange) {
        onChange(date);
      }
      setShowCalendar(false);
    };

    const onInputChange = (value: string) => {
      setInputDate(value);
      setDisplayDate(value);
      if (onChange) {
        onChange(value);
      }
    };

    // Blur時に値をフォーマット
    const handleOnBlur = (value: string) => {
      const formattedDate = formatDisplayDate(value, isJPLocale);
      setDisplayDate(formattedDate);
      if (onBlur) {
        onBlur(value);
      }
    };

    // Focus時に入力値を表示
    const handleOnFocus = (value: string) => {
      setShowCalendar(true);

      setDisplayDate(inputDate || "");
      if (onFocus) {
        onFocus(value);
      }
    };

    return (
      <div className={className}>
        {label && <FormLabel label={label} />}
        <div className="relative mb-1">
          <InputBox
            id={id}
            value={displayDate || ""}
            isValid={isValidValue}
            disabled={disabled}
            type="tel"
            aria-haspopup="dialog"
            onChange={onInputChange}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            ref={ref}
            autoComplete="off"
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
              onClick={handleIconClick}
              aria-label="Open calendar"
              isToggled={showCalendar}
            />
          </div>
        </div>
        {showCalendar && (
          <Calendar
            className="absolute z-10 rounded-lg bg-white shadow-low"
            inputDate={
              inputDate && isValid(parseISO(inputDate))
                ? parseISO(inputDate)
                : undefined
            }
            getCalendar={
              getCalendar
                ? () =>
                    getCalendar(
                      inputDate && isValid(parseISO(inputDate))
                        ? parseISO(inputDate)
                        : new Date()
                    )
                : undefined
            }
            onSelectDate={onSelectChange}
            onClosed={setShowCalendar}
            isStartOnMonday={isStartOnMonday}
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
