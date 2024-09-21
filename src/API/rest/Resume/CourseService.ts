import makeRequest from '@/API/makeRequest';

import { ReadResumeCourseResponse } from '@/types/api/IResumeResponse';

class ResumeCourseService {
  createCourse(course: FormData) {
    return makeRequest<ReadResumeCourseResponse>({
      url: 'api/resume_courses',
      method: 'post',
      authToken: true,
      data: course,
    });
  }

  updateCourse(courseId: number, course: FormData) {
    return makeRequest<ReadResumeCourseResponse>({
      url: `api/resume_courses/${courseId}`,
      method: 'post',
      authToken: true,
      data: course,
    });
  }

  deleteCourse(courseId: number) {
    return makeRequest<void>({
      url: `api/resume_courses/${courseId}`,
      method: 'delete',
      authToken: true,
    });
  }
}

export default new ResumeCourseService();
