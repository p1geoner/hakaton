import makeRequest from '@/API/makeRequest';

class ResponsesService {
  createResponseOnVacancy(applicantCoverLetter: object, vacancyId: number) {
    return makeRequest<never>({
      url: `api/vacancies/${vacancyId}/applicant_responses`,
      method: 'post',
      data: applicantCoverLetter,
      authToken: true,
    });
  }

  createResponseOnResume(employerFeedback: object, resumeId: number) {
    return makeRequest<never>({
      url: `api/resumes/${resumeId}/applicant_responses`,
      method: 'post',
      data: employerFeedback,
      authToken: true,
    });
  }

  updateResponseOnResume(employerFeedback: object, responseId: number) {
    return makeRequest<never>({
      url: `api/employers/applicant_responses/${responseId}`,
      method: 'put',
      data: employerFeedback,
      authToken: true,
    });
  }

  updateResponseOnVacancy(applicantReply: object, responseId: number) {
    return makeRequest<never>({
      url: `api/applicants/applicant_responses/${responseId}`,
      method: 'put',
      data: applicantReply,
      authToken: true,
    });
  }

  deleteResponse(id: number) {
    return makeRequest<never>({
      url: `api/applicant_responses/${id}`,
      method: 'delete',
      authToken: true,
    });
  }
}

export default new ResponsesService();
