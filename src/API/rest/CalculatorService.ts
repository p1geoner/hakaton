import makeRequest from '@/API/makeRequest';

import { ReadCalculatorsResponse } from '@/types/api/ICalculatorResponse';

class CalculatorService {
  fetchCalculators() {
    return makeRequest<ReadCalculatorsResponse>({
      url: 'api/calculators',
    });
  }

  saveCalculators(id: number) {
    return makeRequest({
      url: 'api/calculators/save_result',
      authToken: true,
      method: 'post',
      data: {
        calculator_answer_way_id: id,
      },
    });
  }
}

export default new CalculatorService();
