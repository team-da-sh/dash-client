'use client';

import { Suspense, useRef, useState } from 'react';
import { usePostOnboard } from '@/app/onboarding/apis/queries';
import FinishStep from '@/app/onboarding/components/FinishStep/FinishStep';
import InfoStep from '@/app/onboarding/components/InfoStep/InfoStep';
import OnboardingHeader from '@/app/onboarding/components/OnboardingHeader/OnboardingHeader';
import SubmitButton from '@/app/onboarding/components/SubmitButton/SubmitButton';
import { FINAL_ONBOARDING_STEP } from '@/app/onboarding/constants';
import * as styles from '@/app/onboarding/index.css';
import type { OnboardInfoTypes, OnboardingState } from '@/app/onboarding/types/onboardInfoTypes';
import { notify } from '@/common/components/Toast/Toast';
import { useFunnel } from '@/common/hooks/useFunnel';
import { ONBOARDING_TOKENS_KEY } from '@/shared/constants/api';
import { PHONE_AUTH_MESSAGES } from '@/shared/constants/userInfo';

function getOnboardingTokens(): { accessToken: string; refreshToken: string; isDeleted?: boolean } | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(ONBOARDING_TOKENS_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function OnboardingContent() {
  const tokenRef = useRef(getOnboardingTokens());
  const isDeleted = tokenRef.current?.isDeleted ?? false;

  const { Funnel, Step, setStep, currentStep } = useFunnel(FINAL_ONBOARDING_STEP, '/');

  const initialState: OnboardingState = {
    info: { name: '', phoneNumber: '', verificationCode: '' },
    isCodeVerified: false,
    isSubmitting: false,
  };
  const [isNameError, setIsNameError] = useState(false);
  const [onboarding, setOnboarding] = useState<OnboardingState>(initialState);

  const { mutate: onboardMutate } = usePostOnboard();

  const handleInfoChange = <K extends keyof OnboardInfoTypes>(key: K, value: OnboardInfoTypes[K]) => {
    setOnboarding((prev) => ({
      ...prev,
      info: { ...prev.info, [key]: value },
    }));
  };

  const handleNameErrorChange = (isError: boolean) => {
    setIsNameError(isError);
  };

  const handleCodeVerifiedChange = (verified: boolean) => {
    setOnboarding((prev) => ({ ...prev, isCodeVerified: verified }));
  };

  const handleNextButtonClick = () => {
    setStep(1);
  };

  const handleOnboardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOnboarding((prev) => ({ ...prev, isSubmitting: true }));

    const tokens = tokenRef.current;
    if (!tokens?.accessToken) return;
    onboardMutate(
      {
        ...onboarding.info,
        accessToken: tokens.accessToken,
      },
      {
        onSuccess: async () => {
          const tokens = tokenRef.current;
          if (tokens?.accessToken) {
            try {
              const res = await fetch('/api/auth/set-cookies', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  accessToken: tokens.accessToken,
                  refreshToken: tokens.refreshToken,
                }),
              });
              if (res.ok) {
                sessionStorage.removeItem(ONBOARDING_TOKENS_KEY);
              }
            } catch {
              // set-cookies 실패 시에도 성공 화면은 보여줌
            }
          }
          setStep(1);
        },
        onError: (error) => {
          if (error.response?.status === 409) {
            notify({ message: PHONE_AUTH_MESSAGES.DUPLICATE_PHONE, icon: 'fail', bottomGap: 'large' });
          }
        },
        onSettled: () => {
          setOnboarding((prev) => ({ ...prev, isSubmitting: false }));
        },
      }
    );
  };

  return (
    <form
      className={styles.containerStyle}
      onSubmit={handleOnboardSubmit}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}>
      <OnboardingHeader step={currentStep} />
      <div className={styles.bodyWrapperStyle}>
        <Funnel>
          <Step name="1">
            <InfoStep
              name={onboarding.info.name}
              phoneNumber={onboarding.info.phoneNumber}
              verificationCode={onboarding.info.verificationCode || ''}
              onInfoChange={handleInfoChange}
              setIsCodeVerified={handleCodeVerifiedChange}
              isCodeVerified={onboarding.isCodeVerified}
              accessToken={tokenRef.current?.accessToken ?? ''}
              isNameError={isNameError}
              handleNameErrorChange={handleNameErrorChange}
            />
          </Step>
          <Step name="2">
            <FinishStep name={onboarding.info.name} isDeleted={isDeleted} />
          </Step>
        </Funnel>
      </div>

      <div className={styles.footerWrapperStyle}>
        <SubmitButton
          currentStep={currentStep}
          info={onboarding.info}
          onNextButtonClick={handleNextButtonClick}
          isCodeVerified={onboarding.isCodeVerified}
          isNameError={isNameError}
        />
      </div>
    </form>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <OnboardingContent />
    </Suspense>
  );
}
