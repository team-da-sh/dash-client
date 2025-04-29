import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePostOnboard } from '@/pages/onboarding/apis/queries';
import FinishStep from '@/pages/onboarding/components/FinishStep/FinishStep';
import InfoStep from '@/pages/onboarding/components/InfoStep/InfoStep';
import ProfileStep from '@/pages/onboarding/components/ProfileStep/ProfileStep';
import { MAX_ONBOARDING_STEP } from '@/pages/onboarding/constants';
import { bodyWrapperStyle, containerStyle, footerWrapperStyle } from '@/pages/onboarding/onboarding.css';
import type { onboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { validateName, validatePhoneNumber } from '@/pages/onboarding/utils/validate';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import { useFunnel } from '@/shared/hooks/useFunnel';
import { setStorage } from '@/shared/utils/handleToken';
import defaultProfile from '/images/image_profile_basic.png';

const Onboarding = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(3, ROUTES_CONFIG.home.path);

  const [info, setInfo] = useState<onboardInfoTypes>({
    name: '',
    phoneNumber: '',
    nickname: '',
    profileImageUrl: defaultProfile,
  });

  const [isNicknameError, setIsNicknameError] = useState(false);

  const { mutate: onboardMutate } = usePostOnboard();

  // 토큰 ref로 전역변수로 저장
  const location = useLocation();
  const tokenRef = useRef(location.state);

  const handleInfoChange = <K extends keyof onboardInfoTypes>(key: K, value: onboardInfoTypes[K]) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };
  const changeNicknameError = (isError: boolean) => {
    setIsNicknameError(isError);
  };

  const handleNextButtonClick = () => {
    setStep(1);
  };

  const handleOnboardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onboardMutate(
      {
        ...info,
        accessToken: tokenRef.current.accessToken,
      },
      {
        onSuccess: ({ response }) => {
          // 온보딩 성공시 로컬스토리지에 토큰 등록
          if (response.status === 200) {
            setStorage(tokenRef.current.accessToken, tokenRef.current.refreshToken);
            setStep(1);
          }
        },
      }
    );
  };

  // 다음 버튼 활성화 판단
  const buttonActive = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return !(validateName(info.name) && validatePhoneNumber(info.phoneNumber));
      case 2:
        return !info.nickname || isNicknameError;
      case 3:
        return false;
      default:
        return true;
    }
  };

  return (
    <form className={containerStyle} onSubmit={handleOnboardSubmit}>
      <div className={bodyWrapperStyle}>
        <Funnel>
          <Step name="1">
            <InfoStep name={info.name} phoneNumber={info.phoneNumber} onInfoChange={handleInfoChange} />
          </Step>
          <Step name="2">
            <ProfileStep
              name={info.name}
              nickname={info.nickname}
              isNicknameError={isNicknameError}
              changeIsNicknameError={changeNicknameError}
              profileImageUrl={info.profileImageUrl}
              onInfoChange={handleInfoChange}
              setInfo={setInfo}
            />
          </Step>
          <Step name="3">
            <FinishStep nickname={info.nickname} />
          </Step>
        </Funnel>
      </div>

      <div className={footerWrapperStyle}>
        <BoxButton
          variant="primary"
          onClick={currentStep === MAX_ONBOARDING_STEP - 1 ? () => {} : handleNextButtonClick}
          isDisabled={buttonActive(currentStep)}
          type={currentStep === MAX_ONBOARDING_STEP - 1 ? 'submit' : 'button'}>
          {currentStep === MAX_ONBOARDING_STEP ? '홈으로 이동' : '다음'}
        </BoxButton>
      </div>
    </form>
  );
};

export default Onboarding;
