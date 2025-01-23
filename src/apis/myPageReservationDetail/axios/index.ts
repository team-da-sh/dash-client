import { instance } from '@/apis/api';
import { API_URL } from '@/apis/constants/apiURL';

export const getReservationsDetail = async (lessonId: number) => {
  const url = API_URL.MEMBERS_RESERVATION_DETAIL + lessonId;

  const { data } = await instance.get(url);

  return data;
};
