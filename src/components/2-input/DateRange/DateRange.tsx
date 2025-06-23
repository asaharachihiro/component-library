import * as React from "react";
import { ErrorText } from "@components/0-common";
import { cn } from "../../../utils/cn";
import { useFormContext } from "../Form";
import { addDays, format, isAfter, isValid, parse, parseISO } from "date-fns";

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

  const [value, setValue] = React.useState<{
    start: string | null;
    end: string | null;
  }>({
    start: "",
    end: "",
  });
  const [selectedDates, setSelectedDates] = React.useState<string[]>([]);

  const isValidStatus = isValidValue ? isValidValue : errors[id] == null;

  const handleRangeChange = (
    id: string,
    range: { start: string; end: string }
  ) => {
    const { start, end } = range;

    // どちらかが空、または不正な日付の場合はクリア
    const startDate = start ? parseISO(start) : null;
    const endDate = end ? parseISO(end) : null;
    if (!start || !end || !isValid(startDate) || !isValid(endDate)) {
      setValue({ start: "", end: "" });
      return;
    }

    // 前後関係を整理してstateにセット
    if (start > end) {
      setValue({ start: end, end: start });
    } else {
      setValue({ start, end });
    }
  };

  const getSelectedDate = React.useCallback(() => {
    // どちらか片方でも値がある場合
    if (!value.start && !value.end) return [];

    // どちらかが空の場合は、その日だけ返す
    if (value.start && !value.end) {
      const startDate = parseISO(value.start);
      if (!isValid(startDate)) return [];
      return [format(startDate, "yyyy/MM/dd")];
    }
    if (!value.start && value.end) {
      const endDate = parseISO(value.end);
      if (!isValid(endDate)) return [];
      return [format(endDate, "yyyy/MM/dd")];
    }

    if (value.start && value.end) {
      // 両方ある場合は範囲
      const startDate = parseISO(value.start);
      const endDate = parseISO(value.end);

      if (!isValid(startDate) || !isValid(endDate)) return [];
      if (isAfter(startDate, endDate)) return [];

      const result: string[] = [];
      let current = startDate;
      while (!isAfter(current, endDate)) {
        result.push(format(current, "yyyy/MM/dd"));
        current = addDays(current, 1);
      }
      return result;
    }
    return [];
  }, [value.start, value.end]);

  React.useEffect(() => {
    setSelectedDates(getSelectedDate());
  }, [getSelectedDate]);

  const childArray = React.useMemo(
    () =>
      React.Children.toArray(children).map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            onChange: handleRangeChange,
            value: index === 0 ? (value.start ?? "") : (value.end ?? ""),
            selectedDates,
            isRange: true,
          });
        }
        return child;
      }),
    [children, value.start, value.end, selectedDates]
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
