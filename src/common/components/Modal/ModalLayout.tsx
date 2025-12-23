import type { PropsWithChildren } from 'react';
import { layoutStyle } from '@/common/components/Modal/modal.css';

interface ModalLayoutProps extends PropsWithChildren {
  onClose: () => void;
}

const ModalLayout = ({ onClose, children }: ModalLayoutProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="모달 닫기"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.stopPropagation();
          onClose();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          e.stopPropagation();
          onClose();
        }
      }}
      className={layoutStyle}>
      {children}
    </div>
  );
};

export default ModalLayout;
