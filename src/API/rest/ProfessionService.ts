import makeRequest from '@/API/makeRequest';

import { GetProfessionsResponse } from '@/types/api/IProfessionResponse';

class ProfessionService {
  fetchProfessions(search = '') {
    return makeRequest<GetProfessionsResponse>({
      url: `api/professions${search}`,
      authToken: true,
    });
  }
}

export default new ProfessionService();
