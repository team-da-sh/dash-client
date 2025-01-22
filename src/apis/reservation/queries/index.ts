import { useQuery } from '@tanstack/react-query';
import { getReservation } from '@/apis/reservation/axios';
import { ReservationDetail } from "@/pages/reservation/types";
import { QUERY_KEYS } from "@/apis/constants/queryKey";

export const useGetReservaion = (lessonId: string) => {
  return useQuery<ReservationDetail, Error>({
    queryKey: [QUERY_KEYS.LESSON_RESERVE_PROGRESS],
    queryFn: () => getReservation(lessonId),
  });
};