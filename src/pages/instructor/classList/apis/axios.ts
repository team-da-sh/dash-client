import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getMyLessons = async () => {
  const { data } = await instance.get(API_URL.TEACHERS_LESSONS_DETAIL);

  return data;
};
