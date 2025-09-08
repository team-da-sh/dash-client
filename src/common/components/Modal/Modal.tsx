import type { ReactElement } from 'react';
import ModalLayout from '@/common/components/Modal/ModalLayout';
import {
  contentStyle,
  containerStyle,
  buttonWrapperStyle,
  closeButtonStyle,
} from '@/common/components/Modal/modal.css';
import BoxButton from '@/shared/components/BoxButton/BoxButton';

interface DialogProps {
  content: ReactElement | string;
  type: 'default' | 'single';
  onClose: () => void;
  onClickHandler?: () => void;
}

const Modal = ({ content, type, onClose, onClickHandler }: DialogProps) => {
  const handleCheckButtonClick = () => {
    if (onClickHandler) {
      onClickHandler();
    }

    onClose();
  };

  return (
    <ModalLayout onClose={onClose}>
      <div className={containerStyle} onClick={(e) => e.stopPropagation()}>
        <div className={contentStyle}>{content}</div>
        <div className={buttonWrapperStyle}>
          {type === 'default' && (
            <>
              <button onClick={onClose} className={closeButtonStyle}>
                취소
              </button>
              <BoxButton variant="primary" onClick={handleCheckButtonClick}>
                확인
              </BoxButton>
            </>
          )}
          {type === 'single' && (
            <BoxButton variant="primary" onClick={handleCheckButtonClick}>
              확인
            </BoxButton>
          )}
        </div>
      </div>
    </ModalLayout>
  );
};

export default Modal;
