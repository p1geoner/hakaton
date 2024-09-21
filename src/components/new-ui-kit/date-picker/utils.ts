export const datePickerDateFormatting = (date: Date) => {
  const year = date.getFullYear();
  const month =
    date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();

  return `${day}.${month}.${year}`;
};
