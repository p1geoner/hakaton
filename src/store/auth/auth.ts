import Cookies from 'js-cookie';
import { makeAutoObservable } from 'mobx';

import { TAuthStatuses, TRegStatuses } from '@/hooks/types';

import { TUser } from '@/types/entities/IUser';
import { TRestoreStates } from '@/types/general/unions';
import { IAuthStore } from '@/types/stores/IAuthStore';
import { IRootStore } from '@/types/stores/IRootStore';

import { AuthService } from '@/API';

export class Auth implements IAuthStore {
  rootStore: IRootStore;
  restoreState: TRestoreStates;
  restoreEmail: string;
  isAuth: boolean | null;
  error: string | null;
  status: TAuthStatuses | TRegStatuses | null;
  user: TUser | null;
  isLoading: boolean;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    this.restoreState = 'baseForm';
    this.restoreEmail = '';
    this.isAuth = null;
    this.error = null;
    this.status = null;
    this.isLoading = true;

    makeAutoObservable(this);
  }

  get hiddenRestoreEmail() {
    return (
      this.restoreEmail.substring(0, 3) +
      '...@' +
      this.restoreEmail.split('@')?.[1]
    );
  }

  setAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  setError(error: string | null) {
    this.error = error;
  }

  setUser(user: TUser) {
    this.user = user;
    this.isAuth = true;
  }

  setStatus(status: TAuthStatuses | TRegStatuses | null) {
    this.status = status;
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setRestoreState(state: TRestoreStates) {
    this.restoreState = state;
  }

  setRestoreEmail(email: string) {
    this.restoreEmail = email;
  }

  async registration(user: FormData) {
    const response = await AuthService.registration(user);

    return response;
  }

  async authorization(user: FormData) {
    const response = await AuthService.authorization(user);

    if ('data' in response) {
      const data = response.data;

      Cookies.set('auth_token', data.token);

      this.setStatus('authentication-success');
      this.setError(null);
      this.setAuth(true);

      this.checkAuth();

      return response;
    }

    if (response.status === 401) this.setError('Неправильный логин или пароль');

    this.setStatus('authentication-fail');
    return response;
  }

  logout() {
    AuthService.logout();

    Cookies.remove('auth_token');

    this.rootStore.account = null;
    this.setAuth(false);
  }

  async checkAuth() {
    this.setLoading(true);
    const response = await AuthService.checkAuth();

    if (response === false) return this.setAuth(false);

    if ('data' in response) {
      this.setAuth(true);

      const user = response.data;

      this.setUser(user);
    } else {
      this.setAuth(false);

      Cookies.remove('auth_token');
    }

    this.setLoading(false);
  }
}
