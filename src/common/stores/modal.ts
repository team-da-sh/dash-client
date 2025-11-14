import { create } from 'zustand';
import type { ReactNode } from 'react';
import { randomId } from '@/shared/utils/randomId';

type RenderProps = ({ isOpen, close }: { isOpen?: boolean; close: () => void }) => ReactNode;

interface ModalStore {
  modalStore: Array<{ id: string; render: RenderProps }>;

  openModal: (render: RenderProps) => void;
  closeModal: (id: string) => void;
  resetStore: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modalStore: [],

  openModal: (render) => {
    const modalId = randomId();
    set((state) => ({ modalStore: [...state.modalStore, { id: modalId, render }] }));
  },

  closeModal: (id) => set((state) => ({ modalStore: state.modalStore.filter((modal) => modal.id !== id) })),

  resetStore: () => set(() => ({ modalStore: [] })),
}));

export const useOpenModal = () => useModalStore((state) => state.openModal);
export const useCloseModal = () => useModalStore((state) => state.closeModal);
export const useResetModalStore = () => useModalStore((state) => state.resetStore);
