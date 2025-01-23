import { instance } from '@/apis/api';
import { API_URL } from "@/apis/constants/apiURL";
import { LessonDetailApiResponse } from '@/pages/class/types';

export const getLessonDetail = async (lessonId: string): Promise<LessonDetailApiResponse> => {
  const url = `${API_URL.LESSON_DETAIL}/${lessonId}`;

  const { data } = await instance.get(url);
  return data;
};