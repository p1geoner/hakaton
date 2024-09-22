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
  results: { title: string; courses: TCourse[] };
};

export type GetCourseBlocksResponse = {
  id: number;
  blocks: TCourseBlock[];
};

export type GetCoursesCategories = {};

export type GetLessonResponse = {
  id: number;
  title: string;
  block: Block;
  base_blocks: BaseBlock[];
  course_is_completed: boolean;
  created_at: string;
  updated_at: string;
};
export interface Block {
  id: number;
  title: string;
}

export interface BaseBlock {
  id: number;
  position: number;
  text: string;
  type: string;
  resourcetype: string;
}

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
  saveLesson(formData) {
    return makeRequest<{ id: string }>({
      url: 'api/lessons/',
      method: 'POST',
      authToken: true,
      data: formData,
    });
  }
  getLesson(id) {
    return makeRequest<GetLessonResponse>({
      url: `api/lessons/${id}/`,
      authToken: true,
    });
  }
}

export default new CourseService();
