import { instance } from '@/apis/api';
import { LessonDetail } from '@/pages/class/types';

export const getLessonDetail = async (lessonId: string): Promise<LessonDetail> => {
  const response = await instance.get(`/api/v1/lessons/${lessonId}`);
  return response.data;
};
