import { useQuery } from '@tanstack/react-query';
import { getReservations } from '@/pages/mypage/mypageReservation/apis/axios';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { ReservationApiResponse } from '@/shared/types/reservationTypes';

export const useGetReservations = () => {
  return useQuery<ReservationApiResponse>({
    queryKey: [QUERY_KEYS.MEMBERS_RESERVATIONS],
    queryFn: getReservations,
  });
};
