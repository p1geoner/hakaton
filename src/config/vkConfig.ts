import { staticLinks } from './routingLinks';

export const getVkAuthUrl = (type: 'login' | 'register') => {
  const appId = process.env.NEXT_PUBLIC_VK_APP_ID;
  const authRedirectUrl =
    process.env.NEXT_PUBLIC_FRONT_URL + staticLinks.authorization;
  const regRedirectUrl =
    process.env.NEXT_PUBLIC_FRONT_URL + staticLinks.registration;

  const currentRedirectUrl =
    type === 'login' ? authRedirectUrl : regRedirectUrl;

  const query = `client_id=${appId}&redirect_uri=${currentRedirectUrl}&scope=email&display=page&response_type=code&state=${type}`;
  return `https://oauth.vk.com/authorize?${query}`;
};

export const crashError =
  'Попробуйте обновить страницу позже.\n' +
  'Если ошибка повторяется — напишите нам об этом в поддержку.';
