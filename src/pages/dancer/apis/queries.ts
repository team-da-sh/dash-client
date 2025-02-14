import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getDancerDetail } from '@/pages/dancer/apis/axios';
import { DancerDetailApiResponse } from '@/pages/dancer/types';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetDancerDetail = (teacherId: string) => {
  return useQuery<DancerDetailApiResponse, AxiosError>({
    queryKey: [QUERY_KEYS.TEACHER_DETAIL, teacherId],
    queryFn: () => getDancerDetail(teacherId),
  });
};
