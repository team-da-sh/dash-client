import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getReservationsDetail = async (reservationId: number) => {
  const url = `${API_URL.MEMBERS_RESERVATION_DETAIL}/${reservationId}`;
  const { data } = await instance.get(url);
  return data;
};
