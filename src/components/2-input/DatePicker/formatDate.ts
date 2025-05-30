import { format, isValid, parseISO } from "date-fns";

const displayDate = (dateObj: Date, isJPLocale: boolean): string => {
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

export const formatDate = (value: string, isJPLocale?: boolean): string => {
  if (!value) return "";

  const convertedValue = value.replaceAll(/[０-９]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0xfee0)
  );

  const dateObj = parseISO(convertedValue);
  if (!isValid(dateObj)) {
    const trimmedValue = convertedValue.replaceAll(/[^0-9]/g, "");
    if (trimmedValue.length !== 8) return "";
    const createISODate = `${trimmedValue.slice(0, 4)}-${trimmedValue.slice(4, 6)}-${trimmedValue.slice(6, 8)}`;

    const createdDateObj = parseISO(createISODate);
    if (!isValid(createdDateObj)) return "";

    return displayDate(createdDateObj, isJPLocale || false);
  }

  return displayDate(dateObj, isJPLocale || false);
};
