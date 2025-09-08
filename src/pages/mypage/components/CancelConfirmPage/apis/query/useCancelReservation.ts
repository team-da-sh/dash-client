import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postCancelReservation } from '@/pages/mypage/components/CancelConfirmPage/apis/axios/cancelReservation';
import type { CancelReservationRequest } from '@/pages/mypage/components/CancelConfirmPage/types/cancelReservationRequest';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { memberKeys } from '@/shared/constants/queryKey';

export const useCancelReservation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ reservationId, requestData }: { reservationId: number; requestData: CancelReservationRequest }) =>
      postCancelReservation(reservationId, requestData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: memberKeys.me._ctx.reservation.queryKey });
      navigate(ROUTES_CONFIG.mypageReservation.path);
    },
    onError: () => {
      navigate(ROUTES_CONFIG.error.path);
    },
  });
};
