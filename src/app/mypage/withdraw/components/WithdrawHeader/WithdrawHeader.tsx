'use client';

import { useRouter } from 'next/navigation';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import * as styles from '@/app/mypage/withdraw/components/WithdrawHeader/withdrawHeader.css';
import IcBackBlack from '@/shared/assets/svg/IcBack';
import IcHeaderLogoSmallBlack from '@/shared/assets/svg/IcHeaderLogoSmallBlack';

interface WithdrawHeaderPropTypes {
  step: number;
  onBack?: () => void;
}

const WithdrawHeader = ({ step, onBack }: WithdrawHeaderPropTypes) => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push(ROUTES_CONFIG.home.path);
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <header className={styles.withdrawHeaderStyle}>
      {step !== 3 && (
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

export default WithdrawHeader;
