/* eslint-disable no-unused-vars */
import { create } from 'zustand';

interface ModalStore {
  modalStore: Array<{ id: string; modal: React.FC }>;

  addModal: (id: string, modal: React.FC) => void;
  subtractModal: (id: string) => void;
  resetStore: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modalStore: [],

  addModal: (id, modal) => set((state) => ({ modalStore: [...state.modalStore, { id: id, modal }] })),
  subtractModal: (id) => set((state) => ({ modalStore: state.modalStore.filter((modal) => modal.id !== id) })),
  resetStore: () => set(() => ({ modalStore: [] })),
}));
