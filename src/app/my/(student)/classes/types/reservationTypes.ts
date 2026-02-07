import type { ReservationStatus } from '@/app/my/(student)/classes/types/reservationStatus';
import type { GenreTypes } from '@/app/onboarding/types/genreTypes';
import type { LevelTypes } from '@/app/onboarding/types/levelTypes';

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
