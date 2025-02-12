import { LessonDetailApiResponse } from '@/pages/class/types';
import { instance } from '@/shared/apis/api';
import { API_URL } from '@/shared/apis/constants/apiURL';

export const getLessonDetail = async (lessonId: string): Promise<LessonDetailApiResponse> => {
  const url = `${API_URL.LESSON_DETAIL}/${lessonId}`;

  const { data } = await instance.get(url);
  return data;
};
