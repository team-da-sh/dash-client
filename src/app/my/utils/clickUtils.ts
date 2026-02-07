import type { Reservation } from '@/app/my/(student)/classes/types/reservationTypes';

type PushFn = (path: string) => void;

export const handleClassCardClick = (push: PushFn, lessonId: number | undefined) => {
  if (lessonId !== undefined) {
    push(`/class/${lessonId}`);
  } else {
    push('/error');
  }
};

export const handleDetailClick = (push: PushFn, id: number | undefined, isReservation: boolean) => {
  if (id !== undefined) {
    const path = isReservation ? `/my/reservations/${id}` : `/my/manage-classes/${id}`;
    push(path);
  } else {
    push('/error');
  }
};

export const handleCancelClick = (e: React.MouseEvent, push: PushFn, reservation: Reservation) => {
  e.stopPropagation();
  push(`/my/reservations/${reservation.reservationId}/cancel`);
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
