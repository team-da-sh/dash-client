import type { ClassReservationResponseTypes, ReservationDetailResponseTypes } from '@/app/class/[id]/register/types';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

export const getReservation = async (lessonId: number): Promise<ReservationDetailResponseTypes> => {
  const url = `${API_URL.LESSON_RESERVE_PROGRESS}/${lessonId}/reserve-progress`;
  const data = await kyInstance.get(url).json<ReservationDetailResponseTypes>();
  return data;
};

export const postReservation = async (lessonId: string): Promise<ClassReservationResponseTypes> => {
  const url = `${API_URL.LESSON_RESERVATION}/${lessonId}/reservations`;
  const data = await kyInstance.post(url).json<ClassReservationResponseTypes>();
  return data;
};
