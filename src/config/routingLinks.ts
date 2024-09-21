export const staticLinks = {
  // general
  main: '/',
  profile: '/profil',
  authorization: '/avtorizacia',
  registration: '/registraciya',
  courses: '/kyrsi',
  course: '/kyrsi/:slug',
  categories: '/kategorii',
  category: '/kategorii/:id',
  about: '/o-nas',
};

export const dynamicLinks = {
  course: ({ categoryId, slug }) => `/kategorii/${categoryId}/kyrsi/${slug}`,
  category: (id: string) => `/kategorii/${id}`,
  subCategory: (id: string) => `/categories/${id}`,
};
