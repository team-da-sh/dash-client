import { FINAL_ONBOARDING_STEP } from '@/pages/onboarding/constants';
import type { onboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { validateName, validatePhoneNumber } from '@/pages/onboarding/utils/validate';
import BoxButton from '@/shared/components/BoxButton/BoxButton';

interface SubmitButtonPropTypes {
  currentStep: number;
  info: onboardInfoTypes;
  onNextButtonClick: () => void;
  isNicknameError: boolean;
}

const SubmitButton = ({ currentStep, info, onNextButtonClick, isNicknameError }: SubmitButtonPropTypes) => {
  // 다음 버튼 활성화 판단
  const isButtonDisabled = (currentStep: number) => {
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
