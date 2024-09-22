import { GetUserCategory, TCategory } from '@/API/rest/courses/CourseService';

export type ChipsProps = {
  skills: TCategory[] | GetUserCategory | { id: string; title: string }[];
  type?: 'add';
  activeId?: number | string | null;
  onDelete?: (id: any) => void;
  onChange?: (id: any) => void;
  className?: string;
};
