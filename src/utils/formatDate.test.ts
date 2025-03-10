import { formatDate } from "./formatDate";
describe("formatDate", () => {
  const validDate: Date = new Date("2024-01-25T00:00:00.000Z");
  test("文字列がDate型に変換される", () => {
    const date = formatDate("20240125");
    expect(date).toEqual(validDate);
  });
  test("数値がDate型に変換される", () => {
    const date = formatDate(20240125);
    expect(date).toEqual(validDate);
  });
  test("入力された値が不正な場合、nullが返される", () => {
    const date = formatDate("errorInput");
    expect(date).toBeNull();
  });
});
