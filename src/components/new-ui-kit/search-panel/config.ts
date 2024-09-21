import { staticLinks } from '@/config/routingLinks';

export const searchSelectConfig = [
  {
    label: 'Приоритет. вакансии',
    value: staticLinks.vacancies,
  },
  {
    label: 'Вакансии площадок',
    value: staticLinks.externalVacancies,
  },
  {
    label: 'Анкеты',
    value: staticLinks.resumes,
  },
  {
    label: 'Курсы',
    value: staticLinks.developmentIslands,
  },
  {
    label: 'Компании',
    value: staticLinks.employerProfiles,
  },
  {
    label: 'Инвест. проекты',
    value: staticLinks.investments,
  },
  {
    label: 'График практик студентов',
    value: staticLinks.practiceStudents,
  },
];
