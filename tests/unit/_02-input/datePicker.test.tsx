import { describe, it, expect, vi } from "vitest";

vi.mock("../../../src/components/_02-input/DatePicker/Calendar", () => ({
  Calendar: (props: any) => (
    <div
      data-testid="calendar-mock"
      data-selected-dates={JSON.stringify(props.selectedDates)}
      data-is-start-on-monday={String(props.isStartOnMonday)}
      data-current-date={props.currentDate?.toISOString()}
      data-has-get-calendar={
        typeof props.getCalendar === "function" ? "true" : "false"
      }
      data-has-set-current-date={
        typeof props.setCurrentDate === "function" ? "true" : "false"
      }
    />
  ),
}));

import { render, screen, fireEvent } from "@testing-library/react";
import { DatePicker } from "../../../src/components/_02-input/DatePicker";

describe("DatePicker", () => {
  it("labelが表示される", () => {
    render(<DatePicker id="dp1" label="日付選択" />);
    expect(screen.getByText("日付選択")).toBeInTheDocument();
  });

  it("supportMessageが表示される", () => {
    render(<DatePicker id="dp2" supportMessage="サポートメッセージ" />);
    expect(screen.getByText("サポートメッセージ")).toBeInTheDocument();
  });

  it("errorMessageが表示される", () => {
    render(
      <DatePicker
        id="dp3"
        errorMessage="エラーメッセージ"
        isValidValue={false}
      />
    );
    expect(screen.getByText("エラーメッセージ")).toBeInTheDocument();
  });

  it("valueが反映される", () => {
    render(<DatePicker id="dp6" value="2025-10-01" />);
    expect(screen.getByDisplayValue("2025/10/01")).toBeInTheDocument();
  });

  it("disabledのとき入力できない", () => {
    render(<DatePicker id="dp8" disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("tooltipが表示される", () => {
    render(<DatePicker id="dp9" label="ツールチップ" tooltip="説明" />);
    expect(screen.getByText("説明")).toBeInTheDocument();
  });

  it("onChangeイベントが発火する", () => {
    const handleChange = vi.fn();
    render(<DatePicker id="dp10" onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "2025-10-02" } });
    expect(handleChange).toHaveBeenCalledWith("dp10", "2025-10-02");
  });

  it("onBlurイベントが発火する", () => {
    const handleBlur = vi.fn();
    render(<DatePicker id="dp11" onBlur={handleBlur} />);
    const input = screen.getByRole("textbox");
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });

  it("onFocusイベントが発火しカレンダーが表示される", () => {
    const handleFocus = vi.fn();
    render(<DatePicker id="dp12" onFocus={handleFocus} />);
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
  });

  it("カレンダーアイコンボタンが表示される", () => {
    render(<DatePicker id="dp13" />);
    expect(screen.getByLabelText("Open calendar")).toBeInTheDocument();
  });

  it("hasRange=trueでもエラーが表示されない", () => {
    render(
      <DatePicker
        id="dp14"
        errorMessage="エラー"
        hasRange
        isValidValue={false}
      />
    );
    expect(screen.queryByText("エラー")).not.toBeInTheDocument();
  });

  it("isJPLocale=trueのとき日本語形式で表示される", () => {
    render(<DatePicker id="dp15" isJPLocale value="2025-10-01" />);
    expect(screen.getByDisplayValue("令和7年10月1日(水)")).toBeInTheDocument();
  });

  it("selectedDatesがCalendarに渡される", () => {
    render(<DatePicker id="dp7" selectedDates={[new Date("2025-10-01")]} />);
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    const calendar = screen.getByTestId("calendar-mock");
    const selectedDates = JSON.parse(
      calendar.getAttribute("data-selected-dates") || "[]"
    );
    expect(selectedDates).toEqual(["2025-10-01T00:00:00.000Z"]);
  });

  it("isStartOnMondayがCalendarに渡る", () => {
    render(<DatePicker id="dp16" isStartOnMonday={true} />);
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    const calendar = screen.getByTestId("calendar-mock");
    expect(calendar.getAttribute("data-is-start-on-monday")).toBe("true");
  });

  it("getCalendarがCalendarに渡る", () => {
    const getCalendarMock = vi.fn();
    render(<DatePicker id="dp17" getCalendar={getCalendarMock} />);
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    const calendar = screen.getByTestId("calendar-mock");
    expect(calendar.getAttribute("data-has-get-calendar")).toBe("true");
  });
});
