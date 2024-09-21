import { TApplicantResponse } from '@/types/entities/IApplicant';
import { TUserResponse } from '@/types/entities/IUser';
import { TRoles } from '@/types/general/unions';

export type LoginResponse = {
  token: string;
  role: TRoles;
  profile: TApplicantResponse;
};

export type RegistrationResponse = LoginResponse & { user: TUserResponse };

export type CheckAuthResponse = {
  user: TUserResponse;
};
