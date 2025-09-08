import { useMutation, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import queryClient from '@/queryClient';
import { getBankList, postImage, postRole } from '@/shared/apis/axios';
import { authKeys, bankKeys } from '@/shared/constants/queryKey';
import type { BankListResponseTypes } from '@/shared/types/api';
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
  });
};

export const useGetBankList = () => {
  return useQuery<BankListResponseTypes[], AxiosError>({
    queryKey: bankKeys._def,
    queryFn: () => getBankList(),
  });
};
