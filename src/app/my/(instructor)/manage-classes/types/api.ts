import type { LessonStatus } from '@/app/my/(instructor)/manage-classes/types/lessonStatus';
import type { Lesson } from '@/shared/types/lessonTypes';

export interface LessonResponseTypes {
  count: number;
  lessons: Lesson[];
}

interface LessonStatusCount {
  status: LessonStatus;
  count: number;
}

export interface LessonStatusResponseTypes {
  lessonsStatusCounts: LessonStatusCount[];
}
