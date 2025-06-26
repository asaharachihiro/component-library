import * as React from "react";
import { ErrorText } from "@components/0-common";
import { cn } from "../../../utils/cn";
import { useFormContext } from "../Form";
import { addDays, isAfter, isValid, parseISO } from "date-fns";

interface DateRangeProps {
  id: string;
  children: [React.ReactElement, React.ReactElement];
  className?: string;
  isValidValue?: boolean;
  supportMessage?: string;
  errorMessage?: string;
}

export const DateRange: React.FC<DateRangeProps> = ({
  id,
  isValidValue,
  children,
  className,
  supportMessage,
  errorMessage,
}) => {
  const context = useFormContext();

  // FormContextが提供されていない場合のデフォルト動作
  const formData = context?.formData || {};
  const errors = context?.errors || {};
  const handleInputChange = context?.handleInputChange || (() => {});
  type DateRange = {
    start: string | null;
    end: string | null;
  };
  const [value, setValue] = React.useState<DateRange>({
    start: "",
    end: "",
  });

  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);

  // value, selectedDates の更新ログ
  React.useEffect(() => {
    // console.log("[DateRange] value updated:", value);
  }, [value.start, value.end]);

  React.useEffect(() => {
    // console.log("[DateRange] selectedDates updated:", selectedDates);
  }, [selectedDates]);

  const isValidStatus = isValidValue ? isValidValue : errors[id] == null;

  const handleRangeChange = (id: string, value: DateRange) => {
    setValue((prev) => fixReversedDates(getNextRange(id, value, prev)));
  };

  const handleInputBlur = (id: string, value: string) => {
    setValue((prev) => {
      const next = getNextRange(id, value, prev);
      const fixed = fixReversedDates(next);
      // console.log("[handleInputBlur] next:", next, "fixed:", fixed);
      return fixed;
    });
  };

  const getSelectedDate = React.useCallback((): Date[] => {
    if (!value.start && !value.end) return [];

    if (value.start && !value.end) {
      const startDate = parseISO(value.start);
      if (!isValid(startDate)) return [];
      return [startDate];
    }
    if (!value.start && value.end) {
      const endDate = parseISO(value.end);
      if (!isValid(endDate)) return [];
      return [endDate];
    }

    if (value.start && value.end) {
      const startDate = parseISO(value.start);
      const endDate = parseISO(value.end);

      if (!isValid(startDate) || !isValid(endDate)) return [];
      // start > end の場合は空配列
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
  }, [value.start, value.end]);

  const getNextRange = (
    id: string,
    value: string | DateRange,
    prev: DateRange
  ): DateRange => {
    let next = { ...prev };
    if (typeof value === "string") {
      if (id.includes("start")) {
        next.start = value;
      } else if (id.includes("end")) {
        next.end = value;
      }
    } else if (typeof value === "object" && value !== null) {
      next = { start: value.start, end: value.end };
    }
    return next;
  };

  const fixReversedDates = (range: DateRange): DateRange => {
    if (!range.start || !range.end || range.start === "" || range.end === "")
      return range;
    const startDate = parseISO(range.start);
    const endDate = parseISO(range.end);
    if (isValid(startDate) && isValid(endDate) && isAfter(startDate, endDate)) {
      return { start: range.end, end: range.start };
    }

    return range;
  };

  React.useEffect(() => {
    setSelectedDates(getSelectedDate());
  }, [value.start, value.end]);

  const childArray = React.useMemo(
    () =>
      React.Children.toArray(children).map((child, index) => {
        if (React.isValidElement(child)) {
          const childValue =
            index === 0 ? (value.start ?? "") : (value.end ?? "");
          return React.cloneElement(child as React.ReactElement<any>, {
            onChange: handleRangeChange,
            onBlur: handleInputBlur,
            value: childValue,
            selectedDates,
          });
        }
        return child;
      }),
    [children, value.start, value.end]
  );

  return (
    <div className={className} id={id}>
      <div className={"flex items-end"}>
        {childArray.map((child, index) => (
          <React.Fragment key={index}>
            {child}
            {index === 0 && (
              <span className="mx-2 flex h-10 items-center text-xs text-black-sub">
                〜
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className={cn(supportMessage || errorMessage ? "mt-1" : "")}>
        {supportMessage && (
          <span className="text-xs text-black-sub">{supportMessage}</span>
        )}
        {!isValidStatus && (
          <ErrorText
            text={errors[id] || errorMessage || "入力がエラーになっています。"}
          />
        )}
      </div>
    </div>
  );
};
DateRange.displayName = "DateRange";
