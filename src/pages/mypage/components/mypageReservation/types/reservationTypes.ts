import type { AttendStatus } from '@/pages/mypage/components/mypageReservation/types/attendStatus';
import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';

export interface Reservation {
  lessonId: number;
  reservationId: number;
  name: string;
  imageUrl: string;
  genre: string;
  level: string;
  location: string;
  startDateTime: string;
  endDateTime: string;
  dDay: number;
  attendStatus: AttendStatus;
  reservationStatus: ReservationStatus;
  reservationDateTime: string;
}
