import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getLessonDetail = async (lessonId: number) => {
  const url = `${API_URL.TEACHERS_LESSONS}/${lessonId}`;

  const { data } = await instance.get(url);
  return data;
};
