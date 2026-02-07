import { useMutation, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getReservation, postReservation } from '@/app/class/[id]/register/apis/axios';
import type { ClassReservationResponseTypes, ReservationDetailResponseTypes } from '@/app/class/[id]/register/types';

export const useGetReservation = (lessonId: number) => {
  return useQuery<ReservationDetailResponseTypes>({
    queryKey: ['reservation', lessonId],
    queryFn: () => getReservation(lessonId),
    enabled: !!lessonId,
  });
};

export const usePostReservation = () => {
  return useMutation<ClassReservationResponseTypes, AxiosError<{ message: string }>, { lessonId: string }>({
    mutationFn: ({ lessonId }) => postReservation(lessonId),
  });
};
