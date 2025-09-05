import type { LessonStatus } from '@/pages/instructor/lessonList/types/lessonStatus';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getMyLessons = async (status: LessonStatus) => {
  const { data } = await instance.get(API_URL.TEACHERS_LESSONS(status));

  return data;
};

export const getLessonStatus = async () => {
  const { data } = await instance.get(API_URL.TEACHERS_LESSON_STATUS);

  return data;
};
