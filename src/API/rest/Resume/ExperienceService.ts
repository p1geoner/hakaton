import makeRequest from '@/API/makeRequest';

import { ReadResumeHistoryResponse } from '@/types/api/IResumeResponse';
import { TResumeHistoryCU } from '@/types/entities/IResume';

class ResumeExperienceService {
  createExperience(experience: TResumeHistoryCU) {
    return makeRequest<ReadResumeHistoryResponse>({
      url: 'api/resume_employment_histories',
      method: 'post',
      authToken: true,
      data: experience,
    });
  }

  updateExperience(experienceId: number, experience: TResumeHistoryCU) {
    return makeRequest<ReadResumeHistoryResponse>({
      url: `api/resume_employment_histories/${experienceId}`,
      method: 'put',
      authToken: true,
      data: experience,
    });
  }

  deleteExperience(experienceId: number) {
    return makeRequest<void>({
      url: `api/resume_employment_histories/${experienceId}`,
      method: 'delete',
      authToken: true,
    });
  }
}

export default new ResumeExperienceService();
