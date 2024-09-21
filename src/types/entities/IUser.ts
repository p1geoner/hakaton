import { TApplicantResponse } from './IApplicant';
import { TEmployerViewResponse } from './IEmployer';

import { TRoles } from '@/types/general/unions';

export type TUserLogin = {
  username: string;
  password: string;
};

export type TUser = {
  username: string;
  role: TRoles;
};

export type TUserVkStatus = {
  code: string;
  state: string;
};

export type TUserResponse = TUserApplicantResponse | TUserEmployerResponse;

export type TUserApplicantResponse = {
  id: number;
  role: 'applicant';
  applicant_profile: TApplicantResponse;
  email: string;
  created_at: string;
  updated_at: string;
};

export type TUserEmployerResponse = {
  id: number;
  employer_profile: TEmployerViewResponse;
  role: 'employer';
  email: string;
  created_at: string;
  updated_at: string;
};
