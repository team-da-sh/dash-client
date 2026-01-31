import type { UseQueryResult } from '@tanstack/react-query';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getMyPage, postTeacherAccount } from '@/app/mypage/(instructor)/account-register/apis/axios';
import type {
  TeacherAccountRequestTypes,
  MyPageResponseTypes,
} from '@/app/mypage/(instructor)/account-register/types/api';
import { memberKeys } from '@/shared/constants/queryKey';

export const usePostTeacherAccount = () => {
  return useMutation({
    mutationFn: (accountData: TeacherAccountRequestTypes) => postTeacherAccount(accountData),
  });
};

export const useGetMyPage = (): UseQueryResult<MyPageResponseTypes, AxiosError> => {
  return useQuery<MyPageResponseTypes, AxiosError>({
    queryKey: memberKeys.me.queryKey,
    queryFn: getMyPage,
  });
};
