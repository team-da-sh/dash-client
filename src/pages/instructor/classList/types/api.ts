import type { Lesson } from '@/shared/types/lessonTypes';

export interface LessonResponse {
  count: number;
  lessons: Lesson[];
}
