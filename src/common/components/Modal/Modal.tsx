import type { ReactElement } from 'react';
import ModalLayout from '@/common/components/Modal/ModalLayout';
import {
  contentStyle,
  containerStyle,
  containerNoGapStyle,
  buttonWrapperStyle,
  closeButtonStyle,
  descriptionStyle,
} from '@/common/components/Modal/modal.css';
import BoxButton from '@/shared/components/BoxButton/BoxButton';

interface DialogProps {
  content: ReactElement | string;
  type: 'default' | 'single';
  onClose: () => void;
  onClickHandler?: () => void;
  onLeftClickHandler?: () => void;
  onRightClickHandler?: () => void;
  leftButtonText?: string;
  rightButtonText?: string;
  description?: string;
}

const Modal = ({
  content,
  type,
  onClose,
  onClickHandler,
  onLeftClickHandler,
  onRightClickHandler,
  leftButtonText = '취소',
  rightButtonText = '확인',
  description,
}: DialogProps) => {
  const handleCheckButtonClick = () => {
    if (onClickHandler) {
      onClickHandler();
    }
    onClose();
  };

  const handleLeftButtonClick = () => {
    if (onLeftClickHandler) {
      onLeftClickHandler();
    } else {
      onClose();
    }
  };

  const handleRightButtonClick = () => {
    if (onRightClickHandler) {
      onRightClickHandler();
    } else if (onClickHandler) {
      // 구버전 호환
      onClickHandler();
    }
    onClose();
  };

  return (
    <ModalLayout onClose={onClose}>
      <div className={description ? containerNoGapStyle : containerStyle}>
        <div className={contentStyle}>{content}</div>
        {description && <div className={descriptionStyle}>{description}</div>}
        <div className={buttonWrapperStyle}>
          {type === 'default' && (
            <>
              <button onClick={handleLeftButtonClick} className={closeButtonStyle}>
                {leftButtonText}
              </button>
              <BoxButton variant="primary03" onClick={handleRightButtonClick}>
                {rightButtonText}
              </BoxButton>
            </>
          )}
          {type === 'single' && (
            <BoxButton variant="primary03" onClick={handleCheckButtonClick}>
              {rightButtonText}
            </BoxButton>
          )}
        </div>
      </div>
    </ModalLayout>
  );
};

export default Modal;
