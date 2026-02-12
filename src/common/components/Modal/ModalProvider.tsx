import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import ModalLayout from '@/common/components/Modal/ModalLayout';
import { useModalStore } from '@/common/stores/modal';

const ModalProvider = () => {
  const { modalStore, resetStore, closeModal } = useModalStore();
  const pathname = usePathname();

  // 언마운트시 모달 리셋
  useEffect(() => {
    return () => resetStore();
  }, [resetStore]);

  // 라우팅 변경시 모달 리셋
  useEffect(() => {
    resetStore();
  }, [pathname, resetStore]);

  // 모달 오버레이시 배경 스크롤 방지
  useEffect(() => {
    if (modalStore.length > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalStore]);

  if (modalStore.length === 0) return null;

  return (
    <ModalLayout>
      {modalStore.map(({ id, render }) =>
        render({ isOpen: modalStore.some((modal) => modal.id === id), close: () => closeModal(id) })
      )}
    </ModalLayout>
  );
};

export default ModalProvider;
