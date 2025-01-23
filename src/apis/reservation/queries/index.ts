import { useMutation, useQuery } from '@tanstack/react-query';
import { getReservation, postReservation } from '@/apis/reservation/axios';
import { ReservationDetailApiResponse } from "@/pages/reservation/types";
import { QUERY_KEYS } from "@/apis/constants/queryKey";
import { AxiosError } from "axios";

export const useGetReservaion = (lessonId: string) => {
  return useQuery<ReservationDetailApiResponse, AxiosError>({
    queryKey: [QUERY_KEYS.LESSON_RESERVE_PROGRESS, lessonId],
    queryFn: () => getReservation(lessonId),
  });
};

export const usePostReservation = () => {
  return useMutation<ReservationDetailApiResponse, AxiosError, { lessonId: string; }>({
    mutationFn: ({ lessonId }) => postReservation(lessonId),
  });
};
