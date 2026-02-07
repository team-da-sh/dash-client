import type { ReactElement, ReactNode } from 'react';
import { useCallback, useState } from 'react';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: ReactElement<StepProps>[];
}

export const useLocalFunnel = (totalSteps: number) => {
  const [currentStep, setCurrentStep] = useState(1);

  const setStep = (stepChange: number) => {
    const newStep = currentStep + stepChange;

    if (newStep < 1) {
      return;
    } else if (newStep > totalSteps) {
      setCurrentStep(1);
    } else {
      setCurrentStep(newStep);
    }
  };

  const Step = useCallback(({ children }: StepProps) => <>{children}</>, []);

  const Funnel = useCallback(
    ({ children }: FunnelProps) => {
      const targetStep = children.find((childStep) => childStep.props.name === String(currentStep));
      return <>{targetStep}</>;
    },
    [currentStep]
  );

  return { Funnel, Step, setStep, currentStep };
};
