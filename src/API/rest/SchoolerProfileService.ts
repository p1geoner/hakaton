import axios from 'axios';

import makeRequest from '@/API/makeRequest';

import {
  GetActivities,
  GetInstitutions,
  GetSchoolEvents,
  GetSchoolSpheres,
  GetSchoolSpheresItem,
} from '@/types/api/ISchoolerProfileResponse';

class SchoolerProfileService {
  fetchInstitutions() {
    return axios
      .request<GetInstitutions>({
        url: 'https://study-track.ru/api/get_sakhalin_institutions',
        method: 'GET',
      })
      .catch((errors) => {
        const responseErrors = errors.response?.data?.errors;
        const status = errors?.response?.status as number;

        return { errors: responseErrors, status };
      });
  }

  fetchSchoolSpheres() {
    return makeRequest<GetSchoolSpheres>({
      url: 'api/school_spheres',
      authToken: true,
    });
  }

  fetchSchoolSpheresItem(id: string) {
    return makeRequest<GetSchoolSpheresItem>({
      url: `api/spheres/${id}`,
      authToken: true,
    });
  }

  fetchSchoolEvents(query: string) {
    return makeRequest<GetSchoolEvents>({
      url: `api/calendar_events?${query}`,
      authToken: true,
    });
  }

  fetchActivities(query: string) {
    return makeRequest<GetActivities>({
      url: `api/activities${query}`,
      authToken: true,
    });
  }

  signUpForSchoolEvent(id: number) {
    return makeRequest<void>({
      url: `api/calendar_events/${id}`,
      method: 'POST',
      authToken: true,
    });
  }

  cancelSchoolEvent(id: number) {
    return makeRequest<void>({
      url: `api/calendar_events/${id}`,
      method: 'DELETE',
      authToken: true,
    });
  }

  fetchResultTest(answers: string[]) {
    return makeRequest<void>({
      url: 'api/career_guidance',
      method: 'POST',
      authToken: true,
      data: { answers: answers },
    });
  }
}

export default new SchoolerProfileService();
