import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import * as styles from '@/pages/accountRegister/components/BankBottomSheet/bankBottomSheet.css';
import Text from '@/shared/components/Text/Text';
import useOutsideClick from '@/shared/hooks/useOutsideClick';
import toss from '../img_bank.png';

interface BankBottomSheetPropTypes {
  isOpen: boolean;
  close: () => void;
}

const BankBottomSheet = ({ isOpen, close }: BankBottomSheetPropTypes) => {
  const ref = useOutsideClick(close);
  const scrollableListRef = useRef<HTMLUListElement>(null);

  const [isFullyOpened, setIsFullyOpened] = useState(false);
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);

  const handleScroll = () => {
    if (scrollableListRef.current) {
      const { scrollTop } = scrollableListRef.current;
      setIsScrollAtTop(scrollTop <= 0);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlayStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}></motion.div>

          <motion.div
            className={styles.containerStyle}
            ref={ref}
            initial={{ y: '100%' }}
            animate={{ y: 143 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            drag={isScrollAtTop ? 'y' : false}
            dragConstraints={{ top: 0 }}
            dragElastic={0.05}
            onDragEnd={(_, info) => {
              if (info.offset.y > 0) {
                close();
              }
            }}
            onUpdate={(latest) => {
              const y = (latest.y as number) || 0;
              setIsFullyOpened(y <= 0);
            }}>
            <div className={styles.IndicatorStyle} />
            <Text tag="h6_sb">은행 선택</Text>
            <ul
              onScroll={handleScroll}
              ref={scrollableListRef}
              className={clsx(styles.ListContainerStyle, isFullyOpened ? styles.scrollEnabled : styles.scrollDisabled)}>
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
              ].map((bank, index) => (
                <li key={index} className={styles.ListItemStyle}>
                  <img src={toss} className={styles.tempImageStyle} />
                  <Text tag="b3_m">{bank}</Text>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BankBottomSheet;
