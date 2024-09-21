import { TEducationFormat } from '@/types/general/unions';

export const scheduleTypes = [
  { value: 'Полный день', label: 'Полный день' },
  { value: 'Сменный график', label: 'Сменный график' },
  { value: 'Удаленная работа', label: 'Удаленная работа' },
  { value: 'Вахтовый метод', label: 'Вахтовый метод' },
  { value: 'Гибкий график', label: 'Гибкий график' },
];

export const experienceTypes = [
  { value: 'Нет опыта', label: 'Нет опыта' },
  { value: 'Меньше 1 года', label: 'Меньше 1 года' },
  { value: 'От 1 года до 3 лет', label: 'От 1 года до 3 лет' },
  { value: 'От 3 лет до 6 лет', label: 'От 3 лет до 6 лет' },
  { value: 'Больше 6 лет', label: 'Больше 6 лет' },
];

export const educationTypes = [
  { value: 'Среднее общее', label: 'Среднее общее' },
  { value: 'Среднее профессиональное', label: 'Среднее профессиональное' },
  { value: 'Высшее', label: 'Высшее' },
  { value: 'Магистр', label: 'Магистр' },
  { value: 'Ученая степень', label: 'Ученая степень' },
];

export const educationFormats: {
  label: TEducationFormat;
  value: TEducationFormat;
}[] = [
  { value: 'Очно', label: 'Очно' },
  { value: 'Дистанционно', label: 'Дистанционно' },
  {
    value: 'Очно с применением дистанционного формата',
    label: 'Очно с применением дистанционного формата',
  },
];

export const employmentTypes = [
  { value: 'Не имеет значения', label: 'Не имеет значения' },
  { value: 'Полная занятость', label: 'Полная занятость' },
  { value: 'Частичная занятость', label: 'Частичная занятость' },
  { value: 'Стажировка', label: 'Стажировка' },
  { value: 'Проектная работа', label: 'Проектная работа' },
  { value: 'Практика', label: 'Практика' },
  { value: 'Гибкий график', label: 'Гибкий график' },
];

export const practiceTypes = [
  { value: 'Учебная практика', label: 'Учебная практика' },
  { value: 'Производственная практика', label: 'Производственная практика' },
];

export const sortDirectionsList = [
  { label: 'Сначала новые', value: 'all' },
  { label: 'Сначала старые', value: 'asc' },
];

export const timeOptionsList = [
  { label: 'За все время', value: 'all' },
  { label: 'В этом месяце', value: 'month' },
  { label: 'На этой неделе', value: 'week' },
  { label: 'Сегодня', value: 'day' },
];

export const responseStatusesList = [
  { label: 'Любые отклики', value: 'all' },
  { label: 'Приглашение', value: '3' },
  { label: 'Одобрено', value: '1' },
  { label: 'Отклонено', value: '0' },
  { label: 'Не просмотрено', value: '2' },
];

export const favoriteTypes = [
  { label: 'Все', value: 'all' },
  { label: 'Вакансии', value: 'Vacancy' },
  { label: 'Анкеты', value: 'Resume' },
  { label: 'Предприятия', value: 'EmployerProfile' },
  { label: 'Курсы', value: 'Course' },
];

export const driverLicenses = [
  { label: 'M', value: 'M' },
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'BE', value: 'BE' },
  { label: 'C', value: 'C' },
  { label: 'CE', value: 'CE' },
  { label: 'D', value: 'D' },
  { label: 'DE', value: 'DE' },
  { label: 'TM', value: 'TM' },
  { label: 'TB', value: 'TB' },
];

export const languageLevelOptions = [
  { label: 'A1 - Начальный уровень', value: 'A1 - Начальный уровень' },
  { label: 'A2 - Базовый уровень', value: 'A2 - Базовый уровень' },
  { label: 'B1 - Средний уровень', value: 'B1 - Средний уровень' },
  { label: 'B2 - Выше среднего', value: 'B2 - Выше среднего' },
  { label: 'C1 - Продвинутый уровень', value: 'C1 - Продвинутый уровень' },
  {
    label: 'C2 - Владение в совершенстве',
    value: 'C2 - Владение в совершенстве',
  },
];

export const platformOptions = [
  { label: 'Все площадки', value: 'all' },
  { label: 'hh.ru', value: 'hh.ru' },
  { label: 'trudvsem.ru', value: 'trudvsem.ru' },
];

