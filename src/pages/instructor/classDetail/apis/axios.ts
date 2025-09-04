import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getLessonDetail = async (lessonId: number) => {
  const url = `${API_URL.TEACHERS_LESSONS_DETAIL}/${lessonId}?status=APPROVE`;

  const { data } = await instance.get(url);
  return data;
};
