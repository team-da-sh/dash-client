import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getReservations = async (status: ReservationStatus) => {
  const { data } = await instance.get(API_URL.MEMBERS_RESERVATIONS(status));

  return data;
};

export const getReservationStatus = async () => {
  const { data } = await instance.get(API_URL.LESSON_RESERVATION_STATUS);

  return data;
};

export const getReservationsClassCard = async (reservationId: number) => {
  const { data } = await instance.get(
    API_URL.MEMBERS_RESERVATIONS_CLASS_CARD.replace('{reservationId}', reservationId.toString())
  );

  return data;
};
