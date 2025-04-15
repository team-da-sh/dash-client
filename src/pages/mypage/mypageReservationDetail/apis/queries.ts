import { useQuery } from '@tanstack/react-query';
import { getReservationsDetail } from '@/pages/mypage/mypageReservationDetail/apis/axios';
import type { ReservationDetailType } from '@/pages/mypage/mypageReservationDetail/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetReservationsDetail = (lessonId: number) => {
  return useQuery<ReservationDetailType>({
    queryKey: [QUERY_KEYS.MEMBERS_RESERVATION_DETAIL, lessonId],
    queryFn: () => getReservationsDetail(lessonId),

    // reservationId가 없으면 쿼리 비활성화
    enabled: !!lessonId,
  });
};
