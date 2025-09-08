import type { CancelReservationRequest } from '@/pages/mypage/components/CancelConfirmPage/types/cancelReservationRequest';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const postCancelReservation = async (reservationId: number, requestData: CancelReservationRequest) => {
  const { data } = await instance.post(
    API_URL.MEMBERS_RESERVATIONS_CANCEL.replace('{reservationId}', reservationId.toString()),
    requestData
  );

  return data;
};
