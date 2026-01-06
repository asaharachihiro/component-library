import * as React from "react";
import { ErrorText } from "@components/_00-common";
import { cn } from "../../../utils/cn";
import { useFormContext } from "../Form";
import { addDays, isAfter, isValid, parseISO } from "date-fns";
import { DatePicker } from "../DatePicker";

export interface DateRangeValue {
  start: string;
  end: string;
}

interface DateRangeProps {
  id: string;
  label?: string;
  value?: DateRangeValue;
  isJPLocale?: boolean;
  className?: string;
  isInvalid?: boolean;
  isRequired?: {
    start?: boolean;
    end?: boolean;
  };
  disabled?: {
    start?: boolean;
    end?: boolean;
  };
  supportMessage?: string;
  errorMessage?: string;
  isStartOnMonday?: boolean;
  getCalendar?: (inputData: Date) => { date: Date; disabled: boolean }[];
  onChange?: (range: DateRangeValue) => void;
  onBlur?: (range: DateRangeValue) => void;
  onFocus?: (range: DateRangeValue) => void;
  tooltip?: React.ReactNode;
}

export const DateRange: React.FC<DateRangeProps> = ({
  id,
  label,
  value,
  isInvalid,
  className,
  supportMessage,
  errorMessage,
  isRequired,
  disabled,
  isStartOnMonday,
  isJPLocale,
  getCalendar,
  onChange,
  onBlur,
  tooltip,
}) => {
  const context = useFormContext();

  // FormContextが提供されていない場合のデフォルト動作
  const formData = context?.formData || {};
  const errors = context?.errors || {};
  const handleInputChange = context?.handleInputChange || (() => {});

  // 日付の逆転を修正する
  const fixReversedDates = (range: DateRangeValue): DateRangeValue => {
    if (!range.start || !range.end || range.start === "" || range.end === "")
      return range;
    const startDate = parseISO(range.start);
    const endDate = parseISO(range.end);
    if (isValid(startDate) && isValid(endDate) && isAfter(startDate, endDate)) {
      return { start: range.end, end: range.start };
    }
    return range;
  };

  // 初期値の設定
  const initialDateStr =
    typeof value !== "undefined"
      ? fixReversedDates({
          start: value.start,
          end: value.end,
        })
      : typeof formData[id] !== "undefined"
        ? fixReversedDates({
            start: formData[id].start,
            end: formData[id].end,
          })
        : { start: "", end: "" };

  // DateRangeのstate
  const [dateRange, setDateRange] =
    React.useState<DateRangeValue>(initialDateStr);
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);

  // バリデーション判定
  const isInvalidStatus =
    typeof isInvalid === "boolean" ? isInvalid : errors[id] != null;

  // 初期値の逆転を修正
  React.useEffect(() => {
    if (
      context &&
      formData[id] &&
      typeof formData[id].start !== "undefined" &&
      typeof formData[id].end !== "undefined"
    ) {
      const fixed = fixReversedDates({
        start: formData[id].start,
        end: formData[id].end,
      });
      if (fixed !== formData[id]) {
        handleInputChange(id, fixed);
      }
    }
  }, []);

  // onChangeのハンドラー
  const handleRangeChange = (pickerId: string, value: string) => {
    const isStart = pickerId.includes("start");
    const next: DateRangeValue = {
      start: isStart ? value : dateRange.start,
      end: !isStart ? value : dateRange.end,
    };
    const fixed = fixReversedDates(next);
    setDateRange(fixed);
    if (context) handleInputChange(id, fixed);
    if (onChange) onChange(fixed);
  };

  // onBlurのハンドラー
  const handleInputBlur = (pickerId: string, value: string) => {
    const isStart = pickerId.includes("start");
    const next: DateRangeValue = {
      start: isStart ? value : dateRange.start,
      end: !isStart ? value : dateRange.end,
    };
    const fixed = fixReversedDates(next);

    setDateRange(fixed);
    if (context) handleInputChange(id, fixed);
    if (onBlur) onBlur(fixed);
  };

  // 選択日の配列を生成
  const getSelectedDate = React.useCallback((): Date[] => {
    if (!dateRange.start && !dateRange.end) return [];

    if (dateRange.start && !dateRange.end) {
      const startDate = parseISO(dateRange.start);
      if (!isValid(startDate)) return [];
      return [startDate];
    }
    if (!dateRange.start && dateRange.end) {
      const endDate = parseISO(dateRange.end);
      if (!isValid(endDate)) return [];
      return [endDate];
    }

    if (dateRange.start && dateRange.end) {
      const startDate = parseISO(dateRange.start);
      const endDate = parseISO(dateRange.end);

      if (!isValid(startDate) || !isValid(endDate)) return [];
      if (isAfter(startDate, endDate)) return [];

      const result: Date[] = [];
      let current = startDate;
      while (!isAfter(current, endDate)) {
        result.push(current);
        current = addDays(current, 1);
      }
      return result;
    }
    return [];
  }, [dateRange.start, dateRange.end]);

  // 選択日の更新
  React.useEffect(() => {
    setSelectedDates(getSelectedDate());
  }, [dateRange.start, dateRange.end]);

  return (
    <div className={className} id={id}>
      <div className={"flex items-end"}>
        <DatePicker
          className="w-full"
          hasRange={true}
          id={"_dateRange-start"}
          onChange={handleRangeChange}
          onBlur={handleInputBlur}
          value={dateRange.start}
          selectedDates={selectedDates}
          isRequired={isRequired?.start}
          disabled={disabled?.start}
          label={label}
          isJPLocale={isJPLocale}
          isInvalid={isInvalidStatus}
          isStartOnMonday={isStartOnMonday}
          getCalendar={getCalendar}
          tooltip={tooltip}
        />

        <span className="mx-2 flex h-10 grow-0 items-center text-xs text-black-sub">
          〜
        </span>
        <DatePicker
          className="w-full"
          hasRange={true}
          id={"_dateRange-end"}
          onChange={handleRangeChange}
          onBlur={handleInputBlur}
          value={dateRange.end}
          selectedDates={selectedDates}
          isRequired={isRequired?.end}
          disabled={disabled?.end}
          isJPLocale={isJPLocale}
          isInvalid={isInvalidStatus}
          isStartOnMonday={isStartOnMonday}
          getCalendar={getCalendar}
        />
      </div>
      <div className={cn(supportMessage || errorMessage ? "mt-1" : "")}>
        {supportMessage && (
          <span className="text-xs text-black-sub">{supportMessage}</span>
        )}
        {isInvalidStatus && (
          <ErrorText
            text={errors[id] || errorMessage || "入力がエラーになっています。"}
          />
        )}
      </div>
    </div>
  );
};
DateRange.displayName = "DateRange";
