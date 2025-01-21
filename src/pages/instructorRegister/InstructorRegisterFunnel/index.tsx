import { useState } from 'react';
import CareerStep from '@/pages/instructorRegister/InstructorRegisterFunnel//CareerStep';
import ImageUploadStep from '@/pages/instructorRegister/InstructorRegisterFunnel//ImageUploadStep';
import IntroductionStep from '@/pages/instructorRegister/InstructorRegisterFunnel/IntroductionStep';
import PersonalSNSStep from '@/pages/instructorRegister/InstructorRegisterFunnel/PersonalSNSStep';
import VideoLinkStep from '@/pages/instructorRegister/InstructorRegisterFunnel/VideoLinkStep';
import { funnelContainerStyle } from '@/pages/instructorRegister/InstructorRegisterFunnel/index.css';
import { buttonContainerStyle } from '@/pages/instructorRegister/index.css';
import { InstructorRegisterInfoTypes } from '@/pages/instructorRegister/types';
import { FunnelProps, StepProps } from '@/pages/search/types/funnel';
import BoxButton from '@/components/BoxButton';
import Completion from '@/components/Completion';

interface InstructorRegisterFunnelProps {
  currentStep: number;
  Funnel: ({ children }: FunnelProps) => JSX.Element;
  setStep: (step: number) => void;
  Step: ({ children }: StepProps) => JSX.Element;
}
const TOTAL_STEP = 6;

const InstructorRegisterFunnel = ({ currentStep, Funnel, Step, setStep }: InstructorRegisterFunnelProps) => {
  const [info, setInfo] = useState({
    imageUrl: '',
    instagram: '',
    youtube: '',
    education: [''],
    experience: [''],
    detail: '',
    videoUrls: [''],
  });
  const [isInstaError, setIsInstaError] = useState(false);
  const [isYoutubeError, setIsYoutubeError] = useState(false);

  const handleInfoChange = <K extends keyof InstructorRegisterInfoTypes>(
    key: K,
    value: InstructorRegisterInfoTypes[K]
  ) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  const handleInstaError = (isError: boolean) => {
    setIsInstaError(isError);
  };

  const handleYoutubeError = (isError: boolean) => {
    setIsYoutubeError(isError);
  };

  const buttonActive = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return !!info.imageUrl;
      case 2:
        return !isInstaError && !isYoutubeError && (info.instagram.length > 0 || info.youtube.length > 0);
      case 3:
        return info.education.length > 0 && info.experience.length > 0;
      case 4:
      // return info.videoUrls.length > 0 && info.videoUrls[0].trim() !== '';
      case 5:
        return info.detail.trim() !== '' && info.detail.length >= 30;
      case 6:
        return true;
      default:
        return false;
    }
  };

  return (
    <>
      <div className={funnelContainerStyle}>
        <Funnel>
          <Step name="1">
            <ImageUploadStep />
          </Step>
          <Step name="2">
            <PersonalSNSStep
              instagram={info.instagram}
              youtube={info.youtube}
              isInstaError={isInstaError}
              isYoutubeError={isYoutubeError}
              handleInstaError={handleInstaError}
              handleYoutubeError={handleYoutubeError}
              onInfoChange={handleInfoChange}
            />
          </Step>
          <Step name="3">
            <CareerStep education={info.education} experience={info.experience} onInfoChange={handleInfoChange} />
          </Step>
          <Step name="4">
            <VideoLinkStep videoUrls={info.videoUrls} onInfoChange={handleInfoChange} />
          </Step>
          <Step name="5">
            <IntroductionStep detail={info.detail} onInfoChange={handleInfoChange} />
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
        <BoxButton variant="primary" onClick={() => setStep(1)} isDisabled={!buttonActive(currentStep)}>
          {currentStep < TOTAL_STEP ? '다음' : '완료'}
        </BoxButton>
      </div>
    </>
  );
};

export default InstructorRegisterFunnel;
