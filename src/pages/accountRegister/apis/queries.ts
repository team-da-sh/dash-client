import { useMutation, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getTeacherAccount, postTeacherAccount } from '@/pages/accountRegister/apis/axios';
import type { TeacherAccountRequestTypes, TeacherAccountResponseTypes } from '@/pages/accountRegister/types/api';
import { teacherKeys } from '@/shared/constants/queryKey';

export const useGetTeacherAccount = () => {
  return useQuery<TeacherAccountResponseTypes, AxiosError>({
    queryKey: teacherKeys.me._ctx.account.queryKey,
    queryFn: () => getTeacherAccount(),
  });
};

export const usePostTeacherAccount = () => {
  return useMutation({
    mutationFn: (accountData: TeacherAccountRequestTypes) => postTeacherAccount(accountData),
  });
};
