import type { ReservationStatus } from '@/app/mypage/(student)/reservations/types/reservationStatus';
import type { Reservation } from '@/app/mypage/(student)/reservations/types/reservationTypes';

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
