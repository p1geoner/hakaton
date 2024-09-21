import makeRequest from '@/API/makeRequest';

import { GetCareerPracticesResponse } from '@/types/api/ICareerPracticeResponse';

class CareerPracticeService {
  fetchCareerPractices(query: string) {
    return makeRequest<GetCareerPracticesResponse>({
      url: `api/career_practices${query}`,
      authToken: true,
    });
  }
}

export default new CareerPracticeService();
