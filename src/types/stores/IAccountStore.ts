import { TUserResponse } from '@/types/entities/IUser';
import { TRoles } from '@/types/general/unions';

export interface IAccountStore {
  id: number | null;
  role: TRoles | null;
  username: string;

  setUser: (user: TUserResponse) => void;
}
