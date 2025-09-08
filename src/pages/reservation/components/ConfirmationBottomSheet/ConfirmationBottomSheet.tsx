import { AnimatePresence, motion } from 'motion/react';
import * as styles from '@/pages/reservation/components/ConfirmationBottomSheet/confirmationBottomSheet.css';
import SvgIcClear from '@/shared/assets/svg/IcClear';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { vars } from '@/shared/styles/theme.css';

interface ConfirmationBottomSheetPropTypes {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmationBottomSheet = ({ isOpen, onClose }: ConfirmationBottomSheetPropTypes) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="confirmationBottomSheet"
          className={styles.overlayStyle}
          aria-hidden="true"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}>
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirmation-title"
            className={styles.containerStyle}
            initial={false}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}>
            <header className={styles.topContainerStyle}>
              <SvgIcClear width="4.4rem" height="4.4rem" color={vars.colors.main03} />
              <div className={styles.titleStyle}>
                <Head id="confirmation-title" level="h3" tag="h5_sb">
                  신청 완료!
                </Head>
                <div className={styles.subTitleStyle}>
                  <Text tag="b2_m_long" color="gray7">
                    클래스 수강 확정은 입금내역 확인 후 진행됩니다
                  </Text>
                  <Text tag="b2_m_long" color="gray7">
                    다음의 입금 안내를 잘 확인해 주세요
                  </Text>
                </div>
              </div>
            </header>

            <div className={styles.confirmButtonContainer}>
              <BoxButton type="button" onClick={onClose} aria-label="신청 완료 안내 닫기">
                확인
              </BoxButton>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationBottomSheet;
