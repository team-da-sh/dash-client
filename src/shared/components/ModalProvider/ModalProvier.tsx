import { useEffect } from 'react';
import { useModalStore } from '@/common/stores/modal';

const ModalProvider = () => {
  const { modalStore, resetStore, closeModal } = useModalStore();

  useEffect(() => {
    resetStore();
  }, [resetStore]);

  // 모달 오버레이시 배경 스크롤 방지
  useEffect(() => {
    if (modalStore.length > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalStore]);

  return <>{modalStore.map(({ id, render }) => render({ close: () => closeModal(id) }))}</>;
};

export default ModalProvider;
