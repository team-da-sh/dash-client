import { useMutation } from '@tanstack/react-query';
import { postTeacherAccount } from '@/pages/accountRegister/apis/axios';
import type { TeacherAccountRequestTypes } from '@/pages/accountRegister/types/api';

export const usePostTeacherAccount = () => {
  return useMutation({
    mutationFn: (accountData: TeacherAccountRequestTypes) => postTeacherAccount(accountData),
  });
};
