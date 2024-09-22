export const staticLinks = {
  // general
  main: '/',
  profile: '/profil',
  authorization: '/avtorizacia',
  registration: '/registraciya',
  courses: '/kyrsi',
  course: '/kyrsi/:slug',
  createCourse: '/course-create',
  categories: '/categories',
  category: '/categories/:id',
  about: '/o-nas',
};

export const dynamicLinks = {
  course: ({ categoryId, slug }) => `/categories/${categoryId}/courses/${slug}`,
  lesson: ({ categoryId, slug, id }) =>
    `/categories/${categoryId}/courses/${slug}/lessons/${id}`,
  category: (id: string) => `/categories/${id}`,

  subCategory: (id: string) => `/categories/${id}`,
};
