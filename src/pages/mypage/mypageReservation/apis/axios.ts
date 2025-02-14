import { instance } from '@/shared/apis/api';
import { API_URL } from '@/shared/constants/apiURL';

export const getReservations = async () => {
  const { data } = await instance.get(API_URL.MEMBERS_RESERVATIONS);

  return data;
};
