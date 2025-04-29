import type { ReservationDetailResponseTypes } from '@/pages/reservation/types/api';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getReservation = async (lessonId: string): Promise<ReservationDetailResponseTypes> => {
  const url = `${API_URL.LESSON_RESERVE_PROGRESS}/${lessonId}/reserve-progress`;
  const { data } = await instance.get(url);
  return data;
};

export const postReservation = async (
  lessonId: string,
  paymentKey: string,
  orderId: string,
  amount: number
): Promise<ReservationDetailResponseTypes> => {
  const url = `${API_URL.LESSON_RESERVATION}/${lessonId}/reservations`;
  const { data } = await instance.post(url, {
    paymentKey,
    orderId,
    amount,
  });
  return data;
};