export const situations = [
  {
    label: 'Устраивает место работы, но хочу повысить квалификацию',
    value: 'Устраивает место работы, но хочу повысить квалификацию',
  },
  {
    label: 'Хочу сменить работу по профессии',
    value: 'Хочу сменить работу по профессии',
  },
  { label: 'Хочу сменить профессию', value: 'Хочу сменить профессию' },
  {
    label: 'Хочу участвовать в проектах',
    value: 'Хочу участвовать в проектах',
  },
  { label: 'Хочу найти подработку', value: 'Хочу найти подработку' },
  {
    label: 'Ищу подработку в свободное от учебы время',
    value: 'Ищу подработку в свободное от учебы время',
  },
  { label: 'Ищу работу на лето', value: 'Ищу работу на лето' },
  {
    label: 'Хочу получить дополнительную квалификацию',
    value: 'Хочу получить дополнительную квалификацию',
  },
  {
    label: 'Ищу место практики',
    value: 'Ищу место практики',
  },
  {
    label: 'Хочу посещать образовательные мероприятия',
    value: 'Хочу посещать образовательные мероприятия',
  },
  {
    label: 'Знаю будущую профессию, хочу выбрать образовательное учреждение',
    value: 'Знаю будущую профессию, хочу выбрать образовательное учреждение',
  },
  {
    label: 'Хочу выбрать будущую профессию',
    value: 'Хочу выбрать будущую профессию',
  },
];

export const schoolerSituations = [
  {
    label: 'Хочу участвовать в проектах',
    value: 'Хочу участвовать в проектах',
  },
  {
    label: 'Ищу подработку в свободное от учебы время',
    value: 'Ищу подработку в свободное от учебы время',
  },
  { label: 'Ищу работу на лето', value: 'Ищу работу на лето' },
  {
    label: 'Хочу получить дополнительное образование',
    value: 'Хочу получить дополнительное образование',
  },
  {
    label: 'Хочу посещать образовательные мероприятия',
    value: 'Хочу посещать образовательные мероприятия',
  },
  {
    label: 'Знаю будущую профессию, хочу выбрать образовательное учреждение',
    value: 'Знаю будущую профессию, хочу выбрать образовательное учреждение',
  },
  {
    label: 'Хочу выбрать будущую профессию',
    value: 'Хочу выбрать будущую профессию',
  },
];

export const allSituations = [
  {
    label: 'Устраивает место работы, но хочу повысить квалификацию',
    value: 'Устраивает место работы, но хочу повысить квалификацию',
  },
  {
    label: 'Хочу сменить работу по профессии',
    value: 'Хочу сменить работу по профессии',
  },
  { label: 'Хочу сменить профессию', value: 'Хочу сменить профессию' },
  {
    label: 'Хочу участвовать в проектах',
    value: 'Хочу участвовать в проектах',
  },
  { label: 'Хочу найти подработку', value: 'Хочу найти подработку' },
  {
    label: 'Ищу подработку в свободное от учебы время',
    value: 'Ищу подработку в свободное от учебы время',
  },
  { label: 'Ищу работу на лето', value: 'Ищу работу на лето' },
  {
    label: 'Хочу получить дополнительную квалификацию',
    value: 'Хочу получить дополнительную квалификацию',
  },
  {
    label: 'Хочу получить дополнительное образование',
    value: 'Хочу получить дополнительное образование',
  },
  {
    label: 'Ищу место практики',
    value: 'Ищу место практики',
  },
  {
    label: 'Хочу посещать образовательные мероприятия',
    value: 'Хочу посещать образовательные мероприятия',
  },
  {
    label: 'Знаю будущую профессию, хочу выбрать образовательное учреждение',
    value: 'Знаю будущую профессию, хочу выбрать образовательное учреждение',
  },
  {
    label: 'Хочу выбрать будущую профессию',
    value: 'Хочу выбрать будущую профессию',
  },
];

export const investmentProjects = [
  { label: 'Поиск сотрудников', value: false },
  { label: 'Инвестиционный проект', value: true },
];

export const months = [
  { label: 'Январь', value: '01' },
  { label: 'Февраль', value: '02' },
  { label: 'Март', value: '03' },
  { label: 'Апрель', value: '04' },
  { label: 'Май', value: '05' },
  { label: 'Июнь', value: '06' },
  { label: 'Июль', value: '07' },
  { label: 'Август', value: '08' },
  { label: 'Сентябрь', value: '09' },
  { label: 'Октябрь', value: '10' },
  { label: 'Ноябрь', value: '11' },
  { label: 'Декабрь', value: '12' },
];

export const competencyRoles = [
  { label: 'Главный эксперт', value: 'Главный эксперт' },
  { label: 'Эксперт-наставник', value: 'Эксперт-наставник' },
  { label: 'Эксперт-сопровождающий', value: 'Эксперт-сопровождающий' },
  { label: 'Индустриальный эксперт', value: 'Индустриальный эксперт' },
  { label: 'Эксперт-методист', value: 'Эксперт-методист' },
  { label: 'Приглашенный эксперт', value: 'Приглашенный эксперт' },
  { label: 'Участник', value: 'Участник' },
  { label: 'Юниор', value: 'Юниор' },
];

export const practiceOptionList = [
  { label: 'Неважно', value: 'all' },
  { label: 'Учебная', value: 'Учебная практика' },
  { label: 'Производственная', value: 'Производственная практика' },
  { label: 'Преддипломная', value: 'Преддипломная практика' },
];

export const courseTypes = [
  { value: '1', label: '1 курс' },
  { value: '2', label: '2 курс' },
  { value: '3', label: '3 курс' },
  { value: '4', label: '4 курс' },
  { value: '5', label: '5 курс' },
];
