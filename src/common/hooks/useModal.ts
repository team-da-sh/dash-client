import { useId } from 'react';
import useOverlay from '@/common/hooks/useOverlay';
import { useModalStore } from '@/common/stores/modal';

/**
 * `useModal` 훅은 모달의 상태를 관리하고, 모달을 열거나 닫는 기능을 제공합니다.
 * 이 훅은 모달을 열 때 해당 모달을 전역 `modalStore`에 추가하고,
 * 닫을 때 해당 모달을 `modalStore`에서 제거합니다.
 *
 * @param {React.FC} modal - 열고 닫을 모달 컴포넌트를 받는 파라미터입니다.
 *
 * @returns {Object} - 훅의 반환 값은 모달의 상태와 모달을 여는/닫는 함수를 포함합니다.
 * @returns {boolean} isOpen - 모달이 열려 있는지 여부를 나타내는 상태입니다.
 * @returns {Function} openModal - 모달을 여는 함수입니다.
 * @returns {Function} closeModal - 모달을 닫는 함수입니다.
 *
 * @example
 * const { isOpen, openModal, closeModal } = useModal(<Modal onClose={closeModal}/>);
 *
 * // 모달을 열고 싶을 때
 * openModal();
 *
 * // 모달을 닫고 싶을 때
 * closeModal();
 */

const useModal = (modal: React.FC) => {
  const { isOpen, open, close } = useOverlay();
  const { addModal, subtractModal } = useModalStore();

  const modalId = useId();

  const openModal = () => {
    open();
    addModal(modalId, modal);
  };

  const closeModal = () => {
    close();
    subtractModal(modalId);
  };

  return { isOpen, openModal, closeModal };
};

export default useModal;
