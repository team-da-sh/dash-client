import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';

export interface Student {
  name: string;
  phoneNumber: string;
  createdAt: string;
  reservationStatus: Exclude<ReservationStatus, 'ALL'>;
}
