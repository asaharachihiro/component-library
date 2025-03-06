export const formatDisplayDate = (dateInput: string, isJPlocale?: boolean) => {
  if (isJPlocale) {
    // 元号と曜日を取得し、元号X年MM月DD日(曜日)形式で返す
    const dateObj = new Date(dateInput);
    return dateObj.toLocaleDateString("ja-JP-u-ca-japanese", {
      era: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "narrow",
    });
  }
  return dateInput.replace(/-/g, "/"); // YYYY/MM/DD形式で返す
};
