import * as React from "react";
import { cn } from "../../../utils/cn";
import { NumberButton } from "../../0-common";
import { Button } from "@components/1-action/Button";
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
  inputDate?: Date | Date[];
  className?: string;
  isStartOnMonday?: boolean;
  getCalendar?: (inputData: Date) => { date: Date; disabled: boolean }[];
  onSelectDate: (id: string, date: string | string[]) => void;
  onClosed: (isCanceled: boolean) => void;
  isRange?: boolean;
  // strategy?: "absolute" | "fixed";
  // x?: number | null;
  // y?: number | null;
}

export const Calendar = React.forwardRef<HTMLInputElement, CalendarProps>(
  (
    {
      id,
      inputDate,
      className = "",
      getCalendar,
      onSelectDate,
      onClosed,
      isStartOnMonday = false,
      isRange = false,
      // strategy = "absolute",
      // x = 0,
      // y = 0,
    },
    ref
  ) => {
    const initialDate = () => {
      if (!inputDate) {
        return new Date();
      }
      const d = Array.isArray(inputDate) ? inputDate[0] : inputDate;
      return isValid(d) ? d : new Date();
    };

    const [currentDate, setCurrentDate] = React.useState(initialDate);
    const [clickedDates, setClickedDates] = React.useState<string[]>([]);

    React.useEffect(() => {
      setCurrentDate(initialDate);
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
      // ここでも念のためフィルタ
      return dates.filter((item) => isValid(item.date));
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
      const inputDate = format(date, "yyyy-MM-dd");
      return today === inputDate;
    };

    // 表示する月の移動
    const moveMonth = (direction: "prev" | "next") => {
      const newDate = direction === "prev" ? -1 : 1;
      const nextMonth = setMonth(currentDate, currentDate.getMonth() + newDate);
      setCurrentDate(nextMonth);
    };

    const handleDateClick = (id: string, date: Date) => {
      const dateStr = format(date, "yyyy-MM-dd");
      if (isRange) {
        setClickedDates((prev) => {
          let next: string[];
          if (prev.length === 0 || prev.length === 2) {
            next = [dateStr];
            onSelectDate(id, next);
          } else {
            next = [prev[0], dateStr].slice(-2);
            onSelectDate(id, next);
          }
          return next;
        });
        // ★ ここでreturnして、下のonClosedを実行しない
        return;
      }

      onSelectDate(id, format(date, "yyyy-MM-dd"));
      onClosed(false);
    };

    const isSelected = (date: Date): boolean => {
      if (!isValid(date)) return false;
      const dateStr = format(date, "yyyy-MM-dd");
      if (isRange && clickedDates.length === 2) {
        // 2つクリック済みなら、その範囲をハイライト
        const [start, end] = clickedDates.slice().sort(); // 昇順
        return start <= dateStr && dateStr <= end;
      }
      if (isRange && clickedDates.length === 1) {
        // 1つだけクリック済みなら、その日だけハイライト
        return clickedDates[0] === dateStr;
      }
      if (!inputDate) return false;
      if (Array.isArray(inputDate)) {
        return inputDate.some((d) => format(d, "yyyy-MM-dd") === dateStr);
      }
      return format(inputDate, "yyyy-MM-dd") === dateStr;
    };

    return (
      <div
        className={className}
        ref={ref}
        // TODO:useFloatingPosision
        // style={{
        //   position: strategy,
        //   top: y || 0,
        //   left: x || 0,
        // }}
      >
        <div className={cn("flex max-w-[320px] flex-col space-y-2 p-4")}>
          <div className="flex items-center justify-between">
            <IconButton icon="chevron_left" onClick={() => moveMonth("prev")} />
            <div className="mx-6 flex">
              <div className="w-[80px]">
                <SelectBox
                  id={"year-select"}
                  options={yearsList}
                  value={format(currentDate, "yyyy")}
                  onChange={(value) => handleYearChange(value)}
                  size="s"
                />
              </div>
              <div className="w-[60px]">
                <SelectBox
                  id={"month-select"}
                  options={monthsList}
                  value={format(currentDate, "MM")}
                  onChange={(value) => handleMonthChange(value)}
                  size="s"
                />
              </div>
            </div>
            <IconButton
              icon="chevron_right"
              onClick={() => moveMonth("next")}
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
              return (
                <NumberButton
                  onClick={() => handleDateClick(id, date)}
                  number={number}
                  key={format(date, "yyyy-MM-dd")}
                  id={format(date, "yyyy-MM-dd")}
                  selected={isSelected(date)}
                  isToday={isToday(date)}
                  disabled={disabled}
                />
              );
            })}
          </div>
          {isRange && (
            <div className="flex justify-end space-x-4">
              <Button
                variant="textSecondary"
                type="reset"
                onClick={() => onClosed(false)}
                label="キャンセル"
              />
              <Button
                variant="primary"
                size="s"
                type="submit"
                onClick={() => onClosed(false)}
                label="決定"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);
