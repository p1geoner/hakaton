import { makeAutoObservable } from 'mobx';

import { Auth } from './auth/auth';

import { TUserResponse } from '@/types/entities/IUser';
import { IAccountStore } from '@/types/stores/IAccountStore';
import { IAuthStore } from '@/types/stores/IAuthStore';
import { IRootStore } from '@/types/stores/IRootStore';
import { ISocialAuthStore } from '@/types/stores/ISocialAuthStore';

class Store implements IRootStore {
  auth: IAuthStore;
  socialAuth: ISocialAuthStore;
  account: IAccountStore | null;

  constructor() {
    this.auth = new Auth(this);
    this.account = null;

    makeAutoObservable(this);
  }

  setAccountStore(user: TUserResponse | null) {
    if (user === null) {
      return (this.account = null);
    }
  }
}

const store = new Store();
export default store;
