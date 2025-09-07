import { FINAL_ONBOARDING_STEP } from '@/pages/onboarding/constants';
import type { OnboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { validateName, validatePhoneNumber } from '@/pages/onboarding/utils/validate';
import BoxButton from '@/shared/components/BoxButton/BoxButton';

interface SubmitButtonPropTypes {
  currentStep: number;
  info: OnboardInfoTypes;
  onNextButtonClick: () => void;
  isCodeVerified: boolean; // 추가
}

const SubmitButton = ({ currentStep, info, onNextButtonClick, isCodeVerified }: SubmitButtonPropTypes) => {
  const isButtonDisabled = (step: number) => {
    switch (step) {
      case 1:
        // 인증까지 완료되어야 버튼 활성화
        return !(validateName(info.name) && validatePhoneNumber(info.phoneNumber) && isCodeVerified);
      case 2:
        return false;
      default:
        return true;
    }
  };

  return (
    <BoxButton
      variant="primary"
      onClick={currentStep === FINAL_ONBOARDING_STEP - 1 ? undefined : onNextButtonClick}
      isDisabled={isButtonDisabled(currentStep)}
      type={currentStep === FINAL_ONBOARDING_STEP - 1 ? 'submit' : 'button'}>
      {currentStep === FINAL_ONBOARDING_STEP ? '홈으로 이동' : '다음'}
    </BoxButton>
  );
};

export default SubmitButton;
