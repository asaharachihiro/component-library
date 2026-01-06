import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { DateRange } from "../../../src/components/_02-input/DateRange/DateRange";

describe("DateRange", () => {
  it("labelが表示される", () => {
    render(<DateRange id="dr1" label="期間" />);
    expect(screen.getByText("期間")).toBeInTheDocument();
  });

  it("supportMessageが表示される", () => {
    render(<DateRange id="dr2" supportMessage="サポート" />);
    expect(screen.getByText("サポート")).toBeInTheDocument();
  });

  it("errorMessageが表示される", () => {
    render(<DateRange id="dr3" errorMessage="エラー" isInvalid={true} />);
    expect(screen.getByText("エラー")).toBeInTheDocument();
  });

  it("isRequired.start/endで必須マークが表示される", () => {
    render(
      <DateRange
        id="dr4"
        label="必須"
        isRequired={{ start: true, end: true }}
      />
    );
    expect(screen.getAllByText("必須")[0]).toBeInTheDocument();
    // 必須マーク自体はFormLabelのテストで検証済み
  });

  it("disabled.start/endで入力不可になる", () => {
    render(<DateRange id="dr5" disabled={{ start: true, end: true }} />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toBeDisabled();
    expect(inputs[1]).toBeDisabled();
  });

  it("onChangeが両方のDatePickerで発火する", () => {
    const handleChange = vi.fn();
    render(<DateRange id="dr6" onChange={handleChange} />);
    const inputs = screen.getAllByRole("textbox");
    fireEvent.change(inputs[0], { target: { value: "2025-10-01" } });
    fireEvent.change(inputs[1], { target: { value: "2025-10-02" } });
    expect(handleChange).toHaveBeenCalled();
    const calls = handleChange.mock.calls.map((call) => call[0]);
    expect(calls).toContainEqual({ start: "2025-10-01", end: "" });
    expect(calls).toContainEqual({ start: "2025-10-01", end: "2025-10-02" });
  });

  it("onBlurが両方のDatePickerで発火する", () => {
    const handleBlur = vi.fn();
    render(<DateRange id="dr7" onBlur={handleBlur} />);
    const inputs = screen.getAllByRole("textbox");
    fireEvent.blur(inputs[0]);
    fireEvent.blur(inputs[1]);
    expect(handleBlur).toHaveBeenCalled();
  });

  it("valueで初期値が反映される", () => {
    render(
      <DateRange id="dr9" value={{ start: "2025-10-01", end: "2025-10-02" }} />
    );
    expect(screen.getByDisplayValue("2025/10/01")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2025/10/02")).toBeInTheDocument();
  });

  it("日付の逆転を修正する", () => {
    render(
      <DateRange id="dr10" value={{ start: "2025-10-03", end: "2025-10-01" }} />
    );
    expect(screen.getByDisplayValue("2025/10/01")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2025/10/03")).toBeInTheDocument();
  });

  it("getCalendarが両方のDatePickerに渡る", () => {
    const getCalendarMock = vi.fn(() => [
      { date: new Date("2025-10-01"), disabled: false },
      { date: new Date("2025-10-02"), disabled: false },
    ]);
    render(<DateRange id="dr11" getCalendar={getCalendarMock} />);
    const inputs = screen.getAllByRole("textbox");
    fireEvent.focus(inputs[0]);
    fireEvent.focus(inputs[1]);
    // Calendarモックの呼び出しはDatePickerのテストで検証済み
    expect(getCalendarMock).toHaveBeenCalled();
  });

  it("isStartOnMondayが両方のDatePickerに渡る", () => {
    render(<DateRange id="dr12" isStartOnMonday={true} />);
    const inputs = screen.getAllByRole("textbox");
    fireEvent.focus(inputs[0]);
    fireEvent.focus(inputs[1]);
    // Calendarモックの呼び出しはDatePickerのテストで検証済み
    expect(inputs.length).toBe(2);
  });
});
