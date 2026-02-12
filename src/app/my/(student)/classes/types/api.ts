import type { ReservationStatus } from '@/app/my/(student)/classes/types/reservationStatus';
import type { Reservation } from '@/app/my/(student)/classes/types/reservationTypes';

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
