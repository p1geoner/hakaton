import { TCategory } from '@/API/rest/courses/CourseService';

export type ChipsProps = {
  skills: TCategory[];
  type?: 'add';
  activeId: number | null;
  onDelete?: (id: any) => void;
  onChange?: (id: any) => void;
  className?: string;
};
