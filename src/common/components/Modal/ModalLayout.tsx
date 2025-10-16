import type { PropsWithChildren } from 'react';
import { layoutStyle } from '@/common/components/Modal/modal.css';

interface ModalLayoutProps extends PropsWithChildren {
  onClose: () => void;
}

const ModalLayout = ({ onClose, children }: ModalLayoutProps) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      className={layoutStyle}>
      {children}
    </div>
  );
};

export default ModalLayout;
