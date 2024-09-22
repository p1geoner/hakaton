import Cookies from 'js-cookie';

import makeRequest from '@/API/makeRequest';

import { CheckAuthResponse } from '@/types/api/IAuthResponse';

class AuthService {
  registration(user: FormData) {
    return makeRequest<CheckAuthResponse>({
      url: 'api/users/',
      method: 'post',
      data: user,
    });
  }

  authorization(user: FormData) {
    return makeRequest<{ token: string }>({
      url: 'api/users/token/',
      method: 'post',
      data: user,
    });
  }

  logout() {
    return makeRequest<void>({
      url: 'api/auth/logout',
      method: 'delete',
      authToken: true,
    });
  }

  checkAuth() {
    const token = Cookies.get('auth_token');

    if (token === null) return false;

    return makeRequest<CheckAuthResponse>({
      url: 'api/users/current/',
      authToken: true,
    });
  }
}

export default new AuthService();
