import type { ReservationStatus } from '@/pages/mypage/types/reservationStatus';
import type { Reservation } from '@/shared/types/reservationTypes';

export interface ReservationResponseTypes {
  reservations: Reservation[];
}

export interface ReservationStatusResponseTypes {
  status: ReservationStatus;
  count: number;
}
