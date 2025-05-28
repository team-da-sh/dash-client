import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/onboarding/components/OnboardingHeader/onboardingHeaderStyle.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcHeaderLogoSmallBlack from '@/shared/assets/svg/IcHeaderLogoSmallBlack';

const OnboardingHeader = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(ROUTES_CONFIG.home.path);
  };

  return (
    <header className={styles.onboardingHeaderStyle}>
      <button onClick={handleLogoClick} aria-label="홈으로 이동">
        <IcHeaderLogoSmallBlack width={58} height={20} />
      </button>
    </header>
  );
};

export default OnboardingHeader;
