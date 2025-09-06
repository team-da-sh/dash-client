import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { memberKeys } from '@/shared/constants/queryKey';
import { cancelReservation } from '../apis/cancelReservation';
import type { CancelReservationRequest } from '../types/cancelRequest';

export const useCancelReservation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ reservationId, requestData }: { reservationId: number; requestData: CancelReservationRequest }) =>
      cancelReservation(reservationId, requestData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: memberKeys.me._ctx.reservation.queryKey });
      navigate(ROUTES_CONFIG.mypageReservation.path);
    },
    onError: (error) => {
      console.error('예약 취소 실패:', error);
    },
  });
};
