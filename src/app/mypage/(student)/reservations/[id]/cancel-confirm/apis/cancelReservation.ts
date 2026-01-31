import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';
import type { CancelReservationRequest } from '../types/cancelRequest';

export const cancelReservation = async (reservationId: number, requestData: CancelReservationRequest) => {
  const { data } = await instance.post(
    API_URL.MEMBERS_RESERVATIONS_CANCEL.replace('{reservationId}', reservationId.toString()),
    requestData
  );

  return data;
};
