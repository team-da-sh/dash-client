import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { MyPageResponseTypes } from '@/pages/mypage/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { getMyPage } from './axios';

export const useGetMyPage = (options?: Partial<UseQueryOptions<MyPageResponseTypes>>) => {
  return useQuery<MyPageResponseTypes>({
    queryKey: [QUERY_KEYS.MEMBERS_ME],
    queryFn: getMyPage,
    gcTime: 1000 * 60 * 10,
    ...options,
  });
};
