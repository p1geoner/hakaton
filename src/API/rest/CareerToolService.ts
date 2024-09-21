import makeRequest from '../makeRequest';

import { TUserApplicantResponse } from '@/types/entities/IUser';
import { TCareerToolName } from '@/types/entities/TCareerToolName';

class CareerToolService {
  async fetchSignUpTool(name: TCareerToolName) {
    return await makeRequest<never>({
      url: 'api/career_tools',
      authToken: true,
      method: 'post',
      data: { career_tool_name: name },
    });
  }

  async fetchRegistration(application: any) {
    return await makeRequest<TUserApplicantResponse>({
      url: 'api/auth/register_with_career_tool',
      authToken: true,
      method: 'post',
      data: application,
    });
  }
}

export default new CareerToolService();
