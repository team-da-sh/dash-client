import { useQuery } from '@tanstack/react-query';
import { getReservations } from '@/pages/mypage/mypageReservation/apis/axios';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { ReservationResponse } from '../types/api';

export const useGetReservations = () => {
  return useQuery<ReservationResponse>({
    queryKey: [QUERY_KEYS.MEMBERS_RESERVATIONS],
    queryFn: getReservations,
  });
};
