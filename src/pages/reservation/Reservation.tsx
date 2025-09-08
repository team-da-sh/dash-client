import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmationStep from '@/pages/reservation/components/ConfirmationStep/ConfirmationStep';
import ReservationHeader from '@/pages/reservation/components/ReservationHeader/ReservationHeader';
import ReservationStep from '@/pages/reservation/components/ReservationStep/ReservationStep';
import SuccessStep from '@/pages/reservation/components/SuccessStep/SuccessStep';
import type { ClassReservationResponseTypes } from '@/pages/reservation/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useFunnel } from '@/shared/hooks/useFunnel';

const Reservation = () => {
  const navigate = useNavigate();
  const { Funnel, Step, setStep } = useFunnel(3, ROUTES_CONFIG.home.path);
  const [reservationDetail, setReservationDetail] = useState<ClassReservationResponseTypes | null>(null);

  return (
    <Funnel>
      <Step name="1">
        <ReservationHeader step={1} />
        <ReservationStep
          onNext={(detail) => {
            setReservationDetail(detail);
            setStep(1);
          }}
        />
      </Step>

      <Step name="2">
        <ReservationHeader step={2} />
        {reservationDetail && <ConfirmationStep onNext={() => setStep(1)} {...reservationDetail} />}
      </Step>

      <Step name="3">
        <ReservationHeader step={3} />
        <SuccessStep onGoHome={() => navigate(ROUTES_CONFIG.mypageReservation.path)} />
      </Step>
    </Funnel>
  );
};

export default Reservation;
