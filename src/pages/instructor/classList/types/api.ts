import type { Lesson } from '@/shared/types/lessonTypes';

export interface LessonResponseTypes {
  count: number;
  lessons: Lesson[];
}
