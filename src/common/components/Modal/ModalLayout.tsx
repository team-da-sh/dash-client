import { useEffect, type PropsWithChildren } from 'react';
import { layoutStyle } from '@/common/components/Modal/modal.css';
import { useModalStore } from '@/common/stores/modal';

const ModalLayout = ({ children }: PropsWithChildren) => {
  const { closeLastModal } = useModalStore();

  // esc 키 누르면 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLastModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeLastModal]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      role="button"
      tabIndex={0}
      aria-label="모달 닫기"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.stopPropagation();
          closeLastModal();
        }
      }}
      className={layoutStyle}>
      {children}
    </div>
  );
};

export default ModalLayout;
