import { useQuery } from '@tanstack/react-query';
import {
  getReservations,
  getReservationStatus,
  getReservationsClassCard,
} from '@/pages/mypage/components/mypageReservation/apis/axios';
import type {
  ReservationClassCardResponseTypes,
  ReservationStatusResponseTypes,
} from '@/pages/mypage/components/mypageReservation/types/api';
import type { ReservationResponseTypes } from '@/pages/mypage/components/mypageReservation/types/api';
import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import { memberKeys } from '@/shared/constants/queryKey';

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

export const useGetReservationClassCard = (reservationId: number) => {
  return useQuery<ReservationClassCardResponseTypes>({
    queryKey: memberKeys.me._ctx.reservation._ctx.card(reservationId).queryKey,
    queryFn: () => getReservationsClassCard(reservationId),
    enabled: !!reservationId && !isNaN(reservationId),
  });
};
