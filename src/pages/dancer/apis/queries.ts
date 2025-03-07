import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getDancerDetail } from '@/pages/dancer/apis/axios';
import { DancerDetailResponse } from '@/pages/dancer/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetDancerDetail = (teacherId: string) => {
  return useQuery<DancerDetailResponse, AxiosError>({
    queryKey: [QUERY_KEYS.TEACHER_DETAIL, teacherId],
    queryFn: () => getDancerDetail(teacherId),
  });
};
