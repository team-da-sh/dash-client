import { FINAL_ONBOARDING_STEP } from '@/pages/onboarding/constants';
import type { onboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { validateName, validatePhoneNumber } from '@/pages/onboarding/utils/validate';
import BoxButton from '@/shared/components/BoxButton/BoxButton';

interface SubmitButtonPropTypes {
  currentStep: number;
  info: onboardInfoTypes;
  onNextButtonClick: () => void;
}

const SubmitButton = ({ currentStep, info, onNextButtonClick}: SubmitButtonPropTypes) => {
  const isButtonDisabled = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return !(validateName(info.name) && validatePhoneNumber(info.phoneNumber));
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
