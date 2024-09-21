import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IMakeRequestParams extends AxiosRequestConfig {
  authToken?: boolean;
  defaultUrl?: boolean;
}

export type APIResponse<Type> = Promise<AxiosResponse<Type> | APIError>;

export type APIError = {
  errors: {
    [key: string]: string[];
  };
  status: number;
};

export type APIResponseMeta = {
  current_page: number;
  last_page: number;
  total: number;
  path: string;
  breadcrumbs: Array<TBreadcrumbResponse>;
};

export type TBreadcrumbResponse = {
  id: number;
  label: string;
};
