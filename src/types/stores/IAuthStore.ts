import { TAuthStatuses, TRegStatuses } from '@/hooks/types';

import { APIError, APIResponse } from '@/types/api/IAPI';
import { LoginResponse, RegistrationResponse } from '@/types/api/IAuthResponse';
import { TRegistrationUser } from '@/types/entities/IRegistration';
import { TUserLogin } from '@/types/entities/IUser';
import { Camelize } from '@/types/general/camelize';
import { TRestoreStates } from '@/types/general/unions';
import { IRootStore } from '@/types/stores/IRootStore';

export interface IAuthStore {
  rootStore: IRootStore;
  restoreState: TRestoreStates;
  restoreEmail: string;
  isAuth: boolean | null;
  error: string | null;
  status: TAuthStatuses | TRegStatuses | null;
  isLoading: boolean;

  hiddenRestoreEmail: string;

  setAuth: (isAuth: boolean) => void;
  setStatus: (status: TAuthStatuses | TRegStatuses | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setRestoreState: (state: TRestoreStates) => void;
  setRestoreEmail: (email: string) => void;
  serializeRegistrationErrors: (
    course: APIError['errors']
  ) => Camelize<APIError['errors']>;

  registration: (user: TRegistrationUser) => APIResponse<RegistrationResponse>;
  authorization: (user: TUserLogin) => APIResponse<LoginResponse>;
  logout: () => void;
  checkAuth: () => void;
  checkAdminAuth: () => void;
}
