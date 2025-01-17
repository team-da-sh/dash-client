import BoxButton from '@/components/BoxButton';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import { useFunnel } from '@/hooks/useFunnel';
import CareerStep from './CareerStep';
import ImageUploadStep from './ImageUploadStep';
import IntroductionStep from './IntroductionStep';
import PersonalSNSStep from './PersonalSNSStep';
import VideoLinkStep from './VideoLinkStep';
import { buttonContainerStyle, funnelContainerStyle, progressBarCustomStyle } from './index.css';

const InstructorRegister = () => {
  const { Funnel, Step, currentStep, setStep } = useFunnel(6, '/mypage');

  return (
    <>
      <Header.Root isColor={true}>
        {currentStep < 6 && <Header.BackIcon />}
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
          <Step name="3">
            <CareerStep />
          </Step>
          <Step name="4">
            <VideoLinkStep />
          </Step>
          <Step name="5">
            <IntroductionStep />
          </Step>
          <Step name="6">
            <IntroductionStep />
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
