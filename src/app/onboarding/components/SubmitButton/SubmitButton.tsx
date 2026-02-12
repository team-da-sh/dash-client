'use client';

import { FINAL_ONBOARDING_STEP } from '@/app/onboarding/constants';
import type { OnboardInfoTypes } from '@/app/onboarding/types/onboardInfoTypes';
import { validatePhoneNumber } from '@/app/onboarding/utils/validate';
import BoxButton from '@/common/components/BoxButton/BoxButton';

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
