import * as React from "react";
import { cn } from "../../../utils/cn";
import { NumberButton } from "../../0-common";
import { IconButton } from "@components/1-action/IconButton";
import { SelectBox } from "@components/3-selection/SelectBox/SelectBox";
import {
  format,
  getDay,
  getDaysInMonth,
  isValid,
  setDate,
  setMonth,
  setYear,
  startOfMonth,
} from "date-fns";

interface CalendarProps {
  id: string;
  inputDate?: Date;
  className?: string;
  isStartOnMonday?: boolean;
  getCalendar?: (inputData: Date) => { date: Date; disabled: boolean }[];
  onSelectDate: (id: string, date: string) => void;
  onClosed: (isCanceled: boolean) => void;
  selectedDates?: Date[];
  style?: React.CSSProperties;
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      id,
      inputDate,
      className = "",
      getCalendar,
      onSelectDate,
      onClosed,
      isStartOnMonday = false,
      selectedDates,
      style,
      currentDate,
      setCurrentDate,
    },
    ref
  ) => {
    // 年のSelectBoxリスト
    const currentYear = parseInt(format(currentDate, "yyyy"));
    const yearsList = Array.from({ length: 201 }, (_, i) => ({
      value: (currentYear - 100 + i).toString(),
      label: (currentYear - 100 + i).toString(),
    }));

    // フォーカス対象のボタンを保持
    const calendarRef = React.useRef<HTMLDivElement>(null);
    const focusedDateRef = React.useRef<HTMLButtonElement>(null);
    React.useEffect(() => {
      if (focusedDateRef.current) {
        focusedDateRef.current.focus();
      }
    }, [currentDate]);

    // 月のSelectBoxリスト
    const monthsList = Array.from({ length: 12 }, (_, i) => ({
      value: (i + 1).toString().padStart(2, "0"),
      label: (i + 1).toString(),
    }));

    // 日付のリストを取得
    const datesList = (): { date: Date; disabled: boolean }[] => {
      if (getCalendar) {
        // getCalendarの戻り値も必ずdateがDate型かつisValidかチェック
        return getCalendar(currentDate).filter((item) => isValid(item.date));
      }
      const dates = Array.from(
        { length: getDaysInMonth(currentDate) },
        (_, i) => ({
          date: setDate(currentDate, i + 1),
          disabled: false,
        })
      );
      return dates;
    };

    // 表示の1日目の曜日を取得
    const getStartDayOfMonth = (): number => {
      const firstDay = getDay(startOfMonth(currentDate));
      return isStartOnMonday ? (firstDay === 0 ? 6 : firstDay - 1) : firstDay;
    };

    // 曜日のリスト
    const weekdays = isStartOnMonday
      ? ["月", "火", "水", "木", "金", "土", "日"]
      : ["日", "月", "火", "水", "木", "金", "土"];

    // 表示する年を変更するハンドラー
    const handleYearChange = (newYear: string) => {
      const newDate = setYear(currentDate, parseInt(newYear));
      setCurrentDate(newDate);
    };

    // 表示する月を変更するハンドラー
    const handleMonthChange = (newMonth: string) => {
      const newDate = setMonth(currentDate, parseInt(newMonth) - 1);
      setCurrentDate(newDate);
    };

    // 今日の日付かどうかを判定
    const isToday = (date: Date): boolean => {
      if (!isValid(date)) return false;
      const today = format(new Date(), "yyyy-MM-dd");
      return today === format(date, "yyyy-MM-dd");
    };

    // 表示する月の移動
    const moveMonth = (direction: "prev" | "next") => {
      const newDate = direction === "prev" ? -1 : 1;
      const nextMonth = setMonth(currentDate, currentDate.getMonth() + newDate);
      const firstDayOfMonth = setDate(nextMonth, 1);
      setCurrentDate(firstDayOfMonth);
    };

    const handleDateClick = (id: string, date: Date) => {
      const dateStr = format(date, "yyyy-MM-dd");
      onSelectDate(id, dateStr);
      onClosed(false);
    };

    const isSelected = (date: Date): boolean => {
      const dateStr = format(date, "yyyy-MM-dd");
      if (selectedDates && selectedDates.length > 0) {
        return selectedDates.some(
          (d) => isValid(d) && format(d, "yyyy-MM-dd") === dateStr
        );
      }
      if (inputDate) {
        return format(inputDate, "yyyy-MM-dd") === dateStr;
      }
      return false;
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      let newDate = currentDate;
      const active = document.activeElement;
      const isDateButton = active?.classList.contains("date-btn"); // クラス名は適宜調整
      if (isDateButton) {
        if (
          ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)
        ) {
          // ...日付移動ロジック...
          e.preventDefault();
          return;
        }
        // Tabキーは次の操作要素へ
        if (e.key === "Tab") {
          const focusable = calendarRef.current
            ? Array.from(
                calendarRef.current.querySelectorAll<HTMLElement>(
                  'button:not([disabled]), [tabindex="0"]:not([disabled])'
                )
              )
            : [];
          if (focusable.length === 0) return;
          const idx = focusable.indexOf(active as HTMLElement);
          let nextIdx = e.shiftKey ? idx - 1 : idx + 1;
          if (nextIdx < 0) nextIdx = focusable.length - 1;
          if (nextIdx >= focusable.length) nextIdx = 0;
          focusable[nextIdx].focus();
          e.preventDefault();
          return;
        }
      } else if (e.key === "Tab") {
        const focusable = calendarRef.current
          ? Array.from(
              calendarRef.current.querySelectorAll<HTMLElement>(
                'button:not([disabled]), [tabindex="0"]:not([disabled])'
              )
            )
          : [];
        if (focusable.length === 0) return;
        const idx = focusable.indexOf(active as HTMLElement);
        let nextIdx = e.shiftKey ? idx - 1 : idx + 1;
        if (nextIdx < 0) nextIdx = focusable.length - 1;
        if (nextIdx >= focusable.length) nextIdx = 0;
        focusable[nextIdx].focus();
        e.preventDefault();
        return;
      }
      if (e.key === "Escape") {
        onClosed(false);
        e.preventDefault();
      }
    };

    return (
      <div
        className={className}
        ref={(node) => {
          calendarRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref)
            (ref as React.RefObject<HTMLDivElement | null>).current = node;
        }}
        style={style}
        onKeyDown={handleKeyDown}
      >
        <div className={cn("flex max-w-[320px] flex-col space-y-2 p-4")}>
          <div className="flex items-center justify-between">
            <IconButton
              icon="chevron_left"
              onClick={() => moveMonth("prev")}
              type="button"
            />
            <div className="mx-6 flex">
              <SelectBox
                id={"_year-select"}
                className="w-[80px]"
                options={yearsList}
                value={format(currentDate, "yyyy")}
                onChange={(value) => handleYearChange(value)}
                size="s"
              />
              <SelectBox
                id={"_month-select"}
                className="w-[60px]"
                options={monthsList}
                value={format(currentDate, "MM")}
                onChange={(value) => handleMonthChange(value)}
                size="s"
              />
            </div>
            <IconButton
              icon="chevron_right"
              onClick={() => moveMonth("next")}
              type="button"
            />
          </div>
          <div className="grid grid-cols-7 gap-1 border-b border-black-20-opacity">
            {weekdays.map((weekday) => (
              <span
                key={weekday}
                className="flex h-7 w-7 items-center justify-center text-xs text-black-sub"
              >
                {weekday}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: getStartDayOfMonth() }).map((_, i) => (
              <div key={`empty-${i}`} className="h-7 w-7" />
            ))}
            {datesList().map(({ date, disabled }, i) => {
              if (!date || !isValid(date)) return null;
              let number = "";
              try {
                number = format(date, "dd");
              } catch {
                return null;
              }
              const isFocused =
                format(date, "yyyy-MM-dd") ===
                format(currentDate, "yyyy-MM-dd");
              console.log("isFocused", isFocused, date, currentDate);
              return (
                <NumberButton
                  ref={isFocused ? focusedDateRef : undefined}
                  onClick={() => handleDateClick(id, date)}
                  number={number}
                  key={format(date, "yyyy-MM-dd")}
                  id={format(date, "yyyy-MM-dd")}
                  selected={isSelected(date)}
                  isToday={isToday(date)}
                  disabled={disabled}
                  isFocused={isFocused}
                  tabIndex={isFocused ? 0 : -1}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);
