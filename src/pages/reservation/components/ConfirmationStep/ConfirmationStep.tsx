import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ConfirmationBottomSheet from '@/pages/reservation/components/ConfirmationBottomSheet/ConfirmationBottomSheet';
import * as styles from '@/pages/reservation/components/ConfirmationStep/confirmationStep.css';
import SvgIcCopy from '@/shared/assets/svg/IcCopy';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ConfirmationStepPropTypes {
  onNext: () => void;
  depositor?: string;
  bankName?: string;
  accountNumber?: string;
  price?: number;
}

const ConfirmationStep = ({
  onNext,
  depositor = '주은혜',
  bankName = '신한',
  accountNumber = '4879899192818',
  price = 350000,
}: ConfirmationStepPropTypes) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const STORAGE_KEY = `bottomsheet-closed-${currentPath}`;

  const [isBottomSheetOpen, setBottomSheetOpen] = useState(() => {
    const closed = sessionStorage.getItem(STORAGE_KEY);
    return closed !== 'true';
  });

  const handleCloseBottomSheet = () => {
    setBottomSheetOpen(false);
    sessionStorage.setItem(STORAGE_KEY, 'true');
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(accountNumber);
    notify({ message: '클립보드에 계좌번호가 복사되었어요', icon: 'success', bottomGap: 'large' });
  };

  const formattedPrice = `${price.toLocaleString()}원`;

  return (
    <main>
      <ConfirmationBottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet} />

      <div className={styles.mainContainer}>
        <Head level="h2" tag="h3_sb" color="black">
          입금안내
        </Head>

        <Text tag="b2_m" color="gray7" className={styles.gapBetweenHeadAndNote}>
          신청자명과 동일한 이름으로 입금해 주세요
        </Text>

        <Head level="h5" tag="h6_sb" color="black" className={styles.gapBeforeSection}>
          입금정보
        </Head>

        <section className={styles.confirmSection}>
          <div className={styles.rowItem}>
            <Text tag="b2_m_long" color="gray6" className={styles.rowItemTitle}>
              예금주
            </Text>
            <Text tag="b2_m_long" color="black" className={styles.breakWord}>
              {depositor}
            </Text>
          </div>
          <div className={styles.rowItem}>
            <Text tag="b2_m_long" color="gray6" className={styles.rowItemTitle}>
              계좌번호
            </Text>
            <div className={sprinkles({ display: 'flex', gap: 6, alignItems: 'center' })}>
              <Text tag="b2_m_long" color="black">
                {bankName}
              </Text>
              <Text tag="b2_m_long" color="black" className={styles.underline}>
                {accountNumber}
              </Text>
              <button onClick={handleCopy} className={styles.copyButtonStyle} aria-label="계좌번호 복사">
                <SvgIcCopy width={16} height={16} />
              </button>
            </div>
          </div>
          <div className={styles.rowItem}>
            <Text tag="b2_m_long" color="gray6" className={styles.rowItemTitle}>
              수강료
            </Text>
            <Text tag="b2_m_long" color="black">
              {formattedPrice}
            </Text>
          </div>
        </section>
      </div>

      <div className={styles.confirmButtonContainer}>
        <BoxButton onClick={onNext}>확인</BoxButton>
      </div>
    </main>
  );
};

export default ConfirmationStep;
