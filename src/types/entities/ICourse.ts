export type TCourse = {
  id: number;
  title: string;
  description?: string;
  cover: string;
  count_lessons: number;
  slug: string;
  author: TAuthor;
};

type TAuthor = {
  id: number;
  username: string;
};

export type TCourseBlock = {
  id: number;
  title: string;
  lessons: TLesson[];
  is_finished: boolean;
};

export type TLesson = {
  id: number;
  title: string;
  is_finished: boolean;
};
