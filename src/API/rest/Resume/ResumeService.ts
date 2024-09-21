import makeRequest from '@/API/makeRequest';

import {
  ReadRecentResumesResponse,
  ReadResumeMainResponse,
  ReadResumeResponse,
  ReadResumesResponse,
  ReadWeekResumesResponse,
} from '@/types/api/IResumeResponse';
import { TResumeMainCU } from '@/types/entities/IResume';

class ResumeService {
  fetchResumes(search: string) {
    return makeRequest<ReadResumesResponse>({
      url: `api/resumes/search${search}`,
      authToken: true,
    });
  }

  fetchWeekResumes() {
    return makeRequest<ReadWeekResumesResponse>({
      url: 'api/resumes_week',
      authToken: true,
    });
  }

  fetchRecentResumes() {
    return makeRequest<ReadRecentResumesResponse>({
      url: 'api/home/resumes',
    });
  }

  fetchResume(id: number) {
    return makeRequest<ReadResumeResponse>({
      url: `api/resumes/${id}`,
      authToken: true,
    });
  }

  createResume(resume: TResumeMainCU) {
    return makeRequest<ReadResumeResponse>({
      url: 'api/resume',
      method: 'post',
      data: resume,
      authToken: true,
    });
  }

  uploadResume(resume: FormData) {
    return makeRequest<ReadResumeResponse>({
      url: 'api/parser_resume',
      method: 'post',
      data: resume,
      authToken: true,
    });
  }

  updateResume(resume: TResumeMainCU) {
    return makeRequest<ReadResumeMainResponse>({
      url: 'api/resume',
      method: 'put',
      data: resume,
      authToken: true,
    });
  }

  updateVisibility(isVisible: boolean) {
    return makeRequest<void>({
      url: 'api/resume_visibility',
      method: 'put',
      data: { is_visible: isVisible },
      authToken: true,
    });
  }

  deleteResume() {
    return makeRequest<void>({
      url: 'api/resume',
      method: 'delete',
      authToken: true,
    });
  }

  exportResume(resumeId: number, type: 'pdf' | 'rtf') {
    return makeRequest<string>({
      url: `api/export/resumes/${resumeId}?type=${type}`,
      responseType: 'blob',
    });
  }
}

export default new ResumeService();
