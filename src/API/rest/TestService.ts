import makeRequest from '@/API/makeRequest';

import { ReadResumeTestResponse } from '@/types/api/ITestResponse';
import { TTestAnswer } from '@/types/entities/ITest';

class TestService {
  fetchResumeTest() {
    return makeRequest<ReadResumeTestResponse>({
      url: 'api/test',
      authToken: true,
    });
  }

  createAnswers(answers: TTestAnswer[]) {
    return makeRequest<void>({
      url: 'api/test',
      method: 'post',
      data: { answers },
      authToken: true,
    });
  }
}

export default new TestService();
