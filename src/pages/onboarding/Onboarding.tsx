import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { usePostOnboard } from '@/pages/onboarding/apis/queries';
import FinishStep from '@/pages/onboarding/components/FinishStep/FinishStep';
import InfoStep from '@/pages/onboarding/components/InfoStep/InfoStep';
import OnboardingHeader from '@/pages/onboarding/components/OnboardingHeader/OnboardingHeader';
import SubmitButton from '@/pages/onboarding/components/SubmitButton/SubmitButton';
import { FINAL_ONBOARDING_STEP } from '@/pages/onboarding/constants';
import * as styles from '@/pages/onboarding/onboarding.css';
import type { OnboardInfoTypes, OnboardingState } from '@/pages/onboarding/types/onboardInfoTypes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useFunnel } from '@/shared/hooks/useFunnel';

// import { setStorage } from '@/shared/utils/handleToken';

const Onboarding = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(FINAL_ONBOARDING_STEP, ROUTES_CONFIG.home.path);

  const initialState: OnboardingState = {
    info: { name: '', phoneNumber: '', verificationCode: '' },
    isCodeVerified: false,
    isSubmitting: false,
  };

  const [onboarding, setOnboarding] = useState<OnboardingState>(initialState);

  // const { mutate: onboardMutate } = usePostOnboard();

  const handleInfoChange = <K extends keyof OnboardInfoTypes>(key: K, value: OnboardInfoTypes[K]) => {
    setOnboarding((prev) => ({
      ...prev,
      info: { ...prev.info, [key]: value },
    }));
  };

  const handleCodeVerifiedChange = (verified: boolean) => {
    setOnboarding((prev) => ({ ...prev, isCodeVerified: verified }));
  };

  // 토큰 ref로 전역변수로 저장
  // const location = useLocation();
  // const tokenRef = useRef(location.state);

  const handleNextButtonClick = () => {
    setStep(1);
  };

  const handleOnboardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOnboarding((prev) => ({ ...prev, isSubmitting: true }));

    // TODO: API 연결 다시 필요
    // if (!isCodeVerified) {
    //   return;
    // }

    // onboardMutate(
    //   {
    //     ...info,
    //     accessToken: tokenRef.current.accessToken,
    //   },
    //   {
    //     onSuccess: ({ response }) => {
    //       if (response.status === 200) {
    //         setStorage(tokenRef.current.accessToken, tokenRef.current.refreshToken);
    //         setStep(1);
    //       }
    //     },
    //   }
    // );

    setStep(1);
    setOnboarding((prev) => ({ ...prev, isSubmitting: false }));
  };

  return (
    <form className={styles.containerStyle} onSubmit={handleOnboardSubmit}>
      <OnboardingHeader />
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
        />
      </div>
    </form>
  );
};

export default Onboarding;
