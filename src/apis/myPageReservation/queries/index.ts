import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/apis/constants/queryKey';
import { getReservations } from '@/apis/myPageReservation/axios';
import { ReservationData } from '@/types/reservationTypes';

export const useGetReservations = () => {
  return useQuery<ReservationData>({
    queryKey: [QUERY_KEYS.MEMBERS_RESERVATIONS],
    queryFn: getReservations,
  });
};
