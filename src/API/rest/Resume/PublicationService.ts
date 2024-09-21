import makeRequest from '@/API/makeRequest';

import { ReadResumePublicationResponse } from '@/types/api/IResumeResponse';

class ResumePublicationService {
  createPublication(publication: FormData) {
    return makeRequest<ReadResumePublicationResponse>({
      url: 'api/resume_publications',
      method: 'post',
      authToken: true,
      data: publication,
    });
  }

  updatePublication(publicationId: number, publication: FormData) {
    return makeRequest<ReadResumePublicationResponse>({
      url: `api/resume_publications/${publicationId}`,
      method: 'post',
      authToken: true,
      data: publication,
    });
  }

  deletePublication(publicationId: number) {
    return makeRequest<void>({
      url: `api/resume_publications/${publicationId}`,
      method: 'delete',
      authToken: true,
    });
  }
}

export default new ResumePublicationService();
