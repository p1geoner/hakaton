import { TCategory } from '@/API/rest/courses/CourseService';

export type ChipsProps = {
  skills: TCategory[] | { id: string; title: string }[];
  type?: 'add';
  activeId?: number | string | null;
  onDelete?: (id: any) => void;
  onChange?: (id: any) => void;
  className?: string;
};
