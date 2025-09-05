import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import type { Reservation } from '@/pages/mypage/components/mypageReservation/types/reservationTypes';

export interface ReservationResponseTypes {
  reservations: Reservation[];
}

export interface ReservationStatusResponseTypes {
  reservationStatusCounts: {
    status: ReservationStatus;
    count: number;
  }[];
}

export type ReservationClassCardResponseTypes = Reservation;
