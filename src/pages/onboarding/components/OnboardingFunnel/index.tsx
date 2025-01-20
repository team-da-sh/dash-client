import { useState } from 'react';
import FinishStep from '@/pages/onboarding/components/FinishStep';
import GenreStep from '@/pages/onboarding/components/GenreStep';
import InfoStep from '@/pages/onboarding/components/InfoStep';
import LevelStep from '@/pages/onboarding/components/LevelStep';
import OnboardingHeader from '@/pages/onboarding/components/OnboardingHeader';
import ProfileStep from '@/pages/onboarding/components/ProfileStep';
import { bodyWrapperStyle, containerStyle, footerWrapperStyle, progressBarStyle } from '@/pages/onboarding/index.css';
import { GenreTypes, onboardInfoTypes } from '@/pages/onboarding/types';
import BoxButton from '@/components/BoxButton';
import ProgressBar from '@/components/ProgressBar';
import { FunnelProps, StepProps } from '@/hooks/useFunnel';

interface OnboardingFunnelProps {
  currentStep: number;
  Funnel: ({ children }: FunnelProps) => JSX.Element;
  setStep: (step: number) => void;
  Step: ({ children }: StepProps) => JSX.Element;
}

const OnboardingFunnel = ({ currentStep, Funnel, setStep, Step }: OnboardingFunnelProps) => {
  const [info, setInfo] = useState<onboardInfoTypes>({
    name: '',
    phoneNumber: '',
    genres: [] as GenreTypes[],
    nickName: '',
    level: null,
    profileImageUrl: 'http',
  });

  const [isNickNameError, setIsNickNameError] = useState(false);

  const changeNickNameError = (isError: boolean) => {
    setIsNickNameError(isError);
  };

  const handleInfoChange = <K extends keyof onboardInfoTypes>(key: K, value: onboardInfoTypes[K]) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  const handleNextButtonClick = () => {
    setStep(1);
  };

  const handlePrevButtonClick = () => {
    setStep(-1);
  };

  // 다음 버튼 활성화 판단
  const buttonActive = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return !(info.name && info.phoneNumber);
      case 2:
        return !info.genres.length;
      case 3:
        return !info.level;
      case 4:
        return !(info.profileImageUrl && info.nickName);
      case 5:
        return false;
      default:
        return true;
    }
  };

  return (
    <div className={containerStyle}>
      <OnboardingHeader currentStep={currentStep} onPrevButtonClick={handlePrevButtonClick} />
      {currentStep < 5 && <ProgressBar totalStep={4} currentStep={currentStep} className={progressBarStyle} />}

      <div className={bodyWrapperStyle}>
        <Funnel>
          <Step name="1" key={1}>
            <InfoStep name={info.name} phoneNumber={info.phoneNumber} onInfoChange={handleInfoChange} />
          </Step>
          <Step name="2" key={2}>
            <GenreStep genres={info.genres} onInfoChange={handleInfoChange} />
          </Step>
          <Step name="3" key={3}>
            <LevelStep level={info.level} onInfoChange={handleInfoChange} />
          </Step>
          <Step name="4" key={4}>
            <ProfileStep
              nickName={info.nickName}
              isNickNameError={isNickNameError}
              changeIsNickNameError={changeNickNameError}
              profileImageUrl={info.profileImageUrl}
              onInfoChange={handleInfoChange}
            />
          </Step>
          <Step name="5" key={5}>
            <FinishStep nickName={info.nickName}></FinishStep>
          </Step>
        </Funnel>
      </div>

      <div className={footerWrapperStyle}>
        <BoxButton variant="primary" onClick={handleNextButtonClick} isDisabled={buttonActive(currentStep)}>
          {currentStep === 5 ? '홈으로 이동' : '다음'}
        </BoxButton>
      </div>
    </div>
  );
};

export default OnboardingFunnel;
