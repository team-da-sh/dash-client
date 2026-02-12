import type { UseQueryResult } from '@tanstack/react-query';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getMyPage, postTeacherAccount } from '@/app/my/(instructor)/manage-account/apis/ky';
import type { TeacherAccountRequestTypes, MyPageResponseTypes } from '@/app/my/(instructor)/manage-account/types/api';
import { memberKeys } from '@/shared/constants/queryKey';
import type { ApiError } from '@/shared/types/ApiError';

export const usePostTeacherAccount = () => {
  return useMutation({
    mutationFn: (accountData: TeacherAccountRequestTypes) => postTeacherAccount(accountData),
  });
};

export const useGetMyPage = (): UseQueryResult<MyPageResponseTypes, ApiError> => {
  return useQuery<MyPageResponseTypes, ApiError>({
    queryKey: memberKeys.me.queryKey,
    queryFn: getMyPage,
  });
};
