import Cookies from 'js-cookie';

export const getCookiesItem = (item: string) => Cookies.get(item);

export const getExtendedUserId = () => getCookiesItem('extended_user_id');

export const getExtendedUserToken = () => getCookiesItem('extended_token');

export const getMattermostStatus = () => getCookiesItem('mm_status');
