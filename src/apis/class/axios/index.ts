import { instance } from '@/apis/api';
import { API_URL } from "@/apis/constants/apiURL";
import { LessonDetail } from '@/pages/class/types';

export const getLessonDetail = async (lessonId: string): Promise<LessonDetail> => {
  const url = `${API_URL.LESSON_DETAIL}/${lessonId}`;

  const { data } = await instance.get(url);
  return data;
};