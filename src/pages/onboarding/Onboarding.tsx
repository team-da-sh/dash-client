import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePostOnboard } from '@/pages/onboarding/apis/queries';
import FinishStep from '@/pages/onboarding/components/FinishStep/FinishStep';
import InfoStep from '@/pages/onboarding/components/InfoStep/InfoStep';
import OnboardingHeader from '@/pages/onboarding/components/OnboardingHeader/OnboardingHeader';
import SubmitButton from '@/pages/onboarding/components/SubmitButton/SubmitButton';
import { FINAL_ONBOARDING_STEP } from '@/pages/onboarding/constants';
import * as styles from '@/pages/onboarding/onboarding.css';
import type { OnboardInfoTypes, OnboardingState } from '@/pages/onboarding/types/onboardInfoTypes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { notify } from '@/shared/components/Toast/Toast';
import { PHONE_AUTH_MESSAGES } from '@/shared/constants/userInfo';
import { useFunnel } from '@/shared/hooks/useFunnel';
import { setStorage } from '@/shared/utils/handleToken';

const Onboarding = () => {
  const location = useLocation();
  const tokenRef = useRef(location.state);
  const { Funnel, Step, setStep, currentStep } = useFunnel(FINAL_ONBOARDING_STEP, ROUTES_CONFIG.home.path);

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

    onboardMutate(
      {
        ...onboarding.info,
        accessToken: tokenRef.current.accessToken,
      },
      {
        onSuccess: () => {
          setStorage(tokenRef.current.accessToken, tokenRef.current.refreshToken);
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
              accessToken={tokenRef.current.accessToken}
              isNameError={isNameError}
              handleNameErrorChange={handleNameErrorChange}
            />
          </Step>
          <Step name="2">
            <FinishStep name={onboarding.info.name} />
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
};

export default Onboarding;
