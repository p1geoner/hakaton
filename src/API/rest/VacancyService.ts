import makeRequest from '@/API/makeRequest';

import {
  GetRecentVacanciesResponse,
  GetVacanciesResponse,
  GetVacancyOfferResponse,
  GetVacancyResponse,
} from '@/types/api/IVacancyResponse';
import { TVacancyCreate } from '@/types/entities/IVacancy';

class VacancyService {
  fetchVacancies(search = '') {
    return makeRequest<GetVacanciesResponse>({
      url: `api/vacancies/search${search}`,
      authToken: true,
    });
  }
  fetchCorporationVacancies(search = '', id: string) {
    return makeRequest<GetVacanciesResponse>({
      url: `api/employer_profiles_krso/${id}/vacancies${search}`,
      authToken: true,
    });
  }
  fetchVacanciesOffer(resumeId: number, query = '') {
    return makeRequest<GetVacancyOfferResponse>({
      url: query
        ? `api/employer_profile/get_vacancies_for_respond?resume_id=${resumeId}&paginated=0&query=${query}`
        : `api/employer_profile/get_vacancies_for_respond?resume_id=${resumeId}&paginated=0`,
      authToken: true,
    });
  }
  // vacancyOfferIndex
  fetchRecentVacancies() {
    return makeRequest<GetRecentVacanciesResponse>({
      url: 'api/home/vacancies',
    });
  }
  //

  fetchVacancy(id?: number) {
    return makeRequest<GetVacancyResponse>({
      url: `api/vacancies/${id}`,
      authToken: true,
    });
  }

  createVacancy(vacancy: TVacancyCreate) {
    return makeRequest<GetVacancyResponse>({
      url: 'api/vacancies',
      method: 'post',
      authToken: true,
      data: vacancy,
    });
  }

  updateVacancy(vacancy: TVacancyCreate, id: number) {
    return makeRequest<GetVacancyResponse>({
      url: `api/vacancies/${id}`,
      method: 'put',
      authToken: true,
      data: vacancy,
    });
  }

  deleteVacancy(id?: number) {
    return makeRequest<void>({
      url: `api/vacancies/${id}`,
      method: 'delete',
      authToken: true,
    });
  }

  duplicateVacancy(itemId: number, userId: number) {
    return makeRequest({
      url: `api/employer_profiles/${userId}/vacancies`,
      method: 'post',
      authToken: true,
      data: { id: itemId },
    });
  }

  archiveVacancy(itemId: number, userId: number) {
    return makeRequest<GetVacancyResponse>({
      url: `api/employer_profiles/${userId}/vacancies/archive`,
      method: 'post',
      authToken: true,
      data: { id: itemId },
    });
  }
}

export default new VacancyService();
