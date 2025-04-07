import type { Student } from '@/shared/types/myPageLessonDetailTypes';

export interface LessonDetailGetResponse {
  id: number;
  name: string;
  imageUrl: string;
  genre: string;
  level: string;
  location: string;
  detailedAddress: string;
  startDateTime: string;
  endDateTime: string;
  applyStatus: string;
  students: Student[];
  studentCount: number;
}
