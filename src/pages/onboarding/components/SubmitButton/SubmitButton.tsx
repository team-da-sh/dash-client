import { FINAL_ONBOARDING_STEP } from '@/pages/onboarding/constants';
import type { OnboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { validatePhoneNumber } from '@/pages/onboarding/utils/validate';
import BoxButton from '@/shared/components/BoxButton/BoxButton';

interface SubmitButtonPropTypes {
  currentStep: number;
  info: OnboardInfoTypes;
  onNextButtonClick: () => void;
  isCodeVerified: boolean;
  isNameError: boolean;
}

const SubmitButton = ({ currentStep, info, onNextButtonClick, isCodeVerified, isNameError }: SubmitButtonPropTypes) => {
  const isButtonDisabled = (step: number) => {
    switch (step) {
      case 1:
        return !(!isNameError && validatePhoneNumber(info.phoneNumber) && isCodeVerified);
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
