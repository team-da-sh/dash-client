import { ReactElement, ReactNode, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: ReactElement<StepProps>[];
}

// totalSteps는 Funnel 구조에서 마지막 완료 페이지도 포함한 step 개수이다.
// completePath는 완료 페이지 이후 리다이렉션하는 페이지 path이다. ex) '/dancer'
export const useFunnel = (totalSteps: number, completePath: string, hasCompletePath = true) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(Number(searchParams.get('step') || 1));

  const navigate = useNavigate();

  const step = searchParams.get('step') || '1';

  const setStep = (stepChange: number) => {
    const newStep = currentStep + stepChange;

    setCurrentStep(newStep);

    if (newStep < 1) {
      // 첫 step인데 이전 버튼을 누르는 경우
      navigate(-1);
    } else if (newStep > totalSteps) {
      // 마지막 step
      if (hasCompletePath) {
        navigate(completePath);
        return;
      } else {
        searchParams.set('step', '1');
        setSearchParams(searchParams, { replace: true });
        setCurrentStep(1);
      }
    } else {
      // 일반적인 step
      searchParams.set('step', String(newStep));
      setSearchParams(searchParams, { replace: true });
    }
  };

  const Step = ({ children }: StepProps) => <>{children}</>;

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === String(step));

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, currentStep };
};
