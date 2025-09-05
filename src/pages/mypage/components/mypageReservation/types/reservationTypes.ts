import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import type { GenreTypes } from '@/pages/onboarding/types/genreTypes';
import type { LevelTypes } from '@/pages/onboarding/types/levelTypes';

export interface Reservation {
  lessonId: number;
  reservationId: number;
  name: string;
  imageUrl: string;
  genre: GenreTypes;
  level: LevelTypes;
  location: string;
  startDateTime: string;
  endDateTime: string;
  dDay: number;
  status: ReservationStatus;
  reservationStatus: ReservationStatus;
  reservationDateTime: string;
}
