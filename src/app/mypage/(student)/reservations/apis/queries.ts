import { useQuery } from '@tanstack/react-query';
import {
  getReservations,
  getReservationStatus,
  getReservationsClassCard,
} from '@/app/mypage/(student)/reservations/apis/axios';
import type {
  ReservationClassCardResponseTypes,
  ReservationStatusResponseTypes,
  ReservationResponseTypes,
} from '@/app/mypage/(student)/reservations/types/api';
import type { ReservationStatus } from '@/app/mypage/(student)/reservations/types/reservationStatus';
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
