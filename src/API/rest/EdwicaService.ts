import axios from 'axios';

import makeRequest from '@/API/makeRequest';

import {
  GetEdwicaResponse,
  GetEdwicaTrajectoryResponse,
} from '@/types/api/IEdwica';

class EdwicaService {
  fetchEdwicaRequest() {
    return makeRequest<GetEdwicaResponse>({
      url: 'api/edwica_auth',
      method: 'POST',
      authToken: true,
    });
  }

  fetchEdwicaTrajectory(email: string) {
    return axios
      .request<GetEdwicaTrajectoryResponse>({
        url: `https://sahalin.edwica.ru/api/v1/trajectory/view?access-token=L0X6fZfpu8MhQz2Vz44AQclhILEfpV85&email=${email}`,
        method: 'GET',
      })
      .catch((errors) => {
        const responseErrors = errors.response?.data?.errors;
        const status = errors?.response?.status as number;

        return { errors: responseErrors, status };
      });
  }
}

export default new EdwicaService();
