import { useEffect, type PropsWithChildren } from 'react';
import { layoutStyle } from '@/common/components/Modal/modal.css';

interface ModalLayoutProps extends PropsWithChildren {
  onClose: () => void;
}

const ModalLayout = ({ onClose, children }: ModalLayoutProps) => {
  // esc 키 누르면 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

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
