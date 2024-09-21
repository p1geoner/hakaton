import makeRequest from '@/API/makeRequest';

import { GetExternalVacanciesResponse } from '@/types/api/IExternalVacancyResponse';

class ExternalVacancyService {
  async fetchExternalVacancies(query: string) {
    return makeRequest<GetExternalVacanciesResponse>({
      url: `api/external_vacancies/search${query}`,
      authToken: true,
    });
  }
}

export default new ExternalVacancyService();
