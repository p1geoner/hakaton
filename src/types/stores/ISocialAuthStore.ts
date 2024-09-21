import { APIError, APIResponse } from '@/types/api/IAPI';
import { LoginResponse } from '@/types/api/IAuthResponse';
import { TUserVkStatus } from '@/types/entities/IUser';
import { IRootStore } from '@/types/stores/IRootStore';

export interface ISocialAuthStore {
  rootStore: IRootStore;
  error: string | null;
  errorStatus: number | null;
  isLoading: boolean;

  // sets
  setError(error: string | null): void;

  setErrorStatus(status: number | null): void;

  setLoading(isLoading: boolean): void;

  resetStates(): void;

  transformErrors(response: APIError): void;

  // async
  // registrationVk(data: TUserVkStatus): APIResponse<RegistrationResponse>;
  authorizationVk(data: TUserVkStatus): APIResponse<LoginResponse>;
}
