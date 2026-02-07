import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getLessonDetail = async (lessonId: number, status: 'APPROVE' | 'CANCEL') => {
  const url = `${API_URL.TEACHERS_LESSONS_DETAIL}/${lessonId}?status=${status}`;

  const { data } = await instance.get(url);
  return data;
};

export const postLessonApprove = async (lessonId: number, reservationId: number) => {
  const url = API_URL.TEACHERS_LESSON_CHANGE_APPROVE(lessonId, reservationId);

  const { data } = await instance.post(url);
  return data;
};

export const postLessonCancel = async (lessonId: number, reservationId: number) => {
  const url = API_URL.TEACHERS_LESSON_CHANGE_CANCEL(lessonId, reservationId);

  const { data } = await instance.post(url);
  return data;
};
