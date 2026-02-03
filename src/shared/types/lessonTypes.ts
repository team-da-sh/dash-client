import type { LessonStatus } from '@/app/mypage/(instructor)/classes/types/lessonStatus';
import type { GenreTypes } from '@/app/onboarding/types/genreTypes';
import type { LevelTypes } from '@/app/onboarding/types/levelTypes';

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
