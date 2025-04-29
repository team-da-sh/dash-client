import InstructorRegisterFunnel from '@/pages/instructorRegister/components/InstructorRegisterFunnel/InstructorRegisterFunnel';
import { progressBarCustomStyle } from '@/pages/instructorRegister/instructorRegister.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import ProgressBar from '@/shared/components/ProgressBar/ProgressBar';
import { useFunnel } from '@/shared/hooks/useFunnel';

const InstructorRegister = () => {
  const TOTAL_STEP = 6;
  const { Funnel, Step, currentStep, setStep } = useFunnel(TOTAL_STEP, ROUTES_CONFIG.home.path);

  return (
    <>
      {currentStep < TOTAL_STEP && (
        <ProgressBar totalStep={5} currentStep={currentStep} className={progressBarCustomStyle} />
      )}

      {/* Funnel */}
      <InstructorRegisterFunnel Funnel={Funnel} Step={Step} currentStep={currentStep} setStep={setStep} />
    </>
  );
};

export default InstructorRegister;
