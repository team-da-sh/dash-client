import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { postCancelReservation } from '@/app/mypage/(student)/reservations/[id]/cancel-confirm/apis/axios/cancelReservation';
import type { CancelReservationRequest } from '@/app/mypage/(student)/reservations/[id]/cancel-confirm/types/cancelReservationRequest';
import { memberKeys } from '@/shared/constants/queryKey';

export const useCancelReservation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: ({ reservationId, requestData }: { reservationId: number; requestData: CancelReservationRequest }) =>
      postCancelReservation(reservationId, requestData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: memberKeys.me._ctx.reservation.queryKey });
      router.push(ROUTES_CONFIG.mypageReservation.path);
    },
    onError: () => {
      router.push(ROUTES_CONFIG.error.path);
    },
  });
};
