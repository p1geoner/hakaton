const getWordFromNumber = (
  number: number,
  firstWord: string,
  secondWord: string,
  thirdWord: string
) => {
  if (number >= 5 && number <= 20) return firstWord;
  else if (number % 10 === 1 && number % 100 !== 11) return secondWord;
  else if (
    number % 10 > 1 &&
    number % 10 < 5 &&
    (number % 100 < 10 || number % 100 >= 20)
  )
    return thirdWord;
  else return firstWord;
};

export const getHoursWord = (hours: number) => {
  return getWordFromNumber(hours, 'часов', 'час', 'часа');
};

export const getYearWord = (years: number) => {
  return getWordFromNumber(years, 'лет', 'год', 'года');
};

export const getMonthWord = (month: number) => {
  return getWordFromNumber(month, 'месяцев', 'месяц', 'месяца');
};

export const getDayWord = (day: number) => {
  return getWordFromNumber(day, 'дней', 'день', 'дня');
};

export const getViewsWord = (views: number) => {
  return getWordFromNumber(views, 'Просмотров', 'Просмотр', 'Просмотра');
};

export const getCoursesWord = (courses: number) => {
  return getWordFromNumber(courses, 'курсов', 'курс', 'курса');
};

export const getVacanciesWord = (vacancies: number) => {
  return getWordFromNumber(vacancies, 'вакансий', 'вакансия', 'вакансии');
};

export const getInvestmentsWord = (investments: number) => {
  return getWordFromNumber(
    investments,
    'инвестиций',
    'инвестиция',
    'инвестиции'
  );
};

export const getEmployeeWord = (employee: number) => {
  return getWordFromNumber(employee, 'сотрудников', 'сотрудник', 'сотрудника');
};
