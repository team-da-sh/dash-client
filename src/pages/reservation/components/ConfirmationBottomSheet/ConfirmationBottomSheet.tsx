import clsx from 'clsx';
import { useState } from 'react';
import * as styles from '@/pages/reservation/components/ConfirmationBottomSheet/confirmationBottomSheet.css';
import SvgIcClearMain0420 from '@/shared/assets/svg/IcClearMain0420';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

interface ConfirmationBottomSheetPropTypes {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmationBottomSheet = ({ isOpen, onClose }: ConfirmationBottomSheetPropTypes) => {
  const [shouldRender, setShouldRender] = useState(true);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setShouldRender(false);
    }
  };

  if (!shouldRender) return null;

  return (
    <div className={styles.overlayStyle} role="presentation">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmation-title"
        className={clsx(styles.containerStyle, !isOpen && styles.slideDownStyle)}
        onAnimationEnd={handleAnimationEnd}>
        <header className={styles.topContainerStyle}>
          <SvgIcClearMain0420 width="4.4rem" height="4.4rem" />
          <div className={styles.titleStyle}>
            <Head id="confirmation-title" level="h3" tag="h5_sb">
              신청 완료!
            </Head>
            <div className={styles.subTitleStyle}>
              <Text tag="b2_m_long" color="gray7">
                클래스 수강 확정은 입금내역 확인 후 진행됩니다
              </Text>
              <Text tag="b2_m_long" color="gray7" className={styles.subTitleStyle}>
                다음의 입금 안내를 잘 확인해 주세요
              </Text>
            </div>
          </div>
        </header>

        <div className={styles.confirmButtonContainer}>
          <BoxButton type="button" onClick={onClose}>
            확인
          </BoxButton>
        </div>
      </section>
    </div>
  );
};

export default ConfirmationBottomSheet;
