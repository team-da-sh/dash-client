import { useQuery } from '@tanstack/react-query';
import { getReservationsDetail } from '@/pages/mypage/components/mypageReservationDetail/apis/axios';
import type { ReservationDetailType } from '@/pages/mypage/components/mypageReservationDetail/types/api';
import { memberKeys } from '@/shared/constants/queryKey';

export const useGetReservationsDetail = (reservationId: number) => {
  return useQuery<ReservationDetailType>({
    queryKey: memberKeys.me._ctx.reservation._ctx.detail(reservationId).queryKey,
    queryFn: () => getReservationsDetail(reservationId),

    // reservationId가 없으면 쿼리 비활성화
    enabled: !!reservationId,
  });
};
