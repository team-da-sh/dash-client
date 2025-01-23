import { instance } from '@/apis/api';
import { API_URL } from "@/apis/constants/apiURL";
import { ReservationDetailApiResponse } from '@/pages/reservation/types';

export const getReservation = async (lessonId: string): Promise<ReservationDetailApiResponse> => {
  const url = `${API_URL.LESSON_RESERVE_PROGRESS}/${lessonId}/reserve-progress`;
  const { data } = await instance.get(url);
  return data;
};

export const postReservation = async (
  lessonId: string,
): Promise<ReservationDetailApiResponse> => {
  const url = `${API_URL.LESSON_RESERVATION}/${lessonId}/reservations`;
  const { data } = await instance.post(url);
  return data;
};