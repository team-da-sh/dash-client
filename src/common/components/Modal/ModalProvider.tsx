import { Fragment, useEffect } from 'react';
import { useModalStore } from '@/common/stores/modal';

const ModalProvider = () => {
  const { modalStore, resetStore, closeModal } = useModalStore();

  // 언마운트시 모달 리셋
  useEffect(() => {
    return () => resetStore();
  }, [resetStore]);

  // 모달 오버레이시 배경 스크롤 방지
  useEffect(() => {
    if (modalStore.length > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalStore]);

  return (
    <>
      {modalStore.map(({ id, render }) => (
        <Fragment key={id}>
          {render({ isOpen: modalStore.some((modal) => modal.id === id), close: () => closeModal(id) })}
        </Fragment>
      ))}
    </>
  );
};

export default ModalProvider;
