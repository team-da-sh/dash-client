import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getReservation, postReservation } from '@/pages/reservation/apis/axios';
import type { ClassReservationResponseTypes, ReservationDetailResponseTypes } from '@/pages/reservation/types/api';
import { lessonKeys, memberKeys } from '@/shared/constants/queryKey';
import type { ApiError } from '@/shared/types/api';

export const useGetReservation = (lessonId: number) => {
  return useQuery<ReservationDetailResponseTypes, AxiosError>({
    queryKey: lessonKeys.reserve(lessonId).queryKey,
    queryFn: () => getReservation(lessonId),
  });
};

export const usePostReservation = () => {
  const queryClient = useQueryClient();

  return useMutation<ClassReservationResponseTypes, AxiosError<ApiError>, { lessonId: string }>({
    mutationFn: ({ lessonId }) => postReservation(lessonId),
    onSuccess: (_data, { lessonId }) => {
      queryClient.invalidateQueries({ queryKey: memberKeys.me._ctx.reservation.queryKey });
      queryClient.invalidateQueries({ queryKey: lessonKeys.detail(Number(lessonId)).queryKey });
    },
  });
};
