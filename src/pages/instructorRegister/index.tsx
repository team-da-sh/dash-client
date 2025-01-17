import BoxButton from '@/components/BoxButton';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import { useFunnel } from '@/hooks/useFunnel';
import ImageUploadStep from './ImageUploadStep';
import PersonalSNSStep from './PersonalSNSStep';
import { buttonContainerStyle, funnelContainerStyle, progressBarCustomStyle } from './index.css';

const InstructorRegister = () => {
  const { Funnel, Step, currentStep, setStep } = useFunnel(6, '/mypage');

  return (
    <>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.CloseIcon onClick={() => console.log('hi')} />
      </Header.Root>
      <ProgressBar totalStep={5} currentStep={currentStep} className={progressBarCustomStyle} />

      <div className={funnelContainerStyle}>
        <Funnel>
          <Step name="1">
            <ImageUploadStep />
          </Step>
          <Step name="2">
            <PersonalSNSStep />
          </Step>
        </Funnel>
      </div>

      <div className={buttonContainerStyle}>
        <BoxButton onClick={() => setStep(1)}>다음으로</BoxButton>
      </div>
    </>
  );
};

export default InstructorRegister;
