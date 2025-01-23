import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/apis/constants/queryKey';
import { getReservationsDetail } from '@/apis/myPageReservationDetail/axios';
import { ReservationDetailType } from '@/types/reservationDetailTypes';

export const useGetReservationsDetail = (lessonId: number) => {
  return useQuery<ReservationDetailType>({
    queryKey: [QUERY_KEYS.MEMBERS_RESERVATION_DETAIL, lessonId],
    queryFn: () => getReservationsDetail(lessonId),

    // reservationId가 없으면 쿼리 비활성화
    enabled: !!lessonId,
  });
};
