import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Calendar } from "../../../src/components/_02-input/DatePicker/Calendar";

describe("Calendar", () => {
  const baseDate = new Date("2025-10-01");

  it("inputDateが渡っている", () => {
    render(
      <Calendar
        id="cal2"
        inputDate={new Date("2025-10-01")}
        currentDate={new Date("2025-10-01")}
        setCurrentDate={() => {}}
        onSelectDate={() => {}}
        onClosed={() => {}}
      />
    );
    const btn = screen.getByText("1");
    expect(btn).toHaveAttribute("aria-pressed", "true");
  });

  it("isStartOnMondayで曜日の並びが変わる", () => {
    render(
      <Calendar
        id="cal4"
        isStartOnMonday
        currentDate={new Date("2025-10-01")}
        setCurrentDate={() => {}}
        onSelectDate={() => {}}
        onClosed={() => {}}
      />
    );
    const weekdayRow = screen.getByTestId("weekday-row");
    const weekdayOrder = Array.from(weekdayRow.children).map(
      (el) => el.textContent
    );
    expect(weekdayOrder).toEqual(["月", "火", "水", "木", "金", "土", "日"]);
  });

  it("getCalendarで日付リストがカスタマイズされる", () => {
    const getCalendarMock = vi.fn(() => [{ date: baseDate, disabled: true }]);
    render(
      <Calendar
        id="cal5"
        getCalendar={getCalendarMock}
        currentDate={baseDate}
        setCurrentDate={() => {}}
        onSelectDate={() => {}}
        onClosed={() => {}}
      />
    );
    expect(getCalendarMock).toHaveBeenCalledWith(baseDate);
    const btn = screen.getByText("1");
    expect(btn).toBeDisabled();
  });

  it("selectedDatesで複数日選択されている", () => {
    const dates = [baseDate, new Date("2025-10-02")];
    render(
      <Calendar
        id="cal6"
        selectedDates={dates}
        currentDate={baseDate}
        setCurrentDate={() => {}}
        onSelectDate={() => {}}
        onClosed={() => {}}
      />
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    const input1 = screen.getByText("1");
    expect(input1.className).toContain("bg-primary");
    const input2 = screen.getByText("2");
    expect(input2.className).toContain("bg-primary");
  });

  it("setCurrentDateで月変更ができる", () => {
    const setCurrentDateMock = vi.fn();
    render(
      <Calendar
        id="cal9"
        currentDate={baseDate}
        setCurrentDate={setCurrentDateMock}
        onSelectDate={() => {}}
        onClosed={() => {}}
      />
    );
    const nextBtn = screen.getByText("chevron_right");
    fireEvent.click(nextBtn);
    expect(setCurrentDateMock).toHaveBeenCalled();
  });

  it("onSelectDateが日付クリックで発火する", () => {
    const onSelectDateMock = vi.fn();
    render(
      <Calendar
        id="cal10"
        currentDate={baseDate}
        setCurrentDate={() => {}}
        onSelectDate={onSelectDateMock}
        onClosed={() => {}}
      />
    );
    const btn = screen.getByText("1");
    fireEvent.click(btn);
    expect(onSelectDateMock).toHaveBeenCalled();
  });

  it("onClosedが日付クリックで発火する", () => {
    const onClosedMock = vi.fn();
    render(
      <Calendar
        id="cal11"
        currentDate={baseDate}
        setCurrentDate={() => {}}
        onSelectDate={() => {}}
        onClosed={onClosedMock}
      />
    );
    const btn = screen.getByText("1");
    fireEvent.click(btn);
    expect(onClosedMock).toHaveBeenCalledWith(false);
  });
});
