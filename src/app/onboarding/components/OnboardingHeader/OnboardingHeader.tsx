'use client';

import { useRouter } from 'next/navigation';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import * as styles from '@/app/onboarding/components/OnboardingHeader/onboardingHeaderStyle.css';
import IcBackBlack from '@/shared/assets/svg/IcBack';
import IcHeaderLogoSmallBlack from '@/shared/assets/svg/IcHeaderLogoSmallBlack';

interface OnboardingHeaderPropTypes {
  step: number;
}

const OnboardingHeader = ({ step }: OnboardingHeaderPropTypes) => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push(ROUTES_CONFIG.home.path);
  };

  const handleBackClick = () => {
    router.push(ROUTES_CONFIG.login.path);
  };

  return (
    <header className={styles.onboardingHeaderStyle}>
      {step !== 2 && (
        <button type="button" onClick={handleBackClick} aria-label="로그인으로 이동">
          <IcBackBlack width={24} height={24} className={styles.svgStyle} />
        </button>
      )}
      <button type="button" onClick={handleLogoClick} aria-label="홈으로 이동">
        <IcHeaderLogoSmallBlack width={58} height={20} className={styles.svgStyle} />
      </button>
    </header>
  );
};

export default OnboardingHeader;
