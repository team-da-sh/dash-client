import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { memberKeys } from '@/shared/constants/queryKey';
import { cancelReservation } from '../apis/cancelReservation';
import type { CancelReservationRequest } from '../types/cancelRequest';

export const useCancelReservation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: ({ reservationId, requestData }: { reservationId: number; requestData: CancelReservationRequest }) =>
      cancelReservation(reservationId, requestData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: memberKeys.me._ctx.reservation.queryKey });
      router.push('/my/classes');
    },
    onError: (error) => {
      console.error('예약 취소 실패:', error);
    },
  });
};
