import type { ReservationDetailType } from '@/app/my/(student)/classes/[id]/types/api';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

export const getReservationsDetail = async (reservationId: number): Promise<ReservationDetailType> => {
  const url = `${API_URL.MEMBERS_RESERVATION_DETAIL}/${reservationId}`;
  const data = await kyInstance.get(url).json<ReservationDetailType>();
  return data;
};
