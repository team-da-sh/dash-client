import { ROUTES_CONFIG } from '@/routes/routesConfig';
import type { Reservation } from '@/app/mypage/(student)/reservations/types/reservationTypes';

type PushFn = (path: string) => void;

export const handleClassCardClick = (push: PushFn, lessonId: number | undefined) => {
  if (lessonId !== undefined) {
    push(ROUTES_CONFIG.class.path(lessonId.toString()));
  } else {
    push(ROUTES_CONFIG.error.path);
  }
};

export const handleDetailClick = (push: PushFn, id: number | undefined, isReservation: boolean) => {
  if (id !== undefined) {
    const path = isReservation
      ? ROUTES_CONFIG.mypageReservationDetail.path(id.toString())
      : ROUTES_CONFIG.instructorClassDetail.path(id.toString());
    push(path);
  } else {
    push(ROUTES_CONFIG.error.path);
  }
};

export const handleCancelClick = (e: React.MouseEvent, push: PushFn, reservation: Reservation) => {
  e.stopPropagation();
  push(ROUTES_CONFIG.mypageCancelClass.path(reservation.reservationId.toString()));
};

export const handleBoxButtonClick = (
  e: React.MouseEvent,
  push: PushFn,
  reservationId: number | undefined,
  isReservation: boolean
) => {
  e.stopPropagation();
  handleDetailClick(push, reservationId, isReservation);
};
