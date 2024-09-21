import makeRequest from '@/API/makeRequest';

import {
  GetCourseResponse,
  GetCoursesResponse,
  GetRecentCoursesResponce,
} from '@/types/api/ICoursesResponse';
import { TCourseCreate } from '@/types/entities/ICourse';

class CourseService {
  fetchCourses(search?: string) {
    const params = new URLSearchParams(search);
    params.set('type', 'Курс');
    return makeRequest<GetCoursesResponse>({
      url: `api/courses/search?${params.toString()}`,
      authToken: true,
    });
  }

  fetchTrainings(search?: string) {
    const params = new URLSearchParams(search);
    params.set('type', 'Тренинг');
    return makeRequest<GetCoursesResponse>({
      url: `api/courses/search?${params.toString()}`,
      authToken: true,
    });
  }

  fetchCareerOffers(search?: string) {
    const params = new URLSearchParams(search);
    params.set('type', 'Карьерное предложение');
    return makeRequest<GetCoursesResponse>({
      url: `api/courses/search?${params.toString()}`,
      authToken: true,
    });
  }

  fetchCourse(id?: string) {
    return makeRequest<GetCourseResponse>({
      url: `api/courses/${id}`,
      authToken: true,
    });
  }

  fetchRecentCourses() {
    return makeRequest<GetRecentCoursesResponce>({
      url: 'api/home/courses',
    });
  }

  createCourse(course: TCourseCreate) {
    return makeRequest<GetCourseResponse>({
      url: 'api/courses',
      method: 'post',
      authToken: true,
      data: course,
    });
  }

  updateCourse(course: TCourseCreate, id: number) {
    return makeRequest<GetCourseResponse>({
      url: `api/courses/${id}`,
      method: 'put',
      authToken: true,
      data: course,
    });
  }

  deleteCourse(id?: number) {
    return makeRequest<void>({
      url: `api/courses/${id}`,
      method: 'delete',
      authToken: true,
    });
  }

  deleteCourses(coursesIds: number[]) {
    return makeRequest({
      url: 'api/courses_mass_destroy',
      method: 'delete',
      authToken: true,
      data: { ids: coursesIds },
    });
  }

  duplicateCourse(id: number, userId: number) {
    return makeRequest({
      url: `api/employer_profiles/${userId}/courses`,
      method: 'post',
      authToken: true,
      data: { id },
    });
  }
}

export default new CourseService();
