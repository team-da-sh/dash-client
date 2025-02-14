import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getReservation, postReservation } from '@/pages/reservation/apis/axios';
import { ReservationDetailApiResponse } from '@/pages/reservation/types';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetReservaion = (lessonId: string) => {
  return useQuery<ReservationDetailApiResponse, AxiosError>({
    queryKey: [QUERY_KEYS.LESSON_RESERVE_PROGRESS, lessonId],
    queryFn: () => getReservation(lessonId),
  });
};

export const usePostReservation = () => {
  return useMutation<
    ReservationDetailApiResponse,
    AxiosError,
    { lessonId: string; paymentKey: string; orderId: string; amount: number }
  >({
    mutationFn: ({ lessonId, paymentKey, orderId, amount }) => postReservation(lessonId, paymentKey, orderId, amount),
  });
};
