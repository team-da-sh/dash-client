import { useNavigate } from 'react-router-dom';
import InstructorRegisterFunnel from '@/pages/instructorRegister/components/InstructorRegisterFunnel/InstructorRegisterFunnel';
import { progressBarCustomStyle } from '@/pages/instructorRegister/instructorRegister.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Header from '@/shared/components/Header/Header';
import ProgressBar from '@/shared/components/ProgressBar/ProgressBar';
import { useFunnel } from '@/shared/hooks/useFunnel';

const InstructorRegister = () => {
  const TOTAL_STEP = 6;
  const { Funnel, Step, currentStep, setStep } = useFunnel(TOTAL_STEP, ROUTES_CONFIG.home.path);
  const navigate = useNavigate();

  return (
    <>
      <Header.Root isColor={true}>
        {currentStep < TOTAL_STEP && <Header.BackIcon onFunnelBackClick={() => setStep(-1)} />}
        <Header.CloseIcon onClick={() => navigate(ROUTES_CONFIG.home.path)} />
      </Header.Root>
      {currentStep < TOTAL_STEP && (
        <ProgressBar totalStep={5} currentStep={currentStep} className={progressBarCustomStyle} />
      )}

      {/* Funnel */}
      <InstructorRegisterFunnel Funnel={Funnel} Step={Step} currentStep={currentStep} setStep={setStep} />
    </>
  );
};

export default InstructorRegister;
