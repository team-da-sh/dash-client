import BoxButton from '@/components/BoxButton';
import Completion from '@/components/Completion';
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
  const TOTAL_STEP = 6;
  const { Funnel, Step, currentStep, setStep } = useFunnel(TOTAL_STEP, '/mypage');

  return (
    <>
      <Header.Root isColor={true}>
        {currentStep < TOTAL_STEP && <Header.BackIcon />}
        <Header.CloseIcon onClick={() => console.log('hi')} />
      </Header.Root>
      {currentStep < TOTAL_STEP && (
        <ProgressBar totalStep={5} currentStep={currentStep} className={progressBarCustomStyle} />
      )}

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
            <Completion
              title="강사 등록 완료!"
              subTitle="멋진 클래스 기대할게요"
              description="이제 마이페이지에서 내 클래스를 개설할 수 있어요"
            />
          </Step>
        </Funnel>
      </div>

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
