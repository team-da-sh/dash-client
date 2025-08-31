import type { Reservation } from '@/shared/types/reservationTypes';

export interface ReservationResponseTypes {
  reservations: Reservation[];
}

export type ReservationClassCardResponseTypes = Reservation;
