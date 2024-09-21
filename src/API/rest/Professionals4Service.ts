import axios from 'axios';

import { APIResponse } from '@/types/api/IAPI';
import {
  GetProfessionalsProjectJobsResponse,
  GetProfessionalsProjectResponse,
  GetProfessionalsProjectsResponse,
} from '@/types/api/IProfessionals4Response';

class Professionals4Service {
  makeProfessionalsRequest<ResponseType>(
    path: string
  ): APIResponse<ResponseType> {
    const url = `https://backend.professionals4-0.ru/${path}`;

    return axios
      .request<ResponseType>({
        url,
        method: 'GET',
      })
      .catch((errors) => {
        const responseErrors = errors.response?.data?.errors;
        const status = errors?.response?.status as number;

        return { errors: responseErrors, status };
      });
  }

  fetchProfessionalsProjects(offset: number) {
    return this.makeProfessionalsRequest<GetProfessionalsProjectsResponse>(
      `web/projects/search?limit=2&offset=${offset}`
    );
  }

  fetchProfessionalsProject(projectId: string) {
    return this.makeProfessionalsRequest<GetProfessionalsProjectResponse>(
      `web/projects/${projectId}`
    );
  }

  fetchProfessionalsProjectJobs(projectId: string) {
    return this.makeProfessionalsRequest<GetProfessionalsProjectJobsResponse>(
      `web/projects/${projectId}/jobs`
    );
  }
}

export default new Professionals4Service();
