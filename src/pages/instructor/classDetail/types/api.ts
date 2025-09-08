import type { RecruitingStatus } from '@/pages/mypage/components/mypageReservation/types/recruitingStatus';
import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import type { GenreTypes } from '@/pages/onboarding/types/genreTypes';
import type { LevelTypes } from '@/pages/onboarding/types/levelTypes';

export interface Student {
  reservationId: number;
  name: string;
  phoneNumber: string;
  reservationDateTime: string;
  reservationStatus: Exclude<ReservationStatus, 'ALL'>;
}

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
  rounds: RoundType[];
}

export interface ChangeApproveResponse {
  isFull: true;
}

export interface RoundType {
  startDateTime: string;
  endDateTime: string;
}
