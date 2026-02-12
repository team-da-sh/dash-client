import { useMutation, useQuery } from '@tanstack/react-query';
import queryClient from '@/app/queryClient';
import { getBankList, getTeacherAccount, postImage, postRole } from '@/shared/apis/ky';
import { authKeys, bankKeys, teacherKeys } from '@/shared/constants/queryKey';
import type { ApiError } from '@/shared/types/ApiError';
import type { BankListResponseTypes, TeacherAccountResponseTypes } from '@/shared/types/api';
import type { RoleNameResponseTypes } from '@/shared/types/myPageTypes';

export const useImageMutation = () => {
  return useMutation({
    mutationFn: (fileData: FormData) => postImage(fileData),
    onSuccess: () => {
      queryClient.invalidateQueries({});
    },
  });
};

export const useGetRole = () => {
  return useQuery<RoleNameResponseTypes>({
    queryKey: authKeys.role.queryKey,
    queryFn: postRole,
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetBankList = () => {
  return useQuery<BankListResponseTypes[], ApiError>({
    queryKey: bankKeys._def,
    queryFn: () => getBankList(),
  });
};

export const useGetTeacherAccount = (currentRole?: string) => {
  return useQuery<TeacherAccountResponseTypes, ApiError>({
    queryKey: teacherKeys.me._ctx.account.queryKey,
    queryFn: () => getTeacherAccount(),
    enabled: currentRole === 'TEACHER',
  });
};
