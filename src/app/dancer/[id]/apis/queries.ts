import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getDancerDetail } from '@/app/dancer/[id]/apis/axios';
import type { DancerDetailResponseTypes } from '@/app/dancer/[id]/types/api';
import { teacherKeys } from '@/shared/constants/queryKey';

export const useGetDancerDetail = (teacherId: number, options?: { enabled?: boolean }) => {
  return useQuery<DancerDetailResponseTypes, AxiosError>({
    queryKey: teacherKeys.me._ctx.profile(Number(teacherId)).queryKey,
    queryFn: () => getDancerDetail(teacherId),
    enabled: options?.enabled,
  });
};
