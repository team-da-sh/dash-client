import type { RecruitingStatus } from '@/app/my/(student)/classes/types/recruitingStatus';
import type { ReservationStatus } from '@/app/my/(student)/classes/types/reservationStatus';
import type { GenreTypes } from '@/app/onboarding/types/genreTypes';
import type { LevelTypes } from '@/app/onboarding/types/levelTypes';

export type TabStatus = 'APPROVE' | 'CANCEL';

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
