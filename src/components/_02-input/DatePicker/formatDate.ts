import { format, isValid, parseISO } from "date-fns";

// 元号と曜日を含む形式で表示する関数
const toDisplayFormat = (dateObj: Date, isJPLocale: boolean): string => {
  // 日付として有効な場合
  if (isJPLocale) {
    // 元号と曜日を取得し、元号X年MM月DD日(曜日)形式で返す
    return dateObj.toLocaleDateString("ja-JP-u-ca-japanese", {
      era: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "narrow",
    });
  }
  // YYYY/MM/DD形式で返す
  return format(dateObj, "yyyy/MM/dd");
};

// 日付をyyyy/MM/dd形式のstringにフォーマット
export const toStringFormat = (value: string, isJPLocale?: boolean): string => {
  if (!value) return "";

  // 全角を半角に修正
  const convertedValue = value.replaceAll(/[０-９]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0xfee0)
  );

  // 数字以外をトリム
  const trimmedValue = convertedValue.replaceAll(/[^0-9]/g, "");

  // 8桁以外は空文字を返す
  if (trimmedValue && trimmedValue.length !== 8) return "";

  // 8桁の場合はISO形式に変換してパース
  if (trimmedValue.length === 8) {
    const createISODate = `${trimmedValue.slice(0, 4)}-${trimmedValue.slice(4, 6)}-${trimmedValue.slice(6, 8)}`;
    const createdDateObj = parseISO(createISODate);
    if (!isValid(createdDateObj)) return "";
    return toDisplayFormat(createdDateObj, isJPLocale || false);
  }

  // それ以外は通常のparseISO
  const dateObj = parseISO(convertedValue);
  if (!isValid(dateObj)) return "";

  return toDisplayFormat(dateObj, isJPLocale || false);
};

// 日付をISO形式のDateオブジェクトに変換
export const toDateFormat = (value: string): Date | undefined => {
  if (!value) return undefined;
  const replacedValue = value.replaceAll(/\//g, "-");
  const dateObj = parseISO(replacedValue);

  return dateObj;
};
