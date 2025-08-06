import { useNavigate } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useFunnel } from '@/shared/hooks/useFunnel';
import ConfirmationStep from './components/ConfirmationStep/confirmationStep';
import ReservationStep from './components/ReservationStep/ReservationStep';
import SuccessStep from './components/SuccessStep/SuccessStep';

const Reservation = () => {
  const navigate = useNavigate();

  const { Funnel, Step, setStep } = useFunnel(3, ROUTES_CONFIG.home.path);

  return (
    <Funnel>
      <Step name="1">
        <ReservationStep onNext={() => setStep(1)} />
      </Step>

      <Step name="2">
        <ConfirmationStep onNext={() => setStep(1)} />
      </Step>

      <Step name="3">
        <SuccessStep onGoHome={() => navigate(ROUTES_CONFIG.mypageReservation.path)} />
      </Step>
    </Funnel>
  );
};
export default Reservation;
