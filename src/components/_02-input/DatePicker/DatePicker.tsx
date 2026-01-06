import * as React from "react";
import { ErrorText, FormLabel, InputBox } from "@components/_00-common";
import { Calendar } from ".";
import { IconButton } from "@components/_01-action/IconButton";
import { useFormContext } from "@components/_02-input/Form/FormContext";
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
  isInvalid?: boolean;
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
      isInvalid,
      isRequired = false,
      disabled = false,
      isJPLocale = false,
      isStartOnMonday = false,
      getCalendar,
      onChange,
      onBlur,
      onFocus,
      tooltip,
      hasRange = false,
      ...props
    },
    ref
  ) => {
    const context = useFormContext();

    // FormContextが提供されていない場合のデフォルト動作
    const formData = context?.formData || {};
    const errors = context?.errors || {};
    const handleInputChange = context?.handleInputChange || (() => {});

    // バリデーション判定
    const isInvalidStatus =
      typeof isInvalid === "boolean" ? isInvalid : errors[id] == null;
    const [showCalendar, setShowCalendar] = React.useState(false);

    // 初期値の設定
    const initialValue =
      typeof value !== "undefined"
        ? value
        : !hasRange && typeof formData[id] !== "undefined"
          ? formData[id]
          : "";

    // 表示用のstate
    const [inputStr, setInputStr] = React.useState(() =>
      toStringFormat(initialValue, isJPLocale)
    );
    // Date型のstate
    const [inputDate, setInputDate] = React.useState(
      initialValue ? toDateFormat(initialValue) : undefined
    );
    // 表示するカレンダーの基準日
    const [currentDate, setCurrentDate] = React.useState<Date>(
      inputDate && isValid(inputDate) ? inputDate : new Date()
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

    // アイコンでカレンダーを開閉
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

    // Focus時にカレンダーを表示
    const handleOnFocus = (id: string, value: string) => {
      setShowCalendar(true);
      if (onFocus) {
        onFocus(id, value);
      }
    };

    // コンポーネント外をクリックした時に閉じる
    const pickerRef = React.useRef<HTMLDivElement>(null);
    useClickOutside(pickerRef as React.RefObject<HTMLElement>, () =>
      setShowCalendar(false)
    );
    const inputRef = React.useRef<HTMLInputElement>(null);

    // カレンダーのフローティング
    const { refs, floatingStyles } = useFloating({
      placement: "bottom-start",
      middleware: [offset(8), flip(), shift()],
      whileElementsMounted: autoUpdate,
    });

    // ESCキーで閉じる
    React.useEffect(() => {
      if (!showCalendar) return;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setShowCalendar(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [showCalendar]);

    // スタイルの設定
    const placeholderStyle =
      "pointer-events-none absolute inset-y-0 left-0 flex select-none items-center pl-2 text-black-20-opacity";
    const calendarIconStyle =
      "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2";

    return (
      <div className={className} ref={pickerRef}>
        {label && (
          <FormLabel label={label} tooltip={tooltip} isRequired={isRequired} />
        )}
        <div className="relative rounded-lg" ref={refs.setReference}>
          <InputBox
            id={id}
            value={inputStr}
            isInvalid={isInvalidStatus}
            disabled={disabled}
            type="text"
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
            <div className={placeholderStyle}>
              <span>年 / 月 / 日</span>
            </div>
          )}
          <div className={calendarIconStyle}>
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
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
        )}
        <div className={cn(supportMessage || errorMessage ? "mt-1" : "")}>
          {supportMessage && (
            <span className="text-xs text-black-sub">{supportMessage}</span>
          )}
          {!hasRange && isInvalidStatus && (
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
