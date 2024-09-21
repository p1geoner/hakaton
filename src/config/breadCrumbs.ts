import { staticLinks } from '@/config/routingLinks';

export const breadCrumbs = {
  [staticLinks.course]: [
    {
      label: 'Главная',
      link: staticLinks.applicantMain,
    },
    {
      label: 'Курсы',
      link: staticLinks.courses,
    },
  ],
  [staticLinks.vacancy]: [
    {
      label: 'Главная',
      link: staticLinks.applicantMain,
    },
    {
      label: 'Вакансии',
      link: staticLinks.vacancies,
    },
  ],
  [staticLinks.applicant]: [
    {
      label: 'Главная',
      link: staticLinks.applicantMain,
    },
    {
      label: 'Анкеты',
      link: staticLinks.resumes,
    },
  ],
  [staticLinks.employer]: [
    {
      label: 'Главная',
      link: staticLinks.applicantMain,
    },
    {
      label: 'Предприятия',
      link: staticLinks.employerProfiles,
    },
  ],
};
