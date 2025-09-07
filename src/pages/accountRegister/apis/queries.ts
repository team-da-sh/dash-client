import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { TeacherAccountResponseTypes } from '@/pages/accountRegister/types/api';
import { teacherKeys } from '@/shared/constants/queryKey';
import { getTeacherAccount } from './axios';

export const useGetTeacherAccount = () => {
  return useQuery<TeacherAccountResponseTypes, AxiosError>({
    queryKey: teacherKeys.me._ctx.account.queryKey,
    queryFn: () => getTeacherAccount(),
  });
};
