import type {
  ReservationClassCardResponseTypes,
  ReservationStatusResponseTypes,
  ReservationResponseTypes,
} from '@/app/my/(student)/classes/types/api';
import type { ReservationStatus } from '@/app/my/(student)/classes/types/reservationStatus';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

export const getReservations = async (status: ReservationStatus): Promise<ReservationResponseTypes> => {
  const data = await kyInstance.get(API_URL.MEMBERS_RESERVATIONS(status)).json<ReservationResponseTypes>();
  return data;
};

export const getReservationStatus = async (): Promise<ReservationStatusResponseTypes> => {
  const data = await kyInstance.get(API_URL.LESSON_RESERVATION_STATUS).json<ReservationStatusResponseTypes>();
  return data;
};

export const getReservationsClassCard = async (reservationId: number): Promise<ReservationClassCardResponseTypes> => {
  const data = await kyInstance
    .get(API_URL.MEMBERS_RESERVATIONS_CLASS_CARD.replace('{reservationId}', reservationId.toString()))
    .json<ReservationClassCardResponseTypes>();
  return data;
};
