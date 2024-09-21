import makeRequest from '../makeRequest';

import { GetPracticeStudentsResponse } from '@/types/entities/IPracticeStudent';

class PracticeStudentsService {
  fetchPracticesStudents(search = '') {
    return makeRequest<GetPracticeStudentsResponse>({
      url: `api/practices${search}`,
      authToken: true,
    });
  }

  fetchPracticeStudentContacts(id: number) {
    return makeRequest<any>({
      url: `api/practices/${id}/contacts`,
      authToken: true,
    });
  }
}

export default new PracticeStudentsService();
