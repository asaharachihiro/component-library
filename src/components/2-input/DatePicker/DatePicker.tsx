import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "@components/0-common";
import { Calendar } from ".";
import { IconButton } from "@components/1-action/IconButton";
import { useFormContext } from "@components/2-input/Form/FormContext";
import { useClickOutside } from "../../../utils/useClickOutside";
import { toDateFormat, toStringFormat } from "./formatDate";
import { cn } from "../../../utils/cn";
import { isValid } from "date-fns";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";

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
  hasRange?: boolean; // DateRange内で使用するためのフラグ
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
      hasRange = false, // DateRange内で使用するためのフラグ
      ...props
    },
    ref
  ) => {
    const context = useFormContext();

    // FormContextが提供されていない場合のデフォルト動作
    const formData = context?.formData || {};
    const errors = context?.errors || {};
    const handleInputChange = context?.handleInputChange || (() => {});

    const isValidStatus =
      typeof isValidValue === "boolean" ? isValidValue : errors[id] == null;
    const [showCalendar, setShowCalendar] = React.useState(false);

    const initialValue =
      typeof value !== "undefined"
        ? value
        : !hasRange && typeof formData[id] !== "undefined"
          ? formData[id]
          : "";

    const [inputStr, setInputStr] = React.useState(() =>
      toStringFormat(initialValue, isJPLocale)
    );
    const [inputDate, setInputDate] = React.useState(
      initialValue ? toDateFormat(initialValue) : undefined
    );

    // 初期値を親・formContextに同期
    React.useEffect(() => {
      if (typeof value !== "undefined" && formData[id] !== value) {
        onChange && onChange(id, value);
        handleInputChange(id, value);
      }
    }, []);

    // 外部からvalueの更新を受け取る
    React.useEffect(() => {
      if (hasRange && document.activeElement !== inputRef.current) {
        setInputStr(toStringFormat(initialValue, isJPLocale));
        setInputDate(initialValue ? toDateFormat(initialValue) : undefined);
      }
    }, [value]);

    const handleIconClick = () => {
      setShowCalendar(!showCalendar);
    };

    // カレンダー選択による値の更新
    const onSelectChange = (id: string, date: string) => {
      setInputStr(toStringFormat(date, isJPLocale));
      setInputDate(toDateFormat(date));
      if (onChange) {
        onChange(id, date);
      }
      if (hasRange) {
        setTimeout(() => setShowCalendar(false), 100);
      }
      if (!hasRange && context) {
        handleInputChange(id, date);
      }
    };

    // 入力による値の更新
    const onInputChange = (dateStr: string) => {
      setInputStr(dateStr);
      if (onChange) onChange(id, dateStr);
      if (!hasRange && context) handleInputChange(id, dateStr);
    };

    // Blur時に値をフォーマット
    const handleOnBlur = (id: string, value: string) => {
      if (showCalendar) return;
      const dateStr = toStringFormat(value, false).replaceAll(/[^0-9]/g, "-");
      setInputStr(toStringFormat(value, isJPLocale));
      setInputDate(toDateFormat(value));
      if (onBlur) {
        onBlur(id, dateStr);
      } else if (!hasRange && context) {
        handleInputChange(id, dateStr);
      }
    };

    const handleOnFocus = (id: string, value: string) => {
      setShowCalendar(true);
      if (onFocus) {
        onFocus(id, value);
      }
    };

    // コンポーネント外をクリックした時に閉じる
    const InputRef = React.useRef<HTMLDivElement>(null);
    useClickOutside(InputRef as React.RefObject<HTMLElement>, () =>
      setShowCalendar(false)
    );
    const inputRef = React.useRef<HTMLInputElement>(null);

    // カレンダーのフローティング
    const { refs, floatingStyles } = useFloating({
      placement: "bottom-start",
      middleware: [offset(8), flip(), shift()],
      whileElementsMounted: autoUpdate,
    });

    return (
      <div className={className} ref={InputRef}>
        {label && (
          <FormLabel label={label} tooltip={tooltip} isRequired={isRequired} />
        )}
        <div className="relative" ref={refs.setReference}>
          <InputBox
            id={id}
            value={inputStr}
            isValid={isValidStatus}
            disabled={disabled}
            type="tel"
            aria-haspopup="dialog"
            aria-expanded={showCalendar}
            onChange={(e) => {
              onInputChange(e.target.value);
            }}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            autoComplete="off"
            ref={inputRef}
            {...props}
          />
          {!inputStr && (
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
            inputDate={inputDate && isValid(inputDate) ? inputDate : undefined}
            selectedDates={selectedDates}
            getCalendar={getCalendar}
            onSelectDate={onSelectChange}
            onClosed={setShowCalendar}
            isStartOnMonday={isStartOnMonday}
            ref={refs.setFloating}
            style={floatingStyles}
          />
        )}
        <div className={cn(supportMessage || errorMessage ? "mt-1" : "")}>
          {supportMessage && (
            <span className="text-xs text-black-sub">{supportMessage}</span>
          )}
          {!hasRange && !isValidStatus && (
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
