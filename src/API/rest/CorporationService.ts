import makeRequest from '../makeRequest';

import { GetInvestmentProfilesResponse } from '@/types/api/ICorporationResponse';
import { GetVacanciesResponse } from '@/types/api/IVacancyResponse';
import { TSimpleEntity } from '@/types/general/unions';

class CorporationService {
  fetchInvestmentProfiles() {
    return makeRequest<GetInvestmentProfilesResponse>({
      url: 'api/employer_profiles_krso',
      authToken: true,
    });
  }

  fetchInvestmentEmployerVacancies(id: string) {
    return makeRequest<GetVacanciesResponse>({
      url: `api/employer_profiles_krso/${id}/vacancies`,
    });
  }

  fetchInvestmentEmployerYears(id?: string) {
    return makeRequest<{ years: string[] }>({
      url: `api/employer_profiles_krso/${id}/years`,
      authToken: true,
    });
  }

  fetchInvestmentEmployerSpheres(id: string) {
    return makeRequest<{ spheres: TSimpleEntity[] }>({
      url: `api/employer_profiles_krso/${id}/spheres`,
    });
  }
}
export default new CorporationService();
