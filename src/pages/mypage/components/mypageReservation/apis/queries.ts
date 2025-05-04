import { useQuery } from '@tanstack/react-query';
import { getReservations } from '@/pages/mypage/components/mypageReservation/apis/axios';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import type { ReservationResponseTypes } from '../types/api';

export const useGetReservations = () => {
  return useQuery<ReservationResponseTypes>({
    queryKey: [QUERY_KEYS.MEMBERS_RESERVATIONS],
    queryFn: getReservations,
  });
};
