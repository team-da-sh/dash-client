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
  leftButtonText?: string;
  rightButtonText?: string;
}

const Modal = ({
  content,
  type,
  onClose,
  onClickHandler,
  leftButtonText = '취소',
  rightButtonText = '확인',
}: DialogProps) => {
  const handleCheckButtonClick = () => {
    if (onClickHandler) {
      onClickHandler();
    }

    onClose();
  };

  return (
    <ModalLayout onClose={onClose}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div onClick={(e) => e.stopPropagation()} className={containerStyle}>
        <div className={contentStyle}>{content}</div>
        <div className={buttonWrapperStyle}>
          {type === 'default' && (
            <>
              <button onClick={onClose} className={closeButtonStyle}>
                {leftButtonText}
              </button>
              <BoxButton variant="primary" onClick={handleCheckButtonClick}>
                {rightButtonText}
              </BoxButton>
            </>
          )}
          {type === 'single' && (
            <BoxButton variant="primary" onClick={handleCheckButtonClick}>
              {rightButtonText}
            </BoxButton>
          )}
        </div>
      </div>
    </ModalLayout>
  );
};

export default Modal;
