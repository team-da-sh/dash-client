import type {
  ChangeApproveResponse,
  LessonDetailGetResponse,
} from '@/app/my/(instructor)/manage-classes/[id]/types/api';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

export const getLessonDetail = async (
  lessonId: number,
  status: 'APPROVE' | 'CANCEL'
): Promise<LessonDetailGetResponse> => {
  const url = `${API_URL.TEACHERS_LESSONS_DETAIL}/${lessonId}`;
  const data = await kyInstance.get(url, { searchParams: { status } }).json<LessonDetailGetResponse>();
  return data;
};

export const postLessonApprove = async (lessonId: number, reservationId: number): Promise<ChangeApproveResponse> => {
  const url = API_URL.TEACHERS_LESSON_CHANGE_APPROVE(lessonId, reservationId);
  const data = await kyInstance.post(url).json<ChangeApproveResponse>();
  return data;
};

export const postLessonCancel = async (lessonId: number, reservationId: number) => {
  const url = API_URL.TEACHERS_LESSON_CHANGE_CANCEL(lessonId, reservationId);
  const data = await kyInstance.post(url).json();
  return data;
};
