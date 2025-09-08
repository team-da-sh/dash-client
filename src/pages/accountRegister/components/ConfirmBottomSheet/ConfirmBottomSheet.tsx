import { AnimatePresence, motion } from 'motion/react';
import * as styles from '@/pages/accountRegister/components/ConfirmBottomSheet/confirmBottomSheet.css';
import SvgIcClear from '@/shared/assets/svg/IcClear';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import useOutsideClick from '@/shared/hooks/useOutsideClick';
import { vars } from '@/shared/styles/theme.css';

interface ConfirmBottomSheetPropTypes {
  isOpen: boolean;
  onClose: () => void;
  depositor: string;
  bank: string;
  accountNumber: string;
}

const ConfirmBottomSheet = ({ isOpen, onClose, depositor, bank, accountNumber }: ConfirmBottomSheetPropTypes) => {
  const ref = useOutsideClick(onClose);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlayStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}>
          <motion.div
            className={styles.containerStyle}
            ref={ref}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}>
            <div className={styles.topContainerStyle}>
              <SvgIcClear width={'4.4rem'} height={'4.4rem'} color={vars.colors.main03} />
              <div className={styles.titleStyle}>
                <Head level="h1" tag="h5_sb">
                  입력하신 내용이 맞나요?
                </Head>
                <div className={styles.subTitleStyle}>
                  <Text tag="b2_m_long" color="gray7">
                    수강생이 강사님의 계좌로 직접 입금해요
                  </Text>
                  <Text tag="b2_m_long" color="gray7">
                    입금 오류 방지를 위해 한 번 더 확인해 주세요
                  </Text>
                </div>
              </div>
            </div>

            <div className={styles.infoContainerStyle}>
              <div className={styles.infoRowStyle}>
                <Text tag="b2_m_long" color="gray6" className={styles.leftLabelStyle}>
                  예금주
                </Text>
                <Text tag="b2_m_long" className={styles.ellipsisStyle}>
                  {depositor}
                </Text>
              </div>
              <div className={styles.infoRowStyle}>
                <Text tag="b2_m_long" color="gray6" className={styles.leftLabelStyle}>
                  계좌번호
                </Text>

                <div className={styles.accountNumberStyle}>
                  <Text tag="b2_m_long" className={styles.noWrapStyle}>
                    {bank}
                  </Text>
                  <Text tag="b2_m_long" className={styles.ellipsisStyle}>
                    {accountNumber}
                  </Text>
                </div>
              </div>
            </div>

            <div className={styles.buttonContainerStyle}>
              <BoxButton type="button" variant="secondary" className={styles.secondaryButtonStyle} onClick={onClose}>
                다시 입력하기
              </BoxButton>
              <BoxButton type="submit" className={styles.primaryButtonStyle}>
                등록하기
              </BoxButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmBottomSheet;
