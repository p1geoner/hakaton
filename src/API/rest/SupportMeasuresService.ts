import makeRequest from '@/API/makeRequest';

import { GetSupportMeasuresResponse } from '@/types/api/ISupportMeasuresResponse';

class SupportMeasuresService {
  fetchSupportMeasures() {
    return makeRequest<GetSupportMeasuresResponse>({
      url: 'api/support_measures',
      authToken: true,
    });
  }
}

export default new SupportMeasuresService();
