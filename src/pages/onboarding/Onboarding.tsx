import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePostOnboard } from '@/pages/onboarding/apis/queries';
import FinishStep from '@/pages/onboarding/components/FinishStep/FinishStep';
import InfoStep from '@/pages/onboarding/components/InfoStep/InfoStep';
import OnboardingHeader from '@/pages/onboarding/components/OnboardingHeader/OnboardingHeader';
import SubmitButton from '@/pages/onboarding/components/SubmitButton/SubmitButton';
import { FINAL_ONBOARDING_STEP } from '@/pages/onboarding/constants';
import { bodyWrapperStyle, containerStyle, footerWrapperStyle } from '@/pages/onboarding/onboarding.css';
import type { onboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Header from '@/shared/components/Header/Header';
import { useFunnel } from '@/shared/hooks/useFunnel';
import { setStorage } from '@/shared/utils/handleToken';

const Onboarding = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(FINAL_ONBOARDING_STEP, ROUTES_CONFIG.home.path);

  const [info, setInfo] = useState<onboardInfoTypes>({
    name: '',
    phoneNumber: '',
    verificationCode: '',
  });

  const [isCodeVerified, setIsCodeVerified] = useState(false);

  const handleCodeVerifiedChange = (verified: boolean) => {
    setIsCodeVerified(verified);
  };

  const { mutate: onboardMutate } = usePostOnboard();

  const location = useLocation();
  const tokenRef = useRef(location.state);

  const handleInfoChange = <K extends keyof onboardInfoTypes>(key: K, value: onboardInfoTypes[K]) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  const handleNextButtonClick = () => {
    setStep(1);
  };

  const handleOnboardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isCodeVerified) {
      return;
    }

    onboardMutate(
      {
        ...info,
        accessToken: tokenRef.current.accessToken,
      },
      {
        onSuccess: ({ response }) => {
          if (response.status === 200) {
            setStorage(tokenRef.current.accessToken, tokenRef.current.refreshToken);
            setStep(1);
          }
        },
      }
    );
  };

  return (
    <form className={containerStyle} onSubmit={handleOnboardSubmit}>
      {currentStep === FINAL_ONBOARDING_STEP ? <Header /> : <OnboardingHeader />}
      <div className={bodyWrapperStyle}>
        <Funnel>
          <Step name="1">
            <InfoStep
              name={info.name}
              phoneNumber={info.phoneNumber}
              verificationCode={info.verificationCode}
              onInfoChange={handleInfoChange}
              setIsCodeVerified={handleCodeVerifiedChange}
            />
          </Step>
          <Step name="2">
            <FinishStep name={info.name} />
          </Step>
        </Funnel>
      </div>

      <div className={footerWrapperStyle}>
        <SubmitButton
          currentStep={currentStep}
          info={info}
          onNextButtonClick={handleNextButtonClick}
          isCodeVerified={isCodeVerified}
        />
      </div>
    </form>
  );
};

export default Onboarding;
