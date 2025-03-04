import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getReservations = async () => {
  const { data } = await instance.get(API_URL.MEMBERS_RESERVATIONS);

  return data;
};
