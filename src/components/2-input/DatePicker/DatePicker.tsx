import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "@components/0-common";
import { Calendar } from ".";
import { IconButton } from "@components/1-action/IconButton";
import { useFormContext } from "@components/2-input/Form/FormContext";
import { useClickOutside } from "../../../utils/useClickOutside";
import { dateFormat, formatDate } from "./formatDate";
import { cn } from "../../../utils/cn";
import { format, isValid, parse } from "date-fns";

interface DatePickerProps {
  id: string;
  label?: string;
  supportMessage?: string;
  errorMessage?: string;
  className?: string;
  isRequired?: boolean;
  value?: string;
  selectedDates?: Date[];
  isValidValue?: boolean;
  disabled?: boolean;
  isJPLocale?: boolean;
  isStartOnMonday?: boolean;
  getCalendar?: (inputData: Date) => { date: Date; disabled: boolean }[];
  onChange?: (
    id: string,
    date: string | { start: string; end: string }
  ) => void;
  onBlur?: (id: string, date: string) => void;
  onFocus?: (id: string, date: string) => void;
  tooltip?: React.ReactNode;
  isRange?: boolean;
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
      selectedDates = [],
      isValidValue,
      isRequired = false,
      disabled = false,
      isJPLocale = false,
      isStartOnMonday = false,
      getCalendar,
      onChange,
      onBlur,
      onFocus,
      tooltip,
      isRange = false,
      ...props
    },
    ref
  ) => {
    const context = useFormContext();

    // FormContextが提供されていない場合のデフォルト動作
    const formData = context?.formData || {};
    const errors = context?.errors || {};
    const handleInputChange = context?.handleInputChange || (() => {});

    const isValidStatus = isValidValue ? isValidValue : errors[id] == null;

    const [showCalendar, setShowCalendar] = React.useState(false);
    const [inputDate, setInputDate] = React.useState(() =>
      value ? formatDate(value, isJPLocale) : ""
    );

    React.useEffect(() => {
      if (formData[id]) {
        setInputDate(formatDate(formData[id], isJPLocale));
      } else {
        setInputDate(value ? formatDate(value, isJPLocale) : "");
      }
    }, [formData, id, value, isJPLocale]);

    const handleIconClick = () => {
      setShowCalendar(!showCalendar);
    };

    const onSelectChange = (id: string, dates: string | string[]) => {
      if (Array.isArray(dates)) {
        if (dates.length === 1) {
          if (!dates[0] || !isValid(dateFormat(dates[0]))) {
            setInputDate("");
            onChange?.(id, { start: "", end: "" });
          } else {
            setInputDate(dates[0]);
            onChange?.(id, { start: dates[0], end: "" });
          }
        } else if (dates.length === 2) {
          const validStart = dates[0] && isValid(dateFormat(dates[0]));
          const validEnd = dates[1] && isValid(dateFormat(dates[1]));
          if (!validStart || !validEnd) {
            setInputDate("");
            onChange?.(id, { start: "", end: "" });
          } else {
            setInputDate(`${dates[0]} 〜 ${dates[1]}`);
            onChange?.(id, { start: dates[0], end: dates[1] });
          }
        }
      } else {
        if (!dates || !isValid(dateFormat(dates))) {
          setInputDate("");
          onChange?.(id, "");
        } else {
          setInputDate(formatDate(dates, isJPLocale));
          onChange?.(id, dates);
          setShowCalendar(false);
        }
      }
    };

    const onInputChange = (id: string, value: string) => {
      setInputDate(value);
      handleInputChange(id, value);
    };

    // Blur時に値をフォーマット
    const handleOnBlur = (id: string, value: string) => {
      if (onChange) {
        const parsed = parse(inputDate, "yyyy/MM/dd", new Date());
        if (isValid(parsed)) {
          const formatted = format(parsed, "yyyy-MM-dd");
          onChange(id, formatted);
        } else {
          onChange(id, "");
        }
      }
      if (onBlur) {
        onBlur(id, value);
      }
    };

    // Focus時に入力値を表示
    const handleOnFocus = (id: string, value: string) => {
      setShowCalendar(true);
      if (onFocus) {
        onFocus(id, value);
      }
    };

    const selectedDatesForCalendar = React.useMemo(() => {
      if (selectedDates && selectedDates.length > 0) {
        return selectedDates;
      }
      if (inputDate) {
        const d = dateFormat(inputDate);
        return isValid(d) ? [d] : [];
      }
      return [];
    }, [selectedDates, inputDate]);

    const calendarInputDate = React.useMemo(() => {
      if (inputDate) {
        const d = dateFormat(inputDate);
        return isValid(d) ? d : new Date();
      }
      return new Date();
    }, [inputDate]);

    // コンポーネント外をクリックした時に閉じる
    const InputRef = React.useRef<HTMLDivElement>(null);
    useClickOutside(InputRef as React.RefObject<HTMLElement>, () =>
      setShowCalendar(false)
    );

    // TODO:useFloatingPosition

    return (
      <div className={className} ref={InputRef}>
        {label && (
          <FormLabel label={label} tooltip={tooltip} isRequired={isRequired} />
        )}
        <div className="relative">
          <InputBox
            id={id}
            value={inputDate}
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
            <div className="pointer-events-none absolute inset-y-0 left-0 flex select-none items-center pl-2 text-black-20-opacity">
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
          <Calendar
            id={id}
            className="absolute z-10 mt-1 rounded-lg bg-white shadow-low"
            inputDate={selectedDatesForCalendar}
            getCalendar={
              getCalendar ? () => getCalendar(calendarInputDate) : undefined
            }
            onSelectDate={onSelectChange}
            onClosed={setShowCalendar}
            isStartOnMonday={isStartOnMonday}
            isRange={isRange}
          />
        )}
        <div className={cn(supportMessage || errorMessage ? "mt-1" : "")}>
          {supportMessage && (
            <span className="text-xs text-black-sub">{supportMessage}</span>
          )}
          {!isValidStatus && (
            <ErrorText
              text={
                errors[id] || errorMessage || "入力がエラーになっています。"
              }
            />
          )}
        </div>
      </div>
    );
  }
);
DatePicker.displayName = "DatePicker";
