import { TAuthStatuses, TRegStatuses } from '@/hooks/types';

import { APIResponse } from '@/types/api/IAPI';
import { TUser } from '@/types/entities/IUser';
import { TRestoreStates } from '@/types/general/unions';
import { IRootStore } from '@/types/stores/IRootStore';

export interface IAuthStore {
  rootStore: IRootStore;
  restoreState: TRestoreStates;
  restoreEmail: string;
  isAuth: boolean | null;
  error: string | null;
  status: TAuthStatuses | TRegStatuses | null;
  user: TUser | null;
  isLoading: boolean;

  hiddenRestoreEmail: string;

  setAuth: (isAuth: boolean) => void;
  setStatus: (status: TAuthStatuses | TRegStatuses | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setRestoreState: (state: TRestoreStates) => void;
  setRestoreEmail: (email: string) => void;

  registration: (user: FormData) => APIResponse<any>;
  authorization: (user: FormData) => APIResponse<any>;
  logout: () => void;
  checkAuth: () => void;
}
