import { useQuery } from '@tanstack/react-query';
import { getReservations, getReservationStatus } from '@/pages/mypage/components/mypageReservation/apis/axios';
import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import { memberKeys } from '@/shared/constants/queryKey';
import type { ReservationResponseTypes, ReservationStatusResponseTypes } from '../types/api';

export const useGetReservations = (status: ReservationStatus) => {
  return useQuery<ReservationResponseTypes>({
    queryKey: memberKeys.me._ctx.reservation._ctx.list(status).queryKey,
    queryFn: () => getReservations(status),
  });
};

export const useGetReservationStatus = () => {
  return useQuery<ReservationStatusResponseTypes>({
    queryKey: memberKeys.me._ctx.reservation._ctx.status.queryKey,
    queryFn: getReservationStatus,
  });
};
