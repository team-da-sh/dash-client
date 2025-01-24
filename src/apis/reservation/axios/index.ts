import { ReservationDetailApiResponse } from '@/pages/reservation/types';
import { instance } from '@/apis/api';
import { API_URL } from '@/apis/constants/apiURL';

export const getReservation = async (lessonId: string): Promise<ReservationDetailApiResponse> => {
  const url = `${API_URL.LESSON_RESERVE_PROGRESS}/${lessonId}/reserve-progress`;
  const { data } = await instance.get(url);
  return data;
};

export const postReservation = async (
  lessonId: string,
  paymentKey: string,
  orderId: string,
  amount: number
): Promise<ReservationDetailApiResponse> => {
  const url = `${API_URL.LESSON_RESERVATION}/${lessonId}/reservations`;
  const { data } = await instance.post(url, {
    paymentKey,
    orderId,
    amount,
  });
  return data;
};
