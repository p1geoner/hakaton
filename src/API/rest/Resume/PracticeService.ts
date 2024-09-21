import makeRequest from '@/API/makeRequest';

import { ReadResumePractice } from '@/types/api/IResumeResponse';
import { TResumePracticeCU } from '@/types/entities/IResume';

class ResumePracticeService {
  createPractice(practice: TResumePracticeCU) {
    return makeRequest<ReadResumePractice>({
      url: 'api/resume_practices',
      method: 'post',
      authToken: true,
      data: practice,
    });
  }

  updatePractice(practiceId: number, practice: TResumePracticeCU) {
    return makeRequest<ReadResumePractice>({
      url: `api/resume_practices/${practiceId}`,
      method: 'post',
      authToken: true,
      data: practice,
    });
  }

  deletePractice(practiceId: number) {
    return makeRequest<void>({
      url: `api/resume_practices/${practiceId}`,
      method: 'delete',
      authToken: true,
    });
  }
}

export default new ResumePracticeService();
