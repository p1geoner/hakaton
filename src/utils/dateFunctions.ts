import moment from 'moment';

import { getYearWord } from './wordFunctions';
import 'moment/locale/ru';

moment.locale('ru');

export const calculateAge = (date: string) => {
  return moment().diff(moment(date, 'DD-MM-YYYY'), 'years');
};

export const calculateAgeDeclension = (date: string) => {
  const age = calculateAge(date);
  return `${age} ${getYearWord(age)}`;
};

export const userOnlineFormatDate = (date: string) => {
  return moment(date, 'DD.MM.YYYY, hh:mm:ss').calendar();
};

export const checkUserOnline = (date: string) => {
  const currentDate = new Date();
  const datetime =
    currentDate.getDate() +
    '.' +
    (currentDate.getMonth() + 1) +
    '.' +
    currentDate.getFullYear() +
    ' ' +
    currentDate.getHours() +
    ':' +
    currentDate.getMinutes() +
    ':' +
    currentDate.getSeconds();

  return (
    moment(datetime, 'DD.MM.YYYY, hh:mm:ss').diff(
      moment(date, 'DD.MM.YYYY, hh:mm:ss'),
      'minutes'
    ) <= 5
  );
};

export const formatValidationDate = (validation: string[]) => {
  const date = new Date();

  if (validation?.[0]?.includes(date.getFullYear().toString())) {
    const currentDate = moment().format('DD.MM.YYYY');

    return [
      validation[0].replace(
        currentDate,
        moment(date, 'DD.MM.YYYY').format('MMMM YYYY')
      ),
    ];
  } else {
    return validation;
  }
};

export const formatProfessionalsDate = (date: string) => {
  return moment(date, 'YYYY.MM.DD').format('DD MMMM YYYY');
};

export const calculateMonthsDeclension = (
  startDate: string,
  endDate: string
) => {
  return moment(endDate, 'YYYY.MM.DD').diff(
    moment(startDate, 'YYYY.MM.DD'),
    'months'
  );
};

export const formatToSimpleView = (date: string) => {
  const capitalize = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return capitalize(moment(date, 'DD.MM.YYYY, hh:mm:ss').format('MMMM YYYY'));
};

export const getDateByMilliseconds = (date: number) => {
  return moment(date).calendar();
};
