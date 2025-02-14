import { instance } from '@/shared/apis/api';
import { API_URL } from '@/shared/constants/apiURL';

export const getLessonDetail = async (lessonId: number) => {
  const url = `${API_URL.MEMBERS_LESSONS_DETAIL}/${lessonId}`;

  const { data } = await instance.get(url);
  return data;
};
