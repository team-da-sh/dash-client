import { instance } from '@/apis/api';
import { API_URL } from '@/apis/constants/apiURL';

export const getMyLessons = async () => {
  const { data } = await instance.get(API_URL.MEMBERS_LESSONS_DETAIL);

  return data;
};
