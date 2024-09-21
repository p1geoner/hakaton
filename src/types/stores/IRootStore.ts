import { IAccountStore } from './IAccountStore';
import { IAuthStore } from './IAuthStore';

export interface IRootStore {
  auth: IAuthStore;
  account: IAccountStore | null;
}
