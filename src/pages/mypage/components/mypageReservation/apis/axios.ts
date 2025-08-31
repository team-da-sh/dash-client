import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getReservations = async () => {
  const { data } = await instance.get(API_URL.MEMBERS_RESERVATIONS);

  return data;
};

export const getReservationsClassCard = async (reservationId: number) => {
  const { data } = await instance.get(
    API_URL.MEMBERS_RESERVATIONS_CLASS_CARD.replace('{reservationId}', reservationId.toString())
  );

  return data;
};
