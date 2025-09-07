import { AnimatePresence, motion } from 'motion/react';
import * as styles from '@/pages/editProfiles/components/BottomSheet/bottomSheet.css';
import IcCloseBlack24 from '@/shared/assets/svg/IcCloseBlack24';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

interface BottomSheetPropTypes {
  onClose: () => void;
  onSelectImage: () => void;
  onDeleteImage: () => void;
  isVisible: boolean;
}

const BottomSheet = ({ onClose, onSelectImage, onDeleteImage, isVisible }: BottomSheetPropTypes) => {
  if (isVisible) document.body.style.overflow = 'hidden';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.overlayStyle}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          onClick={onClose}>
          <motion.section
            className={styles.container}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}>
            <div className={styles.titleWrapper}>
              <Head level="h2" tag="h6_sb">
                프로필 이미지
              </Head>
              <button type="button" onClick={onClose} aria-label="닫기">
                <IcCloseBlack24 width={24} height={24} />
              </button>
            </div>

            <div className={styles.textWrapper}>
              <button onClick={onSelectImage} type="button">
                <Text tag="b2_m" color="gray9" className={styles.text}>
                  앨범에서 사진 선택
                </Text>
              </button>
              <button onClick={onDeleteImage} type="button">
                <Text tag="b2_m" color="alert1" className={styles.text}>
                  현재 사진 삭제
                </Text>
              </button>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;
