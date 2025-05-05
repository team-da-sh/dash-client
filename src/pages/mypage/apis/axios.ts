import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getMyPage = async () => {
  const { data } = await instance.get(API_URL.MEMBERS_ME);

  return data;
};

export const getMyLessons = async () => {
  const { data } = await instance.get(API_URL.MEMBERS_RESERVATIONS_STATISTICS);

  return data;
};
