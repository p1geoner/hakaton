import Cookies from 'js-cookie';
import { makeAutoObservable } from 'mobx';

import { APIError } from '@/types/api/IAPI';
import { TUserVkStatus } from '@/types/entities/IUser';
import { IRootStore } from '@/types/stores/IRootStore';
import { ISocialAuthStore } from '@/types/stores/ISocialAuthStore';

import { AuthService } from '@/API';

import { crashError } from '@/config/vkConfig';

export class SocialAuth implements ISocialAuthStore {
  rootStore;
  error: string | null = null;
  errorStatus: number | null = null;
  isLoading: boolean = false;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }

  setError(error: string | null) {
    this.error = error;
  }

  setErrorStatus(status: number | null) {
    this.errorStatus = status;
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  resetStates() {
    this.setError(null);
    this.setErrorStatus(null);
    this.setLoading(false);
  }

  transformErrors(response: APIError) {
    const error = [];

    for (const key in response.errors) {
      Array.isArray(response.errors[key])
        ? error.push(response.errors[key].join(' '))
        : error.push(response.errors[key]);
    }

    error.length ? this.setError(error.join(' ')) : this.setError(crashError);

    this.setErrorStatus(response.status);
  }

  // async registrationVk(data: TUserVkStatus) {
  //   this.resetStates();
  //   this.setLoading(true);
  //
  //   const response = await AuthService.registrationVk(data);
  //
  //   if ('data' in response) {
  //     const data = response.data;
  //     Cookies.set('auth_token', data.token);
  //     Cookies.set('extended_token', data.extended_token);
  //     Cookies.set('extended_user_id', data.extended_user_id);
  //     Cookies.set('mm_status', data.mm_status);
  //
  //     this.rootStore.auth.checkAuth();
  //
  //   } else if ('errors' in response) {
  //     this.transformErrors(response);
  //   }
  //
  //   this.setLoading(false);
  //   return response;
  // }

  async authorizationVk(data: TUserVkStatus) {
    this.resetStates();
    this.setLoading(true);

    const response = await AuthService.authorizationVk(data);

    if ('data' in response) {
      const data = response.data;

      Cookies.set('auth_token', data.token);
      Cookies.set('extended_token', data.extended_token);
      Cookies.set('extended_user_id', data.extended_user_id);
      Cookies.set('mm_status', data.mm_status);

      this.rootStore.auth.checkAuth();
    } else if ('errors' in response) {
      this.transformErrors(response);
    }

    this.setLoading(false);
    return response;
  }
}
