import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { ReactElement, ReactNode } from 'react';
import { useCallback, useState } from 'react';

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
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(Number(searchParams?.get('step') || 1));

  const step = searchParams?.get('step') || '1';

  const setStep = (stepChange: number) => {
    const newStep = currentStep + stepChange;

    setCurrentStep(newStep);

    if (newStep < 1) {
      // 첫 step인데 이전 버튼을 누르는 경우
      router.back();
    } else if (newStep > totalSteps) {
      // 마지막 step
      if (hasCompletePath) {
        router.push(completePath);
        return;
      } else {
        const params = new URLSearchParams(searchParams?.toString() ?? '');
        params.set('step', '1');
        router.replace(`${pathname}?${params.toString()}`);
        setCurrentStep(1);
      }
    } else {
      // 일반적인 step
      const params = new URLSearchParams(searchParams?.toString() ?? '');
      params.set('step', String(newStep));
      router.replace(`${pathname}?${params.toString()}`);
    }
  };

  const Step = useCallback(({ children }: StepProps) => <>{children}</>, []);

  const Funnel = useCallback(
    ({ children }: FunnelProps) => {
      const targetStep = children.find((childStep) => childStep.props.name === String(step));

      return <>{targetStep}</>;
    },
    [step]
  );

  return { Funnel, Step, setStep, currentStep };
};
