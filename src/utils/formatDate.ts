/**
 * 入力された値をDate型に整形する関数
 * @param dateString - 入力された日付文字列
 * @returns Date型の日付
 */
export const formatDate = (dateInput: string | number): Date | null => {
  if (!dateInput) {
    return null;
  }

  let date: Date;
  let dateString: string = "";

  if (typeof dateInput === "number") {
    dateString = dateInput.toString();
  }
  if (typeof dateInput === "string") {
    dateString = dateInput;
  }

  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6, 8);
  dateString = `${year}-${month}-${day}`;

  date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
};
