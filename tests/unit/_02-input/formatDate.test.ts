import { describe, it, expect } from "vitest";
import {
  toStringFormat,
  toDateFormat,
} from "../../../src/components/_02-input/DatePicker/formatDate";

describe("formatDate", () => {
  describe("toStringFormat", () => {
    it("空文字の場合は空文字を返す", () => {
      expect(toStringFormat("")).toBe("");
    });

    it("YYYY-MM-DD形式を通常形式で返す", () => {
      expect(toStringFormat("2025-10-01")).toBe("2025/10/01");
    });

    it("YYYY/MM/DD形式を通常形式で返す", () => {
      expect(toStringFormat("2025/10/01")).toBe("2025/10/01");
    });

    it("全角数字を半角に変換して返す", () => {
      expect(toStringFormat("２０２５/１０/０１")).toBe("2025/10/01");
    });

    it("数字以外をトリムして8桁なら日付として返す", () => {
      expect(toStringFormat("2025年10月01日")).toBe("2025/10/01");
    });

    it("8桁でない場合は空文字を返す", () => {
      expect(toStringFormat("202511")).toBe("");
    });

    it("不正な日付の場合は空文字を返す", () => {
      expect(toStringFormat("2025-13-01")).toBe("");
    });

    it("isJPLocale=trueの場合は元号と曜日を含む形式で返す", () => {
      const result = toStringFormat("2025-10-01", true);
      expect(result).toBe("令和7年10月1日(水)");
    });
  });

  describe("toDateFormat", () => {
    it("空文字の場合はundefinedを返す", () => {
      expect(toDateFormat("")).toBeUndefined();
    });

    it("YYYY/MM/DD形式をDateオブジェクトで返す", () => {
      const date = toDateFormat("2025/10/01");
      expect(date).toBeInstanceOf(Date);
      expect(date?.getFullYear()).toBe(2025);
      expect(date?.getMonth()).toBe(9); // 0-indexed
      expect(date?.getDate()).toBe(1);
    });

    it("YYYY-MM-DD形式をDateオブジェクトで返す", () => {
      const date = toDateFormat("2025-10-01");
      expect(date).toBeInstanceOf(Date);
      expect(date?.getFullYear()).toBe(2025);
      expect(date?.getMonth()).toBe(9);
      expect(date?.getDate()).toBe(1);
    });
  });
});
