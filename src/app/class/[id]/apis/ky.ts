import type { LessonDetailResponseTypes } from '@/app/class/[id]/types/api';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

export const getLessonDetail = async (lessonId: number): Promise<LessonDetailResponseTypes> => {
  const url = `${API_URL.LESSON_DETAIL}/${lessonId}`;
  const data = await kyInstance.get(url).json<LessonDetailResponseTypes>();
  return data;
};
