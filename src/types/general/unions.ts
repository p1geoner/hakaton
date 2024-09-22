export type TEmployment =
  | 'Не имеет значения'
  | 'Полная занятость'
  | 'Частичная занятость'
  | 'Стажировка'
  | 'Проектная работа'
  | 'Гибкий график';

export type TSchedule =
  | 'Полный день'
  | 'Сменный график'
  | 'Удаленная работа'
  | 'Вахтовый метод'
  | 'Гибкий метод';

export type TEducation =
  | 'Среднее общее'
  | 'Среднее профессиональное'
  | 'Высшее'
  | 'Магистр'
  | 'Ученая степень'
  | 'Без образования';

export type TExperience =
  | 'Нет опыта'
  | 'Меньше 1 года'
  | 'От 1 года до 3 лет'
  | 'От 3 лет до 6 лет'
  | 'Больше 6 лет';

export type TStatus = 'Специалист' | 'Студент' | 'Школьник';

export type TWorkerSituation =
  | 'Устраивает место работы, но хочу повысить квалификацию'
  | 'Хочу сменить работу по профессии'
  | 'Хочу сменить профессию'
  | 'Хочу участвовать в проектах'
  | 'Хочу найти подработку';

export type TStudentSituation =
  | 'Ищу подработку в свободное от учебы время'
  | 'Ищу работу на лето'
  | 'Хочу получить дополнительную квалификацию'
  | 'Ищу место практики'
  | 'Хочу участвовать в проектах'
  | 'Хочу посещать образовательные мероприятия';

export type TSchoolerSituation =
  | 'Хочу выбрать профессию'
  | 'Хочу посещать образовательные мероприятия'
  | 'Хочу участвовать в проектах'
  | 'Знаю будущую профессию, хочу выбрать образовательное учреждение';

export type TSelectOption = {
  label: string;
  value: string | number | boolean;
};

export type TSelectOptionString = {
  label: string;
  value: string;
};

export type TSituation<Status> = Status extends 'Специалист'
  ? TWorkerSituation
  : Status extends 'Студент'
  ? TStudentSituation
  : TSchoolerSituation;

export type TSimpleEntity = {
  id: number;
  title: string;
};

export type TOwner = {
  id: number;
  role: TRoles;
};

export type TLanguage = {
  id: number;
  name: string;
};

export type TForeignLanguage = TLanguage & {
  level: string;
};

export type TMeta = {
  title: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
};

export type FileUploadType = string | null | FormData;

export type TRestoreStates =
  | 'baseForm'
  | 'secondForm'
  | 'thirdForm'
  | 'fourthForm';
export type TSex = 'Мужской' | 'Женский';
export type TRoles = 'Учитель' | '';

export type TAddressInfo = {
  value: string;
  latitude: number | null;
  longitude: number | null;
};

export type TCoordinates = {
  latitude: number;
  longitude: number;
};
