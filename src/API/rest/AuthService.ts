import Cookies from 'js-cookie';

import makeRequest from '@/API/makeRequest';

import {
  CheckAuthResponse,
  LoginResponse,
  RegistrationResponse,
} from '@/types/api/IAuthResponse';
import { TUserLogin } from '@/types/entities/IUser';

class AuthService {
  registration(user: TUserLogin) {
    return makeRequest<RegistrationResponse>({
      url: 'api/users/',
      method: 'post',
      data: user,
    });
  }

  authorization(user: TUserLogin) {
    return makeRequest<LoginResponse>({
      url: 'api/users/token',
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
