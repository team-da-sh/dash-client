import type { CancelReservationRequest } from '@/app/my/(student)/classes/[id]/cancel-confirm/types/cancelReservationRequest';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

export const postCancelReservation = async (reservationId: number, requestData: CancelReservationRequest) => {
  const data = await kyInstance
    .post(API_URL.MEMBERS_RESERVATIONS_CANCEL.replace('{reservationId}', reservationId.toString()), {
      json: requestData,
    })
    .json();
  return data;
};
