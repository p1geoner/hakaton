import { makeAutoObservable } from 'mobx';

import { Auth } from './auth/auth';

import { IAuthStore } from '@/types/stores/IAuthStore';
import { IRootStore } from '@/types/stores/IRootStore';

class Store implements IRootStore {
  auth: IAuthStore;

  constructor() {
    this.auth = new Auth(this);

    makeAutoObservable(this);
  }
}

const store = new Store();
export default store;
