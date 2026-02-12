import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';
import type { CancelReservationRequest } from '../types/cancelRequest';

export const cancelReservation = async (reservationId: number, requestData: CancelReservationRequest) => {
  const data = await kyInstance
    .post(API_URL.MEMBERS_RESERVATIONS_CANCEL.replace('{reservationId}', reservationId.toString()), {
      json: requestData,
    })
    .json();
  return data;
};
