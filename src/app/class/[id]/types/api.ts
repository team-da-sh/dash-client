import type { RecruitingStatus } from '@/app/mypage/(student)/reservations/types/recruitingStatus';
import type { GenreTypes } from '@/app/onboarding/types/genreTypes';
import type { LevelTypes } from '@/app/onboarding/types/levelTypes';

export interface LessonDetailResponseTypes {
  imageUrl: string;
  genre: GenreTypes;

  name: string;
  teacherId: number;
  teacherNickname: string;
  teacherImageUrl: string;
  reservationCount: number;
  maxReservationCount: number;

  price: number;
  detail: string;
  recommendation: string;
  level: LevelTypes;
  remainingDays: number;
  lessonRound: {
    lessonRounds: {
      startDateTime: string;
      endDateTime: string;
    }[];
  };
  location: string;
  streetAddress: string;
  streetDetailAddress?: string;
  oldStreetAddress: string;
  favoriteCount?: number;
  bookStatus: boolean;
  isMyLesson: boolean;
  status: StatusType;
  applyStatus: RecruitingStatus;
  createdAt: string;
}

export type StatusType = 'OPEN' | 'EXPIRED' | 'OVER_BOOKED';
