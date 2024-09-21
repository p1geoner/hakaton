import makeRequest from '@/API/makeRequest';

import { ReadResumeEducationResponse } from '@/types/api/IResumeResponse';
import { TResumeEducationCU } from '@/types/entities/IResume';

class ResumeEducationService {
  createEducation(education: TResumeEducationCU) {
    return makeRequest<ReadResumeEducationResponse>({
      url: 'api/resume_educations',
      method: 'post',
      authToken: true,
      data: education,
    });
  }

  updateEducation(educationId: number, education: TResumeEducationCU) {
    return makeRequest<ReadResumeEducationResponse>({
      url: `api/resume_educations/${educationId}`,
      method: 'post',
      authToken: true,
      data: education,
    });
  }

  deleteEducation(educationId: number) {
    return makeRequest<void>({
      url: `api/resume_educations/${educationId}`,
      method: 'delete',
      authToken: true,
    });
  }
}

export default new ResumeEducationService();
