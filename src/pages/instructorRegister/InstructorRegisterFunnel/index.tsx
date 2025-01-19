import { FunnelProps, StepProps } from '@/pages/search/types/funnel';
import Completion from '@/components/Completion';
import CareerStep from '../CareerStep';
import ImageUploadStep from '../ImageUploadStep';
import IntroductionStep from '../IntroductionStep';
import PersonalSNSStep from '../PersonalSNSStep';
import VideoLinkStep from '../VideoLinkStep';

interface InstructorRegisterFunnelProps {
  currentStep: number;
  Funnel: ({ children }: FunnelProps) => JSX.Element;
  setStep: (step: number) => void;
  Step: ({ children }: StepProps) => JSX.Element;
}

const InstructorRegisterFunnel = ({ Funnel, Step }: InstructorRegisterFunnelProps) => {
  return (
    <>
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
    </>
  );
};

export default InstructorRegisterFunnel;
