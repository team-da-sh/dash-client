import type { LessonDetailResponse } from '@/pages/class/types/api';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getLessonDetail = async (lessonId: string): Promise<LessonDetailResponse> => {
  const url = `${API_URL.LESSON_DETAIL}/${lessonId}`;

  const { data } = await instance.get(url);
  return data;
};
