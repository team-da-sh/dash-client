import { onboardingHeaderStyle } from '@/pages/onboarding/components/OnboardingHeader/index.css';
import Header from '@/components/Header';

interface OnboardingHeaderProps {
  currentStep: number;
  onPrevButtonClick: () => void;
}

const OnboardingHeader = ({ currentStep, onPrevButtonClick }: OnboardingHeaderProps) => {
  return (
    <Header.Root className={onboardingHeaderStyle}>
      {currentStep < 5 && <Header.BackIcon onFunnelBackClick={onPrevButtonClick} />}
      <Header.CloseIcon onClick={() => {}} />
    </Header.Root>
  );
};

export default OnboardingHeader;
