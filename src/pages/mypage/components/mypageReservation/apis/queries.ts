import { useQuery } from '@tanstack/react-query';
import { getReservations, getReservationsClassCard } from '@/pages/mypage/components/mypageReservation/apis/axios';
import type {
  ReservationResponseTypes,
  ReservationClassCardResponseTypes,
} from '@/pages/mypage/components/mypageReservation/types/api';
import { memberKeys } from '@/shared/constants/queryKey';

export const useGetReservations = () => {
  return useQuery<ReservationResponseTypes>({
    queryKey: memberKeys.me._ctx.reservation.queryKey,
    queryFn: getReservations,
  });
};

export const useGetReservationClassCard = (reservationId: number) => {
  return useQuery<ReservationClassCardResponseTypes>({
    queryKey: memberKeys.me._ctx.reservation._ctx.card(reservationId).queryKey,
    queryFn: () => getReservationsClassCard(reservationId),
    enabled: !!reservationId && !isNaN(reservationId),
  });
};
