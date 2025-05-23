import { useQuery } from '@tanstack/react-query';
import { getReservationsDetail } from '@/pages/mypage/components/mypageReservationDetail/apis/axios';
import type { ReservationDetailType } from '@/pages/mypage/components/mypageReservationDetail/types/api';
import { memberKeys } from '@/shared/constants/queryKey';

export const useGetReservationsDetail = (lessonId: number) => {
  return useQuery<ReservationDetailType>({
    queryKey: memberKeys.reservations_detail(lessonId),
    queryFn: () => getReservationsDetail(lessonId),

    // reservationId가 없으면 쿼리 비활성화
    enabled: !!lessonId,
  });
};
