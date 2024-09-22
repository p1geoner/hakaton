import makeRequest from '@/API/makeRequest';

import { TCourse, TCourseBlock } from '@/types/entities/ICourse';

export type GetCategoriesResponse = TCategory[];

export interface TCategory {
  id: number;
  title: string;
  image: string;
  categories: TSubCategory[];
}

export interface TSubCategory {
  id: number;
  title: string;
  image: string;
}
export type GetCoursesResponse = {
  title: string;
  courses: TCourse[];
};

export type GetCourseBlocksResponse = {
  id: number;
  blocks: TCourseBlock[];
};

export type GetCoursesCategories = {};

class CourseService {
  fetchCategories() {
    return makeRequest<GetCategoriesResponse>({
      url: 'api/categories/',
      authToken: true,
    });
  }
  fetchCourses(search) {
    return makeRequest<GetCoursesResponse>({
      url: `api/courses/${search}`,
      authToken: true,
    });
  }
  fetchCourseDesc(slug) {
    return makeRequest<TCourse>({
      url: `api/courses/${slug}/short/`,
      authToken: true,
    });
  }
  fetchCourseBlocks(slug) {
    return makeRequest<GetCourseBlocksResponse>({
      url: `api/courses/${slug}/large/`,
      authToken: true,
    });
  }
  getCategories() {
    return makeRequest<GetCoursesCategories>({
      url: 'api/lessons/categories/',
      authToken: true,
    });
  }
  getCourses(id) {
    return makeRequest<GetCoursesCategories>({
      url: `api/lessons/categories/${id}/courses/`,
      authToken: true,
    });
  }
  createCourse(id, formData) {
    return makeRequest<{ id: string; slug: string }>({
      url: `api/lessons/categories/${id}/courses/`,
      method: 'POST',
      authToken: true,
      data: formData,
    });
  }

  getBlocks(id) {
    return makeRequest<TCourseBlock[]>({
      url: `api/lessons/courses/${id}/blocks/`,
      authToken: true,
    });
  }
  createBlock(id, formData) {
    return makeRequest<{ id: string }>({
      url: `api/lessons/courses/${id}/blocks/`,
      method: 'POST',
      authToken: true,
      data: formData,
    });
  }
}

export default new CourseService();
