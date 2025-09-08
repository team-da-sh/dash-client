import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import * as styles from '@/shared/components/BankBottomSheet/bankBottomSheet.css';
import Text from '@/shared/components/Text/Text';
import useOutsideClick from '@/shared/hooks/useOutsideClick';
import type { BankListResponseTypes } from '@/shared/types/api';

interface BankBottomSheetPropTypes {
  isOpen: boolean;
  onClose: () => void;
  banks: BankListResponseTypes[];
  handleBankSelect: (bankId: number, bankName: string, imageUrl: string) => void;
}

const BankBottomSheet = ({ isOpen, onClose, banks, handleBankSelect }: BankBottomSheetPropTypes) => {
  const ref = useOutsideClick(onClose);
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
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className={styles.containerStyle}
            ref={ref}
            initial={{ y: '100%' }}
            animate={{ y: 143 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            drag={isScrollAtTop ? 'y' : false}
            style={{
              cursor: isScrollAtTop ? 'grab' : 'default',
            }}
            dragConstraints={{ top: 0 }}
            dragElastic={0.05}
            onDragEnd={(_, info) => {
              if (info.offset.y > 0) {
                onClose();
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
              {banks.map(({ bankId, bankName, bankImageUrl }) => (
                <li
                  key={bankId}
                  className={styles.ListItemStyle}
                  onClick={() => {
                    handleBankSelect(bankId, bankName, bankImageUrl);
                    onClose();
                  }}>
                  <img src={bankImageUrl} className={styles.tempImageStyle} alt={bankName} />
                  <Text tag="b3_m">{bankName}</Text>
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
