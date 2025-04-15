import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getReservation, postReservation } from '@/pages/reservation/apis/axios';
import type { ReservationDetailResponse } from '@/pages/reservation/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetReservaion = (lessonId: string) => {
  return useQuery<ReservationDetailResponse, AxiosError>({
    queryKey: [QUERY_KEYS.LESSON_RESERVE_PROGRESS, lessonId],
    queryFn: () => getReservation(lessonId),
  });
};

export const usePostReservation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    ReservationDetailResponse,
    AxiosError,
    { lessonId: string; paymentKey: string; orderId: string; amount: number }
  >({
    mutationFn: ({ lessonId, paymentKey, orderId, amount }) => postReservation(lessonId, paymentKey, orderId, amount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MEMBERS_ME] });
    },
  });
};
