import type { LessonResponseTypes, LessonStatusResponseTypes } from '@/app/my/(instructor)/manage-classes/types/api';
import type { LessonStatus } from '@/app/my/(instructor)/manage-classes/types/lessonStatus';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

export const getMyLessons = async (status: LessonStatus): Promise<LessonResponseTypes> => {
  const data = await kyInstance.get(API_URL.TEACHERS_LESSONS(status)).json<LessonResponseTypes>();
  return data;
};

export const getLessonStatus = async (): Promise<LessonStatusResponseTypes> => {
  const data = await kyInstance.get(API_URL.TEACHERS_LESSON_STATUS).json<LessonStatusResponseTypes>();
  return data;
};
