import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getDancerDetail } from '@/pages/dancer/apis/axios';
import type { DancerDetailResponseTypes } from '@/pages/dancer/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetDancerDetail = (teacherId: string) => {
  return useQuery<DancerDetailResponseTypes, AxiosError>({
    queryKey: [QUERY_KEYS.TEACHER_DETAIL, teacherId],
    queryFn: () => getDancerDetail(teacherId),
  });
};
