import makeRequest from '@/API/makeRequest';

import {
  GetEmployerCoursesResponse,
  GetEmployerInvestmentsResponse,
  GetEmployerResponse,
  GetEmployersResponse,
  GetEmployerVacanciesResponse,
  GetInvestmentEmployee,
} from '@/types/api/IEmployerResponse';
import { ReadResumesResponse } from '@/types/api/IResumeResponse';
import {
  TEmployerDocumentResponse,
  TEmployerDocumentsResponse,
  TEmployerEditResponse,
  TInvestmentEmployeeCreate,
} from '@/types/entities/IEmployer';

class EmployerService {
  fetchEmployers(search = '') {
    return makeRequest<GetEmployersResponse>({
      url: `api/employer_profiles/search${search}`,
      authToken: true,
    });
  }

  fetchInvestments(search = '') {
    return makeRequest<GetEmployersResponse>({
      url: `api/investments/search${search}`,
      authToken: true,
    });
  }

  fetchEmployer(id?: string) {
    return makeRequest<GetEmployerResponse>({
      url: `api/employer_profiles/${id}`,
      authToken: true,
    });
  }

  updateEmployer(employer: TEmployerEditResponse) {
    return makeRequest<GetEmployerResponse>({
      url: 'api/employer_profile',
      method: 'put',
      authToken: true,
      data: employer,
    });
  }

  deleteEmployer() {
    return makeRequest<void>({
      url: 'api/employer_profile',
      method: 'delete',
      authToken: true,
    });
  }

  fetchEmployerVacancies(id: string = '', search: string = '') {
    return makeRequest<GetEmployerVacanciesResponse>({
      url: `api/employer_profiles/${id}/vacancies?${search}`,
      authToken: true,
    });
  }

  fetchEmployerCourses(id: string = '', search: string = '') {
    return makeRequest<GetEmployerCoursesResponse>({
      url: `api/employer_profiles/${id}/courses?${search}`,
      authToken: true,
    });
  }

  fetchEmployerInvestments(id?: string) {
    return makeRequest<GetEmployerInvestmentsResponse>({
      url: `api/employer_profiles/${id}/investments`,
      authToken: true,
    });
  }

  createInvestmentEmployee(investmentEmployee: TInvestmentEmployeeCreate) {
    return makeRequest<GetInvestmentEmployee>({
      url: 'api/employer_profile_employees',
      method: 'POST',
      data: investmentEmployee,
      authToken: true,
    });
  }

  updateInvestmentEmployee(
    id: number,
    investmentEmployee: TInvestmentEmployeeCreate
  ) {
    return makeRequest<GetInvestmentEmployee>({
      url: `api/employer_profile_employees/${id}`,
      method: 'PUT',
      data: investmentEmployee,
      authToken: true,
    });
  }

  deleteInvestmentEmployee(id: number) {
    return makeRequest<void>({
      url: `api/employer_profile_employees/${id}`,
      method: 'DELETE',
      authToken: true,
    });
  }

  fetchDocuments() {
    return makeRequest<TEmployerDocumentsResponse>({
      url: 'api/employer_profile/documents',
      method: 'GET',
      authToken: true,
    });
  }

  downloadDocument(id: number) {
    return makeRequest<TEmployerDocumentResponse>({
      url: `api/employer_profile/documents/${id}`,
      method: 'PUT',
      authToken: true,
    });
  }

  fetchRecommendedResumes(search: string) {
    return makeRequest<ReadResumesResponse>({
      url: `api/employer_profile/recommended_resumes?${search}`,
      method: 'GET',
      authToken: true,
    });
  }
}

export default new EmployerService();
