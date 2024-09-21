import makeRequest from '@/API/makeRequest';

import { TCourse } from '@/types/entities/ICourse';

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
}

export default new CourseService();
