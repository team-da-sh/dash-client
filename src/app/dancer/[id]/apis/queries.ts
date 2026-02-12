import { useQuery } from '@tanstack/react-query';
import { getDancerDetail } from '@/app/dancer/[id]/apis/ky';
import type { DancerDetailResponseTypes } from '@/app/dancer/[id]/types/api';
import { teacherKeys } from '@/shared/constants/queryKey';
import type { ApiError } from '@/shared/types/ApiError';

export const useGetDancerDetail = (teacherId: number, options?: { enabled?: boolean }) => {
  return useQuery<DancerDetailResponseTypes, ApiError>({
    queryKey: teacherKeys.me._ctx.profile(Number(teacherId)).queryKey,
    queryFn: () => getDancerDetail(teacherId),
    enabled: options?.enabled,
  });
};
