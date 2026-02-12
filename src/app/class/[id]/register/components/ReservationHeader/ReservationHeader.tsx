'use client';

import { useRouter } from 'next/navigation';
import * as styles from '@/app/class/[id]/register/components/ReservationHeader/reservationHeader.css';
import IcBackBlack from '@/shared/assets/svg/IcBack';
import IcHeaderLogoSmallBlack from '@/shared/assets/svg/IcHeaderLogoSmallBlack';

interface ReservationHeaderPropTypes {
  step: number;
}

const ReservationHeader = ({ step }: ReservationHeaderPropTypes) => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <header className={styles.reservationHeaderStyle({ withBorder: step !== 1 })}>
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

export default ReservationHeader;
