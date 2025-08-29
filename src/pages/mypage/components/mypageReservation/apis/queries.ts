import { useQuery } from '@tanstack/react-query';
import { getReservations, getReservationStatus } from '@/pages/mypage/components/mypageReservation/apis/axios';
import { memberKeys } from '@/shared/constants/queryKey';
import type { ReservationResponseTypes, ReservationStatusResponseTypes } from '../types/api';

export const useGetReservations = () => {
  return useQuery<ReservationResponseTypes>({
    queryKey: memberKeys.me._ctx.reservation.queryKey,
    queryFn: getReservations,
  });
};

export const useGetReservationStatus = () => {
  return useQuery<ReservationStatusResponseTypes>({
    queryKey: memberKeys.me._ctx.reservation._ctx.list._ctx.status.queryKey,
    queryFn: getReservationStatus,
  });
};
