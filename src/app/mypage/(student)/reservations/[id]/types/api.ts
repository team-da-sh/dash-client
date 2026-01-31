import type { ProgressStatus, ReservationStatus } from '@/app/mypage/(student)/reservations/types/reservationStatus';
import type { GenreTypes } from '@/app/onboarding/types/genreTypes';
import type { LevelTypes } from '@/app/onboarding/types/levelTypes';

// 클래스 신청 내역 상세 반환
export interface ReservationDetailType {
  dDay: number;
  lessonName: string;
  lessonId: number;
  nickname: string;
  rounds: RoundType[];
  location: string;
  detailedAddress: string;
  level: LevelTypes;
  genre: GenreTypes;
  name: string;
  phoneNumber: string;
  reservationDateTime: string;
  lessonImageUrl: string;
  reservationStatus: ReservationStatus | ProgressStatus;
}

export interface RoundType {
  startDateTime: string;
  endDateTime: string;
}
