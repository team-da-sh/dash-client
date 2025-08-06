import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getReservation, postReservation } from '@/pages/reservation/apis/axios';
import type { ReservationDetailResponseTypes } from '@/pages/reservation/types/api';
import { lessonKeys, memberKeys } from '@/shared/constants/queryKey';

export const useGetReservation = (lessonId: number) => {
  return useQuery<ReservationDetailResponseTypes, AxiosError>({
    queryKey: lessonKeys.reserve(lessonId).queryKey,
    queryFn: () => getReservation(lessonId),
  });
};

export const usePostReservation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    ReservationDetailResponseTypes,
    AxiosError,
    { lessonId: string; paymentKey: string; orderId: string; amount: number }
  >({
    mutationFn: ({ lessonId, paymentKey, orderId, amount }) => postReservation(lessonId, paymentKey, orderId, amount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: memberKeys.me._ctx.reservation.queryKey });
    },
  });
};
