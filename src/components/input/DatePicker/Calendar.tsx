import * as React from "react";
import { cn } from "../../../utils/cn";
import { DateButton } from "./DateButton";
import { Button } from "../../action/Button";
import { IconButton } from "../../action/IconButton";
import { SelectBox } from "../../selection/SelectBox";
import {
  format,
  getDay,
  getDaysInMonth,
  setDate,
  setMonth,
  setYear,
  startOfMonth,
} from "date-fns";

interface CalendarProps {
  inputDate?: Date;
  className?: string;
  onSelectDate?: (date: string) => void;
  onClosed?: (isCanceled: boolean) => void;
  isStartonMonday?: boolean;
}

export const Calendar: React.FC<CalendarProps> = ({
  inputDate,
  className = "",
  onSelectDate,
  onClosed,
  isStartonMonday = false,
}) => {
  const [currentDate, setCurrentDate] = React.useState(inputDate || new Date());

  React.useEffect(() => {
    setCurrentDate(inputDate || new Date());
  }, [inputDate]);

  // 年のSelectBoxリスト
  const currentYear = parseInt(format(new Date(), "yyyy"));
  const yearsList = Array.from({ length: 201 }, (_, i) => ({
    value: (currentYear - 100 + i).toString(),
    label: (currentYear - 100 + i).toString(),
  }));

  // 月のSelectBoxリスト
  const monthsList = Array.from({ length: 12 }, (_, i) => ({
    value: (i + 1).toString().padStart(2, "0"),
    label: (i + 1).toString(),
  }));

  // 日付のリストを取得
  const daysList = (dateInput: Date): string[] => {
    const daysList = Array.from({ length: getDaysInMonth(dateInput) }, (_, i) =>
      (i + 1).toString()
    );
    return daysList;
  };

  // 表示の1日目の曜日を取得
  const getStartDayOfMonth = (): number => {
    const firstDay = getDay(startOfMonth(currentDate));
    return isStartonMonday ? (firstDay === 0 ? 6 : firstDay - 1) : firstDay;
  };

  // 曜日のリスト
  const weekdays = isStartonMonday
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

  // 日付をYYYY-MM-DD形式で返す
  const formatFullDate = (day: string) => {
    const date = setDate(currentDate, parseInt(day));
    return format(date, "yyyy-MM-dd");
  };

  // 今日の日付かどうかを判定
  const isToday = (day: string): boolean => {
    const today = format(new Date(), "yyyy-MM-dd");
    const date = formatFullDate(day);
    return today === date;
  };

  // 表示する月の移動
  const moveMonth = (direction: "prev" | "next") => {
    const newDate = direction === "prev" ? -1 : 1;
    const nextMonth = setMonth(currentDate, currentDate.getMonth() + newDate);
    setCurrentDate(nextMonth);
  };

  return (
    <div className={className}>
      <div className={cn("flex flex-col space-y-2 p-4")}>
        <div className="flex items-center justify-between">
          <IconButton icon="chevron_left" onClick={() => moveMonth("prev")} />
          <div className="flex space-x-2">
            <SelectBox
              id={"year-select"}
              options={yearsList}
              value={format(currentDate, "yyyy")}
              onChange={(value) => handleYearChange(value)}
            />
            <SelectBox
              id={"month-select"}
              options={monthsList}
              value={format(currentDate, "MM")}
              onChange={(value) => handleMonthChange(value)}
            />
          </div>
          <IconButton icon="chevron_right" onClick={() => moveMonth("next")} />
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
          {daysList(currentDate).map((day) => (
            <DateButton
              onClick={() => onSelectDate && onSelectDate(formatFullDate(day))}
              number={day}
              key={day}
              id={day}
              selected={
                inputDate
                  ? format(inputDate, "yyyy-MM-dd") === formatFullDate(day)
                  : false
              }
              isToday={isToday(day)}
              disabled={false}
            />
          ))}
        </div>
        <div className="flex justify-end space-x-4">
          <Button
            variant="textSecondary"
            type="reset"
            onClick={() => onClosed && onClosed(false)}
          >
            キャンセル
          </Button>
          {/* TODO: 日付範囲指定のためのボタン
          <Button variant="primary" size="sm" type="submit">
            決定
          </Button> */}
        </div>
      </div>
    </div>
  );
};
