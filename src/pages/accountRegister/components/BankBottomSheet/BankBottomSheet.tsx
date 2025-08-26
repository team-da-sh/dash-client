import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import * as styles from '@/pages/accountRegister/components/BankBottomSheet/bankBottomSheet.css';
import Text from '@/shared/components/Text/Text';
import useOutsideClick from '@/shared/hooks/useOutsideClick';

interface BankBottomSheetPropTypes {
  isOpen: boolean;
  close: () => void;
}

const BankBottomSheet = ({ isOpen, close }: BankBottomSheetPropTypes) => {
  const ref = useOutsideClick(close);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
  });

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
            drag="y"
            dragConstraints={{ top: 0 }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}>
            <div className={styles.IndicatorStyle} />
            <Text tag="h6_sb">은행 선택</Text>

            <ul className={styles.ListContainerStyle}>
              {[
                '농협은행',
                '국민은행',
                '신한은행',
                '우리은행',
                '하나은행',
                '카카오뱅크',
                '토스뱅크',
                '케이뱅크',
                '농협은행',
                '국민은행',
                '신한은행',
                '우리은행',
                '하나은행',
                '우리은행',
                '하나은행',
                '카카오뱅크',
                '토스뱅크',
                '케이뱅크',
                '농협은행',
                '국민은행',
                '신한은행',
                '우리은행',
                '하나은행',
                '우리은행',
                '하나은행',
                '카카오뱅크',
                '토스뱅크',
                '케이뱅크',
                '농협은행',
                '국민은행',
                '신한은행',
                '우리은행',
                '하나은행',
                '카카오뱅크',
                '토스뱅크',
                '케이뱅크',
                '농협은행',
                '국민은행',
                '신한은행',
                '우리은행',
                '하나은행',
                '카카오뱅크',
                '토스뱅크',
                '케이뱅크',
              ].map((bank) => (
                <li key={bank} className={styles.ListItemStyle}>
                  <div className={styles.tempImageStyle}></div>
                  <Text tag="b3_m">{bank}</Text>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BankBottomSheet;
