import type { ReactElement } from 'react';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import FocusTrap from '@/common/components/FocusTrap/FocusTrap';
import {
  contentStyle,
  containerStyle,
  containerNoGapStyle,
  buttonWrapperStyle,
  closeButtonStyle,
  descriptionStyle,
} from '@/common/components/Modal/modal.css';
import { vars } from '@/shared/styles/theme.css';

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
    <FocusTrap>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <dialog
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={description ? containerNoGapStyle : containerStyle}>
        <div className={contentStyle}>{content}</div>
        {description && <div className={descriptionStyle}>{description}</div>}
        <div className={buttonWrapperStyle}>
          {type === 'default' && (
            <>
              <button onClick={handleLeftButtonClick} className={closeButtonStyle}>
                {leftButtonText}
              </button>
              <BoxButton
                variant="primary"
                onClick={handleRightButtonClick}
                style={{ backgroundColor: vars.colors.main03 }}>
                {rightButtonText}
              </BoxButton>
            </>
          )}
          {type === 'single' && (
            <BoxButton
              variant="primary"
              onClick={handleCheckButtonClick}
              style={{ backgroundColor: vars.colors.main03 }}>
              {rightButtonText}
            </BoxButton>
          )}
        </div>
      </dialog>
    </FocusTrap>
  );
};

export default Modal;
