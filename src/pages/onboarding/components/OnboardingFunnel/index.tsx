import { useState } from 'react';
import FinishStep from '@/pages/onboarding/components/FinishStep';
import GenreStep from '@/pages/onboarding/components/GenreStep';
import InfoStep from '@/pages/onboarding/components/InfoStep';
import LevelStep from '@/pages/onboarding/components/LevelStep';
import OnboardingHeader from '@/pages/onboarding/components/OnboardingHeader';
import ProfileStep from '@/pages/onboarding/components/ProfileStep';
import { bodyWrapperStyle, containerStyle, footerWrapperStyle, progressBarStyle } from '@/pages/onboarding/index.css';
import { GenreTypes, LevelTypes, onboardInfoTypes } from '@/pages/onboarding/types';
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
  const [info, setInfo] = useState({ level: null } as onboardInfoTypes);

  console.log(info);
  const handleInfoChange = (key: string, value: string | GenreTypes[] | LevelTypes | null) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  const handleNextButtonClick = () => {
    setStep(1);
  };

  const handlePrevButtonClick = () => {
    setStep(-1);
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
              profileImageUrl={info.profileImageUrl}
              onInfoChange={handleInfoChange}
            />
          </Step>
          <Step name="5" key={5}>
            <FinishStep></FinishStep>
          </Step>
        </Funnel>
      </div>

      <div className={footerWrapperStyle}>
        <BoxButton variant="primary" onClick={handleNextButtonClick}>
          {currentStep === 5 ? '홈으로 이동' : '다음'}
        </BoxButton>
      </div>
    </div>
  );
};

export default OnboardingFunnel;
