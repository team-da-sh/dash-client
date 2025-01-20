import BoxButton from '@/components/BoxButton';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import { useFunnel } from '@/hooks/useFunnel';
import InstructorRegisterFunnel from './InstructorRegisterFunnel';
import { buttonContainerStyle, progressBarCustomStyle } from './index.css';

const InstructorRegister = () => {
  const TOTAL_STEP = 6;
  const { Funnel, Step, currentStep, setStep } = useFunnel(TOTAL_STEP, '/mypage');

  return (
    <>
      <Header.Root isColor={true}>
        {currentStep < TOTAL_STEP && <Header.BackIcon onFunnelBackClick={() => setStep(-1)} />}
        <Header.CloseIcon onClick={() => console.log('hi')} />
      </Header.Root>
      {currentStep < TOTAL_STEP && (
        <ProgressBar totalStep={5} currentStep={currentStep} className={progressBarCustomStyle} />
      )}

      <InstructorRegisterFunnel Funnel={Funnel} Step={Step} currentStep={currentStep} setStep={setStep} />

      <div className={buttonContainerStyle}>
        {currentStep < TOTAL_STEP ? (
          <BoxButton onClick={() => setStep(1)}>다음</BoxButton>
        ) : (
          <BoxButton onClick={() => setStep(1)}>완료</BoxButton>
        )}
      </div>
    </>
  );
};

export default InstructorRegister;
