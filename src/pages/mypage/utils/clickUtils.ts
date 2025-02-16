import { useNavigate } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { notify } from '@/shared/components/Toast/Toast';

export const handleClassCardClick = (navigate: ReturnType<typeof useNavigate>, reservationId: number | undefined) => {
  if (reservationId !== undefined) {
    const path = ROUTES_CONFIG.class.path(reservationId.toString());
    navigate(path);
  } else {
    navigate(ROUTES_CONFIG.error.path);
  }
};

export const handleDetailClick = (
  navigate: ReturnType<typeof useNavigate>,
  id: number | undefined,
  isReservation: boolean
) => {
  if (id !== undefined) {
    const path = isReservation
      ? ROUTES_CONFIG.mypageReservationDetail.path(id.toString())
      : ROUTES_CONFIG.instructorClassDetail.path(id.toString());
    navigate(path);
  } else {
    navigate(ROUTES_CONFIG.error.path);
  }
};

export const handleCancelClick = (e: React.MouseEvent) => {
  e.stopPropagation();
  notify();
};

export const handleBoxButtonClick = (
  e: React.MouseEvent,
  navigate: ReturnType<typeof useNavigate>,
  reservationId: number | undefined,
  isReservation: boolean
) => {
  e.stopPropagation();
  handleDetailClick(navigate, reservationId, isReservation);
};
