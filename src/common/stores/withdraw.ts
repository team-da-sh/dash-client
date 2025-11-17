import { create } from 'zustand';

interface WithdrawStore {
  isValidatedWithdraw: boolean;
  isWithdrawCompleted: boolean;

  allowValidate: () => void;
  allowPostWithdraw: () => void;
  reset: () => void;
}

export const useWithdrawStore = create<WithdrawStore>((set) => ({
  isValidatedWithdraw: false,
  isWithdrawCompleted: false,

  allowValidate: () => set({ isValidatedWithdraw: true }),
  allowPostWithdraw: () => set({ isWithdrawCompleted: true }),

  reset: () => set({ isValidatedWithdraw: false, isWithdrawCompleted: false }),
}));
