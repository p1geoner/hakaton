import * as Sentry from '@sentry/react';
import axios from 'axios';
import Cookies from 'js-cookie';

import { APIResponse, IMakeRequestParams } from '@/types/api/IAPI';

const makeRequest = <Type>({
  url = '/',
  method = 'GET',
  authToken = false,
  headers = {},
  params = {},
  data = {},
  responseType = 'json',
}: IMakeRequestParams): APIResponse<Type> => {
  url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${url}`;

  if (authToken) {
    const token = Cookies.get('auth_token');

    headers.authorization = `Token ${token}`;
  }

  return axios
    .request<Type>({
      url,
      method,
      headers,
      params,
      data,
      responseType,
    })
    .catch((errors) => {
      Sentry.captureException(errors.response?.data?.errors ?? errors);
      const responseErrors = errors.response?.data?.errors;
      const status = errors?.response?.status as number;

      // if (
      //   status === 401 &&
      //   !window.location.pathname.includes(staticLinks.authorization)
      // ) {
      //   window.location.pathname = staticLinks.authorization;
      // }

      return { errors: responseErrors, status };
    });
};

export default makeRequest;
