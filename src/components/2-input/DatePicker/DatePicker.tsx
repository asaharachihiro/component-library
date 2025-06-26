import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "@components/0-common";
import { Calendar } from ".";
import { IconButton } from "@components/1-action/IconButton";
import { useFormContext } from "@components/2-input/Form/FormContext";
import { useClickOutside } from "../../../utils/useClickOutside";
import { toDateFormat, toStringFormat } from "./formatDate";
import { cn } from "../../../utils/cn";
import { isValid } from "date-fns";

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
  onChange?: (id: string, date: string) => void;
  onBlur?: (id: string, date: string) => void;
  onFocus?: (id: string, date: string) => void;
  tooltip?: React.ReactNode;
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
      value ? toStringFormat(value, isJPLocale) : ""
    );

    React.useEffect(() => {
      setInputDate(value ? toStringFormat(value, isJPLocale) : "");
    }, [value, isJPLocale]);

    const handleIconClick = () => {
      setShowCalendar(!showCalendar);
    };

    const onSelectChange = (id: string, date: string) => {
      setInputDate(toStringFormat(date, isJPLocale));
      if (onChange) {
        onChange(id, date);
      }
      setShowCalendar(false);
    };

    const onInputChange = (id: string, value: string) => {
      setInputDate(value);
    };

    // Blur時に値をフォーマット
    const handleOnBlur = (id: string, value: string) => {
      const formattedDate = toStringFormat(value, isJPLocale);
      const dateStr = toStringFormat(value, false).replaceAll(/[^0-9]/g, "-");
      setInputDate(formattedDate);
      if (onBlur) {
        onBlur(id, dateStr);
      }
      handleInputChange(id, value);
    };

    // Focus時に入力値を表示
    const handleOnFocus = (id: string, value: string) => {
      setShowCalendar(true);
      if (onFocus) {
        onFocus(id, value);
      }
    };

    const selectedDatesForCalendar = React.useMemo(() => {
      return selectedDates && selectedDates.length > 0 ? selectedDates : [];
    }, [selectedDates]);

    const calendarInputDate = React.useMemo(() => {
      if (inputDate) {
        const d = toDateFormat(inputDate);
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
            inputDate={calendarInputDate}
            selectedDates={selectedDatesForCalendar}
            getCalendar={
              getCalendar ? () => getCalendar(calendarInputDate) : undefined
            }
            onSelectDate={onSelectChange}
            onClosed={setShowCalendar}
            isStartOnMonday={isStartOnMonday}
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
