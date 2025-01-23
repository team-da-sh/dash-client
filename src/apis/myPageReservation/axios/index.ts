import { instance } from '@/apis/api';
import { API_URL } from '@/apis/constants/apiURL';

export const getReservations = async () => {
  const { data } = await instance.get(API_URL.MEMBERS_RESERVATIONS);

  return data;
};
