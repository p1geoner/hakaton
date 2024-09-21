export type TCourse = {
  id: number;
  title: string;
  cover: string;
  count_lessons: number;
  slug: string;
  author: TAuthor;
};

type TAuthor = {
  id: number;
  username: string;
};
