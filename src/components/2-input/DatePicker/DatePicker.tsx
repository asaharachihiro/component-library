import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "../../0-common";
import { Calendar } from ".";
import { IconButton } from "../../1-action/IconButton";
import { format, parseISO, isValid } from "date-fns";
import { useFormContext } from "../../2-input/Form/FormContext";
import { useClickOutside } from "../../../utils/useClickOutside";

interface DatePickerProps {
  id: string;
  label?: string;
  supportMessage?: string;
  errorMessage?: string;
  className?: string;
  value?: string;
  isValidValue?: boolean;
  disabled?: boolean;
  isJPLocale?: boolean;
  isStartOnMonday?: boolean;
  getCalendar?: (inputData: Date) => { date: Date; disabled: boolean }[];
  onChange?: (id: string, date: string) => void;
  onBlur?: (id: string, date: string) => void;
  onFocus?: (id: string, date: string) => void;
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
      isValidValue,
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
    const context = useFormContext();

    // FormContextが提供されていない場合のデフォルト動作
    const formData = context?.formData || {};
    const errors = context?.errors || {};
    const handleInputChange = context?.handleInputChange || (() => {});

    const isValidStatus = isValidValue ? isValidValue : errors[id] == null;

    const [showCalendar, setShowCalendar] = React.useState(false);
    const [inputDate, setInputDate] = React.useState(
      formData[id] || value || ""
    );
    const [displayDate, setDisplayDate] = React.useState(
      formData[id]
        ? formatDisplayDate(formData[id], isJPLocale)
        : value
          ? formatDisplayDate(value, isJPLocale)
          : ""
    );

    React.useEffect(() => {
      setInputDate(formData[id] || value || "");
      setDisplayDate(
        formData[id]
          ? formatDisplayDate(formData[id], isJPLocale)
          : value
            ? formatDisplayDate(value, isJPLocale)
            : ""
      );
    }, [formData[id], value, isJPLocale]);

    const handleIconClick = () => {
      setShowCalendar(!showCalendar);
    };

    const onSelectChange = (id: string, date: string) => {
      setInputDate(date);
      setDisplayDate(formatDisplayDate(date, isJPLocale));
      if (onChange) {
        onChange(id, date);
      }
      setShowCalendar(false);
    };

    const onInputChange = (id: string, value: string) => {
      setInputDate(value);
      setDisplayDate(value);
      if (onChange) {
        onChange(id, value);
      }
      handleInputChange(id, value);
    };

    // Blur時に値をフォーマット
    const handleOnBlur = (id: string, value: string) => {
      const formattedDate = formatDisplayDate(value, isJPLocale);
      setDisplayDate(formattedDate);
      if (onBlur) {
        onBlur(id, value);
      }
    };

    // Focus時に入力値を表示
    const handleOnFocus = (id: string, value: string) => {
      setShowCalendar(true);

      setDisplayDate(inputDate || "");
      if (onFocus) {
        onFocus(id, value);
      }
    };

    // Calender外をクリックした時に閉じる
    const panelRef = React.useRef<HTMLDivElement>(null);
    useClickOutside(panelRef as React.RefObject<HTMLElement>, () =>
      setShowCalendar(false)
    );

    // TODO:useFloatingPosition

    return (
      <div className={className}>
        {label && <FormLabel label={label} />}
        <div className="relative mb-1">
          <InputBox
            id={id}
            value={displayDate}
            isValid={isValidStatus}
            disabled={disabled}
            type="tel"
            aria-haspopup="dialog"
            aria-expanded={showCalendar}
            onChange={(e) => {
              onInputChange(id, e.target.value);
            }}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            autoComplete="off"
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
              onClick={handleIconClick}
              aria-label="Open calendar"
              checked={showCalendar}
            />
          </div>
        </div>
        {showCalendar && (
          <div ref={panelRef}>
            <Calendar
              id={id}
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
          </div>
        )}
        {supportMessage && (
          <span className="text-xs text-black-sub">{supportMessage}</span>
        )}
        {!isValidStatus && (
          <ErrorText
            text={errors[id] || errorMessage || "入力がエラーになっています。"}
          />
        )}
      </div>
    );
  }
);
DatePicker.displayName = "DatePicker";
