import type { LessonStatus } from '@/pages/instructor/lessonList/types/lessonStatus';
import type { GenreTypes } from '@/pages/onboarding/types/genreTypes';
import type { LevelTypes } from '@/pages/onboarding/types/levelTypes';

export interface Lesson {
  id: number;
  name: string;
  imageUrl: string;
  genre: GenreTypes;
  level: LevelTypes;
  location: string;
  detailedAddress: string;
  startDateTime: string; // ISO 8601 날짜 문자열
  endDateTime: string; // ISO 8601 날짜 문자열
  applyStatus: LessonStatus;
  lessonDateTime: string; // ISO 8601 날짜 문자열
}
