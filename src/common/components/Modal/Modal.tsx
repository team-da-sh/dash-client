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
  cancelText?: string;
  confirmText?: string;
}

const Modal = ({ content, type, onClose, onClickHandler, cancelText = '취소', confirmText = '확인' }: DialogProps) => {
  const handleCheckButtonClick = () => {
    if (onClickHandler) {
      onClickHandler();
    }

    onClose();
  };

  return (
    <ModalLayout onClose={onClose}>
      <div className={containerStyle}>
        <div className={contentStyle}>{content}</div>
        <div className={buttonWrapperStyle}>
          {type === 'default' && (
            <>
              <button onClick={onClose} className={closeButtonStyle}>
                {cancelText}
              </button>
              <BoxButton variant="primary" onClick={handleCheckButtonClick}>
                {confirmText}
              </BoxButton>
            </>
          )}
          {type === 'single' && (
            <BoxButton variant="primary" onClick={handleCheckButtonClick}>
              {confirmText}
            </BoxButton>
          )}
        </div>
      </div>
    </ModalLayout>
  );
};

export default Modal;
