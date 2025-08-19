import { useState } from 'react';
import ConfirmationBottomSheet from '@/pages/reservation/components/ConfirmationBottomSheet/ConfirmationBottomSheet';
import * as styles from '@/pages/reservation/components/ConfirmationStep/confirmationStep.css';
import SvgIcCopy from '@/shared/assets/svg/IcCopy';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ConfirmationStepPropTypes {
  onNext: () => void;
  accountOwner?: string;
  bank?: string;
  accountNumber?: string;
  price?: number;
}

const ConfirmationStep = ({
  onNext,
  accountOwner = '주은혜',
  bank = '신한',
  accountNumber = '4879899192818',
  price = 350000,
}: ConfirmationStepPropTypes) => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(true);

  // 계좌 번호 복사 시 은행 포함
  const fullAccount = `${bank} ${accountNumber}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullAccount);
  };

  const formattedPrice = `${price.toLocaleString()}원`;

  return (
    <main>
      <ConfirmationBottomSheet isOpen={isBottomSheetOpen} onClose={() => setBottomSheetOpen(false)} />

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
            <Text tag="b2_m_long" color="black">
              {accountOwner}
            </Text>
          </div>
          <div className={styles.rowItem}>
            <Text tag="b2_m_long" color="gray6" className={styles.rowItemTitle}>
              계좌번호
            </Text>
            <div className={sprinkles({ display: 'flex', gap: 6, alignItems: 'center' })}>
              <Text tag="b2_m_long" color="black">
                {bank}
              </Text>
              <Text tag="b2_m_long" color="black">
                {accountNumber}
              </Text>
              <button onClick={handleCopy} className={styles.copyButtonStyle}>
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
