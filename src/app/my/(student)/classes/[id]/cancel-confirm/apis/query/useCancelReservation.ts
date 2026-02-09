import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { postCancelReservation } from '@/app/my/(student)/classes/[id]/cancel-confirm/apis/axios/cancelReservation';
import type { CancelReservationRequest } from '@/app/my/(student)/classes/[id]/cancel-confirm/types/cancelReservationRequest';
import { memberKeys } from '@/shared/constants/queryKey';

export const useCancelReservation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: ({ reservationId, requestData }: { reservationId: number; requestData: CancelReservationRequest }) =>
      postCancelReservation(reservationId, requestData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: memberKeys.me._ctx.reservation.queryKey });
      router.push('/my/classes');
    },
    onError: () => {
      router.push('/error');
    },
  });
};
