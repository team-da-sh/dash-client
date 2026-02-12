import { useMutation, useQuery } from '@tanstack/react-query';
import { getReservation, postReservation } from '@/app/class/[id]/register/apis/ky';
import type { ClassReservationResponseTypes, ReservationDetailResponseTypes } from '@/app/class/[id]/register/types';
import type { ApiError } from '@/shared/types/ApiError';

export const useGetReservation = (lessonId: number) => {
  return useQuery<ReservationDetailResponseTypes>({
    queryKey: ['reservation', lessonId],
    queryFn: () => getReservation(lessonId),
    enabled: !!lessonId,
  });
};

export const usePostReservation = () => {
  return useMutation<ClassReservationResponseTypes, ApiError<{ message: string }>, { lessonId: string }>({
    mutationFn: ({ lessonId }) => postReservation(lessonId),
  });
};
