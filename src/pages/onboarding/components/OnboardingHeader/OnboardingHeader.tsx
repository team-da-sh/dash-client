import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/onboarding/components/OnboardingHeader/onboardingHeaderStyle.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcBackBlack from '@/shared/assets/svg/IcBack';
import IcHeaderLogoSmallBlack from '@/shared/assets/svg/IcHeaderLogoSmallBlack';

interface OnboardingHeaderPropTypes {
  step: number;
}

const OnboardingHeader = ({ step }: OnboardingHeaderPropTypes) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(ROUTES_CONFIG.home.path);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <header className={styles.onboardingHeaderStyle}>
      {step !== 2 && (
        <button onClick={handleBackClick} aria-label="뒤로 이동">
          <IcBackBlack width={24} height={24} className={styles.svgStyle} />
        </button>
      )}
      <button onClick={handleLogoClick} aria-label="홈으로 이동">
        <IcHeaderLogoSmallBlack width={58} height={20} className={styles.svgStyle} />
      </button>
    </header>
  );
};

export default OnboardingHeader;
