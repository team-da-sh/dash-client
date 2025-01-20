import { useState } from 'react';
import CareerStep from '@/pages/instructorRegister/InstructorRegisterFunnel//CareerStep';
import ImageUploadStep from '@/pages/instructorRegister/InstructorRegisterFunnel//ImageUploadStep';
import IntroductionStep from '@/pages/instructorRegister/InstructorRegisterFunnel/IntroductionStep';
import PersonalSNSStep from '@/pages/instructorRegister/InstructorRegisterFunnel/PersonalSNSStep';
import VideoLinkStep from '@/pages/instructorRegister/InstructorRegisterFunnel/VideoLinkStep';
import { funnelContainerStyle } from '@/pages/instructorRegister/InstructorRegisterFunnel/index.css';
import { FunnelProps, StepProps } from '@/pages/search/types/funnel';
import Completion from '@/components/Completion';
import { InstructorRegisterInfoTypes } from '../types';

interface InstructorRegisterFunnelProps {
  currentStep: number;
  Funnel: ({ children }: FunnelProps) => JSX.Element;
  setStep: (step: number) => void;
  Step: ({ children }: StepProps) => JSX.Element;
}

const InstructorRegisterFunnel = ({ Funnel, Step }: InstructorRegisterFunnelProps) => {
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

  return (
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
  );
};

export default InstructorRegisterFunnel;
