import { useQuery } from '@tanstack/react-query';
import { getReservations } from '@/pages/mypage/components/mypageReservation/apis/axios';
import { memberKeys } from '@/shared/constants/queryKey';
import type { ReservationResponseTypes } from '../types/api';

export const useGetReservations = () => {
  return useQuery<ReservationResponseTypes>({
    queryKey: memberKeys.reservations(),
    queryFn: getReservations,
  });
};
