import makeRequest from '@/API/makeRequest';

import { GetInstitutionsResponse } from '@/types/api/IInstitutionResponse';

class AsyncTextFieldService {
  fetchInstitutions(query: string) {
    return makeRequest<GetInstitutionsResponse>({
      url: `api/institutions?query=${query}`,
    });
  }
}

export default new AsyncTextFieldService();
