import type { RecruitingStatus } from '@/pages/mypage/components/mypageReservation/types/recruitingStatus';
import type { GenreTypes } from '@/pages/onboarding/types/genreTypes';
import type { LevelTypes } from '@/pages/onboarding/types/levelTypes';
import type { Student } from '@/shared/types/myPageLessonDetailTypes';

export interface LessonDetailGetResponse {
  id: number;
  name: string;
  imageUrl: string;
  genre: GenreTypes;
  level: LevelTypes;
  location: string;
  detailedAddress: string;
  startDateTime: string;
  endDateTime: string;
  applyStatus: RecruitingStatus;
  students: Student[];
  studentCount: number;
  lessonDateTime: string;
}
