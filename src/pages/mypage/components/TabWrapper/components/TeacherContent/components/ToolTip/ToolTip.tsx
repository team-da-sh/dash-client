import { useEffect, type ReactNode } from 'react';
import * as styles from '@/pages/mypage/components/TabWrapper/components/TeacherContent/components/ToolTip/tooltip.css';
import { VISIT_KEY } from '@/pages/mypage/constants/storageKey';
import { setUser } from '@/pages/mypage/utils/storage';
import IcTriangle from '@/shared/assets/svg/IcTriangle';
import IcXBlack from '@/shared/assets/svg/IcXBlack';
import Text from '@/shared/components/Text/Text';

interface ToolTipPropTypes {
  title: string;
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}
const ToolTip = ({ title, children, onClose, isOpen }: ToolTipPropTypes) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setUser(VISIT_KEY, true);
    onClose();
  };

  return (
    <div className={styles.layoutStyle}>
      <div className={styles.arrowStyle}>
        <IcTriangle width={12} height={12} />
      </div>
      <div className={styles.topStyle}>
        <Text tag="b1_sb_long">{title}</Text>
        <button className={styles.buttonStyle} type="button" onClick={handleClose}>
          <IcXBlack width={24} height={24} />
        </button>
      </div>
      <Text tag="b2_m_long" color="gray9">
        {children}
      </Text>
    </div>
  );
};

export default ToolTip;
