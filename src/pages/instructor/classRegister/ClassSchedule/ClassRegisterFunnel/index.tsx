import { funnelContainerStyle } from '@/pages/instructorRegister/InstructorRegisterFunnel/index.css';
import { FunnelProps, StepProps } from '@/pages/search/types/funnel';
import Completion from '@/components/Completion';

interface ClassRegisterFunnelProps {
  currentStep: number;
  Funnel: ({ children }: FunnelProps) => JSX.Element;
  setStep: (step: number) => void;
  Step: ({ children }: StepProps) => JSX.Element;
}

const ClassRegisterFunnel = ({ Funnel, Step }: ClassRegisterFunnelProps) => {
  return <div className={funnelContainerStyle}></div>;
};

export default ClassRegisterFunnel;
