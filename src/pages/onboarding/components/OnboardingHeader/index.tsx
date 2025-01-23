import { useNavigate } from 'react-router-dom';
import { onboardingHeaderStyle } from '@/pages/onboarding/components/OnboardingHeader/index.css';
import Header from '@/components/Header';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

interface OnboardingHeaderProps {
  currentStep: number;
  onPrevButtonClick: () => void;
}

const OnboardingHeader = ({ currentStep, onPrevButtonClick }: OnboardingHeaderProps) => {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate(ROUTES_CONFIG.home.path);
  };

  return (
    <Header.Root className={onboardingHeaderStyle}>
      {currentStep < 5 && <Header.BackIcon onFunnelBackClick={onPrevButtonClick} />}
      <Header.CloseIcon onClick={handleCloseClick} />
    </Header.Root>
  );
};

export default OnboardingHeader;
