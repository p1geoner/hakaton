import makeRequest from '@/API/makeRequest';

import {
  GetLanguagesResponse,
  GetStatusesResponse,
} from '@/types/api/IOptionResponse';

class OptionsService {
  fetchLanguages() {
    return makeRequest<GetLanguagesResponse>({
      url: 'api/languages',
      authToken: false,
    });
  }

  fetchStatuses() {
    return makeRequest<GetStatusesResponse>({
      url: 'api/statuses',
      authToken: false,
    });
  }
}

export default new OptionsService();
